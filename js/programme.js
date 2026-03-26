/* ============================================================
   PROGRAMME.JS — Page programme : timeline par date/ville
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const container  = document.getElementById('programme-container');
  const emptyMsg   = document.getElementById('programme-empty');
  if (!container) return;

  /* ── Collect all screenings ─────────────────────────────── */
  const allEvents = [];
  FILMS.forEach(film => {
    film.screenings.forEach(s => {
      allEvents.push({ film, screening: s });
    });
  });
  allEvents.sort((a, b) => {
    const dateCmp = a.screening.date.localeCompare(b.screening.date);
    return dateCmp !== 0 ? dateCmp : a.screening.time.localeCompare(b.screening.time);
  });

  /* ── Populate city select ───────────────────────────────── */
  const citySelect = document.getElementById('prog-ville');
  if (citySelect) {
    const cities = getAllCities();
    cities.forEach(city => {
      const opt = document.createElement('option');
      opt.value = city;
      opt.textContent = city;
      citySelect.appendChild(opt);
    });
  }

  /* ── Filters state ──────────────────────────────────────── */
  const filters = { public: 'tous', ville: 'toutes' };

  /* ── Group by date ──────────────────────────────────────── */
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

  function buildDayHeader(dateStr) {
    const date     = new Date(dateStr + 'T12:00:00');
    const dayName  = DAYS_FR[date.getDay()];
    const dayNum   = date.getDate();
    const month    = MONTHS_FR[date.getMonth()];

    const numEl    = el('div', { cls: 'day-num', text: String(dayNum).padStart(2,'0') });
    const labelEl  = el('div', { cls: 'day-label', text: dayName + ' ' + dayNum + ' ' + month });

    return el('div', { cls: 'day-header', children: [numEl, labelEl] });
  }

  /* ── Render ─────────────────────────────────────────────── */
  let dayEls = [];

  function render() {
    // Clear
    while (container.firstChild) container.removeChild(container.firstChild);
    dayEls = [];

    const filtered = allEvents.filter(ev => {
      const matchPublic = filters.public === 'tous' || ev.screening.venueType === filters.public;
      const matchVille  = filters.ville  === 'toutes' || ev.screening.city === filters.ville;
      return matchPublic && matchVille;
    });

    if (filtered.length === 0) {
      if (emptyMsg) emptyMsg.style.display = 'block';
      return;
    }
    if (emptyMsg) emptyMsg.style.display = 'none';

    const groups = groupByDate(filtered);
    Object.keys(groups).sort().forEach(dateStr => {
      const group = groups[dateStr];

      const eventsContainer = el('div', { cls: 'day-events' });
      group.forEach(({ film, screening }) => {
        eventsContainer.appendChild(createEventCard(film, screening));
      });

      const dayBlock = el('div', {
        cls: 'programme-day',
        children: [buildDayHeader(dateStr), eventsContainer]
      });

      container.appendChild(dayBlock);
      dayEls.push(dayBlock);
    });
  }

  /* ── Filter buttons (public) ────────────────────────────── */
  document.querySelectorAll('.prog-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filters.public = btn.dataset.val;
      document.querySelectorAll('.prog-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    });
  });

  /* ── City select ────────────────────────────────────────── */
  if (citySelect) {
    citySelect.addEventListener('change', () => {
      filters.ville = citySelect.value;
      render();
    });
  }

  /* ── Initial render ─────────────────────────────────────── */
  render();
});
