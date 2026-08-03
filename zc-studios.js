if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

if (window.location.hash) {
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
}

function syncPortfolioHeaderHeight() {
  const portfolioHeader = document.querySelector(".portfolio-header");
  if (!portfolioHeader) return;
  const renderedHeight = Math.ceil(portfolioHeader.getBoundingClientRect().height);
  document.documentElement.style.setProperty("--portfolio-header-height", `${renderedHeight}px`);
}

syncPortfolioHeaderHeight();
window.addEventListener("resize", syncPortfolioHeaderHeight);
window.addEventListener("load", syncPortfolioHeaderHeight);
if ("ResizeObserver" in window) {
  new ResizeObserver(syncPortfolioHeaderHeight).observe(document.querySelector(".portfolio-header"));
}

function resetPageScroll() {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  root.scrollTop = 0;
  document.body.scrollTop = 0;
  root.style.scrollBehavior = previousScrollBehavior;
}

resetPageScroll();
document.addEventListener("DOMContentLoaded", resetPageScroll);
window.addEventListener("load", resetPageScroll);
window.addEventListener("pageshow", () => {
  resetPageScroll();
  window.requestAnimationFrame(resetPageScroll);
  window.setTimeout(resetPageScroll, 100);
});
window.addEventListener("pagehide", resetPageScroll);

const zcsLoader = document.querySelector("#zcsLoader");
const zcsLoaderTrack = document.querySelector("#zcsLoaderTrack");
const zcsLoaderSegments = document.querySelector("#zcsLoaderSegments");
const zcsLoaderStatus = document.querySelector("#zcsLoaderStatus");
const zcsLoaderPercent = document.querySelector("#zcsLoaderPercent");
const reduceLoaderMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const zcsLoaderMinimum = reduceLoaderMotion ? 250 : 2600;
const zcsLoaderStartedAt = window.performance.now();
let zcsPageReady = document.readyState === "complete";
let zcsLoaderProgress = 0;
const zcsLoaderSegmentCount = 24;
const zcsLoaderSegmentNodes = Array.from({ length: zcsLoaderSegmentCount }, () => document.createElement("span"));

if (zcsLoaderSegments) {
  zcsLoaderSegments.replaceChildren(...zcsLoaderSegmentNodes);
}

window.addEventListener("load", () => {
  zcsPageReady = true;
}, { once: true });

function renderZcsLoaderProgress(progress) {
  const roundedProgress = Math.round(progress);
  const activeSegments = Math.ceil((progress / 100) * zcsLoaderSegmentCount);
  zcsLoaderSegmentNodes.forEach((segment, index) => segment.classList.toggle("is-active", index < activeSegments));
  zcsLoaderTrack.style.setProperty("--loader-progress", `${progress}%`);
  zcsLoaderTrack.setAttribute("aria-valuenow", String(roundedProgress));
  zcsLoaderPercent.textContent = `${String(roundedProgress).padStart(3, "0")}%`;
  zcsLoaderStatus.textContent = progress < 22
    ? "MAPPING_WORLD"
    : progress < 48
      ? "SYNCING_AGENTS"
      : progress < 74
        ? "RUNNING_GATES"
        : progress < 100
          ? "MAKING_SENSE"
          : "SYSTEM_READY";
}

function runZcsLoader(now) {
  const elapsed = now - zcsLoaderStartedAt;
  const timedProgress = Math.min(92, (elapsed / zcsLoaderMinimum) * 92);
  zcsLoaderProgress = Math.max(zcsLoaderProgress, timedProgress);

  if (zcsPageReady && elapsed >= zcsLoaderMinimum) {
    zcsLoaderProgress = 100;
  }

  renderZcsLoaderProgress(zcsLoaderProgress);

  if (zcsLoaderProgress < 100) {
    window.requestAnimationFrame(runZcsLoader);
    return;
  }

  window.setTimeout(() => {
    zcsLoader.classList.add("is-hidden");
    document.body.classList.remove("zcs-loading");
    resetPageScroll();
  }, reduceLoaderMotion ? 0 : 450);
}

if (zcsLoader && zcsLoaderTrack && zcsLoaderSegments && zcsLoaderStatus && zcsLoaderPercent) {
  window.requestAnimationFrame(runZcsLoader);
} else {
  document.body.classList.remove("zcs-loading");
}

