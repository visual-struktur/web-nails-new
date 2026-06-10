document.addEventListener('DOMContentLoaded', function () {

  // ── NAVBAR SCROLL ──────────────────────────────────────────────────────────
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // ── MOBILE MENU ────────────────────────────────────────────────────────────
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggle && navMenu) {
    const openMenu = () => {
      navMenu.classList.add('active');
      toggle.classList.add('active');
      toggle.setAttribute('aria-label', 'Menü schließen');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      navMenu.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-label', 'Menü öffnen');
      document.body.style.overflow = '';
    };

    toggle.addEventListener('click', () =>
      navMenu.classList.contains('active') ? closeMenu() : openMenu()
    );

    navMenu.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', closeMenu)
    );

    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') &&
          !navMenu.contains(e.target) &&
          !toggle.contains(e.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // ── SMOOTH SCROLL FOR ANCHOR LINKS ─────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    });
  });

  // ── SCROLL REVEAL ──────────────────────────────────────────────────────────
  if ('IntersectionObserver' in window) {
    // Auto-tag section containers
    const sectionSelectors = [
      '.about-preview .container',
      '.services-preview .container',
      '.values .container',
      '.cta-section .container',
      '.about-story .container',
      '.my-values .container',
      '.timeline-section .container',
      '.philosophy-section .container',
      '.course-intro .container',
      '.courses-list .container',
      '.why-choose .container',
      '.why-courses .container',
      '.testimonial-section .container',
      '.gallery-section .container',
      '.instagram-cta .container',
      '.contact-section .container',
      '.faq-section .container',
    ];

    sectionSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.classList.add('reveal'));
    });

    // Tag grids for stagger
    const gridSelectors = [
      '.services-grid',
      '.values-grid',
      '.premium-values',
      '.features-grid',
      '.values-grid-large',
      '.gallery-grid',
      '.faq-grid',
      '.footer-grid',
    ];

    gridSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.classList.add('reveal-group'));
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-group').forEach(el =>
      revealObserver.observe(el)
    );
  } else {
    // Fallback: show everything immediately
    document.querySelectorAll('.reveal, .reveal-group').forEach(el =>
      el.classList.add('visible')
    );
  }

  // ── GALLERY FILTER ─────────────────────────────────────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.dataset.filter;
        galleryItems.forEach(item => {
          const show = filter === 'all' || item.dataset.category === filter;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // ── CONTACT FORM ───────────────────────────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Gesendet ✓';
      btn.disabled = true;
      setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 4000);
    });
  }

  // ── LAZY IMAGES ────────────────────────────────────────────────────────────
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) img.src = img.dataset.src;
          imgObserver.unobserve(img);
        }
      });
    });
    document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
  }

});
