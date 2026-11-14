# Security Policy

## Supported project

Security reports should identify the affected commit or current default branch and include a reproducible description where possible.

## Reporting a vulnerability

Do not publish exploitable vulnerabilities, API keys, tokens, or private account details in a public issue. Contact the maintainer privately through the contact route available on the GitHub profile. Include:
- A concise description of the issue.
- Affected files and commit, if known.
- Reproduction steps or a proof of concept that does not expose real user data.
- Potential impact and any suggested mitigation.

Please allow reasonable time for triage before public disclosure.

## Credential handling

- Never commit real credentials or local configuration.
- The local config.js file is ignored by Git.
- The example configuration contains an empty placeholder only.
- A key embedded in a static front-end is visible to site visitors. It must not be treated as a secret.
- Use a server-side proxy with environment-based credentials when deploying publicly.
- If a credential has been committed or exposed, revoke or rotate it at the provider. Removing it from the latest file does not remove it from Git history.

## Application security controls

The front end validates search input, checks HTTP status, handles rate-limit responses, creates DOM nodes, inserts remote descriptions as text, and opens external links with safe rel attributes. These controls reduce common risks but do not constitute a full security audit.

## Scope and limitations

This repository is a static browser application. It has no authentication, database, server-side authorization, payment processing, or user account storage. Security issues in Unsplash or other third-party services should be reported to their respective maintainers.