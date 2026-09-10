# EZCAT website

First implementation of the five user-designed references in `../initial-design/`. Preserve the original order, copy, and illustration style before making later design improvements.

## Hosting workflow

Production is hosted on Cloudflare Pages at https://ezcat.pages.dev/ from the GitHub repository `amateuristrying/EZCAT-website`. Pushes to `main` trigger automatic Pages deployments. Do not publish to hosted OpenAI Sites. Existing Sites metadata identifies the previously created deployment; it is not the production deployment target.

## Development

Use Node 22.13 or newer. Install dependencies with `npm install`, start with `npm run dev`, and build with `npm run build`.

## Cloudflare Pages

The build uses Vinext static export (`output: 'export'`) to generate the homepage at `dist/client/index.html`, alongside JavaScript, styles, fonts, and illustrations. No Worker runtime or database is required. GSAP and interactive controls run in the browser.

Use these Pages settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | None |
| Root directory | Leave blank (the app is at the GitHub repository root) |
| Build command | `npm run build` |
| Build output directory | `dist/client` |
| Environment variable | `NODE_VERSION=22` |

Deploy only the public `dist/client` folder, not `dist` or `dist/server`. A successful assets-only upload without `index.html` returns a homepage 404. Older commit `54a440e` produced a Worker build and must not be reused for Pages; deploy a commit containing this static-export configuration.

## Structure

- `app/page.tsx`: five-section landing page, illustration framing, GSAP animations, and navigation dialogs.
- `app/globals.css`: desktop and mobile layouts, typography, blue annotations, and reduced-motion behavior.
- `lib/site-links.ts`: official app, download, documentation, and repository destinations. These are unset until supplied by the owner. Missing destinations show honest availability states.
- `public/design/`: unchanged copies of the user's original design images. CSS frames only the illustration regions; all page text and interface controls are real elements.
- `public/design/hero-clean-background.png`: background-cleaned hero derivative, edited with the built-in image tool. The original canvas and framing are preserved. A white background blends into the page through multiply blending; this file is not an alpha-transparent PNG. The edit prompts are recorded in `design-notes/hero-background.md`.
- `.openai/hosting.json`: Sites project registration. No credentials are stored in the repository.

The complex illustrations retain their original raster appearance. They animate as whole illustrations; individual character limbs and papers are not independently rigged. Layouts reflow at tablet and mobile widths, while GSAP respects the visitor's reduced-motion preference.
