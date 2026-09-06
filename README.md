# EZCAT website

First implementation of the five user-designed references in `../initial-design/`. Preserve the original order, copy, and illustration style before making later design improvements.

## Local-only workflow

The user explicitly wants this project to run on localhost only. Do not create deployments, publish, or push to hosted Sites unless the user explicitly requests it later. Keep the development server running for local previews. Existing hosting metadata is retained only to identify the previously created deployment for removal.

## Development

Use Node 22.13 or newer. Install dependencies with `npm install`, start with `npm run dev`, and build with `npm run build`.

## Structure

- `app/page.tsx`: five-section landing page, illustration framing, GSAP animations, and navigation dialogs.
- `app/globals.css`: desktop and mobile layouts, typography, blue annotations, and reduced-motion behavior.
- `lib/site-links.ts`: official app, download, documentation, and repository destinations. These are unset until supplied by the owner. Missing destinations show honest availability states.
- `public/design/`: unchanged copies of the user's original design images. CSS frames only the illustration regions; all page text and interface controls are real elements.
- `public/design/hero-clean-background.png`: background-cleaned hero derivative, edited with the built-in image tool. The original canvas and framing are preserved. A white background blends into the page through multiply blending; this file is not an alpha-transparent PNG. The edit prompts are recorded in `design-notes/hero-background.md`.
- `.openai/hosting.json`: Sites project registration. No credentials are stored in the repository.

The complex illustrations retain their original raster appearance. They animate as whole illustrations; individual character limbs and papers are not independently rigged. Layouts reflow at tablet and mobile widths, while GSAP respects the visitor's reduced-motion preference.
