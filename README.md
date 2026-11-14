# PicKart Image Search

A lightweight, browser-based image search application built with plain HTML, CSS, and JavaScript. PicKart uses the Unsplash Search Photos API to find images, display responsive result cards, and load additional pages without a framework or build step.

> **Project status:** This repository contains a static front-end application. It does not include a server, database, account system, or production API proxy.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [User Flow](#user-flow)
4. [Technology Stack](#technology-stack)
5. [Repository Structure](#repository-structure)
6. [Requirements](#requirements)
7. [Getting Started](#getting-started)
8. [Unsplash API Configuration](#unsplash-api-configuration)
9. [Using the Application](#using-the-application)
10. [Application Architecture](#application-architecture)
11. [API Integration](#api-integration)
12. [Accessibility](#accessibility)
13. [Security and Privacy](#security-and-privacy)
14. [Error Handling](#error-handling)
15. [Testing and Validation](#testing-and-validation)
16. [Deployment](#deployment)
17. [Troubleshooting](#troubleshooting)
18. [Known Limitations](#known-limitations)
19. [Roadmap](#roadmap)
20. [Contributing](#contributing)
21. [Support](#support)
22. [License](#license)
23. [Maintainer](#maintainer)

## 1. Overview

PicKart is a small image discovery interface. A visitor enters a search phrase, the browser requests matching photographs from Unsplash, and the page renders the results in a responsive gallery. The Show More control requests subsequent result pages.

The project intentionally stays close to the browser platform. There is no bundler, framework, package manager, transpilation step, or build output. This makes the code easy to inspect and suitable for learning how forms, asynchronous requests, DOM creation, API responses, and responsive CSS fit together.

## 2. Features

- Search Unsplash photographs by keyword or phrase.
- Display image results in a responsive card grid.
- Load further result pages with a Show More control.
- Show photographer attribution and link to the original Unsplash photo.
- Use lazy image loading to defer off-screen image downloads.
- Validate empty searches and missing configuration.
- Handle common API failures, including authentication errors and rate limits.
- Create result cards with DOM APIs and textContent, rather than inserting API text as HTML.
- Provide keyboard focus indicators, status announcements, and reduced-motion support.
- Run directly as a static site without a build process.

## 3. User Flow

1. Open the application in a browser.
2. Enter a descriptive search phrase.
3. Submit the search form.
4. Review the returned photographs and attribution.
5. Select a photograph to open its Unsplash page.
6. Select Show More to retrieve the next page when additional results exist.

The initial page is an empty search experience. Results are loaded only after a valid query is submitted.

## 4. Technology Stack

| Technology | Responsibility |
| --- | --- |
| HTML5 | Page structure, search form, landmarks, and accessibility semantics |
| CSS3 | Layout, visual styling, responsive breakpoints, and reduced-motion behavior |
| Vanilla JavaScript | Search state, API requests, pagination, DOM rendering, and error handling |
| Unsplash API | Search data and image URLs |
| Font Awesome | Decorative image-search icon |

No framework or runtime dependency is required for the application itself. Font Awesome is loaded from its CDN and therefore requires an internet connection.

## 5. Repository Structure

- .github/workflows: GitHub Actions for CodeQL, HTML/JavaScript validation, Markdown linting, and README timestamp updates.
- docs/: project architecture, API, setup, security, testing, deployment, and maintenance documentation.
- index.html: application document and search interface.
- script.js: API integration, search state, pagination, rendering, and error handling.
- style.css: responsive layout and visual design.
- config.example.js: safe configuration template with no real credential.
- config.js: local-only configuration file, intentionally ignored by Git.
- shape.png: repository image asset.
- LICENSE: root MIT license, subject to third-party rights and notices.

## 6. Requirements

- A modern browser with support for Fetch, Promises, AbortController, URL, and modern JavaScript.
- A local static HTTP server for development.
- An Unsplash developer application and Access Key for API-backed searches.
- Internet connectivity to reach Unsplash and the external icon stylesheet.

There is no Node.js installation requirement for the application itself. Node.js is used by optional repository validation workflows only.

## 7. Getting Started

Clone the repository:

    git clone https://github.com/Brajesh31/Image-Search-Website.git
    cd Image-Search-Website

Copy the example configuration file to the ignored local configuration file.

Windows PowerShell:

    Copy-Item config.example.js config.js

macOS or Linux:

    cp config.example.js config.js

Open config.js and set the Access Key for your Unsplash application:

    window.IMAGE_SEARCH_CONFIG = Object.freeze({
      unsplashAccessKey: "YOUR_UNSPLASH_ACCESS_KEY"
    });

Do not commit config.js. It is listed in .gitignore. A browser-based Access Key is still visible to visitors in a deployed static site. For a public production deployment, use a server-side proxy and do not treat a front-end key as a secret.

Start a local static server with Python:

    python -m http.server 8000

Open http://localhost:8000 in your browser. Any static file server can be used. No compilation or build command is needed.

## 8. Unsplash API Configuration

PicKart calls the Unsplash Search Photos endpoint. The local configuration object is read from window.IMAGE_SEARCH_CONFIG.

| Setting | Type | Required | Description |
| --- | --- | --- | --- |
| unsplashAccessKey | string | Yes, for live search | Unsplash application Access Key |

The value must be a string. An empty or missing value produces a configuration message instead of sending an invalid request.

The current front end sends the Access Key as the client_id query parameter because that is the authentication method used by this browser-only implementation. Query parameters may be visible in browser developer tools and network logs. A production system should place provider credentials behind a controlled server endpoint.

See docs/CONFIGURATION.md for local setup and docs/DATA_HANDLING.md for the data flow.

## 9. Using the Application

### Search

Enter a non-empty query and submit the form. Leading and trailing whitespace is removed. The application requests the first page and clears results from the previous query.

### Browse results

Each card contains an image, a short description when supplied by Unsplash, and a photographer attribution link. The image opens the associated Unsplash photo page in a new tab with safe link attributes.

### Load more

The Show More button appears only when the response indicates that another page is available. Requests are serialized so repeated clicks do not create overlapping pagination requests.

## 10. Application Architecture

The application has three main layers:

- Document layer: index.html defines the search form, live status region, result container, and footer.
- Presentation layer: style.css controls the glass-style search panel, result cards, responsive grid, focus states, and reduced-motion preferences.
- Behavior layer: script.js validates input and configuration, calls Unsplash, tracks pagination, renders cards, and reports errors.

The app does not maintain a server-side session or persistent search history. Search state exists only in the current page session. See docs/ARCHITECTURE.md for the component and request flow.

## 11. API Integration

The application uses the Unsplash Search Photos endpoint: GET https://api.unsplash.com/search/photos.

It sends query, page, per_page, and client_id parameters. The current page size is 12. The implementation reads results, total, and total_pages from the response and validates that results is an array before rendering.

See docs/API_REFERENCE.md for the response fields used by the UI.

## 12. Accessibility

The interface includes a main landmark, a labelled search input, semantic buttons, visible keyboard focus, a polite live status region, descriptive image alternatives, and reduced-motion handling. The decorative background image is hidden from assistive technology.

Accessibility is not guaranteed by the presence of these features alone. New changes should be tested with keyboard-only navigation and at least one screen reader/browser combination. See ACCESSIBILITY.md and docs/ACCESSIBILITY.md.

## 13. Security and Privacy

- The application does not include a backend or database.
- Do not commit API keys, tokens, passwords, or private configuration files.
- A key used by a static browser application is not secret. Use a server-side proxy for production credential isolation.
- Search terms are sent to Unsplash when a search is submitted.
- API-provided descriptions are inserted as text, not interpreted as HTML.
- External links opened in a new tab use noopener and noreferrer.
- Do not add analytics, tracking, or local storage without documenting the data collected and the reason for collection.

Read SECURITY.md before reporting a vulnerability. The current security review is documented in docs/SECURITY_REVIEW.md.

## 14. Error Handling

The interface provides a readable status message for empty search input, missing API configuration, rejected credentials, API rate limits, other non-success HTTP responses, unexpected response formats, and network or request failures.

Errors are also written to the browser console for debugging. A failed first-page request does not leave stale results displayed as if they belonged to the new query.

## 15. Testing and Validation

The repository does not currently include a unit-test framework or browser end-to-end suite. Do not interpret a successful GitHub workflow as proof that every user interaction works in every browser.

Manual checks should cover a normal query, no-result query, empty query, missing or invalid configuration, rate-limit response, pagination, narrow mobile layout, keyboard navigation, reduced-motion preference, and slow or failed image requests.

See docs/TESTING.md.

## 16. Deployment

The site can be hosted on any static web host that serves repository files over HTTPS. Examples include GitHub Pages, Netlify, Cloudflare Pages, or a conventional web server.

For a public deployment, do not assume that putting a key in a JavaScript configuration file makes it private. Use a backend or serverless proxy if the provider credential must be protected or request usage must be controlled.

See docs/DEPLOYMENT.md.

## 17. Troubleshooting

| Symptom | Likely cause | Action |
| --- | --- | --- |
| Configuration message appears | config.js is missing or empty | Copy config.example.js to config.js and set the key |
| HTTP 401 or 403 | Invalid key or application permission issue | Check the Unsplash application settings |
| HTTP 429 | API rate limit reached | Wait and retry; review API usage limits |
| No results | Search phrase has no matches | Try a broader phrase |
| Show More is hidden | There are no additional pages | Use another query or confirm total pages |
| Icons do not load | CDN blocked or offline | Check network access; icon is decorative |
| Images do not load | Remote image request failed | Check network and the returned image URL |

More detail is available in docs/TROUBLESHOOTING.md.

## 18. Known Limitations

- This is a front-end-only project.
- Static browser configuration cannot protect an API key from visitors.
- The app depends on Unsplash availability, API policy, and rate limits.
- There is no automated browser test suite yet.
- There is no server-side caching, search history, user account, favorites, or moderation layer.
- Image delivery and descriptions are controlled by Unsplash.
- The project has not been represented as production-ready or independently security-certified.

See docs/KNOWN_LIMITATIONS.md.

## 19. Roadmap

Potential improvements are tracked in docs/ROADMAP.md. The most valuable next engineering step is a small server-side API proxy with environment-based secrets and rate limiting. Additional UI features should follow only after the API boundary and error behavior are stable.

## 20. Contributing

Contributions are welcome when they improve correctness, usability, accessibility, documentation, or maintainability without adding unnecessary complexity.

Before opening a pull request, read CONTRIBUTING.md, keep the project framework-free unless a change has a clear technical reason, test the affected interaction manually, never include real credentials, and update documentation when behavior or configuration changes.

## 21. Support

For questions, bug reports, or feature proposals, use the repository issue templates. Do not post access keys, private account details, or security-sensitive information in public issues. See SUPPORT.md.

## 22. License

This repository includes an MIT License with the copyright notice:

Copyright (c) 2026 Brajesh Kumar

The root license applies only to original project material that the maintainer owns or is authorized to license. It does not replace the terms of Unsplash, Font Awesome, external images, or other third-party resources. Review docs/LICENSING.md before redistributing third-party assets or changing dependencies.

## 23. Maintainer

**Brajesh Kumar**

Repository: https://github.com/Brajesh31/Image-Search-Website

---

Last updated: 2026-11-14
