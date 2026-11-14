# API Reference

## Provider endpoint

The application calls the Unsplash Search Photos endpoint:

    GET https://api.unsplash.com/search/photos

## Request parameters

| Parameter | Required | Description |
| --- | --- | --- |
| query | Yes | Search phrase entered by the visitor |
| page | Yes | One-based page number |
| per_page | Yes | Number of results requested, currently 12 |
| client_id | Yes | Unsplash Access Key for the current browser implementation |

The application URL-encodes parameters with URLSearchParams.

## Response fields used

| Field | Purpose |
| --- | --- |
| results | Array of photo records |
| total | Total matching result count, when supplied |
| total_pages | Number of pages available |
| results[].urls.small | Thumbnail URL rendered in the gallery |
| results[].alt_description | Preferred image alternative text and card description |
| results[].description | Fallback description |
| results[].links.html | Original photo page |
| results[].user.name | Photographer display name |
| results[].user.links.html | Photographer profile URL |

The application checks that results is an array and ignores incomplete photo records that do not contain the required URL fields.

## Attribution

Cards link to the photo page and photographer profile. The photographer link includes Unsplash referral parameters. Review the current Unsplash API guidelines before distributing or changing attribution behavior.

## HTTP failures

- 401 or 403: the provider rejected the key or application permissions.
- 429: provider rate limit reached.
- Other non-2xx response: request failed and the HTTP status is shown in the status message.
- Network failure: the browser could not complete the request.

## Versioning and policy

This repository does not pin an API version or guarantee compatibility with future provider changes. Check Unsplash's current developer documentation and terms before deployment. This document is an implementation reference, not a replacement for provider documentation.