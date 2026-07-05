/* Alfi Builders — Smooth scroll & animations */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Lenis Smooth Scroll ── */
  let lenis;
  if (!prefersReducedMotion && typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ── Header scroll state ── */
  const header = document.getElementById('header');
  const scrollProgress = document.querySelector('.scroll-progress');

  function updateHeader() {
    const scrollY = lenis ? lenis.scroll : window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    header.classList.toggle('scrolled', scrollY > 60);
    if (scrollProgress) scrollProgress.style.width = progress + '%';
  }

  if (lenis) {
    lenis.on('scroll', updateHeader);
  } else {
    window.addEventListener('scroll', updateHeader, { passive: true });
  }
  updateHeader();

  /* ── Mobile nav ── */
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
    if (lenis) lenis.stop();
    else document.body.style.overflow = open ? 'hidden' : '';
  });

  document.querySelectorAll('[data-nav]').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      if (lenis) lenis.start();
      else document.body.style.overflow = '';
    });
  });

  /* ── Active nav link ── */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('[data-nav]');

  function setActiveNav() {
    const scrollY = lenis ? lenis.scroll : window.scrollY;
    let current = '';

    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      if (scrollY >= top) current = section.id;
    });

    navAnchors.forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  if (lenis) lenis.on('scroll', setActiveNav);
  else window.addEventListener('scroll', setActiveNav, { passive: true });

  /* ── Reveal animations ── */
  if (!prefersReducedMotion) {
    gsap.utils.toArray('.reveal-up').forEach((el) => {
      if (el.closest('.hero')) return;
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
      });
    });

    gsap.utils.toArray('.reveal-scale').forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      });
    });

    /* Hero entrance */
    gsap.set('.hero-title .line span', { y: '110%' });

    const heroTl = gsap.timeline({ delay: 0.3 });
    heroTl
      .to('.hero-title .line span', {
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power4.out',
      })
      .to(
        '.hero-content > .reveal-up',
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
        '-=0.6'
      )
      .to(
        '.hero-stat.reveal-up',
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' },
        '-=0.4'
      );

    /* Hero parallax */
    gsap.to('.hero-bg-img', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: '15%',
      scale: 1,
      ease: 'none',
    });
  } else {
    document.querySelectorAll('.reveal-up, .reveal-scale').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  /* ── Counter animation ── */
  const counters = document.querySelectorAll('[data-count]');

  counters.forEach((counter) => {
    const target = parseInt(counter.dataset.count, 10);

    if (prefersReducedMotion) {
      counter.textContent = target;
      return;
    }

    ScrollTrigger.create({
      trigger: counter.closest('.hero-stats'),
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          textContent: target,
          duration: 2,
          ease: 'power2.out',
          snap: { textContent: 1 },
          onUpdate: function () {
            counter.textContent = Math.round(this.targets()[0].textContent);
          },
        });
      },
    });
  });

  /* ── Horizontal projects scroll ── */
  const projectsSection = document.querySelector('.projects');
  const projectsTrack = document.getElementById('projects-track');
  const progressBar = document.getElementById('projects-progress');

  if (projectsTrack && projectsSection && !prefersReducedMotion && window.innerWidth > 768) {
    const getScrollAmount = () => {
      const trackWidth = projectsTrack.scrollWidth;
      return -(trackWidth - window.innerWidth + 80);
    };

    gsap.to(projectsTrack, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: projectsSection,
        start: 'top 15%',
        end: () => '+=' + Math.abs(getScrollAmount()),
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (progressBar) {
            const pct = self.progress * 100;
            let style = document.getElementById('progress-dynamic');
            if (!style) {
              style = document.createElement('style');
              style.id = 'progress-dynamic';
              document.head.appendChild(style);
            }
            style.textContent = `.projects-progress-bar::after { width: ${pct}% !important; }`;
          }
        },
      },
    });

    window.addEventListener('resize', () => ScrollTrigger.refresh());
  }

  /* ── Service cards stagger ── */
  if (!prefersReducedMotion) {
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 75%',
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });

    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '.projects-track',
        start: 'top 80%',
      },
      scale: 0.92,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }

  /* ── Contact form ── */
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#2E7D32';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });

  /* ── Refresh on load ── */
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
})();