// ZC Studios project panels. The original works.html URLs remain intact as
// accessible, crawlable fallbacks when JavaScript is unavailable.
(() => {
  const projects = {
    reach: {
      title: "The Reach Brasserie",
      type: "brand",
      meta: "Brand Recovery · Creative Direction · Hospitality · 2025–2026",
      lead: "Brand recovery carried out from inside the room: operations, menus, signage, content, and the guest journey.",
      question: "What does brand recovery look like when you're doing it from inside the room, not from a deck?",
      abstract: "The Reach Brasserie is a London bar and restaurant where I ran the room and, without ever calling it that officially, ended up rebuilding the brand underneath it. Day-to-day bar management, service standards, supplier relationships, and staff performance sat alongside a longer piece of work: diagnosing what the brand wasn't doing for itself, then rebuilding the pieces that were missing, from signage and menu design to the customer's actual journey through the space.",
      investigation: "Most brand recovery work happens at a distance: an agency visits, diagnoses, leaves a document, and someone else has to live with the recommendations. This was the opposite. I was already behind the bar, so the diagnosis and the delivery happened in the same place, often the same week. That meant developing a seasonal cocktail programme that had to work commercially, not just conceptually, alongside a wider brand effort: signage that actually matched how the space felt, a redesigned menu system, content and photography planning, and a closer look at what a guest experiences from the door to the table.",
      learned: "I learned that brand recovery done from inside the operation is a different discipline to brand strategy done from outside it. You cannot recommend something you are not also prepared to run at 11pm on a Friday. Working this way taught me to think about brand decisions the way an operator has to: not just whether an idea is right, but whether it survives a busy service."
    },
    mandaloun: {
      title: "Mandaloun",
      type: "brand",
      meta: "Brand Culture & Content · Hospitality · 2020–2026",
      lead: "Six years of content production and photoshoot support for a Lebanese hospitality brand in Westfield London.",
      question: "What does a brand need from someone who shows up for it repeatedly, not just once?",
      abstract: "Mandaloun is a Lebanese hospitality brand in Westfield London. Over six years I supported its content production and photoshoots, working repeatedly with the same brand long enough to understand how a hospitality identity holds together, and where it needs tending, over time rather than in a single campaign.",
      investigation: "Most creative relationships are short: a shoot, a campaign, a handoff. Six years with Mandaloun meant something different, learning the brand's actual rhythms, not just its visual identity in the abstract, and producing content that had to keep making sense season after season rather than working once and ageing badly.",
      learned: "I learned that consistency is its own creative skill, separate from having a good idea once. A brand's photography and content have to keep being recognisably itself while still feeling current, and that only gets harder to do well the longer the relationship runs, not easier."
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
        { src: "assets/Baba%20G/Bag.jpg", alt: "Baba G branded paper bag mockup", preserveRatio: true },
        { src: "assets/Baba%20G/Wrap%20sleeve.jpg", alt: "Baba G wrap sleeve packaging mockup", preserveRatio: true },
        { src: "assets/Baba%20G/image.jpg", alt: "Baba G brand refresh visual", preserveRatio: true }
      ]
    },
    bekaa: {
      title: "Bekaa",
      type: "brand",
      meta: "Brand Strategy · Cultural Concept · Hospitality · 2025",
      lead: "A Mediterranean-informed hospitality concept for West London, built on an original theory of cultural authority.",
      question: "What makes a venue memorable?",
      abstract: "Bekaa is a hospitality innovation strategy responding to the flattening of London’s nightlife. Contemporary bars are increasingly shaped by aesthetic repetition, social media sameness, and commercially standardised atmospheres that photograph well but rarely stay with you. Bekaa proposes a different model: a Mediterranean-informed listening bar, cocktail space, and cultural venue where music, drink, visual art, and communal ritual are experienced together.<br><br>Inspired by Lebanon’s Bekaa Valley, the project treats hospitality as cultural infrastructure. At its centre is my concept of archival capital: the value gained through the accumulation of visible and affective traces over time. A venue becomes meaningful not through instant spectacle, but through returning customers, worn surfaces, remembered songs, repeated rituals, and the emotional attachment people form with a place.",
      investigation: "The project began with a problem in London’s nightlife: too many spaces feel interchangeable, driven by visual marketability rather than cultural depth. A visit to Bar Ideal in Athens became a key reference point, revealing how music could connect a room rather than simply decorate it. From this, Bekaa developed into a music-first hospitality concept built around slowness, intimacy, and shared presence.<br><br>The strategy positioned Bekaa in South Kensington, an area rich in cultural institutions but lacking a strong nightlife identity. Its proximity to the V&A, Royal College of Art, Royal College of Music, Royal Albert Hall, Chelsea, and Notting Hill made it an ideal site for a venue aimed at culturally literate Londoners, artists, students, young professionals, and international residents.<br><br>The investigation combined market analysis, competitor research, brand positioning, financial planning, and operational strategy. Bekaa was differentiated from cocktail bars, listening bars, members’ clubs, gallery cafés, and cultural venues by treating music, art, mixology, and communal ritual as equals. The marketing strategy was built around calibrated revelation: revealing enough to create intrigue, but withholding enough to preserve mystery.",
      learned: "Through Bekaa, I learned that hospitality is not only about service, drinks, or interiors. It is about orchestrating emotional conditions. A strong venue gives people a rhythm, a corner, a sound, a ritual, and a reason to return.<br><br>I also learned how to turn theory into a business model. Archival capital became a way to think about customer retention, cultural authority, programming, brand loyalty, and the emotional ageing of space. The archive stopped being static and became commercial, sensory, and alive.<br><br>Most importantly, Bekaa taught me that innovation can be quiet. In a market obsessed with speed and visibility, slowness can become strategy. A bar can become a listening room. A cocktail can become a ritual. A venue can become powerful when it is remembered before it is explained."
    }
  };

  const panel = document.getElementById("projectPanel");
  const panelContent = document.getElementById("panelContent");
  const closeButton = document.getElementById("panelClose");
  const triggers = [...document.querySelectorAll("[data-project]")];
  let lastTrigger = null;

  if (!panel || !panelContent || !closeButton) return;

  function renderEvidenceItem(item) {
    const ratioClass = item.preserveRatio ? " preserve-ratio" : "";
    return `<figure class="slot image-slot${ratioClass}"><img src="${item.src}" alt="${item.alt}" loading="lazy"></figure>`;
  }

  function renderProject(project) {
    const evidence = project.evidence?.length
      ? `<section class="project-section">
          <p class="meta">The evidence</p>
          <div class="gallery-slots">${project.evidence.map(renderEvidenceItem).join("")}</div>
        </section>`
      : "";

    return `<article class="project-room ${project.type}">
      <div class="project-hero-grid no-visual">
        <div>
          <p class="meta">${project.meta}</p>
          <h2>${project.title}</h2>
          <p class="lead">${project.lead}</p>
        </div>
      </div>
      <section class="project-section">
        <p class="meta">Abstract</p>
        <p>${project.abstract}</p>
      </section>
      <section class="project-section">
        <p class="meta">The Question</p>
        <h3>${project.question}</h3>
      </section>
      <section class="project-section project-two-col">
        <div><p class="meta">The Investigation</p></div>
        <p>${project.investigation}</p>
      </section>
      ${evidence}
      <section class="project-section">
        <p class="meta">What I Learned</p>
        <p>${project.learned}</p>
      </section>
    </article>`;
  }

  function openProject(key, trigger) {
    const project = projects[key];
    if (!project) return false;

    lastTrigger = trigger;
    panelContent.innerHTML = renderProject(project);
    panelContent.scrollTop = 0;
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-label", project.title);
    document.body.style.overflow = "hidden";
    closeButton.focus({ preventScroll: true });
    return true;
  }

  function closeProject() {
    if (!panel.classList.contains("open")) return;
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lastTrigger?.focus({ preventScroll: true });
    lastTrigger = null;
  }

  triggers.forEach(trigger => {
    trigger.addEventListener("click", event => {
      if (openProject(trigger.dataset.project, trigger)) event.preventDefault();
    });
  });

  closeButton.addEventListener("click", closeProject);
  panel.addEventListener("click", event => {
    if (event.target === panel) closeProject();
  });

  document.addEventListener("keydown", event => {
    if (!panel.classList.contains("open")) return;
    if (event.key === "Escape") closeProject();
    if (event.key !== "Tab") return;

    const focusable = [...panel.querySelectorAll("button, a[href], [tabindex]:not([tabindex='-1'])")]
      .filter(element => !element.hasAttribute("disabled"));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();
