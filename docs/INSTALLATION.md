# Installation and Local Development

## Prerequisites

- Git.
- A modern browser.
- A static HTTP server such as Python's built-in http.server.
- An Unsplash developer application and Access Key for live searches.

## Clone

    git clone https://github.com/Brajesh31/Image-Search-Website.git
    cd Image-Search-Website

## Configure

Copy config.example.js to config.js. Set window.IMAGE_SEARCH_CONFIG.unsplashAccessKey to your local Unsplash Access Key. The config.js file is ignored by Git. Do not add real credentials to the example file.

## Run

    python -m http.server 8000

Visit http://localhost:8000.

Alternative static servers are acceptable. Do not open the site from an arbitrary file path if your browser blocks required requests.

## No build step

The current repository uses browser-native HTML, CSS, and JavaScript. There is no npm install, build, or bundling step for the application.

## Verify setup

- Confirm config.js exists beside index.html.
- Confirm the Access Key is not empty.
- Open browser developer tools.
- Submit a known search phrase.
- Confirm the network request returns a successful response.
- Confirm the result gallery renders and the status message updates.

## Cleanup

Do not commit config.js. If a key was committed accidentally, rotate it with Unsplash and review the repository history. Deleting the current file alone does not remove a credential from earlier commits.