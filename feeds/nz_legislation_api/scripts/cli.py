#!/usr/bin/env python3
"""CLI tool for searching NZ legislation and downloading files."""

import os
import json
import time
from pathlib import Path
from typing import Optional, List

import httpx
import typer
from tqdm import tqdm

from nz_legislation import NZLegislationClient

app = typer.Typer()


def search_with_pagination(
    client: NZLegislationClient,
    search_term: str,
    limit: int = 100,
    rate_limit: float = 1.0,
    legislation_type: Optional[str] = None,
    include_all_versions: bool = False,
) -> List[dict]:
    """Search legislation with pagination and rate limiting."""
    page = 1
    all_results = []

    with tqdm(desc="Searching API", unit="page", disable=rate_limit <= 0) as pbar:
        while len(all_results) < limit:
            results = client.search_works(
                search_term,
                page=page,
                per_page=min(100, limit - len(all_results)),
                legislation_type=legislation_type,
            )

            if not results.results:
                break

            for work in results.results:
                work_dict = work.to_dict()
                if include_all_versions:
                    # Get all versions for this work
                    versions = client.get_versions(work.work_id)
                    work_dict["all_versions"] = [v.to_dict() for v in versions.results]
                all_results.append(work_dict)

            if rate_limit > 0:
                time.sleep(rate_limit)

            pbar.update(1)
            page += 1

            if len(all_results) >= limit:
                break

    return all_results[:limit]


def export_to_jsonl(data: List[dict], output_file: str, dry_run: bool = False) -> None:
    """Export results to JSONL file."""
    if dry_run:
        typer.echo(f"Would export to: {output_file}")
        return

    output_path = Path(output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with open(output_path, "w") as f:
        for item in data:
            f.write(json.dumps(item) + "\n")

    typer.echo(f"Exported {len(data)} records to {output_file}")


def download_file(url: str, file_path: str, dry_run: bool = False) -> bool:
    """Download a single file with progress bar."""
    if dry_run:
        typer.echo(f"Would download: {url} -> {file_path}")
        return True

    try:
        file_path = Path(file_path)
        file_path.parent.mkdir(parents=True, exist_ok=True)

        with httpx.stream("GET", url, timeout=30.0, follow_redirects=True) as response:
            response.raise_for_status()
            total = int(response.headers.get("content-length", 0))

            with (
                open(file_path, "wb") as f,
                tqdm(
                    desc=str(file_path.name),
                    total=total,
                    unit="B",
                    unit_scale=True,
                    unit_divisor=1024,
                ) as progress,
            ):
                for chunk in response.iter_bytes():
                    f.write(chunk)
                    progress.update(len(chunk))

        return True

    except Exception as e:
        typer.echo(f"Error downloading {url}: {e}", err=True)
        return False


def download_files(
    works: List[dict],
    download_folder: str,
    file_types: Optional[str],
    dry_run: bool = False,
) -> None:
    """Download files for all works."""
    if not file_types:
        typer.echo("No file types specified for download")
        return

    # Split file_types string by comma
    file_type_list = [ft.strip() for ft in file_types.split(",")]

    download_folder = Path(download_folder)
    success_count = 0
    total_files = 0

    for work in works:
        version = work.get("latest_matching_version") or {}
        formats = version.get("formats", [])

        for fmt in formats:
            if fmt["type"] in file_type_list:
                total_files += 1
                file_name = f"{work['work_id']}.{fmt['type']}"
                file_path = download_folder / file_name

                if download_file(fmt["download_url"], str(file_path), dry_run):
                    success_count += 1

    typer.echo(f"Downloaded {success_count}/{total_files} files to {download_folder}")


@app.command()
def main(
    search_term: str = typer.Option(
        ..., "--search-term", "-s", help="Search term (required)"
    ),
    output_file: str = typer.Option(
        "search_results.jsonl", "--output-file", "-o", help="JSONL output file"
    ),
    download: bool = typer.Option(False, "--download", help="Enable file downloads"),
    types: Optional[str] = typer.Option(
        None, "--types", "-t", help="File types to download (pdf,xml,html)"
    ),
    download_folder: str = typer.Option(
        "downloads", "--download-folder", help="Folder for downloaded files"
    ),
    legislation_type: Optional[str] = typer.Option(
        None, "--legislation-type", help="Filter by legislation type"
    ),
    limit: int = typer.Option(100, "--limit", help="Maximum results to process"),
    dry_run: bool = typer.Option(
        False, "--dry-run", help="Show what would be done without executing"
    ),
    rate_limit: float = typer.Option(
        1.0, "--rate-limit", help="Seconds between API calls (0 to disable)"
    ),
    include_all_versions: bool = typer.Option(
        False, "--all-versions", help="Include all versions in output"
    ),
):
    """Search NZ legislation and optionally download files."""
    if dry_run:
        typer.echo("=== DRY RUN MODE ===")

    try:
        # Initialize client
        with NZLegislationClient() as client:
            # Search with pagination
            typer.echo(f"Searching for '{search_term}' (limit: {limit})...")
            results = search_with_pagination(
                client,
                search_term,
                limit=limit,
                rate_limit=rate_limit,
                legislation_type=legislation_type,
                include_all_versions=include_all_versions,
            )

            if not results:
                typer.echo("No results found")
                return

            # Export to JSONL
            export_to_jsonl(results, output_file, dry_run)

            # Download files if requested
            if download and types:
                download_files(results, download_folder, types, dry_run)

    except Exception as e:
        typer.echo(f"Error: {e}", err=True)
        raise typer.Exit(code=1)


if __name__ == "__main__":
    app()
