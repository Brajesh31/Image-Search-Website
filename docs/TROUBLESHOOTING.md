# Troubleshooting

## The page opens but search does not work

Check that config.js exists beside index.html and contains a non-empty Access Key. The repository intentionally does not include a real key. Open developer tools and inspect the status message and network panel.

## HTTP 401 or 403

The provider rejected the key or its application permissions. Confirm that the key belongs to the intended Unsplash application, has not been revoked, and is being used according to provider requirements. Do not paste the key into a public issue.

## HTTP 429

The provider rate limit has been reached. Stop repeated retries, wait for the provider's reset window, and review application usage. A public deployment should use a server-side proxy with rate limiting.

## Search returns no images

Try a broader phrase. The empty result state is not necessarily an application error.

## Show More is not visible

The control is hidden when the response indicates that no more pages are available or when the first page returns no results.

## Images fail to load

The API may return remote image URLs that later become unavailable, or the browser may be offline. Check the image request in developer tools. The application does not host or cache image files.

## Icon is missing

Font Awesome is loaded from a CDN. The icon is decorative and should not prevent search from working. Check CDN access or network filtering.

## Layout looks broken on mobile

Reload at a narrow viewport and confirm style.css is loaded. Check for browser extensions or custom styles that may override the page.

## Local server cannot start

Port 8000 may already be in use. Use another port, for example python -m http.server 8080, and open the matching local URL.

## A key was committed accidentally

Rotate or revoke it at Unsplash immediately. Remove it from the current source and inspect Git history. A normal follow-up commit does not erase the old value from previous commits. Treat the credential as exposed.