
// V17: force website to open at the top, not at the last browser scroll position.
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});
window.addEventListener("load", () => {
  setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }), 0);
  setTimeout(() => window.scrollTo(0, 0), 80);
});

const projects = {
  "bekaa": {
    title: "Bekaa",
    type: "brand",
    meta: "Brand Strategy · Cultural Concept · Hospitality · 2025",
    lead: "A Mediterranean-informed hospitality concept for West London, built on an original theory of cultural authority.",
    question: "What makes a venue memorable?",
    abstract: "Bekaa asks what separates a venue with genuine identity from a venue with merely attractive branding. It was developed as a research-led hospitality concept responding to the flattening of London nightlife, translating the Bekaa Valley’s wine culture, musical atmosphere and slower social rituals into a contemporary West London listening bar and cultural venue.",
    investigation: "London's nightlife has been flattening. Not disappearing. Flattening. The venues multiply, the brand identities multiply, and yet the experiences become increasingly interchangeable. Bekaa answers this by building a venue around archival capital: the value a space accumulates through repeated participation, recognisable rituals and shared cultural memory.",
    learned: "Bekaa taught me that branding is not identity. Identity is what remains when the branding disappears. The strongest spaces are not simply designed. They are remembered.",
    evidence: ["Logo on dark background", "Mission / Vision / Values slide", "Competitor analysis table", "Audience profile", "Interior moodboard", "Music programme", "Cocktail ritual", "Spatial plan", "Archival capital diagram"]
  },
  "muni": {
    title: "Muni",
    type: "brand",
    meta: "Brand Strategy · Concept Brand · Fashion · 2024",
    lead: "A modular fashion brand built around a zipper connection system I designed, where the customer builds the garment.",
    question: "What if clothing was never finished?",
    abstract: "Muni is a concept brand and product system that treats sustainability as authorship rather than guilt reduction. The garment becomes modular, editable and re-authored over time through detachable components.",
    investigation: "Most sustainable fashion brands sell guilt reduction. Muni sells authorship. The brand breaks the logic of the fixed garment at the seam itself. The customer buys a bodice, sleeves, collars and components, then builds and rebuilds the garment over time. The customer is not the consumer of a finished product. They are the last designer in the chain.",
    learned: "Muni taught me that attachment is a design strategy. When people participate in the making of an object, they are less likely to discard it.",
    evidence: ["Amber gradient logo", "Logo development", "Zipper system diagram", "Component map", "Garment construction", "Packaging concept", "User journey", "Brand world", "Kisses from Parikyo connection"]
  },
  "baba-g": {
    title: "Baba G — Brand Refresh Proposal",
    type: "brand",
    meta: "Brand Refresh · Client Work · 2025",
    lead: "A logo refresh proposal for a Lebanese fast-food restaurant, and what it revealed about the gap between where a brand is and where it could go.",
    question: "How do you make a neighbourhood brand feel as warm as it actually is?",
    abstract: "Baba G explored how a genuine Lebanese street-food business could translate warmth, appetite and personality into a sharper visual identity without losing its neighbourhood charm.",
    investigation: "The existing brand was functional but forgettable. My proposal moved the identity toward kraft gold, terracotta, stamped packaging cues and a heavier wordmark that could hold signage, paper bags and street-food energy. The project became a study in making the distance between current brand and possible brand legible.",
    learned: "Baba G taught me that brand strategy often means helping people see what their own business could become before they are ready to become it.",
    evidence: ["New logo proposal", "Existing site comparison", "Paper bag mockup", "Signage mockup", "Colour palette", "Wordmark detail", "Packaging system", "Menu treatment", "Before / after"]
  },
  "parikyo": {
    title: "Kisses from Parikyo",
    type: "fashion",
    meta: "Concept Collection · Fashion Direction · 2025",
    lead: "A speculative collection merging French couture structure, Japanese subcultural fashion and international pattern languages.",
    question: "What happens when cultural references become structure rather than decoration?",
    abstract: "Parikyo is a speculative fashion collection built from Paris and Tokyo as design philosophies. The emphasis is on clothing, silhouette and cultural translation, with concept used as the structure beneath the looks.",
    investigation: "The four looks translate Schiaparelli, Japanese denim, Dior draping, cargo silhouettes, Chanel, steampunk, qipao structure and Hokusai movement into silhouettes. These are AI-rendered concept looks. The direction, research and creative decisions are my own. The work is not pastiche. It is translation.",
    learned: "Kisses from Parikyo taught me that cultural reference becomes strongest when it stops decorating the garment and starts shaping the garment.",
    evidence: ["Look 01 full render", "Look 02 full render", "Look 03 full render", "Look 04 full render", "Fabric references", "Silhouette study", "Cultural reference map", "Colour story"]
  },
  "fw23": {
    title: "FW23 — Women, Studied",
    type: "fashion",
    meta: "Fashion Direction · Runway Show · 2023",
    lead: "A runway collection exploring what it means to study a woman rather than dress one.",
    question: "What does a woman wear when she is being looked at?",
    abstract: "FW23 was the first full runway show I designed and directed. It treats clothing as evidence in an investigation of looking, being looked at, concealment and self-possession.",
    investigation: "The collection approached the female wardrobe as a research subject, dissecting how clothes have been used to categorise, contain and occasionally liberate. Every look started with a question rather than a silhouette. The show was the argument and the clothes were the evidence.",
    learned: "FW23 taught me that a runway can be a thesis. Clothing does not only decorate the body. It frames how the body is read.",
    evidence: ["Runway shot 01", "Runway shot 02", "Runway shot 03", "Runway shot 04", "Backstage", "Look detail", "Sketch", "Show notes"]
  },
  "ss24": {
    title: "SS24 — Reflections on Glamour",
    type: "fashion",
    meta: "Fashion Direction · Runway Show · 2024",
    lead: "A collection that asked what glamour actually costs, and who has historically been allowed to claim it.",
    question: "What does glamour cost?",
    abstract: "SS24 is a fashion direction project about glamour as desire, power, spectacle and exclusion. It is more image-led than theory-led, but the argument lives inside the clothing.",
    investigation: "Where FW23 studied, SS24 performed. The collection drew on mid-century glamour and destabilised it with materials and silhouettes that introduced friction. Glamour has always been a negotiation between desire and power, visibility and control.",
    learned: "SS24 taught me that glamour survives because contradiction survives. It seduces and restricts at the same time.",
    evidence: ["Runway shot 01", "Runway shot 02", "Runway shot 03", "Runway shot 04", "Detail image", "Backstage", "Moodboard", "Look note"]
  },
  "voyage-ascent": {
    title: "A Voyage in Ascent",
    type: "fashion",
    meta: "Creative Direction · Oxford Fashion Gala · Photoshoot",
    lead: "A fashion gala creative direction and photoshoot project built around ascent, atmosphere and image-making.",
    question: "How do you make a fashion event feel like a world before the runway begins?",
    abstract: "A Voyage in Ascent was a creative direction project for the Oxford Fashion Gala, extending beyond the event into a visual world through photoshoot direction, styling, atmosphere and image construction.",
    investigation: "The project treated the gala not as a single evening but as an ascent: an image-world where styling, model direction, pose, light and mood created a sense of movement toward something elevated. The photoshoot became the proof of concept, translating the gala’s atmosphere into editorial images.",
    learned: "A Voyage in Ascent taught me that creative direction is not only about making something look beautiful. It is about controlling the emotional weather around an image.",
    evidence: ["Campaign image 01", "Campaign image 02", "Styling detail", "Model direction", "Moodboard", "Behind the scenes", "Poster / invite", "Editorial crop"]
  },
  "tokyo-drift": {
    title: "Tokyo Drift: The Sonic Graffiti of the Tokyoite Underground",
    type: "research",
    meta: "Ethnography · Oxford BA Dissertation · 2025",
    lead: "Three weeks of fieldwork in Tokyo's underground club scene: clubs, conversations and one dinner table with a hip hop legend.",
    question: "How does a city write itself onto the body?",
    abstract: "This dissertation examines Tokyo’s underground club scene as a performative archive of resistance. Through fieldwork in Shibuya and Shimokitazawa, it studies how fashion, music and movement operate as subcultural graffiti.",
    investigation: "I spent three weeks in Shibuya and Shimokitazawa visiting eight clubs, conducting four formal interviews and twelve informal conversations with DJs, producers, fashion designers and club owners. The most significant conversation was with Dabo, one of the founding figures of Japanese hip hop, at a dinner table with Sade playing in the background.",
    learned: "Tokyo Drift taught me that culture survives through traces: clothing, sound, movement, participation and memory.",
    evidence: ["Tokyo night header", "Club interior", "Shimokitazawa street fashion", "Field note scan", "Interview quote", "Map of locations"]
  },
  "sonic-anti-intimacy": {
    title: "What, in Sonic Terms, Might Characterise the Opposite of Intimacy?",
    type: "research",
    meta: "Original Theory · Oxford Essay · 2025",
    lead: "A theoretical framework for the engineering of disconnection through sound.",
    question: "What does the opposite of intimacy sound like?",
    abstract: "This essay proposes sonic anti-intimacy: the condition in which sound is engineered to simulate closeness while producing detachment.",
    investigation: "If sonic intimacy is touch without the body, then sonic anti-intimacy is presence without connection. From noise-cancelling headphones to Spotify mood playlists and engineered luxury retail acoustics, the essay traces how mediated sound becomes soft control.",
    learned: "Sonic Anti-Intimacy became a lens for understanding designed environments and later informed Bekaa’s strategic framework.",
    evidence: ["Theory diagram", "Sound environment image", "Noise-cancelling reference", "Retail acoustics note", "Framework excerpt", "Bekaa connection"]
  },
  "ear-body": {
    title: "Is Pettman Right? Sonic Intimacy, ASMR, and the Hypersexualised Ear",
    type: "research",
    meta: "Academic Essay · Sound Studies · 2025",
    lead: "On whether the ear can be as choosy as the eye, and what erotic ASMR says about mediated listening.",
    question: "Can the ear look away?",
    abstract: "This essay tests Dominic Pettman’s theory of sonic intimacy against binaural ASMR, erotic audio platforms and algorithmically curated listening.",
    investigation: "There is something uncomfortably erotic about the way a whisper penetrates your ears through headphones. The essay asks whether this is intimacy or its simulation, and whether contemporary listening technology has altered the ear’s supposed passivity.",
    learned: "The essay taught me to treat listening as a designed relationship, not a passive sensory event.",
    evidence: ["Headphones image", "ASMR visual", "Essay extract", "Theory note", "Listening diagram", "Quote card"]
  },
  "echoes": {
    title: "Echoes: The Fragility of the Human Psyche",
    type: "research",
    meta: "Academic Essay · Music & Psychoanalysis · 2024",
    lead: "A Lacanian reading of Pink Floyd's 23-minute Echoes, visualised through Kay Sage, Yves Tanguy and Salvador Dalí.",
    question: "What happens when the structures holding the self together begin to fail?",
    abstract: "A psychoanalytic reading of Pink Floyd’s Echoes as a three-phase journey through the Imaginary, the Real and the Symbolic.",
    investigation: "A single high-pitched ping cuts through silence and frames the piece as a relentless dive into the human psyche. The essay maps the Descent, Chaos and Return through Lacanian theory and Surrealist painting.",
    learned: "Echoes taught me how sound can stage psychological collapse without needing words.",
    evidence: ["Surrealist painting header", "Echoes album reference", "Essay diagram", "Lacan notes", "Painting comparison", "Quote extract"]
  }
};

