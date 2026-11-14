# Roadmap

This roadmap is a planning document, not a promise that every item will be implemented.

## Priority 0: Credential and deployment boundary

- [ ] Rotate the previously committed Unsplash key if it remains active.
- [ ] Review Git history for exposed credentials.
- [ ] Implement a server-side or serverless Unsplash proxy for public deployment.
- [ ] Store provider credentials in host environment variables.
- [ ] Add request validation and rate limiting.

## Priority 1: Reliable behavior

- [ ] Add deterministic unit tests for query validation and response rendering.
- [ ] Add browser tests for search, empty state, errors, and pagination.
- [ ] Add mocked API responses for 401, 403, 429, and network failures.
- [ ] Test image fallback behavior.

## Priority 2: Accessibility and UX

- [ ] Test with screen readers on supported browser combinations.
- [ ] Add a documented contrast review.
- [ ] Consider a dedicated retry control for transient failures.
- [ ] Review long descriptions and image loading layout shifts.

## Priority 3: Product enhancements

- [ ] Add optional filters only when supported by the provider API.
- [ ] Add a lightweight favorites feature only after a privacy and storage decision.
- [ ] Add responsive image sizing and an explicit image loading placeholder.
- [ ] Consider query history only with a clear user benefit and documented retention.

## Maintenance

- [ ] Review Unsplash API requirements periodically.
- [ ] Review third-party asset terms before changing assets.
- [ ] Keep documentation synchronized with the implementation.
- [ ] Review GitHub Actions permissions and dependency versions regularly.