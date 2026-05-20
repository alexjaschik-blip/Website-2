(() => {
  // Nav scroll state
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Showreel — swap in a real Vimeo/YouTube embed URL here when ready
  const showreel = document.querySelector('.showreel');
  if (showreel) {
    const activate = () => {
      // Replace the placeholder caption with "coming soon" note
      const caption = showreel.querySelector('.showreel-caption');
      if (caption) {
        caption.textContent = 'Showreel available soon — get in touch';
        caption.style.color = 'rgba(201, 169, 122, 0.8)';
      }
    };
    showreel.addEventListener('click', activate);
    showreel.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });
  }

  // Smooth-scroll polyfill for Safari < 15.4
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
