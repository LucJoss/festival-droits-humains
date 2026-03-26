/* ============================================================
   HOME.JS — Page d'accueil : films en vedette + villes
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Films en vedette (6 premiers) ────────────────────── */
  const featuredContainer = document.getElementById('featured-films');
  if (featuredContainer) {
    const featured = FILMS.slice(0, 6);
    featured.forEach(film => {
      const wrapper = el('div', { cls: 'selection-item' });
      wrapper.appendChild(createFilmCard(film));
      featuredContainer.appendChild(wrapper);
    });
  }

  /* ── Top 4 villes par nombre de séances ─────────────── */
  const cityMap = {};
  FILMS.forEach(f => f.screenings.forEach(s => {
    cityMap[s.city] = (cityMap[s.city] || 0) + 1;
  }));

  const topCities = Object.entries(cityMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4);

  const citiesGrid = document.getElementById('cities-grid');
  if (citiesGrid) {
    topCities.forEach(([city, count], i) => {
      const numEl   = el('div', { cls: 'city-num', text: '0' + (i + 1) });
      const nameEl  = el('div', { cls: 'city-name', text: city });
      const filmsEl = el('div', {
        cls: 'city-films',
        text: count + ' séance' + (count > 1 ? 's' : '')
      });
      const arrowEl = el('div', { cls: 'city-arrow', text: '→' });

      const card = el('a', {
        cls: ['city-card', 'reveal'],
        attrs: { href: 'carte.html' },
        children: [numEl, nameEl, filmsEl, arrowEl]
      });

      citiesGrid.appendChild(card);
    });
  }

  /* ── Lucide icons init ─────────────────────────────── */
  if (typeof lucide !== 'undefined') lucide.createIcons();

  /* ── Mini-map villes ────────────────────────────────── */
  const minimapEl = document.getElementById('cities-minimap-map');
  if (minimapEl && typeof L !== 'undefined') {
    const minimap = L.map('cities-minimap-map', {
      center: [43.7, 4.8],
      zoom: 7,
      zoomControl: false,
      attributionControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 12,
    }).addTo(minimap);

    /* Build city → count index */
    const cityCount = {};
    FILMS.forEach(f => f.screenings.forEach(s => {
      cityCount[s.city] = (cityCount[s.city] || 0) + 1;
    }));

    /* Place dots */
    CITIES.forEach(city => {
      if (!cityCount[city.name]) return;
      const dot = L.divIcon({
        className: '',
        html: '<div class="map-dot"><div class="map-dot-ring"></div><div class="map-dot-core"></div></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });
      L.marker([city.lat, city.lng], { icon: dot })
        .addTo(minimap)
        .on('click', () => { window.location.href = 'carte.html'; });
    });

    setTimeout(() => minimap.invalidateSize(), 100);
  }
});
