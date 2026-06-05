
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
    evidence: [
      { src: "assets/Baba%20G/Bag.png", alt: "Baba G branded paper bag mockup", preserveRatio: true },
      { src: "assets/Baba%20G/Wrap%20sleeve.png", alt: "Baba G wrap sleeve packaging mockup", preserveRatio: true },
      { src: "assets/Baba%20G/image.png", alt: "Baba G brand refresh visual", preserveRatio: true }
    ]
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
    evidence: [
      { src: "assets/Kisses%20from%20Paikyo%20-%20001/Look%201.png", alt: "Kisses from Parikyo look 1 full render", preserveRatio: true },
      { src: "assets/Kisses%20from%20Paikyo%20-%20001/Look%202.png", alt: "Kisses from Parikyo look 2 full render", preserveRatio: true },
      { src: "assets/Kisses%20from%20Paikyo%20-%20001/Look%203.png", alt: "Kisses from Parikyo look 3 full render", preserveRatio: true },
      { src: "assets/Kisses%20from%20Paikyo%20-%20001/Look%204.png", alt: "Kisses from Parikyo look 4 full render", preserveRatio: true }
    ]
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
    evidence: [
      { src: "assets/ss24/ss24-01.jpg", alt: "SS24 runway look with black ruffled sheer detailing" },
      { src: "assets/ss24/ss24-02.jpg", alt: "SS24 runway look with pink satin dress" },
      { src: "assets/ss24/ss24-03.jpg", alt: "SS24 runway look with black satin and sheer polka-dot dress" },
      { src: "assets/ss24/ss24-04.jpg", alt: "SS24 runway look with black one-shoulder ruffle dress" },
      { src: "assets/ss24/ss24-05.jpg", alt: "SS24 runway look with black cross-strap gown" },
      { src: "assets/ss24/ss24-06.jpg", alt: "SS24 runway look with black and blue fringed skirt" },
      { src: "assets/ss24/ss24-07.jpg", alt: "SS24 runway look with yellow satin gown" },
      { src: "assets/ss24/ss24-08.jpg", alt: "SS24 runway look with black structured gathered dress" },
      { src: "assets/ss24/ss24-09.jpg", alt: "SS24 runway look with black sequined gown" },
      { src: "assets/ss24/ss24-10.jpg", alt: "SS24 runway look with pale blue beaded gown" },
      { src: "assets/ss24/ss24-11.jpg", alt: "SS24 runway look with emerald one-shoulder gown" },
      { src: "assets/ss24/ss24-12.jpg", alt: "SS24 runway look with black satin gown and yellow lining" }
    ]
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
    abstract: "Tokyo Drift is a substantial ethnographic study of Tokyo’s underground hip hop and clubbing culture, developed through fieldwork in Shibuya and Shimokitazawa. The project asks how a musical culture rooted in African American struggle, resistance, and expressive freedom became embedded within Tokyo’s nightlife, fashion, and subcultural identity.<br><br>At the centre of the project is a theory of the body as a graffitied wall: a living surface marked by music, clothing, gesture, memory, and affective exchange. Tokyo’s underground becomes a wall in motion, rewritten nightly through basslines, silhouettes, dance, language, and atmosphere.",
    investigation: "The project was built through three weeks of qualitative fieldwork in Tokyo, including club visits, participant observation, formal and semi-structured interviews, informal conversations, fieldnotes, voice memos, and reflective journalling.<br><br>The research focused on Shibuya and Shimokitazawa, with interviews and encounters involving DJs, rappers, producers, designers, and club owners. Figures such as Dabo, Coma-Chi, YESBØWY, Shing02, and Robin Rastenberger offered different entry points into Tokyo’s underground: rap history, DJ practice, fashion design, club architecture, artistic identity, and the politics of belonging.<br><br>The theoretical framework combines sensory ethnography, graffiti theory, affect theory, embodiment, and subcultural capital. Schacter’s theory of graffiti as ornament became the project’s conceptual spine, allowing the club to be read as a canvas and the body as a social artefact of inscription.",
    learned: "Tokyo Drift reveals that Tokyo’s underground club culture is not simply an imported version of American hip hop. It is a living, localised, and constantly rewritten archive of identity.<br><br>The body operates as a cultural surface, tagged by clothes, music, language, race, gender, memory, nostalgia, club architecture, and affective atmosphere. Fashion and sound work together: fashion amplifies sound, sound animates fashion, and movement brings both into the social field.<br><br>The project’s core contribution is its theory of sonic graffiti: the idea that sound, fashion, and movement inscribe identity onto bodies and spaces, creating temporary but powerful archives of resistance, belonging, and self-expression.",
    evidence: ["Tokyo night header", "Club interior", "Shimokitazawa street fashion", "Field note scan", "Interview quote", "Map of locations"]
  },
  "sonic-anti-intimacy": {
    title: "What, in Sonic Terms, Might Characterise the Opposite of Intimacy?",
    type: "research",
    meta: "Original Theory · Oxford Essay · 2025",
    lead: "A theoretical framework for the engineering of disconnection through sound.",
    question: "What does the opposite of intimacy sound like?",
    abstract: "This project investigates the sonic opposite of intimacy, arguing that it is not simply silence, distance, or absence, but an active condition of disconnection produced through sound itself. I propose the concept of sonic anti-intimacy: a mode of sonic mediation that appears to create closeness while actually fostering detachment, isolation, dominance, and social fragmentation.<br><br>If sonic intimacy is a kind of touch without physical contact, sonic anti-intimacy is presence without genuine relation. Through personal audio technologies, Muzak, algorithmic playlists, virtual assistants, and engineered silence, the project examines how sound can be used to organise, discipline, and separate bodies rather than bring them into contact.",
    investigation: "The investigation draws on sound studies, Actor-Network Theory, theories of silence, and critiques of programmed music. It treats sound as an active social force rather than a passive background object.<br><br>The project identifies three mechanisms through which sonic anti-intimacy operates: sonic isolation, where headphones and personal listening technologies privatise shared space; sonic dominance, where background music, alarms, announcements, and virtual assistants regulate behaviour; and sonic detachment, where overexposure to sound produces numbness rather than sensitivity.<br><br>The analysis moves across examples including the Walkman, the iPod, noise-cancelling headphones, Muzak, Spotify-style mood playlists, Siri, Alexa, and Cagean silence to show how modern sonic environments simulate closeness while eroding genuine connection.",
    learned: "The project reveals that sound can disconnect as intensely as it can connect. It can comfort, but it can also discipline. It can create private worlds, but those private worlds can isolate us from social and physical environments.<br><br>Sonic anti-intimacy became a way to connect several cultural objects under one theoretical framework. Headphones, Muzak, virtual assistants, algorithmic playlists, and silence all reveal the same pattern: modern sound often performs intimacy while masking systems of distance, control, and emotional management.",
    evidence: ["Theory diagram", "Sound environment image", "Noise-cancelling reference", "Retail acoustics note", "Framework excerpt", "Bekaa connection"]
  },
  "ear-body": {
    title: "Is Pettman Right? Sonic Intimacy, ASMR, and the Hypersexualised Ear",
    type: "research",
    meta: "Academic Essay · Sound Studies · 2025",
    lead: "On whether the ear can be as choosy as the eye, and what erotic ASMR says about mediated listening.",
    question: "Can the ear look away?",
    abstract: "This project examines Dominic Pettman’s claim that sonic intimacy has particular affordances because of its intangibility, temporality, and because “the ear cannot be as choosy as the eye or the hand.”<br><br>The project agrees that sound possesses unique intimate power, but challenges the idea that the ear is entirely passive or undiscriminating. Through erotic ASMR, headphone listening, microphone technology, and the embodied voice, it argues that contemporary listening practices have made the ear more selective, curated, and technologically mediated than Pettman’s formulation allows.",
    investigation: "The investigation focuses on the relationship between voice, body, fantasy, and technology. Erotic ASMR becomes the central case study because it demonstrates how intimacy can be generated without physical contact.<br><br>The project analyses whispers, breath, pauses, sighs, vocal texture, binaural recording, and headphone intimacy. These sonic details blur the boundary between hearing and touch, allowing the voice to function almost as a substitute body.<br><br>Rather than treating sound as something merely received, the project studies listening as an embodied and chosen practice. ASMR listeners actively select voices, accents, scenarios, genders, intensities, and emotional tones, proving that sonic intimacy is increasingly shaped by preference, desire, and technological control.",
    learned: "The project reveals that sound does not simply enter the ear; it creates atmosphere, proximity, memory, and fantasy. A whisper, breath, or pause can produce sensations that feel almost tactile.<br><br>Technology does not merely transmit intimacy. It transforms it. Headphones, microphones, and streaming platforms reshape the relationship between voice and listener, often making sound feel closer than it would in real life.<br><br>The ear may be biologically open, but culturally and technologically, it has become increasingly selective. Contemporary sonic intimacy is negotiated between body, technology, and desire.",
    evidence: ["Headphones image", "ASMR visual", "Essay extract", "Theory note", "Listening diagram", "Quote card"]
  },
  "echoes": {
    title: "Echoes: The Fragility of the Human Psyche",
    type: "research",
    meta: "Academic Essay · Oxford Essay · Music & Psychoanalysis · 2024",
    lead: "A Lacanian reading of Pink Floyd's 23-minute Echoes, visualised through Kay Sage, Yves Tanguy and Salvador Dalí.",
    question: "What happens when the structures holding the self together begin to fail?",
    abstract: "This project examines Dominic Pettman’s claim that sonic intimacy has particular affordances because of its intangibility, temporality, and because “the ear cannot be as choosy as the eye or the hand.”<br><br>The project agrees that sound possesses unique intimate power, but challenges the idea that the ear is entirely passive or undiscriminating. Through erotic ASMR, headphone listening, microphone technology, and the embodied voice, it argues that contemporary listening practices have made the ear more selective, curated, and technologically mediated than Pettman’s formulation allows.",
    investigation: "The investigation focuses on the relationship between voice, body, fantasy, and technology. Erotic ASMR becomes the central case study because it demonstrates how intimacy can be generated without physical contact.<br><br>The project analyses whispers, breath, pauses, sighs, vocal texture, binaural recording, and headphone intimacy. These sonic details blur the boundary between hearing and touch, allowing the voice to function almost as a substitute body.<br><br>Rather than treating sound as something merely received, the project studies listening as an embodied and chosen practice. ASMR listeners actively select voices, accents, scenarios, genders, intensities, and emotional tones, proving that sonic intimacy is increasingly shaped by preference, desire, and technological control.",
    learned: "The project reveals that sound does not simply enter the ear; it creates atmosphere, proximity, memory, and fantasy. A whisper, breath, or pause can produce sensations that feel almost tactile.<br><br>Technology does not merely transmit intimacy. It transforms it. Headphones, microphones, and streaming platforms reshape the relationship between voice and listener, often making sound feel closer than it would in real life.<br><br>The ear may be biologically open, but culturally and technologically, it has become increasingly selective. Contemporary sonic intimacy is negotiated between body, technology, and desire.",
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
    if (!cursor || !cursorLabel) return;
    cursor.classList.add("active");
    cursorLabel.textContent = el.dataset.cursor;
  });
  el.addEventListener("mouseleave", () => {
    if (!cursor || !cursorLabel) return;
    cursor.classList.remove("active");
    cursorLabel.textContent = "";
  });
});

