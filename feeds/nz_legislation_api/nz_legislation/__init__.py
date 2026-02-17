"""NZ Legislation API client."""

from .client import NZLegislationClient, NZLegislationError
from .models import (
    Format,
    MatchingVersion,
    SearchResult,
    Version,
    VersionDetail,
    VersionList,
    Work,
)

__all__ = [
    "NZLegislationClient",
    "NZLegislationError",
    "Format",
    "MatchingVersion",
    "SearchResult",
    "Version",
    "VersionDetail",
    "VersionList",
    "Work",
]
