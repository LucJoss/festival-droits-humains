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
        html: '<div class="amnesty-marker" role="img" aria-label="Ville du festival"><div class="amnesty-marker-dot"></div></div>',
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