const loaderLines = document.querySelectorAll(".loader-line");
const loaderMark = document.querySelector(".loader-mark");
const loader = document.getElementById("loader");

setTimeout(() => {
  loaderLines[0]?.classList.remove("active");
  loaderLines[1]?.classList.add("active");
}, 1000);

setTimeout(() => {
  loaderLines[1]?.classList.remove("active");
  loaderMark?.classList.add("active");
}, 2100);

setTimeout(() => {
  loader?.classList.add("hide");
}, 3300);

const heroHeading = document.querySelector(".hero h1");
if (heroHeading) {
  const heroLineElements = Array.from(heroHeading.querySelectorAll("span"));
  const heroLineText = heroLineElements.map(line => line.textContent.trim());
  const typeCursor = document.createElement("span");
  typeCursor.className = "hero-type-cursor";
  typeCursor.setAttribute("aria-hidden", "true");
  typeCursor.textContent = "|";

  heroLineElements.forEach(line => {
    line.textContent = "";
  });
  heroLineElements[0]?.appendChild(typeCursor);
  heroHeading.classList.add("is-typing");

  function renderHeroLine(lineIndex, text) {
    const line = heroLineElements[lineIndex];
    if (!line) return;
    line.textContent = text;
    line.appendChild(typeCursor);
  }

  setTimeout(() => {
    let lineIndex = 0;
    let charIndex = 0;

    const typeHeroCharacter = () => {
      if (lineIndex >= heroLineText.length) {
        heroHeading.classList.remove("is-typing");
        heroHeading.classList.add("typed-once");
        return;
      }

      renderHeroLine(lineIndex, heroLineText[lineIndex].slice(0, charIndex + 1));
      charIndex += 1;

      if (charIndex >= heroLineText[lineIndex].length) {
        lineIndex += 1;
        charIndex = 0;
        if (lineIndex < heroLineElements.length) {
          heroLineElements[lineIndex].appendChild(typeCursor);
        }
      }

      const nextDelay = lineIndex < heroLineText.length && charIndex === 0 ? 180 : 34;
      setTimeout(typeHeroCharacter, nextDelay);
    };

    typeHeroCharacter();
  }, 3450);
}

