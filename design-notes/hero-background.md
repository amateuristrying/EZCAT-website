# Hero doodle background cleanup

Created 2026-09-06 with the built-in image generation/editing tool.

Final asset: `../public/design/hero-clean-background.png` (1536 × 1024).
Original reference: `../../initial-design/01-hero.png`.

The first output simulated transparency as a checkerboard and was not used in the site. The final edit replaces that background with white. CSS multiply blending and slight brightness adjustment make the white match the page without a rectangular paper texture. The existing crop coordinates, size, and animation remain unchanged.

## Initial edit prompt

Use case: background-extraction. Edit target: the attached EZCAT website design. Extract ONLY the existing black hand-drawn illustration on the right: a hand in a gray sleeve lifting a sheet of paper out of a scattered pile of papers, including the small black emphasis marks above and around the top sheet. Remove ALL website text, logos, buttons, navigation, and the off-white/pink textured rectangular background. Output a PNG with real alpha transparency, not a painted checkerboard or white rectangle. Preserve the exact original illustration linework, pose, gray sleeve and white sleeve dots, paper pile arrangement, and proportions. Do not redesign or redraw the subject, do not add marks or text. Remove the large horizontal ground texture/shadow so no rectangular haze remains. Preserve the paper and hand interiors as near-white, but everything outside the subject must be transparent, including spaces between the disconnected emphasis marks. Keep the full original 1536 by 1024 canvas and the illustration in its EXACT existing coordinates (illustration roughly x810–1380, y136–880). Do not center it, enlarge it, or crop the canvas. This will replace the illustration inside the existing website crop, so exact placement is important.

## Final correction prompt

Edit the supplied image. Replace EVERY checkerboard square and all background texture with uniform solid pure white (#FFFFFF, RGB 255 255 255). The entire background must be perfectly white with NO checkerboard, NO transparency simulation, NO gradients, NO paper grain, NO shadows. Preserve the existing hand, gray dotted sleeve, scattered papers, and black emphasis marks EXACTLY as they are, at the same position and size on the same 1536 x 1024 canvas. Do not move, redraw, recolor, or alter the illustration. Only replace the checkerboard/background with pure white. Pure white is required so this asset can blend seamlessly into a website.
