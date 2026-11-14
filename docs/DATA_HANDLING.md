# Data Handling and Privacy

## Data flow

When a visitor submits a search, the browser sends the search phrase, page number, page size, and configured Access Key to the Unsplash API. The provider processes the request and returns photo metadata and image URLs. The browser renders selected response fields.

## Data stored by this application

The current application does not intentionally store search history, user profiles, favorites, uploaded images, or account information. Search state is held in JavaScript memory until the page is closed or reloaded.

## Third-party processing

Search terms and request metadata are sent to Unsplash. The page also loads Font Awesome from a CDN and a remote background image. These services may receive network metadata such as IP address and user-agent information according to their own policies.

Review current provider privacy policies and API terms before public deployment. This repository does not control third-party retention or processing.

## Credentials

The browser currently requires an Unsplash Access Key for direct API calls. A key delivered to a browser is visible to visitors. Do not treat it as confidential. Use a server-side proxy when credential secrecy or usage control is required.

## Logging

The application writes request errors to the browser console. It should not log the Access Key, full credential-bearing request URLs, or private user data. Issue reports should redact credentials and identifying information.

## Future changes

Any analytics, cookies, local storage, server-side logging, account system, or image upload feature must include a documented purpose, data inventory, retention plan, and user-facing privacy explanation before release.