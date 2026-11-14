# Known Limitations

## Architecture

- The application is front-end-only.
- There is no backend, server-side proxy, database, or authentication.
- The browser must receive the Access Key in the current implementation.
- No server-side request validation or rate limiting exists.

## Product behavior

- Search is limited to the fields and pagination supplied by Unsplash.
- There is no search history, favorites, saved collections, or download manager.
- There is no image upload, editing, or moderation capability.
- Result images are remote resources and may fail independently of the application.

## Quality assurance

- There is no automated unit-test suite.
- There is no browser end-to-end suite.
- Static validation does not prove runtime behavior or accessibility conformance.
- No production load test or penetration test has been completed.

## Third-party dependencies

- Search depends on Unsplash API availability, policy, and quotas.
- The icon depends on an external CDN.
- The background image is hosted remotely.

## Not a production guarantee

The project is a learning/demo application. It should not be described as production-ready solely because it loads or its static workflows pass. A server-side API boundary, rate limiting, test automation, and deployment review are recommended before broad public use.