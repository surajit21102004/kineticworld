# Build with Kinetic - Slate & Steel

Final selected palette. Brand positioning: calm and premium, for founders and
growing businesses. The website is mostly light. BWK has its own colour identity.

| Role | HEX |
| --- | --- |
| Slate accent | #416377 |
| Ink: logo, headings, dark sections | #172129 |
| Main page background | #F6F7F5 |
| Card surface | #FFFFFF |
| Secondary text | #5F6D74 |
| Divider | #D8E0E1 |

## Use

Use light neutral surfaces as the foundation. Keep slate for primary buttons,
links, selected states, and restrained brand highlights. Use ink for the main
logo and text; use white logo artwork on slate or ink backgrounds. The all-slate
logo is an optional single-colour version. Logo shapes are unchanged.

Use dark sections selectively. Keep proportions intact and leave one monogram
stroke width of clear space. Social profiles include white BWK on slate and ink.
The original monochrome pack is also included for print and other placements.

## Website tokens

CSS and JSON contain light and dark tokens, button hover, focus, input borders,
and separate status colours. Add `data-bwk-theme="dark"` to an element or use
`.bwk-dark-section` to apply dark tokens within it. Use the custom properties
in component styles, for example `color: var(--bwk-foreground)` and
`background: var(--bwk-background)`. Loading the token file defines variables;
components must reference them to apply the colours.

Light buttons: slate #416377 with white text. Hover: #2F4D61.
Light text links: #34566D. Dark text links: #BCD6E8.
Status colours should always have text labels, not colour alone.

## Contrast

The specified normal-text pairs exceed 4.5:1. Button text: 6.41:1;
button hover text: 8.92:1; secondary text on the page: 4.98:1.
This verifies colour pairings, not every aspect of a finished website.
Reference: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html

HEX values are the digital master. Match print colour using the printer's profile
and a proof, rather than treating a generic HEX-to-CMYK conversion as exact.
