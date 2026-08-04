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