const heroSlides = Array.from(document.querySelectorAll(".hero-slide"));
if (heroSlides.length) {
  heroSlides.forEach(slide => {
    const preload = new Image();
    preload.decoding = "async";
    preload.src = slide.currentSrc || slide.src;
  });

  const shuffledHeroSlides = [...heroSlides];
  for (let i = shuffledHeroSlides.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledHeroSlides[i], shuffledHeroSlides[j]] = [shuffledHeroSlides[j], shuffledHeroSlides[i]];
  }

  let heroSlideIndex = 0;

  function showHeroSlide(index) {
    heroSlides.forEach(slide => slide.classList.remove("is-active"));
    const slide = shuffledHeroSlides[index % shuffledHeroSlides.length];
    if (!slide) return;
    slide.classList.add("is-active");
  }

  showHeroSlide(heroSlideIndex);
  setInterval(() => {
    heroSlideIndex = (heroSlideIndex + 1) % shuffledHeroSlides.length;
    showHeroSlide(heroSlideIndex);
  }, 500);
}

const panel = document.getElementById("projectPanel");
const panelContent = document.getElementById("panelContent");
const closeBtn = document.getElementById("panelClose");

function renderEvidenceItem(item) {
  if (item && typeof item === "object" && item.src) {
    const ratioClass = item.preserveRatio ? " preserve-ratio" : "";
    return `<figure class="slot image-slot${ratioClass}"><img src="${item.src}" alt="${item.alt || ""}" loading="lazy"></figure>`;
  }

  return `<div class="slot">${item}</div>`;
}