const cursor = document.querySelector(".cursor");
const cursorLabel = document.querySelector(".cursor-label");
const cursorDot = document.querySelector(".cursor-dot");
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let curX = mouseX;
let curY = mouseY;

window.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  curX += (mouseX - curX) * 0.18;
  curY += (mouseY - curY) * 0.18;
  if (cursor) cursor.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
  if (cursorDot) cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll("[data-cursor]").forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
    cursorLabel.textContent = el.dataset.cursor;
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
    cursorLabel.textContent = "";
  });
});

const loaderLines = document.querySelectorAll(".loader-line");
const loaderMark = document.querySelector(".loader-mark");
const loader = document.getElementById("loader");

setTimeout(() => {
  loaderLines[0].classList.remove("active");
  loaderLines[1].classList.add("active");
}, 1000);

setTimeout(() => {
  loaderLines[1].classList.remove("active");
  loaderMark.classList.add("active");
}, 2100);

setTimeout(() => {
  loader.classList.add("hide");
}, 3300);

const panel = document.getElementById("projectPanel");
const panelContent = document.getElementById("panelContent");
const closeBtn = document.getElementById("panelClose");

function openProject(key) {
  const p = projects[key];
  if (!p) return;
  const galleryClass = p.type === "fashion" ? "gallery-slots fashion" : "gallery-slots";
  const requestButton = p.type === "research" ? `<a class="request-btn" href="mailto:info@zairachrista.com?subject=Request full piece: ${encodeURIComponent(p.title)}">Request full piece</a>` : "";
  panelContent.innerHTML = `
    <article class="project-room ${p.type}">
      <div class="${p.type === "research" ? "project-hero-grid no-visual" : "project-hero-grid"}">
        <div>
          <p class="meta">${p.meta}</p>
          <h2>${p.title}</h2>
          <p class="lead">${p.lead}</p>
          ${requestButton}
        </div>
        ${p.type === "research" ? "" : `<div class="project-visual" aria-label="${p.title} visual placeholder"></div>`}
      </div>

      <section class="project-section">
        <p class="meta">Abstract</p>
        <p>${p.abstract}</p>
      </section>

      <section class="project-section">
        <p class="meta">The Question</p>
        <h3>${p.question}</h3>
      </section>

      <section class="project-section project-two-col">
        <div><p class="meta">The Investigation</p></div>
        <p>${p.investigation}</p>
      </section>

      ${p.type === "research" ? "" : `<section class="project-section">
        <p class="meta">${p.type === "fashion" ? "Look / Image Slots" : "Evidence Slots"}</p>
        <h3>${p.type === "fashion" ? "The clothing carries the argument." : "Replace these with the real work."}</h3>
        <div class="${galleryClass}">
          ${p.evidence.map(item => `<div class="slot">${item}</div>`).join("")}
        </div>
      </section>`}

      <section class="project-section">
        <p class="meta">What I Learned</p>
        <p>${p.learned}</p>
      </section>
    </article>
  `;
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-project]").forEach(el => {
  el.addEventListener("click", () => openProject(el.dataset.project));
});