const agents = [
  {name:"Camille", role:"Pre-Onboarding Agent", type:"STAGE_AGENT", when:"Before any engagement exists", output:"Pre-Onboarding Brief", handoff:"Zaira / Inès", detail:"Runs reconnaissance before Zaira enters a discovery call: public audit, competitor scan, visible weaknesses, and the best opening question."},
  {name:"Inès", role:"Research Agent", type:"STAGE_AGENT", when:"Start of every engagement", output:"Research Report + Theory Evidence Log", handoff:"Elian", detail:"Builds the evidence base. Separates evidence, inference, and recommendation with confidence labels."},
  {name:"Elian", role:"Theory Calibration Agent", type:"DIAGNOSTIC_LAYER", when:"After research, before creative work", output:"Theory Calibration + Downstream Activation Brief", handoff:"Valentina / downstream agents", detail:"Diagnoses what the brand really is beneath the surface using cultural, affective, archival, and network analysis."},
  {name:"Valentina", role:"Brand Strategist", type:"STAGE_AGENT", when:"After theory calibration", output:"Brand Strategy Platform", handoff:"Odette", detail:"Converts research and theory into positioning, proof, emotional territory, messaging pillars, tone, and strategic sacrifices."},
  {name:"Odette", role:"Visual Identity Brief Agent", type:"STAGE_AGENT", when:"After brand strategy approval", output:"Visual Identity Direction Brief", handoff:"Lucia", detail:"Creates the strategic brief for design: visual world, palette logic, typography direction, imagery, layout, logo constraints, references, and do-not list."},
  {name:"Lucia", role:"Customer Journey Agent", type:"STAGE_AGENT", when:"After visual identity", output:"Customer Journey Map", handoff:"Sebastian", detail:"Maps discovery, first impression, consideration, conversion, first experience, return, and advocacy with friction fixes."},
  {name:"Sebastian", role:"Website Strategist", type:"STAGE_AGENT", when:"After customer journey", output:"Website Strategy Brief", handoff:"Sienna", detail:"Defines site hierarchy, page jobs, CTA architecture, copy direction, SEO logic, mobile considerations, and conversion logic."},
  {name:"Sienna", role:"Content Strategist", type:"STAGE_AGENT", when:"After website strategy", output:"Content Direction System", handoff:"Clara", detail:"Builds the governing system for what the brand says, shows, repeats, refuses, and measures across channels."},
  {name:"Clara", role:"Case Study Agent", type:"STAGE_AGENT", when:"At project completion", output:"Case Study", handoff:"Honorine / Zaira", detail:"Documents the starting state, decisions, reasoning, deliverables, and outcomes as institutional memory and business development proof."},
  {name:"Margaux", role:"Quality Control Agent", type:"QUALITY_GATE", when:"Between every stage", output:"Gate Pass / Revision Flag", handoff:"All agents", detail:"Checks that work is alive, specific, culturally intelligent, commercially useful, emotionally resonant, evidence-led, and non-generic."},
  {name:"Angelica", role:"Secretary / Studio Right Hand", type:"CLIENT_COMMUNICATION", when:"Throughout the engagement", output:"Client messages + scheduling + approvals", handoff:"Client / Zaira", detail:"Maintains one studio voice. No other agent writes directly to the client."},
  {name:"Honorine", role:"Client Deliverables Architect", type:"PACKAGING_LAYER", when:"Pre-engagement and post-production", output:"Proposal, agreement, welcome pack, final deliverables", handoff:"Client via Angelica", detail:"Turns internal strategy into polished client-facing material without inventing missing strategy."},
  {name:"Caius", role:"Benchmark Intelligence Architect", type:"INTELLIGENCE_LAYER", when:"Alongside the entire studio", output:"Benchmark Intelligence Bank + Cards", handoff:"All agents", detail:"Studies high-performing brands, extracts transferable principles, and blocks copying risk."}
];

