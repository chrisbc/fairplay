# NZ Legislation API CLI Usage

This document provides comprehensive usage examples for the NZ Legislation API CLI tool.

## Basic Usage

### Installation

First, ensure you have the required dependencies installed:

```bash
uv pip install typer tqdm
```

### Basic Search

Search for legislation containing a specific term:

```bash
python scripts/cli.py --search-term "privacy"
```

This will:
- Search for legislation containing "privacy"
- Save results to `search_results.jsonl` (default)
- Process up to 100 results (default limit)

### Specify Output File

```bash
python scripts/cli.py --search-term "privacy" --output-file my_results.jsonl
```

### Limit Results

```bash
python scripts/cli.py --search-term "privacy" --limit 10
```

## File Downloads

### Download Files

Download PDF and XML files for search results:

```bash
python scripts/cli.py --search-term "privacy" --download --types pdf,xml
```

### Specify Download Folder

```bash
python scripts/cli.py --search-term "privacy" --download --types pdf --download-folder my_downloads
```

### Download All File Types

```bash
python scripts/cli.py --search-term "privacy" --download --types pdf,xml,html
```

## Advanced Features

### Rate Limiting

Add delay between API calls to respect rate limits:

```bash
python scripts/cli.py --search-term "privacy" --rate-limit 0.5
```

This adds a 0.5 second delay between API calls.

### Dry Run Mode

Preview what would be done without executing:

```bash
python scripts/cli.py --search-term "privacy" --download --types pdf,xml --dry-run
```

### Include All Versions

Get all versions of each legislation (not just latest):

```bash
python scripts/cli.py --search-term "privacy" --all-versions
```

### Filter by Legislation Type

```bash
python scripts/cli.py --search-term "privacy" --legislation-type act
```

Available types: `act`, `bill`, `secondary_legislation`, `amendment_paper`

## Complete Examples

### Example 1: Search and Download

```bash
python scripts/cli.py \
  --search-term "privacy" \
  --limit 5 \
  --download \
  --types pdf,xml \
  --download-folder privacy_laws \
  --output-file privacy_search.jsonl
```

### Example 2: Comprehensive Search with Rate Limiting

```bash
python scripts/cli.py \
  --search-term "data protection" \
  --legislation-type act \
  --limit 20 \
  --all-versions \
  --rate-limit 1.0 \
  --output-file data_protection_results.jsonl
```

### Example 3: Dry Run for Testing

```bash
python scripts/cli.py \
  --search-term "copyright" \
  --limit 3 \
  --download \
  --types pdf,xml,html \
  --dry-run
```

## Output Format

### JSONL Output

Each line in the JSONL file contains a complete work record:

```json
{
  "work_id": "act_public_2020_31",
  "title": "Privacy Act 2020",
  "legislation_type": "act",
  "legislation_status": "in_force",
  "administering_agencies": ["Ministry of Justice"],
  "latest_matching_version": {
    "version_id": "act_public_2020_31_en_2025-11-27",
    "title": "Privacy Act 2020",
    "is_latest_version": true,
    "formats": [
      {
        "type": "html",
        "url": "https://demo.legislation.govt.nz/act/public/2020/31/en/latest/",
        "download_url": "https://demo.legislation.govt.nz/act/public/2020/31/en/latest/"
      },
      {
        "type": "pdf",
        "url": "https://demo.legislation.govt.nz/act/public/2020/31/en/latest/.pdf",
        "download_url": "https://demo.legislation.govt.nz/act/public/2020/31/en/latest.pdf"
      },
      {
        "type": "xml",
        "url": "https://demo.legislation.govt.nz/act/public/2020/31/en/latest/.xml",
        "download_url": "https://demo.legislation.govt.nz/act/public/2020/31/en/latest.xml"
      }
    ]
  },
  "act_type": "public",
  "act_status": "in_force",
  "act_classification": null,
  "bill_type": null,
  "bill_status": null,
  "instrument_type_group": null,
  "instrument_status": null,
  "instrument_classification": null
}
```

### File Downloads

Downloaded files are named using the format: `{work_id}.{type}`

Examples:
- `act_public_2020_31.pdf`
- `bill_government_2018_34.xml`
- `act_public_1993_28.html`

## Help and Options

View all available options:

```bash
python scripts/cli.py --help
```

## Notes

- The script automatically creates the download directory if it doesn't exist
- Existing files are always overwritten
- Rate limiting only applies to API calls, not file downloads
- The `download_url` property provides properly formatted URLs for downloads
- Dry run mode shows all actions without executing them