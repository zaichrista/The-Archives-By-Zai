# The Archives by Zai

The public portfolio of Zaira Christa Barakat, a London-based strategist, cultural researcher, creative director, and designer. The site brings together selected brand, hospitality, fashion, and academic work in an editorial, research-led archive.

**Live site:** [zaichrista.github.io/The-Archives-By-Zai](https://zaichrista.github.io/The-Archives-By-Zai/)

## Site map

- `index.html` — portfolio homepage, profile, capabilities, selected work, research, and contact.
- `works.html` — crawlable, text-first versions of every case study referenced by the portfolio.
- `zc-studios.html` — interactive overview of ZC Studios and its cultural-strategy workflow.
- `cv.html` — web CV with a downloadable PDF.
- `assets/` — photography, project imagery, identity assets, favicon, and CV PDF.

## Technology

The site is intentionally lightweight: semantic HTML, CSS, and vanilla JavaScript, with no framework or production build step. Google Fonts supplies the display, sans-serif, and monospace typefaces. GitHub Actions deploys the repository to GitHub Pages.

## Run locally

Serve the repository root with any static file server. For example:

```bash
npx serve .
```

Then open the local URL printed in the terminal. A local server is recommended because it reproduces production URL and asset behaviour more accurately than opening an HTML file directly.

## Content and design updates

- Edit homepage and profile copy in `index.html`.
- Edit case-study content in the `projects` object in `script.js`, then regenerate or update the matching text-first entries in `works.html`.
- Edit the portfolio visual system and responsive behaviour in `style.css`.
- Edit the Studio experience in `zc-studios.html`, `zc-studios.css`, and `zc-studios.js`.
- Edit the web CV in `cv.html`; replace `assets/Zaira-Christa-Barakat-CV.pdf` when the downloadable version changes.

Project links use progressive enhancement: the homepage opens a JavaScript dialog, while each link retains a real `works.html#project-id` destination for visitors without JavaScript and for search engines. A homepage `data-project` value must therefore match both a key in `script.js` and the corresponding `id` in `works.html`.

When adding images, use descriptive alternative text, optimise files before committing, and URL-encode spaces in paths referenced by HTML or JavaScript.

## Quality checklist

Before publishing:

1. Test the homepage, project dialogs, Studio interactions, CV download, email links, and all internal navigation.
2. Check layouts at mobile, tablet, laptop, and wide-desktop widths.
3. Navigate every interactive element by keyboard and verify visible focus states.
4. Test with reduced-motion enabled and confirm that content remains available when JavaScript is disabled.
5. Confirm that every local link and asset resolves, then update `sitemap.xml` dates for materially changed pages.

## Deployment

The workflow in `.github/workflows/pages.yml` publishes the repository root to GitHub Pages on pushes to `main`; it can also be run manually from GitHub Actions. The canonical production base URL is:

```text
https://zaichrista.github.io/The-Archives-By-Zai/
```

Keep the canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml` aligned with that address if the domain changes.
