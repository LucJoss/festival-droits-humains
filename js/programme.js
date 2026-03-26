/* ============================================================
   PROGRAMME.JS — Timeline accordion par date, semaine, filtre, recherche
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const container = document.getElementById('programme-container');
  const emptyMsg  = document.getElementById('programme-empty');
  if (!container) return;

  /* ── Collect all screenings ──────────────────────────────── */
  const allEvents = [];
  FILMS.forEach(film => {
    film.screenings.forEach(s => {
      allEvents.push({ film, screening: s });
    });
  });
  allEvents.sort((a, b) => {
    const d = a.screening.date.localeCompare(b.screening.date);
    return d !== 0 ? d : a.screening.time.localeCompare(b.screening.time);
  });

  /* ── Populate city select ────────────────────────────────── */
  const citySelect = document.getElementById('prog-ville');
  if (citySelect) {
    getAllCities().forEach(city => {
      const opt = document.createElement('option');
      opt.value = city;
      opt.textContent = city;
      citySelect.appendChild(opt);
    });
  }

  /* ── Filters state ───────────────────────────────────────── */
  const filters = { public: 'tous', ville: 'toutes', semaine: 'toutes', search: '' };

  /* ── Week helper ─────────────────────────────────────────── */
  function getWeekNum(dateStr) {
    const d = parseInt(dateStr.split('-')[2]);
    if (d <= 7)  return 1;
    if (d <= 14) return 2;
    if (d <= 21) return 3;
    if (d <= 28) return 4;
    return 5;
  }

  /* ── Group by date ───────────────────────────────────────── */
  function groupByDate(events) {
    const groups = {};
    events.forEach(ev => {
      const d = ev.screening.date;
      if (!groups[d]) groups[d] = [];
      groups[d].push(ev);
    });
    return groups;
  }

  const MONTHS_FR = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
  const DAYS_FR   = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];

  /* ── Toggle accordion day ────────────────────────────────── */
  function toggleDay(header, body) {
    const expanded = header.getAttribute('aria-expanded') === 'true';
    header.setAttribute('aria-expanded', String(!expanded));
    body.style.display = expanded ? 'none' : 'flex';
  }

  /* ── Render ──────────────────────────────────────────────── */
  function render() {
    while (container.firstChild) container.removeChild(container.firstChild);

    const q = filters.search.trim().toLowerCase();
    const filtered = allEvents.filter(ev => {
      if (filters.public !== 'tous' && ev.screening.venueType !== filters.public) return false;
      if (filters.ville  !== 'toutes' && ev.screening.city    !== filters.ville)  return false;
      if (filters.semaine !== 'toutes' && getWeekNum(ev.screening.date) !== parseInt(filters.semaine)) return false;
      if (q) {
        const inTitle = ev.film.title.toLowerCase().includes(q);
        const inCity  = ev.screening.city.toLowerCase().includes(q);
        const inVenue = ev.screening.venue.toLowerCase().includes(q);
        if (!inTitle && !inCity && !inVenue) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      if (emptyMsg) emptyMsg.style.display = 'block';
      return;
    }
    if (emptyMsg) emptyMsg.style.display = 'none';

    const groups = groupByDate(filtered);

    Object.keys(groups).sort().forEach((dateStr, idx) => {
      const group = groups[dateStr];
      const date  = new Date(dateStr + 'T12:00:00');
      const dayNum   = date.getDate();
      const dayName  = DAYS_FR[date.getDay()];
      const monthName = MONTHS_FR[date.getMonth()];
      const numStr   = String(dayNum).padStart(2, '0');
      const isFirst  = idx === 0;

      /* Body (event cards) */
      const body = el('div', { cls: 'day-events' });
      group.forEach(({ film, screening }) => body.appendChild(createEventCard(film, screening)));
      body.style.display = isFirst ? 'flex' : 'none';

      /* Header elements */
      const numEl     = el('span', { cls: 'day-num', text: numStr });
      const labelEl   = el('span', { cls: 'day-label', text: dayName + ' ' + dayNum + ' ' + monthName });
      const countEl   = el('span', {
        cls: 'day-count',
        text: group.length + ' séance' + (group.length > 1 ? 's' : '') +
              ' · ' + new Set(group.map(e => e.screening.city)).size + ' ville' +
              (new Set(group.map(e => e.screening.city)).size > 1 ? 's' : '')
      });
      const labelWrap = el('div', { cls: 'day-label-wrap', children: [labelEl, countEl] });
      const toggleIcon = el('span', { cls: 'day-toggle-icon', text: '+' });
      const headerLeft = el('div', { cls: 'day-header-left', children: [numEl, labelWrap] });

      const header = el('button', {
        cls: 'day-accordion-header',
        attrs: { 'aria-expanded': String(isFirst) },
        children: [headerLeft, toggleIcon]
      });

      if (isFirst) toggleIcon.textContent = '+'; /* will show rotated via CSS */

      header.addEventListener('click', () => toggleDay(header, body));

      const dayBlock = el('div', {
        cls: 'programme-day',
        children: [header, body]
      });
      container.appendChild(dayBlock);
    });
  }

  /* ── Filter buttons (public/type) ────────────────────────── */
  document.querySelectorAll('.prog-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filters.public = btn.dataset.val;
      document.querySelectorAll('.prog-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    });
  });

  /* ── Week filter ─────────────────────────────────────────── */
  document.querySelectorAll('.week-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filters.semaine = btn.dataset.week;
      document.querySelectorAll('.week-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    });
  });

  /* ── City select ─────────────────────────────────────────── */
  if (citySelect) {
    citySelect.addEventListener('change', () => {
      filters.ville = citySelect.value;
      render();
    });
  }

  /* ── Search ──────────────────────────────────────────────── */
  const searchInput = document.getElementById('prog-search');
  if (searchInput) {
    let timeout;
    searchInput.addEventListener('input', () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        filters.search = searchInput.value;
        render();
      }, 200);
    });
  }

  /* ── Initial render ──────────────────────────────────────── */
  render();
});
