/* ============================================================
   CARTE.JS — Carte interactive Leaflet
   Click 1 : info popup sans zoom
   Click 2 (même ville) : zoom + panel films complet
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Init map ───────────────────────────────────────────── */
  const map = L.map('map', {
    center: [43.7, 4.8],
    zoom: 7,
    zoomControl: true,
    attributionControl: true,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  /* ── City → films index ──────────────────────────────────── */
  const cityFilms = {};
  FILMS.forEach(film => {
    film.screenings.forEach(s => {
      if (!cityFilms[s.city]) cityFilms[s.city] = [];
      cityFilms[s.city].push({ film, screening: s });
    });
  });

  /* ── HUD stats ───────────────────────────────────────────── */
  const totalScreenings = Object.values(cityFilms).reduce((acc, arr) => acc + arr.length, 0);
  const hudEl = document.getElementById('hud-screenings');
  if (hudEl) hudEl.textContent = totalScreenings;

  /* ── Marker icon factory ─────────────────────────────────── */
  function makeIcon(active = false) {
    return L.divIcon({
      className: '',
      html: `<div class="amnesty-marker${active ? ' active' : ''}" role="img" aria-label="Ville du festival"><svg class="amnesty-marker-icon" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C10 4 8 7 9 10c-2-1-2-4-1-6C5 7 4 11 7 14c-1 0-2-1-2-2 0 3 3 6 7 6s7-3 7-6c0 1-1 2-2 2 3-3 2-7-1-10-1 2-1 5-3 6 1-3-1-6-1-8z" fill="currentColor"/><rect x="9" y="18" width="6" height="8" rx="1" fill="currentColor"/><rect x="7" y="25" width="10" height="3" rx="1" fill="currentColor"/></svg></div>`,
      iconSize:    [28, 28],
      iconAnchor:  [14, 28],
      popupAnchor: [0, -30],
    });
  }

  /* ── Popup content with film list ────────────────────────── */
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

    /* CTA → 2nd click to zoom */
    const cta = el('button', { cls: 'popup-cta', text: 'Voir toutes les séances →' });
    cta.addEventListener('click', () => {
      map.closePopup();
      showCityFull(cityName);
    });
    wrap.appendChild(cta);

    return wrap;
  }

  /* ── State ───────────────────────────────────────────────── */
  let activeCity = null;
  const markers  = {};

  /* ── Sidebar refs ────────────────────────────────────────── */
  const panel    = document.getElementById('map-films-panel');
  const panelCity = document.getElementById('map-panel-city');
  const filmsListEl = document.getElementById('map-films-list');

  /* ── Show city full (zoom + sidebar) ─────────────────────── */
  function showCityFull(cityName) {
    activeCity = cityName;

    /* Update markers */
    Object.entries(markers).forEach(([city, marker]) => {
      marker.setIcon(makeIcon(city === cityName));
    });

    /* Update sidebar buttons */
    document.querySelectorAll('.map-city-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.city === cityName);
    });

    /* Populate sidebar panel */
    if (panelCity) panelCity.textContent = cityName;
    while (filmsListEl && filmsListEl.firstChild) filmsListEl.removeChild(filmsListEl.firstChild);

    const events = (cityFilms[cityName] || [])
      .slice()
      .sort((a, b) => a.screening.date.localeCompare(b.screening.date));

    events.forEach(({ film, screening }) => {
      const titleEl  = el('div', { cls: 'map-film-title', text: film.title });
      const detailEl = el('div', {
        cls: 'map-film-detail',
        text: formatDate(screening.date) + ' · ' + screening.time + ' — ' + screening.venue
      });
      const link = el('a', {
        cls: 'map-film-item',
        attrs: { href: 'film-detail.html?id=' + film.id },
        children: [titleEl, detailEl]
      });
      if (filmsListEl) filmsListEl.appendChild(link);
    });

    if (panel) {
      panel.style.display = 'block';
      panel.classList.remove('entering');
      void panel.offsetWidth;
      panel.classList.add('entering');
    }

    /* Zoom to city */
    const cityData = CITIES.find(c => c.name === cityName);
    if (cityData) {
      map.flyTo([cityData.lat, cityData.lng], 11, { duration: 0.9, easeLinearity: 0.4 });
    }
  }

  /* ── Click on marker: 1st click = popup, 2nd = full view ─── */
  function handleMarkerClick(cityName, marker) {
    if (activeCity === cityName) {
      /* 2nd click on same city → full view */
      map.closePopup();
      showCityFull(cityName);
    } else {
      /* 1st click → just update light state + popup, no zoom */
      activeCity = cityName;
      Object.entries(markers).forEach(([c, m]) => {
        m.setIcon(makeIcon(c === cityName));
      });
      document.querySelectorAll('.map-city-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.city === cityName);
      });
      marker.openPopup();
    }
  }

  /* ── Place markers ───────────────────────────────────────── */
  CITIES.forEach(city => {
    if (!cityFilms[city.name]) return;

    const marker = L.marker([city.lat, city.lng], { icon: makeIcon(false) });

    const popup = L.popup({
      closeButton: true,
      offset:      [6, 0],
      maxWidth:    260,
      className:   'amnesty-popup',
    });
    popup.setContent(buildPopupEl(city.name));
    marker.bindPopup(popup);

    marker.on('click', () => handleMarkerClick(city.name, marker));
    marker.addTo(map);
    markers[city.name] = marker;
  });

  /* ── Populate sidebar city list ──────────────────────────── */
  const cityListEl = document.getElementById('map-city-list');
  if (cityListEl) {
    Object.keys(cityFilms).sort((a, b) => cityFilms[b].length - cityFilms[a].length).forEach(cityName => {
      const count   = cityFilms[cityName].length;
      const nameEl  = el('div', { cls: 'map-city-name', text: cityName });
      const countEl = el('div', { cls: 'map-city-count', text: count + ' séance' + (count > 1 ? 's' : '') });
      const btn = el('button', {
        cls: 'map-city-btn',
        attrs: { 'data-city': cityName },
        children: [nameEl, countEl]
      });
      btn.addEventListener('click', () => {
        showCityFull(cityName);
        map.invalidateSize();
      });
      cityListEl.appendChild(btn);
    });
  }

  /* ── Resize fix ──────────────────────────────────────────── */
  setTimeout(() => map.invalidateSize(), 120);
  window.addEventListener('resize', () => map.invalidateSize());

});
