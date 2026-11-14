# Contributing

Thank you for considering a contribution to PicKart Image Search. Contributions should make the application more correct, accessible, secure, understandable, or maintainable.

## Before you start

1. Read the README and relevant documentation in docs/.
2. Search existing issues and pull requests to avoid duplicate work.
3. For a substantial change, open an issue first to discuss scope.
4. Never include real API keys, tokens, passwords, or private configuration.
5. Keep changes aligned with the current static HTML, CSS, and JavaScript architecture unless a framework or server is justified by a concrete requirement.

## Development setup

- Clone the repository.
- Copy config.example.js to config.js.
- Add a local Unsplash Access Key to config.js.
- Start a static server, for example with python -m http.server 8000.
- Open the local address in a browser.

The local config.js file is ignored by Git. Verify that it is not staged before committing.

## Code expectations

### JavaScript
- Use clear names and small functions.
- Handle rejected requests and unexpected API responses.
- Avoid inserting API-provided text with innerHTML.
- Avoid unnecessary global state.
- Keep requests abortable and pagination deterministic.
- Do not log credentials or personal data.

### HTML
- Use semantic landmarks and native controls.
- Associate every form control with a label.
- Provide meaningful alternative text where needed.
- Keep document metadata accurate.

### CSS
- Preserve responsive behavior.
- Include visible focus states.
- Respect reduced-motion preferences.
- Avoid layout changes that make controls difficult to reach.

### Documentation
- Update README or docs when configuration, behavior, setup, or limitations change.
- Add a changelog entry for user-visible changes.
- Do not claim tests or features that have not been run or implemented.

## Validation checklist

- Run the static validation workflow or equivalent local checks.
- Run node --check script.js when Node.js is available.
- Test a normal search, no-result search, empty input, invalid key, rate limit, and pagination.
- Check keyboard navigation and mobile layout.
- Review the final diff for secrets and unrelated changes.

## Pull requests

A pull request should contain one focused change. Include:
- The problem being solved.
- The implementation approach.
- Relevant screenshots for visual changes.
- Tests performed and their actual results.
- Any known limitations or follow-up work.

The maintainer may request changes when the scope is unclear, the behavior is untested, or the contribution introduces avoidable complexity.