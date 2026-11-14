# Configuration

## Local browser configuration

The application reads window.IMAGE_SEARCH_CONFIG before it starts searching.

1. Copy config.example.js to config.js.
2. Set the unsplashAccessKey string to the Access Key from your Unsplash developer application.
3. Save the file beside index.html.
4. Reload the site.

The example file contains an empty value by design. config.js is ignored by Git and must remain local.

## Configuration shape

    window.IMAGE_SEARCH_CONFIG = Object.freeze({
      unsplashAccessKey: "YOUR_UNSPLASH_ACCESS_KEY"
    });

The property must be a string. Missing or blank configuration prevents the request and produces a readable status message.

## Security warning

A browser application cannot keep a key secret. The browser must receive the value to make the API request. Anyone using the deployed site can inspect source code and network requests.

For a public production deployment, implement a server-side or serverless endpoint that:
- Stores the provider credential in a server-side environment variable.
- Validates and bounds the query and pagination values.
- Applies rate limiting and abuse controls.
- Returns only the fields the browser needs.
- Avoids logging credentials or unnecessary personal data.

## Environments

Do not reuse personal development credentials for a public production deployment. Create a separate provider application or key where appropriate, monitor usage, and rotate exposed credentials.

## Troubleshooting

If the configuration message remains visible, confirm the file name is exactly config.js, it is in the same directory as index.html, and the key is a quoted string. Check the browser console for loading errors.