closeBtn.addEventListener("click", closeProject);
panel.addEventListener("click", e => {
  if (e.target === panel) closeProject();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeProject();
});

const revealEls = document.querySelectorAll(".section, .work-line, .research-grid article, .current-line");
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.08 });
revealEls.forEach(el => io.observe(el));


// Make every word in "The full current" turn gold on hover
document.querySelectorAll(".bio-text p").forEach(p => {
  const walkerText = p.textContent;
  const words = walkerText.split(/(\s+)/);
  p.innerHTML = words.map(w => {
    if (/^\s+$/.test(w)) return w;
    return `<span class="word-hover">${w}</span>`;
  }).join("");
});


// Definition-card hover tooltips for the bio section
const definitionTooltip = document.getElementById("definitionTooltip");
document.querySelectorAll(".def-term").forEach(term => {
  term.addEventListener("mouseenter", () => {
    if (!definitionTooltip) return;
    definitionTooltip.innerHTML = `
      <h4>${term.dataset.title}</h4>
      <p class="pron">${term.dataset.pron}</p>
      <div class="rule"></div>
      <p>${term.dataset.def}</p>
    `;
    definitionTooltip.classList.add("show");
    definitionTooltip.setAttribute("aria-hidden", "false");
  });
  term.addEventListener("mousemove", (e) => {
    if (!definitionTooltip) return;
    const pad = 22;
    const rect = definitionTooltip.getBoundingClientRect();
    let x = e.clientX + pad;
    let y = e.clientY + pad;
    if (x + rect.width > window.innerWidth - 16) x = e.clientX - rect.width - pad;
    if (y + rect.height > window.innerHeight - 16) y = e.clientY - rect.height - pad;
    definitionTooltip.style.left = x + "px";
    definitionTooltip.style.top = y + "px";
  });
  term.addEventListener("mouseleave", () => {
    if (!definitionTooltip) return;
    definitionTooltip.classList.remove("show");
    definitionTooltip.setAttribute("aria-hidden", "true");
  });
});


