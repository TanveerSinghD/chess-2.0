# Chess 2.0 website

A Zuno-inspired landing page for the iPhone app: warm white background, bold type, a pink chessboard, an illustrated phone, a six-move interactive opening, and expandable questions. Piece artwork comes from this app. The website is a product introduction; the guided preview is not a playable chess engine.

## Preview locally

From this folder, run `python3 -m http.server 4173 --bind 127.0.0.1` and open http://127.0.0.1:4173/. No dependencies or build step are needed.

## Publish to GitHub Pages

1. Create a public GitHub repository for the website, for example `chess-2.0`.
2. Upload the **contents** of this folder into the repository root: `index.html`, `styles.css`, `site.js`, `favicon.svg`, `404.html`, `.nojekyll`, and the `assets` folder. Keep asset paths intact. GitHub Desktop can include the hidden `.nojekyll` file.
3. In **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, then save.
4. GitHub will provide the live site address after deployment. Relative asset paths support a GitHub project site such as `https://USERNAME.github.io/chess-2.0/`.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

If you prefer keeping this website in the app repository, copy this folder’s contents into a root `docs` folder and select **main → /docs** in Pages settings. A folder named `website` cannot be selected as a branch publishing source directly.

## Before app launch

- The page currently uses the project name **Chess 2.0**, styled as `chess. 2.0` in the wordmark. Update the title, description, page copy and footer if the final app name changes.
- Availability is **in development**. When the app launches, replace the availability badge with the real App Store link and update the related question. No download URL has been invented.
- Add a reviewed app privacy policy and support contact when those details are ready.
- The phone is an illustration using real piece assets and app colours, rather than a captured app screenshot.

All fonts and artwork are local or system-provided. The website has no analytics, forms, cookies, external requests, or build tooling. Repository: https://github.com/TanveerSinghD/chess-2.0

GitHub Pages address: https://tanveersinghd.github.io/chess-2.0/ (available after deployment).