const phases = [
  {phase:"00", title:"Pre-Onboarding", agent:"Camille", output:"Pre-Onboarding Brief", happens:"Public intelligence scan before a client call.", matters:"Zaira enters the room with evidence, not vibes.", next:"Inès"},
  {phase:"01", title:"Research", agent:"Inès", output:"Research Report", happens:"Brand audit, customer language, competitors, friction, research gaps.", matters:"The entire engagement has an evidence base.", next:"Elian"},
  {phase:"02", title:"Theory Calibration", agent:"Elian", output:"Theory Calibration + Activation Brief", happens:"The brand is diagnosed through cultural, affective, archival, and network logic.", matters:"This is the layer most studios skip.", next:"Valentina"},
  {phase:"03", title:"Brand Strategy", agent:"Valentina", output:"Brand Strategy Platform", happens:"Positioning, proof, emotional territory, messaging, tone, and do/do-not logic.", matters:"The brand becomes strategically governed.", next:"Odette"},
  {phase:"04", title:"Visual Identity Direction", agent:"Odette", output:"Visual Identity Direction Brief", happens:"Designer-facing brief for colour, typography, imagery, layout, logo, references, and refusals.", matters:"Design begins from strategy, not taste alone.", next:"Lucia"},
  {phase:"05", title:"Customer Journey", agent:"Lucia", output:"Customer Journey Map", happens:"Discovery, first impression, consideration, conversion, return, and advocacy are mapped.", matters:"The brand becomes an experience.", next:"Sebastian"},
  {phase:"06", title:"Website Strategy", agent:"Sebastian", output:"Website Strategy Brief", happens:"Website structure, page jobs, CTA sequence, copy logic, SEO, and conversion friction.", matters:"The website becomes a commercial pathway.", next:"Sienna"},
  {phase:"07", title:"Content Strategy", agent:"Sienna", output:"Content Direction System", happens:"Content pillars, formats, platform behaviour, voice application, refusals, performance logic.", matters:"Communication becomes repeatable.", next:"Clara"},
  {phase:"08", title:"Case Study", agent:"Clara", output:"Case Study", happens:"The full engagement becomes proof and institutional memory.", matters:"ZCS turns work into business development capital.", next:"Honorine"}
];

