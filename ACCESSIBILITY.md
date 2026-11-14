# Accessibility

## Purpose

Accessibility is part of the user interface contract. The project should remain usable with a keyboard, readable by assistive technology, and understandable when motion or network behavior differs from the default.

## Current implementation

- The page uses a main landmark and a labelled search form.
- The search field has a programmatic label and a required constraint.
- Search feedback is announced through a polite live status region.
- Search and pagination controls are native buttons.
- Focus indicators are visible for links, buttons, and inputs.
- The decorative background image has an empty alternative and is hidden from assistive technology.
- Search result images receive descriptive alternative text from the API, with a fallback.
- Reduced-motion preferences are respected in CSS.
- New-tab links use safe rel attributes.

## Required review

Before merging interface changes, verify:

1. Every control can be reached and operated using only a keyboard.
2. Focus order follows the visual and logical order.
3. Focus remains visible and is not hidden by overlays.
4. Status changes are announced without forcing focus to move.
5. Images that convey meaning have useful alternative text.
6. Text and control contrast remain readable over the background.
7. Layout works at 200% zoom and narrow viewport widths.
8. Motion is not essential to understanding or operating the page.

## Known gaps

Automated checks do not establish WCAG conformance. The repository does not yet have a formal screen-reader test matrix or automated accessibility regression suite. Manual assistive-technology testing remains necessary.

## Reporting an issue

Use the accessibility or bug report issue template. Include the browser, assistive technology if applicable, steps to reproduce, and the expected behavior. Do not include private information.