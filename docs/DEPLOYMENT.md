# Deployment

## Static hosting

The current application can be served by any static host that supports HTTPS and serves the repository files. No build output is required. The site root must contain index.html, script.js, style.css, shape.png, and the configuration file required by the selected deployment model.

## Important credential decision

The current implementation reads an Access Key in the browser. A deployed static configuration file is publicly retrievable, even if it is not stored in the repository. Do not use a front-end key when confidentiality is required.

For public deployment, the recommended architecture is:

1. Deploy a small serverless function or backend endpoint.
2. Store the Unsplash credential in the host's server-side environment variables.
3. Validate query length and pagination parameters.
4. Enforce rate limits and request quotas.
5. Return a minimal response payload to the browser.
6. Remove direct client_id handling from the browser.
7. Monitor provider usage and error rates.

## Hosting checklist

- Serve the site over HTTPS.
- Confirm all asset paths are correct for the deployed base path.
- Configure the API proxy if the site is public.
- Confirm the provider's current API terms and attribution requirements.
- Verify error states and mobile layout on the deployed site.
- Do not deploy a personal Access Key in a publicly readable config file.
- Configure security headers at the host where possible, including an appropriate Content-Security-Policy after auditing required external hosts.

## GitHub Pages and similar hosts

Static hosting can serve the current front end, but it cannot provide private server-side environment variables to browser JavaScript. A separate serverless endpoint is needed for credential protection. The repository does not currently include a production backend or deployment workflow.