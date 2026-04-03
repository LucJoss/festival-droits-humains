/* ============================================================
   MAIN.JS — Navigation, animations partagées
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Nav scroll effect ─────────────────────────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const hasHero = !!document.querySelector('.hero');
    if (!hasHero) {
      /* Pages sans hero plein écran : nav toujours visible */
      nav.classList.add('scrolled');
    } else {
      const onScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 20);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
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
      link.setAttribute('aria-current', 'page');
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
    const festivalStart = new Date('2027-03-01T18:00:00').getTime();
    const festivalEnd   = new Date('2027-03-31T23:59:59').getTime();
    const countdownWrap = countdownEls.days.closest('.countdown');

    const showLive = (msg, sub) => {
      if (!countdownWrap) return;
      while (countdownWrap.firstChild) countdownWrap.removeChild(countdownWrap.firstChild);
      const box   = document.createElement('div');
      box.className = 'countdown-live';
      const label = document.createElement('div');
      label.className = 'countdown-live-label';
      const dot = document.createElement('span');
      dot.className = 'countdown-live-dot';
      label.appendChild(dot);
      label.appendChild(document.createTextNode(msg));
      const subEl = document.createElement('div');
      subEl.className = 'countdown-live-sub';
      subEl.textContent = sub;
      box.appendChild(label);
      box.appendChild(subEl);
      countdownWrap.appendChild(box);
    };

    const tick = () => {
      const now = Date.now();
      if (now >= festivalStart && now <= festivalEnd) {
        showLive('Festival en cours', 'Mars 2027 · Sud de la France');
        return;
      }
      if (now > festivalEnd) {
        showLive('À l\'année prochaine !', 'Festival 2028 · Amnesty International France');
        return;
      }
      const diff = festivalStart - now;
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
