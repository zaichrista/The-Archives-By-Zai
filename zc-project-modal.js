// ZC Studios project panels. The original works.html URLs remain intact as
// accessible, crawlable fallbacks when JavaScript is unavailable.
(() => {
  const projects = {
    reach: {
      title: "The Reach Brasserie",
      type: "brand",
      meta: "Brand Experience · Implementation Lead · Hospitality · Ongoing",
      lead: "Leading the gradual rollout of a hospitality brand, informed by first-hand experience of running the bar.",
      question: "How can the brand promise carry through from the menu to the service?",
      abstract: "The Reach Brasserie is a London bar and restaurant where I have managed day-to-day bar operations and developed a seasonal cocktail programme. My responsibilities have included service standards, suppliers and staff performance. I now lead the gradual implementation of its brand work, connecting menus, signage, content and the guest journey. The rollout is ongoing.",
      investigation: "Working inside the operation made delivery part of the brief. A cocktail has to be viable to prepare and sell; a menu has to help a guest choose; the identity has to make sense alongside the service. My approach connects these touchpoints instead of treating them as separate design tasks. The brand work covers signage, the menu system, content and photography planning, and the experience from arrival to the table. Implementation is being phased under my lead, with operational requirements informing how the work progresses.",
      learned: "This project demonstrates how I connect brand thinking to implementation. An idea has to survive a busy service. The seasonal cocktail programme is part of my operational experience; the wider brand rollout is still in progress. As implementation develops, a useful evaluation would examine whether guests can navigate the offering, staff can deliver it consistently and the experience gives people a reason to return."
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
      investigation: "The brief I explored was how to make the identity more expressive of the business’s warmth and personality. My proposal moved the identity toward kraft gold, terracotta, stamped packaging cues and a heavier wordmark that could hold signage, paper bags and street-food energy. The project became a study in making the distance between current brand and possible brand legible.",
      learned: "This proposal explored how a visual identity could communicate the warmth of an existing hospitality business. The mockups show a proposed direction, rather than an implemented rebrand or a measured change in customer perception.",
      evidence: [
        { src: "assets/Baba%20G/Bag.jpg", alt: "Baba G branded paper bag mockup", preserveRatio: true },
        { src: "assets/Baba%20G/Wrap%20sleeve.jpg", alt: "Baba G wrap sleeve packaging mockup", preserveRatio: true },
        { src: "assets/Baba%20G/image.jpg", alt: "Baba G brand refresh visual", preserveRatio: true }
      ]
    },
    bekaa: {
      title: "Bekaa",
      type: "brand",
      meta: "Brand Positioning · Independent MA Project · Hospitality Concept · 2026",
      lead: "A Mediterranean-informed listening-bar proposal exploring how shared music and repeat rituals could give a venue a distinctive position.",
      question: "What would give people a reason to return, beyond a good first impression?",
      abstract: "Bekaa is a 2026 academic hospitality strategy project developed during my MA in Cultural and Creative Industries at King’s College London. I proposed a listening bar, cocktail space and cultural venue for South Kensington, bringing music, drinks, visual art and communal ritual into one experience. The project combines cultural and competitor research with positioning, financial planning and operational strategy.<br><br>The central idea is that attachment to a place can build through repeated experiences: a remembered song, a familiar ritual or a reason to return. I call this archival capital. For Bekaa, the framework informed a proposed focus on shared listening and familiarity over time. This is a concept and business proposal, not an operating venue or a tested retention model.",
      investigation: "A visit to Bar Ideal in Athens provided a starting observation: music appeared to connect the room as a shared experience. I used that observation to develop a question for Bekaa: could listening become a central reason to visit, rather than background atmosphere? One visit is a source of inspiration, not proof of customer demand.<br><br>The proposal considered South Kensington and its nearby cultural institutions as a potential context, and explored audiences including artists, students, young professionals and international residents. It compared cocktail bars, listening bars, members’ clubs, gallery cafés and cultural venues to develop a position that brought sound, art, drinks and gathering together. Demand and audience priorities would need validation before launch.<br><br>The resulting direction was a music-first venue built around slowness, intimacy and shared presence. This informed proposed investment priorities for sound and programming, as well as marketing that reveals selected details of the experience. The commercial tension is part of the strategy: longer visits must work alongside spend, capacity and operating costs. Financial planning supports the proposal; it does not establish that those assumptions will hold in practice.",
      learned: "Bekaa shows how I move from an observation to a strategic proposition and then to experience decisions. The output is a proposed brand and business direction, with choices about location, audience, programming and communication.<br><br>The key distinction is between an appealing cultural idea and a viable business. Before launch, I would test which audience values the experience most, what it would pay for and whether the proposed offer can sustain the intended pace of a visit.<br><br>The project sharpened my interest in brands that earn familiarity over time. It also made the remaining research questions explicit: who will return, what will bring them back and what evidence would justify investment?"
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