const metrics = {
  coherence:"Every element agrees with the next: positioning, world, voice, visual direction, journey, website, and content.",
  desirability:"The brand becomes emotionally and culturally meaningful, not just visually attractive.",
  commercial:"The brand world supports trust, conversion, retention, advocacy, and founder confidence."
};
const coreReadouts = {
  founder:"Zaira is the creative director, lead strategist, and final decision-maker. The system supports her judgement; it does not replace it.",
  agents:"13 specialist agents run defined jobs in a fixed sequence. Each output becomes another agent’s input.",
  gates:"Margaux sits between every stage. No output moves downstream without a quality pass.",
  bank:"Caius maintains benchmark intelligence: principles from excellent brands, never surface copying.",
  delivery:"Honorine converts internal strategy into polished client-facing materials while flagging gaps instead of inventing them."
};
const diagnostic = {
  "Archival Capital":"Does the brand hold memory value? Do customers return through ritual, familiarity, or accumulated meaning?",
  "Cultural Capital":"What taste signals does the brand emit, and what kind of status or literacy does it reward?",
  "Subcultural Capital":"Which niche codes, communities, and insider rituals make the brand feel like it belongs to a world?",
  "Affect Map":"How does the brand make people feel in their own words? What is the emotional texture?",
  "Cultural Specificity":"Are references earned and situated, or borrowed and generic?",
  "Network Analysis":"What people, objects, spaces, rituals, and platforms actually constitute the brand’s world?",
  "Ritual Value":"What repeated behaviours can the brand intensify until they become recognisable?",
  "Memory Value":"Which moments, symbols, phrases, and gestures make the brand easier to remember?",
  "Belonging / Exclusion":"Who is welcomed, who is repelled, and why does that boundary matter?",
  "Emotional Texture":"The exact charge of the brand: not simply premium, happy, cool, or elegant."
};
const benchmarks = ["Rhode", "Aesop", "Dishoom", "Byredo", "Le Labo", "Skims", "Jacquemus", "Gail’s", "Glossier", "Blank Street", "Victoria’s Secret", "The Body Shop", "Superdry", "Farm Girl"];
const gates = ["Research → Theory Calibration", "Theory Calibration → Brand Strategy", "Brand Strategy → Visual Identity", "Visual Identity → Customer Journey", "Customer Journey → Website Strategy", "Website Strategy → Content Strategy", "Content Strategy → Case Study", "Final whole-project gate"];
const standards = ["Alive", "Specific", "Culturally intelligent", "Commercially useful", "Emotionally resonant", "Evidence-led", "Made with care", "Not generic"];
const modes = [
  ["Mode A", "Build from scratch"], ["Mode B", "Repair and reposition"], ["Mode C", "Study and benchmark"], ["Mode D", "Optimise at scale"], ["Mode E", "Reject or flag"]
];
const maturity = {
  0:"LEVEL_0 // Pre-brand. No strategic foundation yet. Needs offer logic, audience hypotheses, and proof before polish.",
  1:"LEVEL_1 // Raw founder instinct exists, but the brand cannot yet explain itself clearly.",
  2:"LEVEL_2 // Early signals and taste are visible, but execution is scattered.",
  3:"LEVEL_3 // Some coherence exists. The brand needs structure before scaling communication.",
  4:"LEVEL_4 // Emerging brand with instinct but incoherent execution. Rhode, Skims, and Farm Girl sit here.",
  5:"LEVEL_5 // Stronger identity and audience pull, but the system still relies too much on intuition.",
  6:"LEVEL_6 // Sophisticated brand with cultural depth. Aesop and Byredo sit here.",
  7:"LEVEL_7 // Clear world, strong codes, and repeatable audience meaning.",
  8:"LEVEL_8 // Highly mature brand with owned rituals, strong trust signals, and recognisable infrastructure.",
  9:"LEVEL_9 // Near-institutional. Gail’s sits here: trusted, embedded, repeated, culturally present.",
  10:"LEVEL_10 // Category-defining. The brand becomes a reference point competitors organise around."
};
const deliverables = [
  ["Research Report", "Full evidence base with competitor analysis and customer language.", "Strategy"],
  ["Theory Calibration Document", "The diagnostic layer beneath the strategy.", "Strategy"],
  ["Brand Strategy Platform", "Positioning, proof, emotional territory, messaging, and tone of voice.", "Strategy"],
  ["Visual Identity Direction Brief", "Strategic brief for a designer — not a design.", "Experience"],
  ["Customer Journey Map", "Full experience map with friction points and fixes.", "Experience"],
  ["Website Strategy Brief", "Structure, hierarchy, messaging, and conversion logic.", "Website"],
  ["Content Direction System", "Governing logic for everything the brand communicates.", "Content"],
  ["Implementation Roadmap", "What to do first, who to brief, and in what order.", "Delivery"],
  ["Client Proposal, Agreement, and Welcome Pack", "Pre-engagement professional materials.", "Operations"],
  ["Final Completion Report", "What was built, why, and what comes next.", "Delivery"]
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
let currentAgentType = "ALL";
let currentDeliverableFilter = "ALL";
let activeAgentIndex = 0;
let activePhase = 0;
let workflowTimer = null;
let workflowRunning = false;
let workflowCompleted = false;

document.body.dataset.view = "client";

function renderAgentFilters(){
  const types = ["ALL", ...new Set(agents.map(a => a.type))];
  $("#agentFilters").innerHTML = types.map(t => `<button class="${t===currentAgentType?'active':''}" data-type="${t}" aria-pressed="${t===currentAgentType}">${t}</button>`).join("");
}
function renderAgents(){
  const q = $("#agentSearch")?.value?.toLowerCase() || "";
  const visible = agents.filter(a => (currentAgentType === "ALL" || a.type === currentAgentType) && `${a.name} ${a.role} ${a.type}`.toLowerCase().includes(q));
  if (activeAgentIndex !== null && !visible.includes(agents[activeAgentIndex])) activeAgentIndex = null;
  $("#agentGrid").innerHTML = visible.map((a) => {
    const index = agents.indexOf(a);
    return `<button class="agent-card ${index===activeAgentIndex?'active':''}" data-agent="${index}" aria-pressed="${index===activeAgentIndex}"><span>${String(index+1).padStart(2,"0")} // ${a.type}</span><strong>${a.name}</strong><small>${a.role}</small></button>`;
  }).join("");
  showAgent(activeAgentIndex);
}
function showAgent(index){
  activeAgentIndex = index;
  if (index === null) {
    $$(".agent-card").forEach(c => { c.classList.remove("active"); c.setAttribute("aria-pressed", "false"); });
    $("#agentPanel").innerHTML = `<p class="tag">AGENT_INSPECTOR</p><h3>Select an agent.</h3><p>Choose any specialist to inspect their role, output, and handoff. Select the same agent again to reset.</p>`;
    return;
  }
  const a = agents[index];
  $$(".agent-card").forEach(c => { const isActive = Number(c.dataset.agent) === index; c.classList.toggle("active", isActive); c.setAttribute("aria-pressed", String(isActive)); });
  $("#agentPanel").innerHTML = `<p class="tag">${a.type}</p><h3>${a.name}</h3><p>${a.role}</p><dl><div><dt>WHEN_THEY_RUN</dt><dd>${a.when}</dd></div><div><dt>OUTPUT</dt><dd>${a.output}</dd></div><div><dt>HANDOFF</dt><dd>${a.handoff}</dd></div></dl><p>${a.detail}</p>`;
}
function renderPhases(){
  $("#phaseRail").innerHTML = phases.map((p,i)=>`<button class="phase-pill ${i===activePhase?'active':''}" data-phase="${i}" aria-pressed="${i===activePhase}"><span>PHASE_${p.phase} // ${p.agent}</span>${p.title}</button>`).join("");
  showPhase(activePhase);
}
function showPhase(i){
  activePhase = i;
  if (i === null) {
    $$(".phase-pill").forEach(b => { b.classList.remove("active"); b.setAttribute("aria-pressed", "false"); });
    $("#phaseInspector").innerHTML = `<p class="tag">WORKFLOW_INSPECTOR</p><h3>Select a phase.</h3><p>Choose a workflow phase to inspect its output, handoff, and quality gate.</p>`;
    return;
  }
  const p = phases[i];
  $$(".phase-pill").forEach((b,idx)=>{ const isActive = idx===i; b.classList.toggle("active", isActive); b.setAttribute("aria-pressed", String(isActive)); });
  $("#phaseInspector").innerHTML = `<p class="tag">PHASE_${p.phase} // AGENT_${p.agent.toUpperCase()}</p><h3>${p.title}</h3><p>${p.happens}</p><div class="meta-grid"><div><span>OUTPUT</span>${p.output}</div><div><span>NEXT_AGENT</span>${p.next}</div><div><span>WHY_IT_MATTERS</span>${p.matters}</div><div><span>MARGAUX_GATE</span>Required before ${p.next} receives the output.</div></div><p class="system-line">Every phase must create usable input for the next phase. If it does not, the system pauses.</p>`;
}
function runWorkflow(){
  if (workflowRunning || workflowCompleted) {
    resetWorkflow();
    return;
  }
  clearInterval(workflowTimer); let i = 0;
  workflowRunning = true;
  $("#runWorkflow").textContent = "STOP_AND_RESET";
  $$(".phase-pill").forEach(b => b.classList.remove("complete", "gated"));
  showPhase(0);
  workflowTimer = setInterval(()=>{
    $$(".phase-pill").forEach((b,idx)=>{ if(idx < i) b.classList.add("complete"); b.classList.toggle("gated", idx === i-1 && i>0); });
    showPhase(Math.min(i, phases.length-1));
    i++;
    if(i > phases.length){
      clearInterval(workflowTimer);
      workflowTimer = null;
      workflowRunning = false;
      workflowCompleted = true;
      $("#runWorkflow").textContent = "RESET_SEQUENCE";
    }
  }, 850);
}
function resetWorkflow(){
  clearInterval(workflowTimer);
  workflowTimer = null;
  workflowRunning = false;
  workflowCompleted = false;
  activePhase = 0;
  $("#runWorkflow").textContent = "RUN_SIMULATION";
  renderPhases();
}
function renderQC(){
  $("#gateChecks").innerHTML = gates.map((g,i)=>`<button data-gate="${i}" aria-pressed="false"><span>GATE_${String(i+1).padStart(2,"0")}</span>${g}</button>`).join("");
  $("#standardCloud").innerHTML = standards.map(s=>`<span>${s}</span>`).join("");
}
function updateQC(){
  const passed = $$("#gateChecks button.pass").length;
  $("#qcScore").textContent = `${passed}/8`;
  $("#qcStatus").textContent = passed === 8 ? "FINAL_WHOLE_PROJECT_GATE_READY." : `${8-passed} gate checks still unresolved.`;
}
function renderDiagnostics(){
  $("#diagnosticChips").innerHTML = Object.entries(diagnostic).map(([k,v])=>`<button class="chip" data-name="${k}" data-text="${v}" aria-pressed="false"><strong>${k}</strong><span>${v}</span></button>`).join("");
}
function showDiagnostic(name,text){
  $("#diagnosticReadout").innerHTML = `<b>${name}</b><p>${text}</p><p class="system-line">This diagnostic becomes a downstream instruction for strategy, identity, journey, website, and content.</p>`;
}
function renderBenchmarks(){
  $("#benchmarkBank").innerHTML = benchmarks.map((b,i)=>`<button data-brand="${b}"><span>${String(i+1).padStart(2,"0")}</span><br>${b}</button>`).join("");
}
function renderMaturity(){
  $("#modeGrid").innerHTML = modes.map(m=>`<article><b>${m[0]}</b>${m[1]}</article>`).join("");
  updateMaturity();
}
function updateMaturity(){
  const level = $("#maturitySlider").value;
  $("#levelValue").textContent = level;
  $("#maturityOutput").innerHTML = `<b>${maturity[level].split(" // ")[0]}</b><br>${maturity[level].split(" // ")[1] || maturity[level]}`;
}
function renderDeliverableFilters(){
  const fs = ["ALL", ...new Set(deliverables.map(d=>d[2]))];
  $("#deliverableFilters").innerHTML = fs.map(f=>`<button class="${f===currentDeliverableFilter?'active':''}" data-filter="${f}" aria-pressed="${f===currentDeliverableFilter}">${f}</button>`).join("");
}
function renderDeliverables(){
  const items = deliverables.filter(d => currentDeliverableFilter === "ALL" || d[2] === currentDeliverableFilter);
  $("#deliverableGrid").innerHTML = items.map((d,i)=>`<article class="deliverable-card"><button aria-expanded="false"><span>${String(i+1).padStart(2,"0")} // ${d[2]}</span><strong>${d[0]}</strong></button><p>${d[1]}</p></article>`).join("");
  syncExpandAllButton();
}
function syncExpandAllButton(){
  const cards = $$(".deliverable-card");
  const allOpen = cards.length > 0 && cards.every(card => card.classList.contains("open"));
  $("#expandAllDeliverables").textContent = allOpen ? "COLLAPSE_ALL" : "EXPAND_ALL";
  $("#expandAllDeliverables").setAttribute("aria-pressed", String(allOpen));
}
function wireEvents(){
  $$(".core-node, .metric-row button").forEach(button => button.setAttribute("aria-pressed", "false"));
  $("#principleSwap").setAttribute("aria-pressed", "false");
  $("#expandAllDeliverables").setAttribute("aria-pressed", "false");
  $$(".core-node").forEach(n => n.addEventListener("click", () => {
    const shouldReset = n.classList.contains("active");
    $$(".core-node").forEach(x => { x.classList.remove("active"); x.setAttribute("aria-pressed", "false"); });
    if (shouldReset) {
      $("#coreReadout").textContent = "Click any node to inspect the operating layer.";
      return;
    }
    n.classList.add("active");
    n.setAttribute("aria-pressed", "true");
    $("#coreReadout").textContent = coreReadouts[n.dataset.core];
  }));
  $$(".metric-row button").forEach(b => b.addEventListener("click", () => {
    const shouldReset = b.classList.contains("active");
    $$(".metric-row button").forEach(x => { x.classList.remove("active"); x.setAttribute("aria-pressed", "false"); });
    if (shouldReset) {
      $("#metricReadout").textContent = "Select a logic pillar.";
      return;
    }
    b.classList.add("active");
    b.setAttribute("aria-pressed", "true");
    $("#metricReadout").textContent = metrics[b.dataset.metric];
  }));
  $("#agentFilters").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    currentAgentType = b.dataset.type === currentAgentType && currentAgentType !== "ALL" ? "ALL" : b.dataset.type;
    activeAgentIndex = null;
    renderAgentFilters();
    renderAgents();
  });
  $("#agentSearch").addEventListener("input", () => { activeAgentIndex = null; renderAgents(); });
  $("#agentGrid").addEventListener("click", e => {
    const c = e.target.closest(".agent-card");
    if (!c) return;
    const index = Number(c.dataset.agent);
    showAgent(index === activeAgentIndex ? null : index);
  });
  $("#phaseRail").addEventListener("click", e => {
    const b = e.target.closest(".phase-pill");
    if (!b) return;
    const index = Number(b.dataset.phase);
    showPhase(index === activePhase ? null : index);
  });
  $("#runWorkflow").addEventListener("click", runWorkflow);
  $("#resetWorkflow").addEventListener("click", resetWorkflow);
  $("#gateChecks").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    const passed = b.classList.toggle("pass");
    b.setAttribute("aria-pressed", String(passed));
    updateQC();
  });
  $("#diagnosticChips").addEventListener("click", e => {
    const b = e.target.closest(".chip");
    if (!b) return;
    const shouldReset = b.classList.contains("active");
    $$(".chip").forEach(x => { x.classList.remove("active"); x.setAttribute("aria-pressed", "false"); });
    if (shouldReset) {
      $("#diagnosticReadout").textContent = "Select a diagnostic dimension.";
      return;
    }
    b.classList.add("active");
    b.setAttribute("aria-pressed", "true");
    showDiagnostic(b.dataset.name,b.dataset.text);
  });
  $("#principleSwap").addEventListener("click", () => {
    const revealed = $("#principleCard").classList.toggle("revealed");
    $("#principleSwap").setAttribute("aria-pressed", String(revealed));
    $("#principleCard p").textContent = revealed
      ? "A brand with sufficient earned recognition can let the product name, rather than the logotype, become the primary identifier."
      : "Click translate to reveal the usable logic.";
  });
  $("#benchmarkBank").addEventListener("click", e => { const b = e.target.closest("button"); if(!b) return; openModal(`<p class='tag'>BENCHMARK_CARD_PREVIEW</p><h3>${b.dataset.brand}</h3><p>Each Caius benchmark card studies positioning, visual identity, content system, customer journey, website logic, commercial model, maturity level, and what must never be copied.</p><p class='system-line'>The principle travels. The brand does not.</p>`); });
  $("#maturitySlider").addEventListener("input", updateMaturity);
  $("#deliverableFilters").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    currentDeliverableFilter = b.dataset.filter === currentDeliverableFilter && currentDeliverableFilter !== "ALL" ? "ALL" : b.dataset.filter;
    renderDeliverableFilters();
    renderDeliverables();
  });
  $("#deliverableGrid").addEventListener("click", e => {
    const c = e.target.closest(".deliverable-card");
    if (!c) return;
    const open = c.classList.toggle("open");
    c.querySelector("button").setAttribute("aria-expanded", String(open));
    syncExpandAllButton();
  });
  $("#expandAllDeliverables").addEventListener("click", () => {
    const cards = $$(".deliverable-card");
    const shouldOpen = cards.some(card => !card.classList.contains("open"));
    cards.forEach(card => {
      card.classList.toggle("open", shouldOpen);
      card.querySelector("button").setAttribute("aria-expanded", String(shouldOpen));
    });
    syncExpandAllButton();
  });
  $$("[data-command]").forEach(b => b.addEventListener("click", () => openModal(`<p class='tag'>ZCS_DEFINITION</p><h3>Cultural strategy studio.</h3><p>ZC Studios builds the logic beneath founder-led brands: positioning, world, voice, visual direction, customer journey, and content system.</p><blockquote>It does not make brands look polished. It makes brands make sense.</blockquote>`)));
  $("#modalClose").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", e => { if(e.target.id === "modal") closeModal(); });
}
function openModal(html){ $("#modalContent").innerHTML = html; $("#modal").classList.add("open"); $("#modal").setAttribute("aria-hidden","false"); }
function closeModal(){ $("#modal").classList.remove("open"); $("#modal").setAttribute("aria-hidden","true"); }
function wireMotion(){
  const dot = $(".cursor-dot");
  window.addEventListener("mousemove", e => { dot.style.left = `${e.clientX}px`; dot.style.top = `${e.clientY}px`; });
  document.addEventListener("mouseover", e => { if(e.target.closest("button,a,input")) document.body.classList.add("is-hovering"); });
  document.addEventListener("mouseout", e => { if(e.target.closest("button,a,input")) document.body.classList.remove("is-hovering"); });
  const observer = new IntersectionObserver(entries => entries.forEach(en => en.target.classList.toggle("visible", en.isIntersecting)), {threshold:.12});
  $$(".reveal").forEach(el => observer.observe(el));
  const sectionObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(visible) $("#activeSection").textContent = visible.target.dataset.label || "ZCS";
  }, {threshold:[.22,.45,.7]});
  $$(".section").forEach(s => sectionObserver.observe(s));
  window.addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const pct = max > 0 ? (scrollY / max) * 100 : 0;
    document.documentElement.style.setProperty("--section-progress", `${pct}%`);
  }, {passive:true});
}

renderAgentFilters();
renderAgents();
renderPhases();
renderQC();
renderDiagnostics();
renderBenchmarks();
renderMaturity();
renderDeliverableFilters();
renderDeliverables();
wireEvents();
wireMotion();
updateQC();
