# Zaira Christa Portfolio

A single-page portfolio website for Zaira Christa, a London-based artist, strategist, researcher, and designer working across brand strategy, cultural research, fashion direction, writing, and creative worlds.

The site is built as a static HTML/CSS/JavaScript project. It opens with an editorial hero, moves through profile and capability sections, indexes selected work, and uses an interactive slide-in project panel for brand, fashion, and research case studies.

## Project Structure

- `index.html` - main page structure, navigation, hero, bio, work index, research index, profile, and contact sections.
- `style.css` - full visual system, responsive layout, typography, cursor, loader, project panel, and section styling.
- `script.js` - custom cursor behavior, loading sequence, project-panel content, modal open/close logic, and definition tooltips.
- `assets/` - logo, wordmark, favicon, and image assets used by the site.

## How To Run

Open `index.html` in a browser.

Because this is a static site, no build step or local server is required.

## Editing Guide

Edit the main page copy in `index.html`.

Update project titles, descriptions, questions, abstracts, investigation text, evidence slots, and learned notes in the `projects` object inside `script.js`.

Adjust colors, spacing, typography, responsive behavior, animation, and panel styling in `style.css`.

Replace or add visual assets in `assets/`, then update the matching image paths in `index.html` or CSS.

## Current Sections

- Hero introduction with Zaira Christa logo and primary calls to view work or read the profile.
- Short editorial bio with interactive definition terms.
- Current capabilities across brand strategy, creative direction, and cultural theory.
- Selected works grouped into brand strategy/research and creative direction/fashion.
- Research and writing archive with request links for full pieces.
- Full profile section describing academic, creative, and strategic practice.
- Contact section with email, Instagram, and TikTok links.

## Notes

The project panel content is generated from JavaScript rather than written directly into the HTML. If a work item has a `data-project` attribute in `index.html`, it should match a key in the `projects` object in `script.js`.

The site uses Google Fonts through an `@import` in `style.css`, so typography depends on an internet connection unless the fonts are self-hosted.
