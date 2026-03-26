/* ============================================================
   FILM-DETAIL.JS — Page de détail d'un film
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Récupérer l'ID depuis l'URL ────────────────────────── */
  const params = new URLSearchParams(window.location.search);
  const id     = params.get('id');
  const film   = id ? getFilmById(id) : null;

  if (!film) {
    /* Film non trouvé — afficher message */
    const main = document.getElementById('detail-content');
    if (main) {
      const msg = el('div', {
        style: { padding: '10rem 2rem', textAlign: 'center' },
        children: [
          el('h2', { cls: [], text: 'Film introuvable', style: { fontFamily: 'var(--font-display)', fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1rem' } }),
          el('a',  { cls: 'btn btn-outline', attrs: { href: 'films.html' }, text: '← Retour aux films' })
        ]
      });
      main.appendChild(msg);
    }
    return;
  }

  /* ── Titre de la page ───────────────────────────────────── */
  document.title = film.title + ' — Au Cinéma Pour les Droits Humains';

  /* ── Hero ───────────────────────────────────────────────── */
  const heroTitle = document.getElementById('detail-title');
  if (heroTitle) heroTitle.textContent = film.title;

  const heroDirector = document.getElementById('detail-director');
  if (heroDirector) {
    heroDirector.appendChild(txt('Réalisé par '));
    const strong = el('strong', { text: film.director });
    heroDirector.appendChild(strong);
  }

  /* Badges hero */
  const heroBadges = document.getElementById('detail-badges');
  if (heroBadges) {
    heroBadges.appendChild(formatBadge(film.format));
    heroBadges.appendChild(genreBadge(film.genre));
  }

  /* ── Specs (sidebar) ────────────────────────────────────── */
  const specData = [
    ['Pays',     film.country],
    ['Année',    String(film.year)],
    ['Durée',    formatDuration(film.duration)],
    ['Format',   film.format === 'long' ? 'Long métrage' : 'Court métrage'],
    ['Genre',    film.genre === 'documentaire' ? 'Documentaire' : 'Fiction'],
    ['Séances',  film.screenings.length + ' diffusion' + (film.screenings.length > 1 ? 's' : '')],
  ];

  const specsEl = document.getElementById('detail-specs');
  if (specsEl) {
    specData.forEach(([label, value]) => {
      const row = el('div', {
        cls: 'detail-spec',
        children: [
          el('span', { cls: 'spec-label', text: label }),
          el('span', { cls: 'spec-val',   text: value })
        ]
      });
      specsEl.appendChild(row);
    });
  }

  /* ── Synopsis ───────────────────────────────────────────── */
  const synopsisEl = document.getElementById('detail-synopsis');
  if (synopsisEl) {
    film.synopsis.split('\n\n').forEach(para => {
      if (para.trim()) {
        synopsisEl.appendChild(el('p', { text: para.trim() }));
      }
    });
  }

  /* ── Séances ────────────────────────────────────────────── */
  const screeningsEl = document.getElementById('detail-screenings');
  if (screeningsEl) {
    const sorted = [...film.screenings].sort((a, b) => a.date.localeCompare(b.date));
    sorted.forEach(s => screeningsEl.appendChild(createScreeningCard(s)));
  }

  /* ── Films similaires (même genre, autre id) ────────────── */
  const relatedEl = document.getElementById('related-films');
  if (relatedEl) {
    const related = FILMS
      .filter(f => f.id !== film.id && f.genre === film.genre)
      .slice(0, 4);
    related.forEach(f => {
      const card = createFilmCard(f);
      relatedEl.appendChild(card);
    });
  }
});
