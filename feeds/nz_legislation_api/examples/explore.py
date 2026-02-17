#!/usr/bin/env python3
"""Example: explore the NZ Legislation API."""

from nz_legislation import NZLegislationClient


def main() -> None:
    with NZLegislationClient() as client:
        # 1. Search for acts mentioning "privacy"
        print("=== Search: 'privacy' ===")
        results = client.search_works("privacy", legislation_type="act", per_page=5)
        print(f"Found {results.total} works (showing first {len(results.results)})\n")

        for work in results.results:
            version = work.latest_matching_version
            title = version.title if version else work.work_id
            print(f"  {work.work_id}")
            print(f"    Title:  {title}")
            print(f"    Type:   {work.legislation_type} | Status: {work.legislation_status}")
            print()

        if not results.results:
            print("  (no results)\n")
            return

        # 2. Get versions of the first work
        first_work = results.results[0]
        print(f"=== Versions of {first_work.work_id} ===")
        version_list = client.get_versions(first_work.work_id)
        print(f"Total versions: {version_list.total}\n")

        for v in version_list.results[:5]:
            formats = ", ".join(f.type for f in v.formats)
            print(f"  {v.version_id}")
            print(f"    Title:   {v.title}")
            print(f"    Formats: {formats}")
            print()

        # 3. Get details of the latest version
        if version_list.results:
            latest = version_list.results[0]
            print(f"=== Version detail: {latest.version_id} ===")
            detail = client.get_version(latest.version_id)
            print(f"  Title:    {detail.title}")
            print(f"  Work ID:  {detail.work_id}")
            print(f"  Status:   {detail.legislation_status}")
            print(f"  Agencies: {', '.join(detail.administering_agencies)}")
            for fmt in detail.formats:
                print(f"  Format:   {fmt.type} -> {fmt.url}")
                print(f"  Download: {fmt.type} -> {fmt.download_url}")


if __name__ == "__main__":
    main()
