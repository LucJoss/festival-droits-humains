/* ============================================================
   MAIN.JS — Navigation, animations partagées
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Nav scroll effect ─────────────────────────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile burger ─────────────────────────────────────── */
  const burger = document.querySelector('.nav-burger');
  const mobileMenu = document.querySelector('.nav-mobile');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    // Close on link click
    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ── Active nav link ───────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .nav-mobile .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || (currentPage === '' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });

  /* ── Scroll reveal (IntersectionObserver) ──────────────── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger based on sibling index within same parent
          const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
          const delay = siblings.indexOf(entry.target) * 80;
          setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
  }

  /* ── Horizontal scroll drag (selection carousel) ──────── */
  const scrollers = document.querySelectorAll('.selection-scroll');
  scrollers.forEach(scroller => {
    let isDown = false, startX, scrollLeft;
    scroller.addEventListener('mousedown', e => {
      isDown = true;
      startX = e.pageX - scroller.offsetLeft;
      scrollLeft = scroller.scrollLeft;
    });
    scroller.addEventListener('mouseleave', () => isDown = false);
    scroller.addEventListener('mouseup', () => isDown = false);
    scroller.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scroller.offsetLeft;
      scroller.scrollLeft = scrollLeft - (x - startX) * 1.5;
    });
  });

  /* ── Countdown ─────────────────────────────────────────── */
  const countdownEls = {
    days:    document.getElementById('cd-days'),
    hours:   document.getElementById('cd-hours'),
    minutes: document.getElementById('cd-minutes'),
    seconds: document.getElementById('cd-seconds'),
  };
  if (countdownEls.days) {
    const target = new Date('2027-03-01T18:00:00').getTime();
    const tick = () => {
      const now  = Date.now();
      const diff = target - now;
      if (diff <= 0) {
        countdownEls.days.textContent    = '00';
        countdownEls.hours.textContent   = '00';
        countdownEls.minutes.textContent = '00';
        countdownEls.seconds.textContent = '00';
        return;
      }
      const pad = n => String(Math.floor(n)).padStart(2, '0');
      countdownEls.days.textContent    = pad(diff / 86400000);
      countdownEls.hours.textContent   = pad((diff % 86400000) / 3600000);
      countdownEls.minutes.textContent = pad((diff % 3600000) / 60000);
      countdownEls.seconds.textContent = pad((diff % 60000) / 1000);
    };
    tick();
    setInterval(tick, 1000);
  }

});
