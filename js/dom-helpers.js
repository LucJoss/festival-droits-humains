/* ============================================================
   DOM HELPERS — Création d'éléments sans innerHTML
   Toutes les données sont contrôlées (data.js interne),
   mais on utilise les API DOM sûres par principe.
   ============================================================ */

/**
 * Crée un élément avec attributs et enfants
 * @param {string} tag
 * @param {Object} opts - { cls, attrs, text, children }
 */
function el(tag, opts = {}) {
  const node = document.createElement(tag);
  if (opts.cls) {
    const classes = Array.isArray(opts.cls) ? opts.cls : opts.cls.split(' ');
    classes.filter(Boolean).forEach(c => node.classList.add(c));
  }
  if (opts.attrs) {
    Object.entries(opts.attrs).forEach(([k, v]) => node.setAttribute(k, v));
  }
  if (opts.text !== undefined) {
    node.textContent = opts.text;
  }
  if (opts.style) {
    Object.entries(opts.style).forEach(([k, v]) => { node.style[k] = v; });
  }
  if (opts.children) {
    opts.children.forEach(child => { if (child) node.appendChild(child); });
  }
  return node;
}

/** Shorthand: text node */
function txt(str) { return document.createTextNode(str); }

/** Badge element */
function createBadge(text, type) {
  return el('span', { cls: ['badge', 'badge-' + type], text });
}

/** Film format badge */
function formatBadge(format) {
  return createBadge(format === 'long' ? 'Long métrage' : 'Court métrage', 'format');
}

/** Film genre badge */
function genreBadge(genre) {
  return createBadge(genre === 'documentaire' ? 'Documentaire' : 'Fiction', 'genre');
}

/** VenueType badge */
function venueBadge(venueType) {
  const labels = { cinema: 'Cinéma', ecole: 'École', association: 'Association' };
  return createBadge(labels[venueType] || venueType, venueType);
}

/** Poster placeholder element */
function createPosterPlaceholder() {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.style.width = '32px';
  svg.style.height = '32px';

  const paths = [
    'M2 2h20v20H2z',
    'M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 7h5M17 17h5'
  ];
  paths.forEach(d => {
    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', d);
    svg.appendChild(path);
  });

  return el('div', {
    cls: 'card-poster-inner',
    children: [svg, el('span', { text: 'Affiche' })]
  });
}

/**
 * Carte de film (list/grid)
 */
function createFilmCard(film) {
  const badges = el('div', { cls: 'card-badges', children: [formatBadge(film.format), genreBadge(film.genre)] });

  const poster = el('div', { cls: 'card-poster', children: [createPosterPlaceholder()] });

  const title = el('div', { cls: 'card-title', text: film.title });
  const director = el('div', { cls: ['card-meta', 'card-director'], text: film.director });
  const meta = el('div', {
    cls: 'card-meta',
    text: film.country + ' · ' + film.year + ' · ' + formatDuration(film.duration)
  });

  const link = el('a', {
    cls: 'film-card',
    attrs: { href: 'film-detail.html?id=' + film.id },
    children: [poster, badges, title, director, meta]
  });

  return link;
}

/**
 * Carte de séance (screening row)
 */
function createScreeningCard(screening) {
  const dateEl = el('div', { cls: 'screening-date', text: formatDate(screening.date) });
  const timeEl = el('div', { cls: 'screening-time', text: screening.time });

  const cityEl = el('div', { cls: 'screening-city', text: screening.city });
  const venueEl = el('div', { cls: 'screening-venue', text: screening.venue });
  const infoEl = el('div', { children: [cityEl, venueEl] });

  const badgeEl = el('div', { cls: 'screening-badge', children: [venueBadge(screening.venueType)] });

  return el('div', {
    cls: 'screening-card',
    children: [dateEl, timeEl, infoEl, badgeEl]
  });
}

/**
 * Carte d'événement (ligne programme)
 */
function createEventCard(film, screening) {
  const timeEl = el('div', { cls: 'event-time', text: screening.time });

  const titleEl = el('div', { cls: 'event-film-title', text: film.title });
  const detailEl = el('div', {
    cls: 'event-details',
    text: screening.venue + ' — ' + film.director + ' · ' + formatDuration(film.duration)
  });
  const infoEl = el('div', { cls: 'event-info', children: [titleEl, detailEl] });

  const rightEl = el('div', {
    cls: 'event-right',
    children: [venueBadge(screening.venueType), genreBadge(film.genre)]
  });

  const card = el('a', {
    cls: 'event-card',
    attrs: { href: 'film-detail.html?id=' + film.id },
    children: [timeEl, infoEl, rightEl]
  });

  return card;
}
