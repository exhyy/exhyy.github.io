const sectionNavigation = document.querySelector('.section-nav');

if (sectionNavigation) {
  const controls = sectionNavigation.querySelectorAll('[data-scroll-target]');
  controls.forEach((control) => {
    control.addEventListener('click', () => {
      const target = document.getElementById(control.dataset.scrollTarget);
      if (!target) return;
      target.scrollIntoView({ block: 'start', behavior: 'auto' });
      target.focus({ preventScroll: true });
    });
  });
  sectionNavigation.hidden = false;
}
