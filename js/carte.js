/* ============================================================
   CARTE.JS — Carte interactive Leaflet — Version futuriste
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Init map ───────────────────────────────────────────── */
  const map = L.map('map', {
    center: [43.7, 4.8],
    zoom: 7,
    zoomControl: true,
    attributionControl: true,
  });

  /* CartoDB Dark Matter tiles */
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  /* ── Build city → films index ───────────────────────────── */
  const cityFilms = {};
  FILMS.forEach(film => {
    film.screenings.forEach(s => {
      if (!cityFilms[s.city]) cityFilms[s.city] = [];
      cityFilms[s.city].push({ film, screening: s });
    });
  });

  /* ── HUD stats ──────────────────────────────────────────── */
  const totalScreenings = Object.values(cityFilms).reduce((acc, arr) => acc + arr.length, 0);
  const hudScreenings = document.getElementById('hud-screenings');
  if (hudScreenings) hudScreenings.textContent = totalScreenings;

  /* ── Custom animated marker ──────────────────────────────── */
  function makeMarker(cityName, active = false) {
    const rings = active
      ? '<div class="map-dot-ring"></div><div class="map-dot-ring map-dot-ring-2"></div>'
      : '<div class="map-dot-ring"></div>';
    return L.divIcon({
      className: '',
      html: `<div class="map-dot${active ? ' active' : ''}">
        ${rings}
        <div class="map-dot-core"></div>
        <div class="map-dot-label">${cityName}</div>
      </div>`,
      iconSize:    [20, 20],
      iconAnchor:  [10, 10],
      popupAnchor: [0, -16],
    });
  }

  /* ── Popup content with film list ───────────────────────── */
  function buildPopupEl(cityName) {
    const events = (cityFilms[cityName] || [])
      .slice()
      .sort((a, b) => a.screening.date.localeCompare(b.screening.date));

    const wrap = el('div', { cls: 'popup-inner' });
    wrap.appendChild(el('div', { cls: 'popup-city', text: cityName }));
    wrap.appendChild(el('div', {
      cls: 'popup-count',
      text: events.length + ' diffusion' + (events.length > 1 ? 's' : '')
    }));

    const filmsList = el('div', { cls: 'popup-films' });
    events.slice(0, 3).forEach(({ film, screening }) => {
      const item = el('a', {
        cls: 'popup-film-item',
        attrs: { href: 'film-detail.html?id=' + film.id }
      });
      item.appendChild(el('div', { cls: 'popup-film-title', text: film.title }));
      item.appendChild(el('div', {
        cls: 'popup-film-date',
        text: formatDate(screening.date) + ' · ' + screening.time + ' — ' + screening.venue
      }));
      filmsList.appendChild(item);
    });
    wrap.appendChild(filmsList);

    if (events.length > 3) {
      wrap.appendChild(el('div', {
        cls: 'popup-film-more',
        text: '+ ' + (events.length - 3) + ' autres séances'
      }));
    }

    return wrap;
  }

  /* ── State ──────────────────────────────────────────────── */
  let activeCity  = null;
  const markers   = {};

  /* ── Sidebar elements ───────────────────────────────────── */
  const panel     = document.getElementById('map-films-panel');
  const panelCity = document.getElementById('map-panel-city');
  const filmsList = document.getElementById('map-films-list');

  /* ── Show city panel ────────────────────────────────────── */
  function showCity(cityName) {
    activeCity = cityName;

    /* Update all markers */
    Object.entries(markers).forEach(([city, marker]) => {
      marker.setIcon(makeMarker(city, city === cityName));
    });

    /* Update sidebar city buttons */
    document.querySelectorAll('.map-city-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.city === cityName);
    });

    /* Update panel */
    if (panelCity) panelCity.textContent = cityName;

    /* Rebuild films list */
    while (filmsList && filmsList.firstChild) filmsList.removeChild(filmsList.firstChild);

    const events = (cityFilms[cityName] || [])
      .slice()
      .sort((a, b) => a.screening.date.localeCompare(b.screening.date));

    events.forEach(({ film, screening }) => {
      const titleEl  = el('div', { cls: 'map-film-title', text: film.title });
      const detailEl = el('div', {
        cls: 'map-film-detail',
        text: formatDate(screening.date) + ' · ' + screening.time + ' — ' + screening.venue
      });
      const itemLink = el('a', {
        cls: 'map-film-item',
        attrs: { href: 'film-detail.html?id=' + film.id },
        children: [titleEl, detailEl]
      });
      if (filmsList) filmsList.appendChild(itemLink);
    });

    if (panel) {
      panel.style.display = 'block';
      panel.classList.remove('entering');
      void panel.offsetWidth; /* reflow for animation restart */
      panel.classList.add('entering');
    }

    /* Fly to city */
    const cityData = CITIES.find(c => c.name === cityName);
    if (cityData) {
      map.flyTo([cityData.lat, cityData.lng], 10, { duration: 0.9, easeLinearity: 0.4 });
    }
  }

  /* ── Place markers ──────────────────────────────────────── */
  CITIES.forEach(city => {
    if (!cityFilms[city.name]) return;

    const marker = L.marker([city.lat, city.lng], { icon: makeMarker(city.name, false) });

    const popup = L.popup({
      closeButton: true,
      offset:      [0, 0],
      maxWidth:    260,
      className:   'amnesty-popup',
    });
    popup.setContent(buildPopupEl(city.name));
    marker.bindPopup(popup);

    marker.on('click', () => {
      showCity(city.name);
    });

    marker.addTo(map);
    markers[city.name] = marker;
  });

  /* ── Populate sidebar city list from data ───────────────── */
  const cityListEl = document.getElementById('map-city-list');
  if (cityListEl) {
    const sortedCities = Object.keys(cityFilms).sort();
    sortedCities.forEach(cityName => {
      const count   = cityFilms[cityName].length;
      const nameEl  = el('div', { cls: 'map-city-name', text: cityName });
      const countEl = el('div', { cls: 'map-city-count', text: count + ' séance' + (count > 1 ? 's' : '') });
      const btn = el('button', {
        cls: 'map-city-btn',
        attrs: { 'data-city': cityName },
        children: [nameEl, countEl]
      });
      btn.addEventListener('click', () => {
        showCity(cityName);
        map.invalidateSize();
      });
      cityListEl.appendChild(btn);
    });
  }

  /* ── Resize fix ─────────────────────────────────────────── */
  setTimeout(() => map.invalidateSize(), 120);
  window.addEventListener('resize', () => map.invalidateSize());

});
