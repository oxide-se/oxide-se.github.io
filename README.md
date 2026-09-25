# oXiDe SE website

This repository contains the static public website for **oXiDe Secure Element**.
It introduces the project through three paths: the Rustlet devkit,
GlobalPlatform Security Domain support, and the open-source kernel.

## Local preview

From the repository root, serve the files with any static HTTP server:

```sh
python3 -m http.server 8000
```

Then open <http://127.0.0.1:8000/>. A server is required because the site uses
root-relative paths, matching its deployment at `https://oxide-se.github.io/`.

## Updating for a new beta

1. Update the version label and release URL in the four HTML pages.
2. Update every version-pinned documentation URL (`/blob/<tag>/…` and
   `/tree/<tag>/…`).
3. Recheck commands and limitations against the documentation at the new tag.
4. Preview `/`, `/devkit/`, `/globalplatform/`, `/kernel/`, and `/404.html` on
   desktop and mobile widths.
5. Validate local links, keyboard focus, reduced motion, contrast, and 200%
   zoom before publishing from `main` at the repository root.

The site intentionally has no build step or external runtime dependency.
