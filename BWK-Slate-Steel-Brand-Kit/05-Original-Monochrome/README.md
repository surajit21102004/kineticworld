# Build with Kinetic - Final Logo Pack

Approved master: the first refinement with the flowing BWK monogram.
The original approved image is in `00-Approved-Reference`.

The master has been converted into outlined vector paths. All layouts and
colour variants use those same paths; none of the logo lettering requires an
installed font. These files do not embed the source bitmap in an SVG wrapper.

| Folder | Contents | Use |
| --- | --- | --- |
| 01-Vector-SVG | Primary, stacked, monogram, wordmark; black and white | Websites, Figma, scalable masters |
| 02-Print-PDF-EPS | All layouts in outlined vector PDF and EPS | Printing and design handoff |
| 03-Transparent-PNG | Black and white transparent artwork | Presentations, videos, graphics |
| 04-Solid-Background-JPG | Full horizontal logo on white or black | Easy sharing |
| 05-Social-Profile | Square SVG and 512/1024 PNG, light/dark | Profile pictures and social avatars |
| 06-Web-App-Icons | Favicons, ICO, Apple touch icons, app-shortcut PNG, maskable icons | Web deployment |
| 07-Guidelines | Two-page PDF logo guide | Consistent use |

## Which version to use

- Primary: the default horizontal full logo.
- Stacked: monogram above the unchanged two-line wordmark for square placements.
- Monogram: BWK only; use where the brand name is already understood.
- Wordmark: the outlined brand name without the monogram.
- Black artwork: light backgrounds. White artwork: dark backgrounds.
- SVG and PNG marked `white` have transparent backgrounds and will blend into a white viewer.
- Print PDFs marked `white-on-black` include a black background. EPS files contain artwork only.

## Sizes and colour

- Primary PNG: 1200, 2400, and 4800 px wide.
- Stacked PNG: 2400 px wide.
- Monogram PNG: 512, 1024, and 2048 px wide.
- Wordmark PNG: 2400 px wide.
- Profile PNG: 512 x 512 and 1024 x 1024 px with safe margins.
- Favicon PNG / ICO: 16, 32, 48, and 64 px. Two background schemes included.
- Apple touch icon: 180 x 180 px.
- Web app-shortcut icons: 192 and 512 px; maskable versions: 512 px.
- Black: #000000 / RGB 0,0,0. White: #FFFFFF / RGB 255,255,255.
- Black vector print files use CMYK 0,0,0,100 (100% K).
- PNG resolution is recorded at 300 ppi; actual print size depends on pixel width.

## Web files

Choose one favicon scheme and copy the required files into your website's public
asset folder. The included `site.webmanifest` uses the black-on-white icon scheme.
Its icon paths are relative to the manifest file. Adjust those paths if moved.
The generic icons are suitable for web app shortcuts; store submission artwork
should use the requirements of the particular app listing.

## Keep consistent

Do not stretch, skew, recolour, add effects, or rebuild the lettering. Leave at
least one monogram stroke width of clear space. Use the vector files for large
print output and the social profile files for square avatars. All layouts use
the same approved shapes.
