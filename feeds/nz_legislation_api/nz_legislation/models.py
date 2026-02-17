"""Dataclasses for NZ Legislation API responses."""

from __future__ import annotations

from dataclasses import dataclass, field


@dataclass
class Format:
    type: str
    url: str

    @property
    def download_url(self) -> str:
        """Return a massaged URL suitable for downloads."""
        if self.type in ("pdf", "xml") and "/." in self.url:
            # Replace last occurrence of '/.' with '.' for PDF/XML files
            return self.url.rsplit("/.", 1)[0] + "." + self.type
        return self.url


@dataclass
class MatchingVersion:
    version_id: str
    title: str
    is_latest_version: bool
    formats: list[Format] = field(default_factory=list)

    @classmethod
    def from_dict(cls, data: dict) -> MatchingVersion:
        return cls(
            version_id=data.get("version_id", ""),
            title=data.get("title", ""),
            is_latest_version=data.get("is_latest_version", False),
            formats=[Format(**f) for f in data.get("formats", [])],
        )


@dataclass
class Work:
    work_id: str
    legislation_type: str
    legislation_status: str
    administering_agencies: list[str] = field(default_factory=list)
    latest_matching_version: MatchingVersion | None = None
    act_type: str | None = None
    act_status: str | None = None
    act_classification: str | None = None
    bill_type: str | None = None
    bill_status: str | None = None
    instrument_type_group: str | None = None
    instrument_status: str | None = None
    instrument_classification: str | None = None

    @classmethod
    def from_dict(cls, data: dict) -> Work:
        lmv = data.get("latest_matching_version")
        return cls(
            work_id=data.get("work_id", ""),
            legislation_type=data.get("legislation_type", ""),
            legislation_status=data.get("legislation_status", ""),
            administering_agencies=data.get("administering_agencies", []),
            latest_matching_version=MatchingVersion.from_dict(lmv) if lmv else None,
            act_type=data.get("act_type"),
            act_status=data.get("act_status"),
            act_classification=data.get("act_classification"),
            bill_type=data.get("bill_type"),
            bill_status=data.get("bill_status"),
            instrument_type_group=data.get("instrument_type_group"),
            instrument_status=data.get("instrument_status"),
            instrument_classification=data.get("instrument_classification"),
        )


@dataclass
class SearchResult:
    results: list[Work]
    page: int
    per_page: int
    total: int

    @classmethod
    def from_dict(cls, data: dict) -> SearchResult:
        return cls(
            results=[Work.from_dict(w) for w in data.get("results", [])],
            page=data.get("page", 1),
            per_page=data.get("per_page", 20),
            total=data.get("total", 0),
        )


@dataclass
class Version:
    version_id: str
    work_id: str
    title: str
    legislation_type: str
    legislation_status: str
    administering_agencies: list[str] = field(default_factory=list)
    formats: list[Format] = field(default_factory=list)
    act_type: str | None = None
    act_status: str | None = None
    bill_type: str | None = None
    bill_status: str | None = None
    instrument_type_group: str | None = None
    instrument_status: str | None = None
    instrument_classification: str | None = None

    @classmethod
    def from_dict(cls, data: dict) -> Version:
        return cls(
            version_id=data.get("version_id", ""),
            work_id=data.get("work_id", ""),
            title=data.get("title", ""),
            legislation_type=data.get("legislation_type", ""),
            legislation_status=data.get("legislation_status", ""),
            administering_agencies=data.get("administering_agencies", []),
            formats=[Format(**f) for f in data.get("formats", [])],
            act_type=data.get("act_type"),
            act_status=data.get("act_status"),
            bill_type=data.get("bill_type"),
            bill_status=data.get("bill_status"),
            instrument_type_group=data.get("instrument_type_group"),
            instrument_status=data.get("instrument_status"),
            instrument_classification=data.get("instrument_classification"),
        )


@dataclass
class VersionList:
    results: list[Version]
    page: int
    per_page: int
    total: int

    @classmethod
    def from_dict(cls, data: dict) -> VersionList:
        return cls(
            results=[Version.from_dict(v) for v in data.get("results", [])],
            page=data.get("page", 1),
            per_page=data.get("per_page", 20),
            total=data.get("total", 0),
        )


# VersionDetail has the same shape as Version (single object, not paginated)
VersionDetail = Version
