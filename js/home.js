/* ============================================================
   HOME.JS — Page d'accueil : films en vedette + villes
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Films en vedette (6 premiers) ────────────────────── */
  const featuredContainer = document.getElementById('featured-films');
  if (featuredContainer) {
    const featured = FILMS.slice(0, 6);
    featured.forEach((film, i) => {
      const cls = i === 0 ? ['selection-item', 'selection-item--featured'] : ['selection-item'];
      const wrapper = el('div', { cls });
      const card = createFilmCard(film);
      if (i === 0) {
        const badge = el('div', { cls: 'featured-badge', text: 'Film d\'ouverture' });
        card.querySelector('.card-poster').appendChild(badge);
      }
      wrapper.appendChild(card);
      featuredContainer.appendChild(wrapper);
    });
  }

  /* ── Keyboard nav carousel ──────────────────────────── */
  if (featuredContainer) {
    featuredContainer.setAttribute('tabindex', '0');
    featuredContainer.setAttribute('role', 'region');
    featuredContainer.setAttribute('aria-label', 'Films en sélection officielle — navigation avec les flèches');
    featuredContainer.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { featuredContainer.scrollBy({ left: 320, behavior: 'smooth' }); e.preventDefault(); }
      if (e.key === 'ArrowLeft')  { featuredContainer.scrollBy({ left: -320, behavior: 'smooth' }); e.preventDefault(); }
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

    /* Place markers — même style que la page carte */
    CITIES.forEach(city => {
      if (!cityCount[city.name]) return;
      const icon = L.divIcon({
        className: '',
        html: '<div class="amnesty-marker" role="img" aria-label="Ville du festival"><svg class="amnesty-marker-icon" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C10 4 8 7 9 10c-2-1-2-4-1-6C5 7 4 11 7 14c-1 0-2-1-2-2 0 3 3 6 7 6s7-3 7-6c0 1-1 2-2 2 3-3 2-7-1-10-1 2-1 5-3 6 1-3-1-6-1-8z" fill="currentColor"/><rect x="9" y="18" width="6" height="8" rx="1" fill="currentColor"/><rect x="7" y="25" width="10" height="3" rx="1" fill="currentColor"/></svg></div>',
        iconSize:   [28, 28],
        iconAnchor: [14, 28],
      });
      L.marker([city.lat, city.lng], { icon })
        .addTo(minimap)
        .on('click', () => { window.location.href = 'carte.html'; });
    });

    setTimeout(() => minimap.invalidateSize(), 100);
  }
});