// Scroll-triggered bio transformation:
// as the bio section passes, all text fades except the central question in gold.
const cleanBioSection = document.querySelector(".clean-bio");
function updateBioQuestionMode() {
  if (!cleanBioSection) return;
  const rect = cleanBioSection.getBoundingClientRect();
  const viewport = window.innerHeight || document.documentElement.clientHeight;

  // Turn on after the reader has moved through the bio, but before leaving it completely.
  const shouldLockQuestion = rect.top < viewport * -0.10 && rect.bottom > viewport * 0.30;

  cleanBioSection.classList.toggle("question-mode", shouldLockQuestion);
}

window.addEventListener("scroll", updateBioQuestionMode, { passive: true });
window.addEventListener("resize", updateBioQuestionMode);
updateBioQuestionMode();


// V16: section entrance choreography
const currentSection = document.querySelector(".swiss-current");
if (currentSection) {
  const currentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        currentSection.classList.add("current-visible");
      }
    });
  }, { threshold: 0.22 });
  currentObserver.observe(currentSection);
}

const workSection = document.querySelector(".work-index");
if (workSection) {
  workSection.classList.add("construct-ready");
  const workObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !workSection.classList.contains("constructed")) {
        workSection.classList.add("constructed");
        workObserver.unobserve(workSection);
      }
    });
  }, {
    threshold: 0.14,
    rootMargin: "0px 0px -12% 0px"
  });
  workObserver.observe(workSection);
}


// V18: repeatable reconstruct/deconstruct on scroll.
// This overrides the earlier one-time behaviour without removing it.
const currentSectionV18 = document.querySelector(".swiss-current");
if (currentSectionV18) {
  const currentRepeatObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      currentSectionV18.classList.toggle("current-visible", entry.isIntersecting);
    });
  }, {
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px"
  });
  currentRepeatObserver.observe(currentSectionV18);
}

const workSectionV18 = document.querySelector(".work-index");
if (workSectionV18) {
  workSectionV18.classList.add("construct-ready");
  const workRepeatObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      workSectionV18.classList.toggle("constructed", entry.isIntersecting);
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -10% 0px"
  });
  workRepeatObserver.observe(workSectionV18);
}
