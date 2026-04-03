/* ============================================================
   ADMIN-SYNC.JS
   Écrase FILMS avec les données sauvegardées par l'admin
   (localStorage clé "admin_films") si elles existent.
   À charger après data.js, avant tout autre script.
   ============================================================ */
(function () {
  try {
    var stored = localStorage.getItem('admin_films');
    if (stored) {
      var parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length) {
        FILMS = parsed;
      }
    }
  } catch (e) {}
})();
