/* =============================================
   MAIN JAVASCRIPT
   ============================================= */

// ── Navbar / Hamburger ──────────────────────
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // Mark active nav link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ── Video Carousel ───────────────────────────
function initCarousel() {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  const slides = track.querySelectorAll('.carousel-slide');
  const dots   = document.querySelectorAll('.dot');
  let current  = 0;
  let autoTimer;

  function goTo(idx) {
    // Pause all videos
    slides.forEach(s => {
      const v = s.querySelector('video');
      if (v) { v.pause(); }
      const pb = s.querySelector('.play-btn');
      if (pb) pb.classList.remove('playing');
    });

    current = (idx + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }

  document.getElementById('carouselPrev')?.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  document.getElementById('carouselNext')?.addEventListener('click', () => { goTo(current + 1); startAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); startAuto(); }));

  // Play button for each slide
  slides.forEach(slide => {
    const playBtn = slide.querySelector('.play-btn');
    const video   = slide.querySelector('video');
    if (!playBtn || !video) return;

    playBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playBtn.classList.add('playing');
      } else {
        video.pause();
        playBtn.classList.remove('playing');
      }
    });

    video.addEventListener('ended', () => {
      playBtn.classList.remove('playing');
    });
  });

  goTo(0);
  startAuto();
}

// ── Scroll Animations ────────────────────────
function initScrollAnim() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });

  els.forEach(el => obs.observe(el));
}

// ── Project Filters ──────────────────────────
function initFilters() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card[data-category]');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      cards.forEach(card => {
        const show = cat === 'todos' || card.dataset.category === cat;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

// ── Lightbox ─────────────────────────────────
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const imgEl    = lightbox.querySelector('.lightbox-img');
  const caption  = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn  = lightbox.querySelector('.lightbox-prev');
  const nextBtn  = lightbox.querySelector('.lightbox-next');

  let images = [];
  let currentIdx = 0;

  function open(idx) {
    currentIdx = idx;
    const img = images[currentIdx];
    imgEl.src = img.src;
    imgEl.alt = img.alt || '';
    if (caption) caption.textContent = img.alt || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    currentIdx = (currentIdx + dir + images.length) % images.length;
    open(currentIdx);
  }

  // Collect all gallery items
  document.querySelectorAll('.gallery-item').forEach((item, i) => {
    const img = item.querySelector('img');
    if (!img) return;
    images.push({ src: img.src, alt: img.alt });
    item.addEventListener('click', () => open(i));
  });

  closeBtn?.addEventListener('click', close);
  prevBtn?.addEventListener('click', () => navigate(-1));
  nextBtn?.addEventListener('click', () => navigate(1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}

// ── Contact Form ─────────────────────────────
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    const success = document.getElementById('formSuccess');
    if (success) success.classList.add('visible');
  });
}

// ── Init all ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initCarousel();
  initScrollAnim();
  initFilters();
  initLightbox();
  initContactForm();
});
