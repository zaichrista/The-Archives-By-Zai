/* Distance-based, reversible entrances shared by the portfolio and Studio.
   No wheel interception: native scrolling, links and keyboard remain intact. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = matchMedia('(max-width: 760px)');
  const elements = [...document.querySelectorAll('.swiss-current > .section-label, .current-line, .work-index .section-head, .work-category > .section-label, .work-line, .research-grid > a, .research-grid article, .reveal')];
  const entries = elements.map(el => ({el, top: 0}));
  const bio = document.querySelector('.clean-bio');
  let pause;
  if (bio) {
    pause = document.createElement('div');
    pause.className = 'bio-pause';
    while (bio.firstChild) pause.append(bio.firstChild);
    bio.append(pause);
  }
  const question = bio?.querySelector('.bio-question-lock');
  const label = bio?.querySelector('.section-label');
  const prose = bio?.querySelector('.clean-bio-text');
  // A color interpolation preserves the original question-isolation concept.
  const fadeTargets = prose ? [prose, ...prose.querySelectorAll('.def-term')] : [];
  const colors = fadeTargets.map(el => getComputedStyle(el).color);
  const clamp = n => Math.max(0, Math.min(1, n));
  let frame = 0;
  function measure() {
    // offset coordinates exclude the entrance transform, avoiding feedback.
    entries.forEach(entry => {
      entry.top = 0;
      for (let node = entry.el; node; node = node.offsetParent) entry.top += node.offsetTop;
    });
    if (pause) pause.style.position = !mobile.matches && !reduced.matches && pause.offsetHeight < innerHeight * .7 ? 'sticky' : 'static';
    schedule();
  }
  function update() {
    frame = 0;
    const height = innerHeight;
    // Desktop: 70vh of travel, mobile: 48vh; final state holds on screen.
    const distance = height * (mobile.matches ? .48 : .70);
    entries.forEach(({el, top}) => {
      const p = reduced.matches ? 1 : clamp((scrollY + height * .98 - top) / distance);
      el.style.setProperty('--entrance', p.toFixed(4));
      el.classList.add('scroll-paced');
    });
    if (bio) {
      const rect = bio.getBoundingClientRect();
      const sticky = pause.style.position === 'sticky';
      // Read first, then dissolve over 65vh, followed by a held question.
      const questionTop = question?.getBoundingClientRect().top ?? height;
      const p = reduced.matches ? 0 : sticky
        ? clamp((-rect.top - height * .08) / (height * .65))
        : clamp((height * .85 - questionTop) / (height * .65));
      fadeTargets.forEach((el, i) => {
        el.style.color = p ? `color-mix(in srgb, ${colors[i]} ${100 * (1 - p)}%, transparent)` : '';
        el.style.textDecorationColor = p ? `rgba(181,150,82,${1-p})` : '';
      });
      if (prose) prose.style.transition = 'none';
      if (question) { question.style.color = p ? 'var(--gold)' : ''; question.style.transition = 'none'; }
      if (label) label.style.opacity = 1 - p * .82;
    }
    const sections = [...document.querySelectorAll('.section[data-label]')];
    const active = sections.filter(el => el.getBoundingClientRect().top <= height * .45).pop() || sections[0];
    const readout = document.querySelector('#activeSection');
    if (readout && active) readout.textContent = active.dataset.label;
    const max = document.documentElement.scrollHeight - height;
    document.documentElement.style.setProperty('--section-progress', `${max > 0 ? scrollY / max * 100 : 0}%`);
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(update); }
  addEventListener('scroll', schedule, {passive: true});
  addEventListener('resize', measure);
  addEventListener('load', measure);
  reduced.addEventListener('change', measure);
  document.fonts?.ready.then(measure);
  new ResizeObserver(measure).observe(document.body);
  measure();
})();
