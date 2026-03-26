/* ============================================================
   FILMS.JS — Page films : filtres + grille
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const grid    = document.getElementById('films-grid');
  const counter = document.getElementById('films-count-num');
  if (!grid) return;

  /* ── State ──────────────────────────────────────────────── */
  const filters = {
    format: 'tous',
    genre:  'tous',
    ville:  'toutes',
    public: 'tous',
  };

  /* ── Populate city select ───────────────────────────────── */
  const citySelect = document.getElementById('filter-ville');
  if (citySelect) {
    const cities = getAllCities();
    cities.forEach(city => {
      const opt = document.createElement('option');
      opt.value = city;
      opt.textContent = city;
      citySelect.appendChild(opt);
    });
  }

  /* ── Render all films initially ─────────────────────────── */
  const filmEls = [];
  FILMS.forEach(film => {
    const card = createFilmCard(film);
    card.classList.add('reveal');

    const wrapper = el('div', {
      cls: 'film-grid-item',
      attrs: {
        'data-format': film.format,
        'data-genre':  film.genre,
        'data-villes': film.screenings.map(s => s.city).join(','),
        'data-public': film.screenings.map(s => s.venueType).join(','),
      },
      children: [card]
    });

    filmEls.push(wrapper);
    grid.appendChild(wrapper);
  });

  /* ── Scroll reveal after render ─────────────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelector('.reveal')?.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  filmEls.forEach(w => observer.observe(w));

  /* ── Filter logic ───────────────────────────────────────── */
  function applyFilters() {
    let visible = 0;
    filmEls.forEach(wrapper => {
      const format  = wrapper.dataset.format;
      const genre   = wrapper.dataset.genre;
      const villes  = wrapper.dataset.villes.split(',');
      const publics = wrapper.dataset.public.split(',');

      const matchFormat = filters.format === 'tous' || format === filters.format;
      const matchGenre  = filters.genre  === 'tous' || genre  === filters.genre;
      const matchVille  = filters.ville  === 'toutes' || villes.includes(filters.ville);
      const matchPublic = filters.public === 'tous' || publics.includes(filters.public);

      const show = matchFormat && matchGenre && matchVille && matchPublic;
      wrapper.classList.toggle('film-hidden', !show);
      if (show) visible++;
    });

    if (counter) {
      counter.textContent = visible;
    }
  }

  /* ── Button group filters ───────────────────────────────── */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;
      const val   = btn.dataset.val;
      filters[group] = val;

      // Update active state within group
      document.querySelectorAll(`.filter-btn[data-group="${group}"]`).forEach(b => {
        b.classList.toggle('active', b === btn);
      });

      applyFilters();
    });
  });

  /* ── City select ────────────────────────────────────────── */
  if (citySelect) {
    citySelect.addEventListener('change', () => {
      filters.ville = citySelect.value;
      applyFilters();
    });
  }

  /* ── Initial count ──────────────────────────────────────── */
  if (counter) counter.textContent = FILMS.length;

});
