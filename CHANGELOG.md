# Changelog

Notable project changes are recorded here. This file follows a concise Keep a Changelog-inspired structure. Dates use ISO 8601 format.

## [Unreleased]

### Added
- Expanded project documentation and contributor guidance.
- Accessibility, security, support, and issue-reporting policies.
- Static validation and CodeQL workflow definitions.
- Local configuration template and ignore rules.

### Changed
- Reworked the search interface for responsive layouts and keyboard use.
- Improved result attribution, loading feedback, and pagination state.
- Replaced unsafe or brittle result rendering with DOM node creation and text insertion.
- Reduced README timestamp automation frequency.

### Fixed
- Removed the previously hardcoded Unsplash Access Key from the JavaScript source.
- Added explicit handling for missing configuration, empty queries, rejected credentials, rate limits, malformed responses, and network failures.
- Prevented overlapping search requests and unsafe external-tab behavior.

## [2026-11-14]

### Documentation and maintenance baseline
- Established the repository documentation structure and maintenance policies.
- Added the root MIT license notice for original material the maintainer is authorized to license.

## Notes

The changelog describes repository changes, not a claim that the application has passed a full production or accessibility certification. Third-party assets and services retain their own terms.