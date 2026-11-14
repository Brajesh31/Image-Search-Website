# Project Overview

## Product summary

PicKart is a static image-search interface. It accepts a user-entered phrase, requests matching photographs from the Unsplash Search Photos API, and renders the results in a responsive gallery.

## Goals

- Demonstrate a complete browser-side API interaction using native web technologies.
- Keep the setup simple and avoid a build system for a small project.
- Make search feedback, pagination, and failure states understandable.
- Keep result rendering safe by treating remote descriptions as text.
- Improve baseline accessibility and responsive behavior.
- Document the limitations of browser-side API credentials.

## Out of scope

The current project does not provide user accounts, favorites, server-side search, a database, image uploads, content moderation, analytics, or an administrative interface.

## Intended users

The project is suitable for learners exploring HTML forms, CSS layout, JavaScript Fetch, asynchronous state, and third-party APIs. It can also serve as a small static demo after the API configuration and provider terms have been reviewed.

## Current implementation

The application consists of index.html, style.css, script.js, and a local configuration object. The application has no compile step. It depends on the browser and the availability of Unsplash.

## Success criteria

A successful search should show relevant results or a clear empty state. Failures should be communicated without leaving misleading stale results. Keyboard users should be able to submit a search and browse links. Documentation should explain how to configure the API and why a front-end key is not private.