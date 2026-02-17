"""NZ Legislation API client."""

from __future__ import annotations

import os
from pathlib import Path
from typing import Any

import httpx
from dotenv import load_dotenv

from .models import SearchResult, Version, VersionDetail, VersionList


class NZLegislationError(Exception):
    """Base exception for API errors."""

    def __init__(self, status_code: int, message: str):
        self.status_code = status_code
        super().__init__(f"HTTP {status_code}: {message}")


class NZLegislationClient:
    """Client for the NZ Legislation API (https://api.legislation.govt.nz)."""

    DEFAULT_BASE_URL = "https://api.legislation.govt.nz"

    def __init__(
        self,
        api_key: str | None = None,
        base_url: str | None = None,
        env_file: str | Path | None = None,
    ):
        # Load .env from the package directory by default
        if env_file is None:
            env_file = Path(__file__).resolve().parent.parent / ".env"
        load_dotenv(env_file)

        self.api_key = api_key or os.getenv("API_KEY", "")
        self.base_url = (base_url or os.getenv("API_ENDPOINT", self.DEFAULT_BASE_URL)).rstrip("/")

        if not self.api_key:
            raise ValueError("API key is required. Pass api_key or set API_KEY in .env")

        self._client = httpx.Client(
            base_url=self.base_url,
            headers={"X-Api-Key": self.api_key},
            timeout=30.0,
        )

    def __enter__(self) -> NZLegislationClient:
        return self

    def __exit__(self, *args: Any) -> None:
        self.close()

    def close(self) -> None:
        self._client.close()

    def _request(self, method: str, path: str, **kwargs: Any) -> httpx.Response:
        response = self._client.request(method, path, **kwargs)
        if response.status_code == 401:
            raise NZLegislationError(401, "Unauthorized — check your API key")
        if response.status_code == 403:
            raise NZLegislationError(403, "Forbidden — IP burst rate limit exceeded")
        if response.status_code == 404:
            raise NZLegislationError(404, f"Not found: {path}")
        if response.status_code == 429:
            retry_after = response.headers.get("Retry-After", "unknown")
            raise NZLegislationError(429, f"Rate limited — retry after {retry_after}s")
        response.raise_for_status()
        return response

    # ------------------------------------------------------------------
    # Endpoints
    # ------------------------------------------------------------------

    def search_works(
        self,
        search_term: str | None = None,
        *,
        search_field: str | None = None,
        legislation_type: str | None = None,
        legislation_status: str | None = None,
        act_type: str | None = None,
        act_classification: str | None = None,
        act_status: str | None = None,
        instrument_type_group: str | None = None,
        instrument_status: str | None = None,
        instrument_classification: str | None = None,
        bill_type: str | None = None,
        bill_status: str | None = None,
        administering_agencies: str | None = None,
        publisher: str | None = None,
        sort_by: str | None = None,
        page: int = 1,
        per_page: int = 20,
    ) -> SearchResult:
        """Search for legislation works.

        Args:
            search_term: Search phrase (stemming enabled).
            search_field: "title" or "content".
            legislation_type: "act", "bill", "secondary_legislation", "amendment_paper".
            legislation_status: "in_force", "not_in_force", "no_value".
            sort_by: "title_asc", "title_desc", "year_asc", "year_desc",
                     "most_recently_updated".
            page: Page number (default 1).
            per_page: Results per page (default 20, max 100).
        """
        params: dict[str, Any] = {"page": page, "per_page": per_page}
        for key, value in {
            "search_term": search_term,
            "search_field": search_field,
            "legislation_type": legislation_type,
            "legislation_status": legislation_status,
            "act_type": act_type,
            "act_classification": act_classification,
            "act_status": act_status,
            "instrument_type_group": instrument_type_group,
            "instrument_status": instrument_status,
            "instrument_classification": instrument_classification,
            "bill_type": bill_type,
            "bill_status": bill_status,
            "administering_agencies": administering_agencies,
            "publisher": publisher,
            "sort_by": sort_by,
        }.items():
            if value is not None:
                params[key] = value

        resp = self._request("GET", "/v0/works/", params=params)
        return SearchResult.from_dict(resp.json())

    def get_versions(self, work_id: str, *, sort: str = "desc") -> VersionList:
        """Get all versions of a work.

        Args:
            work_id: e.g. "act_public_1990_109"
            sort: "asc" or "desc" (default "desc")
        """
        resp = self._request(
            "GET",
            f"/v0/works/{work_id}/versions/",
            params={"sort": sort},
        )
        return VersionList.from_dict(resp.json())

    def get_version(self, version_id: str) -> VersionDetail:
        """Get details of a specific version.

        Args:
            version_id: e.g. "act_public_1990_109_en_2022-08-30"
        """
        resp = self._request("GET", f"/v0/versions/{version_id}/")
        return VersionDetail.from_dict(resp.json())

    def get_rss_feed(self, work_id: str) -> str:
        """Get RSS feed XML for a work's versions.

        Args:
            work_id: e.g. "act_public_1990_109"

        Returns:
            Raw XML string.
        """
        resp = self._request("GET", f"/api/rss/works/{work_id}/versions/")
        return resp.text
