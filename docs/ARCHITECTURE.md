# Architecture

## System boundary

PicKart is a client-only static website. The browser loads HTML, CSS, and JavaScript from the hosting provider. When a visitor searches, the browser sends a request directly to Unsplash. No application server is present in this repository.

## Components

### index.html
Defines the document metadata, search form, status message, result container, and footer. The local config.js file is loaded before script.js.

### config.example.js
Provides a safe, empty configuration template. A developer copies it to config.js and adds a local Access Key. The local file is ignored by Git.

### script.js
Owns search validation, API request construction, loading state, pagination, response validation, result-card creation, and status messages.

### style.css
Defines the visual theme, search panel, result grid, card layout, responsive breakpoints, focus indicators, and reduced-motion behavior.

## Request lifecycle

1. The visitor submits the search form.
2. The handler prevents native navigation and validates the trimmed query.
3. The application verifies that a configured Access Key exists.
4. A request is sent to the Unsplash Search Photos endpoint.
5. The response status is checked before parsing.
6. The response shape is checked for a results array.
7. Cards are built with DOM APIs and appended to the gallery.
8. Pagination state is updated from total_pages.
9. A status message is announced and the Show More control is updated.

## State

The application keeps the current query, next page number, total page count, loading flag, and active AbortController in memory. State is reset for a new search. There is no persistence across reloads.

## Failure behavior

A new search clears the old gallery before the request. HTTP errors, invalid credentials, rate limiting, malformed responses, and network errors are reported in the status region. Requests are guarded against overlapping execution.

## Security boundary

The browser is an untrusted environment. Any Access Key used directly by the browser is visible to visitors. A production architecture that needs credential confidentiality should add a server-side proxy, rate limiting, and provider usage monitoring. Do not store a secret in a static JavaScript file.