#!/usr/bin/env node

// Builds the crawlable project archive from the same data used by the pop-up
// panels, so the two versions cannot quietly drift apart.
const fs = require("fs");
const vm = require("vm");

const script = fs.readFileSync("script.js", "utf8");
const start = script.indexOf("const projects = ") + "const projects = ".length;
const end = script.indexOf("\n};", start) + 2;
if (start < "const projects = ".length || end < 2) {
  throw new Error("Could not find the projects object in script.js");
}

const projects = vm.runInNewContext(`(${script.slice(start, end)})`);
const escapeHtml = value => String(value).replace(/[&<>\"]/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"
})[character]);

const articles = Object.entries(projects).map(([key, project]) => {
  const premise = project.type === "research" ? "The Premise" : "Abstract";
  const method = project.type === "research" ? "The Method" : "The Investigation";
  const result = project.type === "research" ? "The Discovery" : "What I Learned";
  return `
    <article class="archive-project" id="${escapeHtml(key)}">
      <p class="meta">${escapeHtml(project.meta)}</p>
      <h2>${escapeHtml(project.title)}</h2>
      <p class="archive-lead">${escapeHtml(project.lead)}</p>
      <section><h3>${premise}</h3><div>${project.abstract}</div></section>
      <section><h3>The Question</h3><p class="archive-question">${escapeHtml(project.question)}</p></section>
      <section><h3>${method}</h3><div>${project.investigation}</div></section>
      <section><h3>${result}</h3><div>${project.learned}</div></section>
      ${project.type === "research" ? `<a class="request-btn" href="mailto:zcbarakat@gmail.com?subject=Request full piece: ${encodeURIComponent(project.title)}">Request full piece</a>` : ""}
      <a class="archive-back" href="#top">Back to project list ↑</a>
    </article>`;
}).join("\n");

const projectLinks = Object.entries(projects).map(([key, project]) =>
  `<li><a href="#${escapeHtml(key)}"><span>${escapeHtml(project.meta)}</span>${escapeHtml(project.title)}</a></li>`
).join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Selected Works & Research | Zaira Christa</title>
  <meta name="description" content="Full project archive for Zaira Christa: brand strategy, cultural research, fashion direction and academic writing.">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="https://zaichrista.github.io/The-Archives-By-Zai/works.html">
  <link rel="icon" type="image/png" href="assets/favicon.png">
  <link rel="stylesheet" href="style.css">
</head>
<body class="archive-page" id="top">
  <header class="archive-header">
    <a href="index.html" aria-label="Return to Zaira Christa portfolio"><img src="assets/zc-word-logo.png" alt="Zaira Christa"></a>
    <a href="index.html#work">← Portfolio</a>
  </header>
  <main class="archive-main">
    <header class="archive-intro">
      <p class="section-label">Selected Works & Research</p>
      <h1>The working archive.</h1>
      <p>Complete, text-readable versions of the projects presented in the portfolio.</p>
    </header>
    <nav class="archive-nav" aria-label="Project index"><ol>${projectLinks}</ol></nav>
    ${articles}
  </main>
</body>
</html>
`;

fs.writeFileSync("works.html", html);
console.log(`Generated works.html with ${Object.keys(projects).length} projects.`);
