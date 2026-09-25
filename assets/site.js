(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.dataset.open = String(open);
    });

    nav.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.dataset.open = 'false';
    });
  }

  const sections = document.querySelectorAll('[data-section]');
  const progress = document.querySelectorAll('[data-progress]');
  if (!sections.length || !progress.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    progress.forEach((link) => {
      if (link.dataset.progress === visible.target.dataset.section) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }, { threshold: [0.35, 0.6] });

  sections.forEach((section) => observer.observe(section));
})();
