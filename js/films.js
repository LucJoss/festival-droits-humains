/* ============================================================
   FILMS.JS — Page films : filtres + grille
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const grid    = document.getElementById('films-grid');
  const counter = document.getElementById('films-count-num');
  if (!grid) return;

  /* ── Empty state ────────────────────────────────────────── */
  const emptyMsg = el('div', { cls: 'films-empty-state' });
  const emptyTxt = el('p', { text: 'Aucun film ne correspond à ces filtres.' });
  const emptyBtn = el('button', { cls: 'btn btn-outline', text: 'Réinitialiser les filtres' });
  emptyMsg.appendChild(emptyTxt);
  emptyMsg.appendChild(emptyBtn);
  emptyMsg.style.display = 'none';
  grid.parentNode.insertBefore(emptyMsg, grid.nextSibling);

  /* ── State ──────────────────────────────────────────────── */
  const filters = {
    theme:  'tous',
    format: 'tous',
    genre:  'tous',
    ville:  'toutes',
    search: '',
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
        'data-theme':  (Array.isArray(film.theme) ? film.theme : [film.theme]).join(','),
        'data-villes': film.screenings.map(s => s.city).join(','),
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
      const format = wrapper.dataset.format;
      const genre  = wrapper.dataset.genre;
      const theme  = wrapper.dataset.theme;
      const villes = wrapper.dataset.villes.split(',');

      const matchTheme  = filters.theme  === 'tous' || theme.split(',').includes(filters.theme);
      const matchFormat = filters.format === 'tous' || format === filters.format;
      const matchGenre  = filters.genre  === 'tous' || genre  === filters.genre;
      const matchVille  = filters.ville  === 'toutes' || villes.includes(filters.ville);
      const q = filters.search.toLowerCase();
      const matchSearch = !q ||
        wrapper.querySelector('.card-title')?.textContent.toLowerCase().includes(q) ||
        wrapper.querySelector('.card-director')?.textContent.toLowerCase().includes(q);

      const show = matchTheme && matchFormat && matchGenre && matchVille && matchSearch;
      wrapper.classList.toggle('film-hidden', !show);
      if (show) visible++;
    });

    if (counter) {
      counter.textContent = visible;
      const label = document.getElementById('films-count-label');
      if (label) label.textContent = visible === 1 ? 'film' : 'films';
    }
    grid.style.display   = visible > 0 ? '' : 'none';
    emptyMsg.style.display = visible > 0 ? 'none' : 'flex';
  }

  /* ── Theme chips ────────────────────────────────────────── */
  document.querySelectorAll('.filter-theme').forEach(btn => {
    btn.addEventListener('click', () => {
      filters.theme = btn.dataset.val;
      document.querySelectorAll('.filter-theme').forEach(b => b.classList.toggle('active', b === btn));
      applyFilters();
    });
  });

  /* ── Button group filters ───────────────────────────────── */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;
      const val   = btn.dataset.val;
      filters[group] = val;
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

  /* ── Search input ───────────────────────────────────────── */
  const searchInput = document.getElementById('films-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      filters.search = searchInput.value.trim();
      applyFilters();
    });
  }

  /* ── Reset button ───────────────────────────────────────── */
  emptyBtn.addEventListener('click', () => {
    filters.theme  = 'tous';
    filters.format = 'tous';
    filters.genre  = 'tous';
    filters.ville  = 'toutes';
    filters.search = '';
    document.querySelectorAll('.filter-theme').forEach((b, i) => b.classList.toggle('active', i === 0));
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.val === 'tous');
    });
    if (citySelect) citySelect.value = 'toutes';
    if (searchInput) searchInput.value = '';
    applyFilters();
  });

  /* ── Initial count ──────────────────────────────────────── */
  if (counter) counter.textContent = FILMS.length;

});
