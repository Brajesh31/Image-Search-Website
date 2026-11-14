# Testing and Validation

## Current test maturity

The repository currently has no unit-test framework, browser automation suite, or mock API server. The GitHub Actions checks provide static validation only. A green workflow must not be described as proof of full functional correctness.

## Automated checks

The HTML validation workflow checks document structure and JavaScript syntax. The Markdown lint workflow checks documentation formatting. CodeQL analyzes JavaScript for supported security patterns.

## Manual functional checklist

| Scenario | Expected result |
| --- | --- |
| Search a common topic | Result cards render |
| Search a rare phrase | Empty state appears |
| Submit an empty query | Search is not sent; input receives focus |
| Missing config.js or blank key | Configuration guidance appears |
| Invalid Access Key | Authentication error appears |
| HTTP 429 | Rate-limit guidance appears |
| Network offline | Network error appears |
| Select Show More | Next page is appended once |
| Last available page | Show More is hidden |
| Rapid repeated click | Duplicate requests are prevented |
| Long description | Text remains within the card |
| Mobile viewport | Gallery becomes a single column |
| Keyboard-only navigation | Search and result links remain operable |
| Reduced-motion enabled | Non-essential motion is minimized |

## Browser coverage

At minimum, test a current Chromium-based browser and one additional browser engine when available. Check a narrow mobile viewport and desktop viewport.

## Test data and credentials

Use a development key with appropriate usage limits. Never include real keys in screenshots, test fixtures, logs, or issue reports.

## Future test improvements

A server-side proxy would make it easier to test deterministic API responses. A future automated suite could use mocked fetch responses and browser automation to verify search, error, pagination, and accessibility behavior.