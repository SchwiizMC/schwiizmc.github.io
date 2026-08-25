/* SchwiizMC — dezentes Einblenden beim Laden. Keine Abhängigkeiten. */
(() => {
  'use strict';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = document.querySelectorAll('.hero, .scene, footer');
  targets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    el.style.transitionDelay = (i * 0.12) + 's';
  });
  requestAnimationFrame(() => requestAnimationFrame(() => {
    targets.forEach(el => { el.style.opacity = ''; el.style.transform = ''; });
  }));
})();



/* SchwiizMC — Countdown bis Launch */
(() => {
  'use strict';
  const TARGET = Date.parse('2026-09-25T20:00:00+02:00'); // CEST
  const box = document.getElementById('countdown');
  if (!box) return;

  const d = document.getElementById('cd-d');
  const h = document.getElementById('cd-h');
  const m = document.getElementById('cd-m');
  const s = document.getElementById('cd-s');
  const p = n => String(n).padStart(2, '0');

  const tick = () => {
    const diff = TARGET - Date.now();
    if (diff <= 0) {
      box.classList.add('is-live');
      box.querySelector('.cd-label').textContent = 'Mir sind live! 🎉';
      d.textContent = h.textContent = m.textContent = s.textContent = '00';
      clearInterval(timer);
      return;
    }
    const t = Math.floor(diff / 1000);
    d.textContent = p(Math.floor(t / 86400));
    h.textContent = p(Math.floor(t / 3600) % 24);
    m.textContent = p(Math.floor(t / 60) % 60);
    s.textContent = p(t % 60);
  };

  const timer = setInterval(tick, 1000);
  tick();
})();