function openProject(key) {
  const p = projects[key];
  if (!p || !panel || !panelContent) return;
  const galleryClass = p.type === "fashion" ? "gallery-slots fashion" : "gallery-slots";
  const requestButton = p.type === "research" ? `<a class="request-btn" href="mailto:info@zairachrista.com?subject=Request full piece: ${encodeURIComponent(p.title)}">Request full piece</a>` : "";
  const abstractHeading = p.type === "research" ? "The Premise" : "Abstract";
  const investigationHeading = p.type === "research" ? "The Method" : "The Investigation";
  const learnedHeading = p.type === "research" ? "The Discovery" : "What I Learned";
  panelContent.innerHTML = `
    <article class="project-room ${p.type}">
      <div class="project-hero-grid no-visual">
        <div>
          <p class="meta">${p.meta}</p>
          <h2>${p.title}</h2>
          <p class="lead">${p.lead}</p>
          ${requestButton}
        </div>
      </div>

      <section class="project-section">
        <p class="meta">${abstractHeading}</p>
        <p>${p.abstract}</p>
      </section>

      <section class="project-section">
        <p class="meta">The Question</p>
        <h3>${p.question}</h3>
      </section>

      <section class="project-section project-two-col">
        <div><p class="meta">${investigationHeading}</p></div>
        <p>${p.investigation}</p>
      </section>

      ${p.type === "research" ? "" : `<section class="project-section">
        <p class="meta">${p.type === "fashion" ? "Look / Image Slots" : "Evidence Slots"}</p>
        <h3>${p.type === "fashion" ? "The clothing carries the argument." : "Replace these with the real work."}</h3>
        <div class="${galleryClass}">
          ${p.evidence.map(renderEvidenceItem).join("")}
        </div>
      </section>`}

      <section class="project-section">
        <p class="meta">${learnedHeading}</p>
        <p>${p.learned}</p>
      </section>
    </article>
  `;
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  if (!panel) return;
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-project]").forEach(el => {
  el.addEventListener("click", () => openProject(el.dataset.project));
});

closeBtn?.addEventListener("click", closeProject);
panel?.addEventListener("click", e => {
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

const footerWordmark = document.querySelector(".footer-wordmark");
function fitFooterWordmark() {
  if (!footerWordmark) return;

  const availableWidth = window.innerWidth - (window.innerWidth <= 760 ? 18 : 24);
  const probe = footerWordmark.cloneNode(true);
  probe.style.position = "fixed";
  probe.style.left = "-9999px";
  probe.style.top = "0";
  probe.style.width = "auto";
  probe.style.padding = "0";
  probe.style.margin = "0";
  probe.style.transform = "none";
  probe.style.fontSize = "100px";
  probe.style.visibility = "hidden";
  probe.style.whiteSpace = "nowrap";
  document.body.appendChild(probe);

  const measuredWidth = probe.getBoundingClientRect().width || 1;
  document.body.removeChild(probe);

  const fittedSize = Math.max(58, Math.min(900, (availableWidth / measuredWidth) * 100));
  footerWordmark.style.setProperty("--footer-wordmark-size", `${fittedSize}px`);
}

let footerWordmarkFrame = null;
function scheduleFooterWordmarkFit() {
  if (footerWordmarkFrame) cancelAnimationFrame(footerWordmarkFrame);
  footerWordmarkFrame = requestAnimationFrame(() => {
    footerWordmarkFrame = null;
    fitFooterWordmark();
  });
}

window.addEventListener("resize", scheduleFooterWordmarkFit);
window.addEventListener("load", scheduleFooterWordmarkFit);
fitFooterWordmark();


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
