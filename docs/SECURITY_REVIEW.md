# Security Review

## Review scope

This review covers the tracked static front-end files and the current browser-side API integration. It is a documentation-level engineering review, not a penetration test or independent security certification.

## Findings and status

| Finding | Impact | Current action | Remaining work |
| --- | --- | --- | --- |
| Unsplash Access Key was hardcoded in script.js | Key could be copied from source and history | Removed from current source and replaced with local config | Rotate the old key if it is still active; review Git history |
| Browser-side key is visible at runtime | Public visitors can inspect requests and configuration | Documented limitation and production proxy recommendation | Implement server-side proxy for public deployment |
| API response contains remote text | Unsafe HTML insertion could create DOM injection risk | Cards use DOM APIs and textContent | Keep this rule in future changes |
| External links open new tabs | Opener relationship can be abused | Links use noopener noreferrer | Preserve safe attributes |
| Search input and pagination can be abused | Excessive or overlapping requests | Input length is bounded; loading state serializes requests | Add server-side rate limits in a proxy |
| Remote image and background URLs | Third-party availability and tracking considerations | Documented as external resources | Review external asset policy before production |

## Credential incident handling

The old key was present in a committed source file. Removing it from the current version does not remove historical copies. If the key is still active, revoke or rotate it at Unsplash and inspect provider usage. Consider history rewriting only after coordinating with collaborators because it changes commit identities and does not remove copies already cloned or cached.

## Positive controls

- Empty query validation.
- Maximum input length.
- HTTP status validation.
- Explicit handling for authentication and rate-limit responses.
- Response shape validation.
- DOM construction without inserting remote strings as HTML.
- Safe external link attributes.
- Local configuration file ignored by Git.

## Limitations

No backend exists to enforce authorization, rate limits, or private secrets. No dynamic security test, dependency audit, or penetration test has been performed. The project should not be described as production-secure until the API boundary and hosting configuration are addressed.

## Review maintenance

Repeat this review when adding a backend, analytics, storage, user accounts, upload functionality, or new third-party services.