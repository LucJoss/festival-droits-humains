/* ============================================================
   FESTIVAL AU CINÉMA POUR LES DROITS HUMAINS
   Data — Films & Séances (données fictives de démonstration)
   ============================================================ */

const CITIES = [
  { name: "Marseille",       lat: 43.2965, lng: 5.3698  },
  { name: "Nice",            lat: 43.7102, lng: 7.2620  },
  { name: "Montpellier",     lat: 43.6108, lng: 3.8767  },
  { name: "Toulon",          lat: 43.1242, lng: 5.9280  },
  { name: "Aix-en-Provence", lat: 43.5297, lng: 5.4474  },
  { name: "Nîmes",           lat: 43.8367, lng: 4.3601  },
  { name: "Avignon",         lat: 43.9493, lng: 4.8055  },
  { name: "Perpignan",       lat: 42.6976, lng: 2.8954  },
  { name: "Arles",           lat: 43.6767, lng: 4.6278  },
  { name: "Fréjus",          lat: 43.4328, lng: 6.7369  },
  { name: "Grasse",          lat: 43.6584, lng: 6.9239  },
  { name: "Antibes",         lat: 43.5808, lng: 7.1282  },
  { name: "Menton",          lat: 43.7753, lng: 7.5019  },
  { name: "Hyères",          lat: 43.1199, lng: 6.1289  },
  { name: "Draguignan",      lat: 43.5377, lng: 6.4649  },
  { name: "Gap",             lat: 44.5594, lng: 6.0773  },
  { name: "Digne-les-Bains", lat: 44.0922, lng: 6.2360  },
  { name: "Sisteron",        lat: 44.2017, lng: 5.9422  },
  { name: "Orange",          lat: 44.1378, lng: 4.8079  },
  { name: "Carcassonne",     lat: 43.2130, lng: 2.3491  },
];

const FILMS = [
  /* ── LONG MÉTRAGE · DOCUMENTAIRE ──────────────────────── */
  {
    id: 1,
    title: "Les Oubliés de Lampedusa",
    director: "Sofia Esposito",
    year: 2024,
    country: "Italie / France",
    duration: 98,
    format: "long",
    genre: "documentaire",
    synopsis: "Au large de Lampedusa, des centaines de migrants tentent chaque nuit la traversée périlleuse depuis les côtes africaines. Sofia Esposito a passé six mois sur cette île italienne à documenter le quotidien des survivants, des sauveteurs et des habitants. Un portrait bouleversant d'humanité confrontée à l'insupportable.\n\nEntre la mer indifférente et les politiques européennes, le film interroge notre responsabilité collective face à ceux que le monde refuse de voir. Esposito filme avec une pudeur rare, laissant les silences parler là où les mots échouent.\n\nPrimé au Festival de Berlin 2024, ce documentaire est devenu une référence incontournable sur la crise migratoire méditerranéenne.",
    screenings: [
      { date: "2027-03-04", time: "19:30", city: "Marseille",       venue: "Cinéma Le Prado",        venueType: "cinema"      },
      { date: "2027-03-09", time: "20:00", city: "Nice",            venue: "Cinémathèque de Nice",   venueType: "cinema"      },
      { date: "2027-03-14", time: "18:30", city: "Toulon",          venue: "Lycée Dumont d'Urville", venueType: "ecole"       },
      { date: "2027-03-21", time: "20:30", city: "Montpellier",     venue: "Cinéma Diagonal",        venueType: "cinema"      },
    ]
  },
  {
    id: 2,
    title: "Silence dans les Champs",
    director: "Pierre-Emmanuel Gillet",
    year: 2024,
    country: "France",
    duration: 112,
    format: "long",
    genre: "documentaire",
    synopsis: "Dans les grandes exploitations agricoles du sud de la France, des milliers de travailleurs saisonniers vivent dans des conditions de quasi-esclavage. Pierre-Emmanuel Gillet a enquêté pendant deux ans, caméra cachée, pour révéler un système économique fondé sur l'exploitation des plus vulnérables.\n\nDes serres de Perpignan aux vergers de la Durance, le réalisateur donne la parole à ceux qui nourrissent la France sans jamais apparaître sur nos tables. Un documentaire-enquête qui dérange autant qu'il émeut.\n\nSélection officielle IDFA Amsterdam 2024.",
    screenings: [
      { date: "2027-03-02", time: "20:00", city: "Perpignan",       venue: "Cinéma Castillet",       venueType: "cinema"      },
      { date: "2027-03-11", time: "19:00", city: "Avignon",         venue: "Cinéma Utopia",          venueType: "cinema"      },
      { date: "2027-03-17", time: "18:00", city: "Arles",           venue: "Association Espace Noir", venueType: "association" },
    ]
  },
  {
    id: 3,
    title: "Women Rising",
    director: "Leila Hatami",
    year: 2025,
    country: "Iran / France",
    duration: 105,
    format: "long",
    genre: "documentaire",
    synopsis: "À travers le portrait de cinq femmes iraniennes de générations différentes, Leila Hatami trace l'histoire d'un mouvement qui refuse de mourir. Depuis les premières manifestations de 1979 jusqu'au soulèvement de 2022, ces voix tissent une épopée de la résistance féminine.\n\nTourné clandestinement en Iran et en exil, le film est lui-même un acte de résistance. Hatami signe son œuvre la plus personnelle et la plus universelle.\n\nGrand Prix du Jury au Festival de Sundance 2025.",
    screenings: [
      { date: "2027-03-06", time: "20:30", city: "Aix-en-Provence", venue: "Cinéma Mazarin",          venueType: "cinema"      },
      { date: "2027-03-13", time: "18:30", city: "Nîmes",           venue: "Cinéma Le Sémaphore",    venueType: "cinema"      },
      { date: "2027-03-20", time: "20:00", city: "Marseille",       venue: "MuCEM — Auditorium",     venueType: "association" },
    ]
  },
  {
    id: 4,
    title: "Stateless",
    director: "Maya Goldberg",
    year: 2024,
    country: "Israël / France",
    duration: 94,
    format: "long",
    genre: "documentaire",
    synopsis: "Ils sont des millions dans le monde à ne posséder aucune nationalité — les apatrides. Maya Goldberg suit pendant trois ans le parcours kafkaïen de quatre personnes à travers quatre continents, cherchant à prouver leur existence à des États qui refusent de les reconnaître.\n\nUne exploration rigoureuse et humaine d'une crise invisible, portée par une narration qui ne cède jamais à la facilité. Goldberg filme avec une précision documentaire et une tendresse palpable.\n\nPrimé au Hot Docs Film Festival, Toronto 2024.",
    screenings: [
      { date: "2027-03-05", time: "19:00", city: "Nice",            venue: "IUT de Nice",            venueType: "ecole"       },
      { date: "2027-03-12", time: "20:00", city: "Antibes",         venue: "Cinéma Royal",           venueType: "cinema"      },
      { date: "2027-03-19", time: "18:30", city: "Grasse",          venue: "Maison des Associations", venueType: "association" },
    ]
  },
  {
    id: 5,
    title: "Amazonie en Flammes",
    director: "Mariana Borges",
    year: 2024,
    country: "Brésil / France",
    duration: 118,
    format: "long",
    genre: "documentaire",
    synopsis: "Aux premières loges de la déforestation amazonienne, Mariana Borges accompagne pendant deux saisons les défenseurs indigènes de la forêt. Leurs luttes juridiques, physiques et spirituelles contre l'agro-industrie composent un tableau épique de la résistance écologique.\n\nLe film entrecroise les témoignages des anciens, la science climatique et les manœuvres politiques pour dessiner le portrait d'une civilisation au bord du gouffre. Une œuvre monumentale sur les droits des peuples autochtones.\n\nSélection officielle Cannes Docs 2024.",
    screenings: [
      { date: "2027-03-03", time: "20:00", city: "Montpellier",     venue: "Cinéma Diagonal",        venueType: "cinema"      },
      { date: "2027-03-10", time: "18:00", city: "Nîmes",           venue: "Collège Alphonse Daudet", venueType: "ecole"       },
      { date: "2027-03-22", time: "20:30", city: "Carcassonne",     venue: "Cinéma Colisée",         venueType: "cinema"      },
    ]
  },
  {
    id: 6,
    title: "Digital Slaves",
    director: "Tom Henderson",
    year: 2023,
    country: "Royaume-Uni / France",
    duration: 86,
    format: "long",
    genre: "documentaire",
    synopsis: "Dans les entrepôts de data centers africains, des jeunes travailleurs alimentent l'économie numérique mondiale dans des conditions inhumaines. Henderson révèle l'envers du décor de nos smartphones et réseaux sociaux — une chaîne d'exploitation invisible et mondialisée.\n\nAvec une rigueur journalistique exemplaire et une iconographie saisissante, ce documentaire-choc challenge notre rapport à la technologie et à la responsabilité des grandes entreprises numériques.\n\nTribe à BAFTA 2023.",
    screenings: [
      { date: "2027-03-07", time: "20:30", city: "Toulon",          venue: "Espace Culturel Municipal", venueType: "association" },
      { date: "2027-03-15", time: "19:00", city: "Hyères",          venue: "Cinéma Les Lumières",    venueType: "cinema"      },
    ]
  },
  {
    id: 7,
    title: "Exode",
    director: "Yasmine El-Amine",
    year: 2024,
    country: "Syrie / France",
    duration: 102,
    format: "long",
    genre: "documentaire",
    synopsis: "Yasmine El-Amine, elle-même exilée syrienne, retourne filmer ceux qui ont fait le même chemin qu'elle, dix ans plus tôt. Des camps de réfugiés libanais aux banlieues françaises, elle recompose les fragments d'une identité dispersée par la guerre.\n\nCe film est autant une enquête qu'une thérapie — pour ses sujets comme pour sa réalisatrice. Un regard intime et politique sur ce que signifie reconstruire une vie après tout avoir perdu.\n\nPrix du public au Cinéma du Réel 2024.",
    screenings: [
      { date: "2027-03-08", time: "19:30", city: "Marseille",       venue: "L'Équitable — Centre Culturel", venueType: "association" },
      { date: "2027-03-16", time: "20:00", city: "Aix-en-Provence", venue: "Cinéma Le Cézanne",       venueType: "cinema"      },
      { date: "2027-03-24", time: "18:30", city: "Gap",             venue: "Cinéma Lido",             venueType: "cinema"      },
    ]
  },
  {
    id: 8,
    title: "Disparus",
    director: "Carlos Mendoza",
    year: 2024,
    country: "Argentine / France",
    duration: 109,
    format: "long",
    genre: "documentaire",
    synopsis: "En Argentine, les mères de la Plaza de Mayo cherchent encore leurs enfants disparus sous la dictature, cinquante ans après. Carlos Mendoza filme une nouvelle génération d'activistes qui reprend le flambeau de cette lutte pour la vérité et la mémoire.\n\nEntre archives inédites et témoignages bouleversants, le film pose une question universelle : comment une société se réconcilie-t-elle avec ses crimes ? Un documentaire sur la transmission et l'imprescriptibilité des droits humains.\n\nPrix spécial du jury, Festival de San Sebastián 2024.",
    screenings: [
      { date: "2027-03-11", time: "20:00", city: "Avignon",         venue: "Cinéma Utopia",          venueType: "cinema"      },
      { date: "2027-03-18", time: "18:30", city: "Orange",          venue: "Association Mémoires Vives", venueType: "association" },
    ]
  },
  {
    id: 9,
    title: "Au-delà des Barbelés",
    director: "Rosa Nakamura",
    year: 2023,
    country: "Japon / France",
    duration: 89,
    format: "long",
    genre: "documentaire",
    synopsis: "À la frontière entre le Mexique et les États-Unis, Rosa Nakamura documente pendant un an la vie dans un centre de détention pour migrants. Avec une patience et une proximité rares, elle capte les micro-résistances, les solidarités et les humiliations de ceux que le système veut rendre invisibles.\n\nUn film d'une précision formelle remarquable, où chaque plan est une prise de position éthique. Nakamura refuse le spectaculaire pour toucher au plus profond.\n\nMeilleur documentaire, Full Frame Documentary Film Festival 2023.",
    screenings: [
      { date: "2027-03-06", time: "19:30", city: "Nice",            venue: "Cinéma Mercury",         venueType: "cinema"      },
      { date: "2027-03-13", time: "20:00", city: "Menton",          venue: "Forum des Frontières",   venueType: "association" },
    ]
  },
  {
    id: 10,
    title: "Traite",
    director: "Aïcha Moussa",
    year: 2023,
    country: "Mali / France",
    duration: 96,
    format: "long",
    genre: "documentaire",
    synopsis: "Aïcha Moussa suit le réseau de traite des êtres humains depuis les villages sahéliens jusqu'aux villes européennes. Un travail d'investigation de trois ans qui cartographie avec précision les mécanismes économiques et humains de cette forme moderne d'esclavage.\n\nSans jamais céder au voyeurisme, la réalisatrice met en lumière les complicités institutionnelles et les failles des systèmes de protection. Un film nécessaire et courageux.\n\nPrix Albert Londres de l'audiovisuel 2024.",
    screenings: [
      { date: "2027-03-09", time: "20:30", city: "Marseille",       venue: "Cinéma César",           venueType: "cinema"      },
      { date: "2027-03-17", time: "18:00", city: "Toulon",          venue: "Université du Var",      venueType: "ecole"       },
      { date: "2027-03-23", time: "19:30", city: "Draguignan",      venue: "Cinéma Rex",             venueType: "cinema"      },
    ]
  },

  /* ── LONG MÉTRAGE · FICTION ────────────────────────────── */
  {
    id: 11,
    title: "Frontière",
    director: "Karim Dridi",
    year: 2023,
    country: "France",
    duration: 115,
    format: "long",
    genre: "fiction",
    synopsis: "Amina, jeune Algérienne de 24 ans, traverse la Méditerranée avec son fils de six ans. Séparée de lui à son arrivée en France, elle entame un combat juridique acharné pour le retrouver dans un système administratif qui la broie. Karim Dridi signe un film d'une urgence politique rare, porté par une performance d'actrice exceptionnelle.\n\nEntre thriller judiciaire et drame humain, Frontière interroge notre modèle d'accueil et les limites de l'État de droit. Un film qui ne lâche pas le spectateur.\n\nCésar du meilleur film 2024.",
    screenings: [
      { date: "2027-03-05", time: "20:00", city: "Marseille",       venue: "Cinéma L'Alhambra",      venueType: "cinema"      },
      { date: "2027-03-12", time: "19:30", city: "Montpellier",     venue: "Cinéma Rabelais",        venueType: "cinema"      },
      { date: "2027-03-19", time: "20:00", city: "Perpignan",       venue: "Cinéma Castillet",       venueType: "cinema"      },
    ]
  },
  {
    id: 12,
    title: "Voix Brisées",
    director: "Mehdi Charef",
    year: 2023,
    country: "France / Maroc",
    duration: 108,
    format: "long",
    genre: "fiction",
    synopsis: "Dans une ville ouvrière du nord de la France, Fatima — ancienne militante syndicale marocaine — tente de prévenir l'expulsion de ses voisins sans-papiers. Mehdi Charef retrouve la verve sociale de ses débuts avec un film choral d'une générosité rare.\n\nPorté par une distribution d'acteurs non professionnels d'une authenticité bouleversante, Voix Brisées célèbre les résistances ordinaires et la dignité des invisibles. Un film de combat, habité par une lumière douce et tenace.\n\nPrix du jury œcuménique, Berlinale 2023.",
    screenings: [
      { date: "2027-03-03", time: "19:00", city: "Nîmes",           venue: "Cinéma Le Sémaphore",    venueType: "cinema"      },
      { date: "2027-03-10", time: "20:30", city: "Avignon",         venue: "Cinéma Utopia",          venueType: "cinema"      },
      { date: "2027-03-18", time: "18:00", city: "Orange",          venue: "Lycée Aristide Briand",  venueType: "ecole"       },
    ]
  },
  {
    id: 13,
    title: "La Terre des Ancêtres",
    director: "Amara Diallo",
    year: 2024,
    country: "Sénégal / France",
    duration: 121,
    format: "long",
    genre: "fiction",
    synopsis: "Dans un village sénégalais menacé par l'accaparement des terres d'une multinationale agricole, un jeune avocat parisien revient sur les traces de sa famille. Amara Diallo signe une fresque épique qui entremêle mémoire coloniale et luttes contemporaines.\n\nAvec une ampleur visuelle rarement atteinte dans le cinéma africain contemporain, ce film pose la question des droits fonciers et de la souveraineté alimentaire comme enjeux de droits humains fondamentaux.\n\nPrix Un Certain Regard, Cannes 2024.",
    screenings: [
      { date: "2027-03-06", time: "20:30", city: "Montpellier",     venue: "Cinéma Nestor Burma",    venueType: "cinema"      },
      { date: "2027-03-14", time: "19:00", city: "Carcassonne",     venue: "Université Paul Valéry", venueType: "ecole"       },
    ]
  },
  {
    id: 14,
    title: "The Silent Ones",
    director: "Sarah Mitchell",
    year: 2024,
    country: "Royaume-Uni",
    duration: 103,
    format: "long",
    genre: "fiction",
    synopsis: "Une journaliste britannique enquête sur le réseau de travail forcé qui alimente les chaînes d'approvisionnement de l'industrie de la mode. Entre Londres, Dhaka et Istanbul, son investigation l'emmène au cœur d'un système conçu pour rester invisible.\n\nSarah Mitchell construit un thriller haletant qui refuse pourtant de sacrifier la complexité humaine à l'efficacité narrative. Un film sur le courage journalistique et la complicité des consommateurs.\n\nMeilleur film de fiction, Sheffield DocFest 2024.",
    screenings: [
      { date: "2027-03-07", time: "20:00", city: "Nice",            venue: "Cinéma Pathé Masséna",   venueType: "cinema"      },
      { date: "2027-03-15", time: "18:30", city: "Antibes",         venue: "Cinéma Royal",           venueType: "cinema"      },
      { date: "2027-03-22", time: "19:00", city: "Menton",          venue: "Espace Cocteau",         venueType: "association" },
    ]
  },
  {
    id: 15,
    title: "Murs Invisibles",
    director: "Claire Deschamps",
    year: 2025,
    country: "France",
    duration: 97,
    format: "long",
    genre: "fiction",
    synopsis: "Au sein d'un foyer pour femmes victimes de violences conjugales, Claire Deschamps filme la lente reconstruction de six femmes aux trajectoires brisées. Refusant le mélodrame, elle choisit la durée et la discrétion pour révéler les mécanismes de l'emprise et les chemins de la liberté.\n\nPorté par une direction d'actrices d'une finesse exceptionnelle, Murs Invisibles est une ode pudique à la résilience et à la sororité. Un film qui fait confiance à l'intelligence du spectateur.\n\nSélection officielle Quinzaine des Cinéastes 2025.",
    screenings: [
      { date: "2027-03-04", time: "19:00", city: "Aix-en-Provence", venue: "Cinéma Les Variétés",    venueType: "cinema"      },
      { date: "2027-03-11", time: "20:30", city: "Marseille",       venue: "Cinéma des Variétés",    venueType: "cinema"      },
      { date: "2027-03-20", time: "18:00", city: "Sisteron",        venue: "Association FemAction",  venueType: "association" },
    ]
  },
  {
    id: 16,
    title: "L'Exil des Enfants",
    director: "Ahmed Rachidi",
    year: 2024,
    country: "Tunisie / France",
    duration: 112,
    format: "long",
    genre: "fiction",
    synopsis: "Trois enfants mineurs non accompagnés traversent l'Europe depuis la Tunisie. Ahmed Rachidi filme leur odyssée avec des acteurs non professionnels, dans un dispositif semi-documentaire qui brouille les frontières entre fiction et réalité.\n\nUn road-movie déchirant qui pose la question de la responsabilité des adultes — des passeurs aux institutions — face à la vulnérabilité des plus jeunes. La caméra de Rachidi ne lâche jamais ses personnages.\n\nPrix FIPRESCI, Venice Film Festival 2024.",
    screenings: [
      { date: "2027-03-08", time: "20:00", city: "Toulon",          venue: "Cinéma Pathé Mayol",     venueType: "cinema"      },
      { date: "2027-03-16", time: "19:30", city: "Hyères",          venue: "Lycée Costebelle",       venueType: "ecole"       },
    ]
  },
  {
    id: 17,
    title: "Le Dernier Refuge",
    director: "Elena Vasquez",
    year: 2025,
    country: "Espagne / France",
    duration: 99,
    format: "long",
    genre: "fiction",
    synopsis: "Dans une petite ville pyrénéenne, l'arrivée d'une famille syrienne bouleverse les équilibres d'une communauté qui se croyait solidaire. Elena Vasquez ausculte avec une précision clinique les contradictions entre les valeurs proclamées et les comportements réels.\n\nUne comédie acide qui vire progressivement au drame, portée par des dialogues d'une justesse éblouissante. Vasquez signe un film politique qui évite tous les manichéismes.\n\nSélection Berlin 2025.",
    screenings: [
      { date: "2027-03-13", time: "20:30", city: "Perpignan",       venue: "Cinéma Le Castillet",    venueType: "cinema"      },
      { date: "2027-03-21", time: "19:00", city: "Carcassonne",     venue: "La Manufacture",         venueType: "association" },
    ]
  },
  {
    id: 18,
    title: "Résistance Ordinaire",
    director: "Chloé Bernard",
    year: 2024,
    country: "France",
    duration: 107,
    format: "long",
    genre: "fiction",
    synopsis: "Mathilde, fonctionnaire dans une préfecture, découvre la fabrication d'arrêtés d'expulsion en masse, signés sans examen individuel. Face à la machine administrative, elle choisit de résister — au risque de sa carrière et de sa famille. Chloé Bernard signe un thriller bureaucratique fascinant.\n\nInspiré de faits réels, le film interroge la notion de lanceur d'alerte et la responsabilité morale des agents de l'État dans l'application des politiques migratoires.\n\nCésar du meilleur scénario 2025.",
    screenings: [
      { date: "2027-03-10", time: "19:30", city: "Marseille",       venue: "Cinéma Le Prado",        venueType: "cinema"      },
      { date: "2027-03-17", time: "20:00", city: "Aix-en-Provence", venue: "Sciences Po Aix",        venueType: "ecole"       },
      { date: "2027-03-24", time: "19:00", city: "Arles",           venue: "Cinéma Actes Sud",       venueType: "cinema"      },
    ]
  },
  {
    id: 19,
    title: "The Long Walk Home",
    director: "David Asante",
    year: 2023,
    country: "Ghana / Royaume-Uni",
    duration: 126,
    format: "long",
    genre: "fiction",
    synopsis: "Kwame, avocat ghanéen brillant, est arrêté et torturé après avoir défendu des opposants politiques. Libéré sous pression internationale, il entreprend un long exil qui le mènera à Londres, où il continuera à se battre depuis l'étranger pour la démocratie dans son pays.\n\nDavid Asante signe une épopée à la fois intime et politique, portée par une mise en scène classique qui sert avec élégance la force du récit. Un film sur la dignité et l'engagement.\n\nSélection Toronto International Film Festival 2023.",
    screenings: [
      { date: "2027-03-05", time: "18:30", city: "Montpellier",     venue: "Cinéma Utopia Montpellier", venueType: "cinema"   },
      { date: "2027-03-12", time: "20:00", city: "Nîmes",           venue: "Université de Nîmes",    venueType: "ecole"       },
    ]
  },
  {
    id: 20,
    title: "Née Libre",
    director: "Fatima Ould-Aoudia",
    year: 2025,
    country: "Algérie / France",
    duration: 93,
    format: "long",
    genre: "fiction",
    synopsis: "Djamila, jeune Algéroise de 19 ans, fugue pour rejoindre les manifestations du Hirak. Sa famille, déchirée entre l'attachement à l'ordre et la compréhension de son geste, parcourt Alger à sa recherche. Fatima Ould-Aoudia filme avec une énergie vitale ce moment de bascule entre générations.\n\nUn premier long métrage d'une maturité sidérante, qui capte l'élan et les contradictions d'un pays en ébullition. La liberté comme droit fondamental, filmée avec amour.\n\nPremier film, Labo du Festival de La Roche-sur-Yon 2025.",
    screenings: [
      { date: "2027-03-07", time: "19:00", city: "Nice",            venue: "Lycée Masséna",          venueType: "ecole"       },
      { date: "2027-03-14", time: "20:30", city: "Grasse",          venue: "Cinéma Eden",            venueType: "cinema"      },
      { date: "2027-03-21", time: "18:30", city: "Fréjus",          venue: "Cinéma Forum",           venueType: "cinema"      },
    ]
  },
  {
    id: 21,
    title: "Le Poids du Silence",
    director: "Ibrahim Maalouf",
    year: 2023,
    country: "Liban / France",
    duration: 104,
    format: "long",
    genre: "fiction",
    synopsis: "À Beyrouth, après l'explosion du port, un journaliste tente de documenter les responsabilités politiques malgré les menaces et le traumatisme collectif. Ibrahim Maalouf signe un film sur le droit à la vérité dans une société en état de choc.\n\nEntre récit de survie et enquête politique, le film rend hommage aux journalistes et activistes qui refusent l'oubli au péril de leur vie. Une œuvre personnelle et universelle.\n\nPrix Fipresci, Un Certain Regard, Cannes 2023.",
    screenings: [
      { date: "2027-03-04", time: "20:30", city: "Nice",            venue: "Institut du Monde Arabe Nice", venueType: "association" },
      { date: "2027-03-11", time: "19:00", city: "Toulon",          venue: "Cinéma La Colline",      venueType: "cinema"      },
    ]
  },
  {
    id: 22,
    title: "Tierra Prometida",
    director: "Carmen Reyes",
    year: 2024,
    country: "Mexique / Espagne",
    duration: 117,
    format: "long",
    genre: "fiction",
    synopsis: "Trois générations de femmes d'une même famille maya luttent pour récupérer leurs terres ancestrales confisquées par un resort touristique. Carmen Reyes tisse une fresque féministe et indigeniste d'une beauté visuelle époustouflante.\n\nEntre mythe et réalité, le film convoque les esprits de la forêt et les avocats des droits fonciers dans un même élan poétique. Un cinéma politique qui ne renonce pas à l'émerveillement.\n\nMeilleur film, Guadalajara Film Festival 2024.",
    screenings: [
      { date: "2027-03-09", time: "19:30", city: "Perpignan",       venue: "Cinéma le Castillet",    venueType: "cinema"      },
      { date: "2027-03-16", time: "20:00", city: "Montpellier",     venue: "Maison des Amériques Latines", venueType: "association" },
    ]
  },
  {
    id: 23,
    title: "Demain Peut-être",
    director: "Julien Goetz",
    year: 2025,
    country: "France",
    duration: 88,
    format: "long",
    genre: "fiction",
    synopsis: "Sofiane, 17 ans, né en France de parents maliens en situation irrégulière, apprend qu'il va être séparé de sa famille lors d'une expulsion. Sa prof de lycée et ses camarades s'organisent pour tenter d'empêcher le renvoi. Julien Goetz filme avec pudeur et efficacité une histoire d'école républicaine et de solidarité.\n\nUn film qui parle aux adolescents sans jamais les condescendre, ancré dans le réel social avec une acuité rare. Bouleversant d'humanité simple.\n\nSélection Semaine de la Critique, Cannes 2025.",
    screenings: [
      { date: "2027-03-10", time: "14:00", city: "Marseille",       venue: "Lycée Saint-Exupéry",    venueType: "ecole"       },
      { date: "2027-03-17", time: "14:00", city: "Aix-en-Provence", venue: "Lycée Cézanne",          venueType: "ecole"       },
      { date: "2027-03-24", time: "20:00", city: "Toulon",          venue: "Cinéma Pathé Mayol",     venueType: "cinema"      },
    ]
  },
  {
    id: 24,
    title: "Les Gardiens de Nuit",
    director: "Lena Kovač",
    year: 2023,
    country: "Croatie / France",
    duration: 101,
    format: "long",
    genre: "fiction",
    synopsis: "Dans un centre de rétention pour migrants en Croatie, un gardien de sécurité commence à douter de la légitimité de son travail après avoir noué des liens avec un détenu érythréen. Lena Kovač filme le quotidien de ce huis-clos avec une précision morale et formelle admirable.\n\nUn film sur les choix individuels dans les institutions répressives, sur la part humaine qui persiste même là où le système voudrait l'éteindre. Courageux et nuancé.\n\nPrix du jury, Visions du Réel 2023.",
    screenings: [
      { date: "2027-03-06", time: "20:00", city: "Fréjus",          venue: "Cinéma Forum",           venueType: "cinema"      },
      { date: "2027-03-13", time: "19:30", city: "Draguignan",      venue: "Médiathèque communautaire", venueType: "association" },
    ]
  },
  {
    id: 25,
    title: "Le Procès du Siècle",
    director: "Jean-Xavier de Lestrade",
    year: 2025,
    country: "France",
    duration: 133,
    format: "long",
    genre: "documentaire",
    synopsis: "Jean-Xavier de Lestrade suit pendant trois ans le procès de responsables pétroliers jugés pour crimes contre l'humanité dans le delta du Niger. Entre prétoire nigérian et manœuvres des lobbies à Bruxelles, un documentaire-fleuve sur la justice climatique et les droits des populations.\n\nLe réalisateur de The Staircase s'empare du format procédural pour livrer une œuvre monumentale sur l'impunité des multinationales. Un film-événement sur la responsabilité internationale.\n\nSélection Sundance 2025.",
    screenings: [
      { date: "2027-03-08", time: "17:00", city: "Marseille",       venue: "Cinéma Les Variétés",    venueType: "cinema"      },
      { date: "2027-03-15", time: "20:00", city: "Montpellier",     venue: "Cinéma Rabelais",        venueType: "cinema"      },
      { date: "2027-03-22", time: "18:30", city: "Nîmes",           venue: "Médiathèque Carré d'Art", venueType: "association" },
    ]
  },

  /* ── COURT MÉTRAGE · FICTION ──────────────────────────── */
  {
    id: 26,
    title: "Premier Soir",
    director: "Nora Hamdi",
    year: 2024,
    country: "France",
    duration: 18,
    format: "court",
    genre: "fiction",
    synopsis: "Dans un foyer d'accueil, une jeune femme passe sa première nuit en sécurité après des mois de rue. Nora Hamdi filme avec une infinie délicatesse le vertige de ce moment — entre soulagement et irréalité — dans un court-métrage d'une poésie sobre et lumineuse.",
    screenings: [
      { date: "2027-03-07", time: "18:00", city: "Marseille",       venue: "Cinéma César",           venueType: "cinema"      },
      { date: "2027-03-14", time: "17:30", city: "Toulon",          venue: "Lycée Bonaparte",        venueType: "ecole"       },
    ]
  },
  {
    id: 27,
    title: "La Lettre",
    director: "Marcus Webb",
    year: 2023,
    country: "Royaume-Uni",
    duration: 15,
    format: "court",
    genre: "fiction",
    synopsis: "Un enfant de six ans écrit une lettre à son père emprisonné politique. Webb filme cette geste toute simple avec une économie de moyens bouleversante — un récit sur l'amour filial et la répression qui se déploie sans un mot superflu.",
    screenings: [
      { date: "2027-03-11", time: "16:00", city: "Nice",            venue: "École primaire Pasteur", venueType: "ecole"       },
      { date: "2027-03-18", time: "19:00", city: "Antibes",         venue: "Cinéma Royal",           venueType: "cinema"      },
    ]
  },
  {
    id: 28,
    title: "Insoumis",
    director: "Maxime Lachaud",
    year: 2025,
    country: "France",
    duration: 22,
    format: "court",
    genre: "fiction",
    synopsis: "Un jeune objecteur de conscience refuse de se présenter à son service militaire dans un pays autoritaire fictif. Lachaud construit un récit de procès kafkaïen en temps réel, questionnant la liberté de conscience comme droit fondamental. Tendu, précis, habité.",
    screenings: [
      { date: "2027-03-05", time: "19:00", city: "Avignon",         venue: "Université d'Avignon",   venueType: "ecole"       },
      { date: "2027-03-12", time: "20:00", city: "Arles",           venue: "Cinéma Actes Sud",       venueType: "cinema"      },
    ]
  },
  {
    id: 29,
    title: "Le Passeur",
    director: "Inès Sánchez",
    year: 2024,
    country: "Espagne",
    duration: 20,
    format: "court",
    genre: "fiction",
    synopsis: "Un pêcheur espagnol qui aide régulièrement des migrants à rejoindre la côte est confronté à un dilemme moral lors d'une nuit de tempête. Court-métrage d'une intensité rare, filmé en mer avec une authenticité physique saisissante.",
    screenings: [
      { date: "2027-03-08", time: "18:30", city: "Perpignan",       venue: "Cinéma Castillet",       venueType: "cinema"      },
      { date: "2027-03-15", time: "17:00", city: "Carcassonne",     venue: "Maison des droits humains", venueType: "association" },
    ]
  },
  {
    id: 30,
    title: "Clandestine",
    director: "Anne Villacèque",
    year: 2023,
    country: "France",
    duration: 25,
    format: "court",
    genre: "fiction",
    synopsis: "Une femme sans papiers travaille comme auxiliaire de vie auprès d'une vieille dame grabataire. La relation qui se noue entre elles dépasse toutes les catégories administratives. Villacèque filme cette intimité avec une grâce et un humour qui surprennent et touchent profondément.",
    screenings: [
      { date: "2027-03-04", time: "20:00", city: "Montpellier",     venue: "Cinéma Utopia Montpellier", venueType: "cinema"   },
      { date: "2027-03-11", time: "18:00", city: "Nîmes",           venue: "Association Accueil Demain", venueType: "association" },
    ]
  },
  {
    id: 31,
    title: "Refuge",
    director: "Samir Guesmi",
    year: 2024,
    country: "Algérie / France",
    duration: 17,
    format: "court",
    genre: "fiction",
    synopsis: "Un homme cherche à obtenir la naturalisation française après vingt ans de présence sur le territoire. En dix-sept minutes, Guesmi condense une vie entière de débrouille, d'attente et de dignité préservée. Un bijou de cinéma concentré.",
    screenings: [
      { date: "2027-03-13", time: "17:30", city: "Marseille",       venue: "Lycée Thiers",           venueType: "ecole"       },
      { date: "2027-03-20", time: "19:30", city: "Aix-en-Provence", venue: "Cinéma Le Cézanne",      venueType: "cinema"      },
    ]
  },
  {
    id: 32,
    title: "Sans Papiers",
    director: "Romain Cogitore",
    year: 2025,
    country: "France",
    duration: 28,
    format: "court",
    genre: "fiction",
    synopsis: "En suivant une seule journée dans la vie d'un homme sans documents officiels à Paris, Cogitore révèle la violence sourde d'un système conçu pour l'épuiser. Un court-métrage d'une précision documentaire dans son rendu du réel, d'une force cinématographique dans ses partis-pris formels.",
    screenings: [
      { date: "2027-03-06", time: "17:00", city: "Nice",            venue: "Université Côte d'Azur",  venueType: "ecole"      },
      { date: "2027-03-13", time: "20:30", city: "Toulon",          venue: "Cinéma L'Olympia",       venueType: "cinema"      },
    ]
  },
  {
    id: 33,
    title: "The Bridge",
    director: "Kim Nguyen",
    year: 2023,
    country: "Canada / France",
    duration: 23,
    format: "court",
    genre: "fiction",
    synopsis: "Sur le pont d'une ville-frontière, deux adolescents de chaque côté — un Canadien et un Mexicain — se retrouvent chaque jour pour parler à travers le grillage. Kim Nguyen filme leur amitié impossible avec une tendresse et une ironie douce qui dit tout sur l'absurdité des frontières.",
    screenings: [
      { date: "2027-03-09", time: "14:00", city: "Perpignan",       venue: "Collège Joffre",         venueType: "ecole"       },
      { date: "2027-03-16", time: "19:00", city: "Carcassonne",     venue: "Cinéma Colisée",         venueType: "cinema"      },
    ]
  },
  {
    id: 34,
    title: "Corps Étrangers",
    director: "Maria Verdi",
    year: 2024,
    country: "Italie / France",
    duration: 19,
    format: "court",
    genre: "fiction",
    synopsis: "Dans une salle d'attente de préfecture, cinq personnes aux histoires différentes attendent leur tour. Maria Verdi filme l'espace de l'attente comme un microcosme de l'Europe contemporaine — ses contradictions, ses peurs, ses moments inattendus de grâce et de connexion humaine.",
    screenings: [
      { date: "2027-03-12", time: "18:00", city: "Nice",            venue: "Cinéma Mercury",         venueType: "cinema"      },
      { date: "2027-03-19", time: "17:30", city: "Grasse",          venue: "Lycée International",    venueType: "ecole"       },
    ]
  },
  {
    id: 35,
    title: "Le Dernier Appel",
    director: "Tristan Deroose",
    year: 2025,
    country: "Belgique / France",
    duration: 21,
    format: "court",
    genre: "fiction",
    synopsis: "Un prisonnier politique a droit à un seul coup de téléphone avant son transfert. À qui appelle-t-on quand on sait qu'on ne parlera plus à ses proches pendant des années ? Deroose filme cette question en temps réel avec une intensité qui vous coupe le souffle.",
    screenings: [
      { date: "2027-03-10", time: "20:30", city: "Avignon",         venue: "Cinéma Utopia",          venueType: "cinema"      },
      { date: "2027-03-17", time: "18:30", city: "Orange",          venue: "Centre culturel L'Arc",  venueType: "association" },
    ]
  },

  /* ── COURT MÉTRAGE · DOCUMENTAIRE ────────────────────── */
  {
    id: 36,
    title: "28 Jours",
    director: "Céline Sciamma",
    year: 2024,
    country: "France",
    duration: 30,
    format: "court",
    genre: "documentaire",
    synopsis: "Céline Sciamma documente 28 jours dans la vie d'une femme en centre de rétention, en attendant sa déportation. Sans jamais forcer l'émotion, elle capte la temporalité particulière de l'enfermement administratif et la résistance intérieure de son sujet. Sobre et dévastateur.",
    screenings: [
      { date: "2027-03-07", time: "16:00", city: "Marseille",       venue: "Lycée Périer",           venueType: "ecole"       },
      { date: "2027-03-14", time: "19:30", city: "Aix-en-Provence", venue: "Cinéma Mazarin",         venueType: "cinema"      },
    ]
  },
  {
    id: 37,
    title: "Une Vie de Rien",
    director: "Rachid Bouchareb",
    year: 2023,
    country: "France",
    duration: 26,
    format: "court",
    genre: "documentaire",
    synopsis: "Le portrait d'un homme de 70 ans, arrivé en France à 20 ans comme ouvrier et aujourd'hui à la retraite, toujours en attente de sa regularisation définitive. Bouchareb filme une vie entière suspendue à un tampon administratif — avec une rage froide et une émotion retenue qui lacèrent.",
    screenings: [
      { date: "2027-03-05", time: "18:00", city: "Toulon",          venue: "Maison des Séniors",     venueType: "association" },
      { date: "2027-03-12", time: "20:00", city: "Hyères",          venue: "Cinéma Les Lumières",    venueType: "cinema"      },
    ]
  },
  {
    id: 38,
    title: "Les Mains de Fatima",
    director: "Hana Makhmalbaf",
    year: 2025,
    country: "Iran / France",
    duration: 20,
    format: "court",
    genre: "documentaire",
    synopsis: "Un portrait d'une fileuse de tapis iranienne de 80 ans qui a vécu tous les régimes du XXe siècle. Ses mains racontent l'histoire de tout un peuple. Makhmalbaf filme avec une attention contemplative à la beauté des gestes et une révolte sourde contre l'injustice de l'oubli.",
    screenings: [
      { date: "2027-03-09", time: "17:00", city: "Nice",            venue: "Musée Matisse",          venueType: "association" },
      { date: "2027-03-16", time: "18:30", city: "Antibes",         venue: "Cinéma Royal",           venueType: "cinema"      },
    ]
  },
  {
    id: 39,
    title: "Adieu Kinshasa",
    director: "Balufu Bakupa-Kanyinda",
    year: 2024,
    country: "Congo / France",
    duration: 35,
    format: "court",
    genre: "documentaire",
    synopsis: "Depuis son exil parisien, le cinéaste congolais observe Kinshasa à travers des appels vidéo, des archives et les souvenirs de ceux qui y vivent encore. Une méditation poétique sur la distance, le deuil d'une ville et la mémoire coloniale encore présente dans chaque rue.",
    screenings: [
      { date: "2027-03-11", time: "20:00", city: "Montpellier",     venue: "Association Afrique en Scène", venueType: "association" },
      { date: "2027-03-18", time: "19:00", city: "Nîmes",           venue: "Carré d'Art Musée",      venueType: "association" },
    ]
  },
  {
    id: 40,
    title: "Migrante",
    director: "Laura Poitras",
    year: 2023,
    country: "États-Unis / France",
    duration: 28,
    format: "court",
    genre: "documentaire",
    synopsis: "Laura Poitras accompagne pendant un an une femme guatémaltèque dans sa demande d'asile aux États-Unis. Un court-métrage qui condense la maestria formelle de la réalisatrice de Citizenfour au service d'un portrait intime et politique d'une force rare.",
    screenings: [
      { date: "2027-03-08", time: "20:00", city: "Marseille",       venue: "Centre Pompidou-Metz",   venueType: "association" },
      { date: "2027-03-15", time: "18:00", city: "Avignon",         venue: "Cinéma Utopia",          venueType: "cinema"      },
    ]
  },
  {
    id: 41,
    title: "Écrasés",
    director: "Thomas Balmes",
    year: 2024,
    country: "France",
    duration: 22,
    format: "court",
    genre: "documentaire",
    synopsis: "Dans une usine agro-alimentaire du sud-ouest, Thomas Balmes documente les conditions de travail de saisonniers roumains et marocains. Un regard direct, sans commentaire, qui laisse l'image parler d'elle-même — et c'est terrible. Court-métrage coup de poing sur l'exploitation légale.",
    screenings: [
      { date: "2027-03-06", time: "18:00", city: "Perpignan",       venue: "IUT de Perpignan",       venueType: "ecole"       },
      { date: "2027-03-13", time: "19:30", city: "Carcassonne",     venue: "Association SoliSud",    venueType: "association" },
    ]
  },
  {
    id: 42,
    title: "La Dernière Frontière",
    director: "Nikolaj Viborg",
    year: 2025,
    country: "Danemark / France",
    duration: 32,
    format: "court",
    genre: "documentaire",
    synopsis: "À la frontière polono-biélorusse, des exilés irakiens et afghans sont pris dans une zone de non-droit entre deux États qui se renvoient la balle. Viborg filme l'absurde géopolitique à hauteur d'homme, dans le froid des forêts, avec une rigueur documentaire et une humanité intacte.",
    screenings: [
      { date: "2027-03-12", time: "19:30", city: "Gap",             venue: "Cinéma Lido",            venueType: "cinema"      },
      { date: "2027-03-19", time: "18:00", city: "Sisteron",        venue: "Lycée Beau de Rochas",   venueType: "ecole"       },
    ]
  },
  {
    id: 43,
    title: "Prisonniers du Désert",
    director: "Wim Wenders",
    year: 2024,
    country: "Allemagne / France",
    duration: 25,
    format: "court",
    genre: "documentaire",
    synopsis: "Wim Wenders retrouve la grandeur de son cinéma des origines dans ce portrait de migrants subsahariens bloqués en Libye. Entre road-movie impossible et poème de l'exil, il filme le désert comme un personnage à part entière — indifférent et sublime.",
    screenings: [
      { date: "2027-03-10", time: "19:00", city: "Marseille",       venue: "Villa Méditerranée",     venueType: "association" },
      { date: "2027-03-17", time: "20:00", city: "Aix-en-Provence", venue: "Cinéma Mazarin",         venueType: "cinema"      },
    ]
  },
  {
    id: 44,
    title: "L'Honneur des Mères",
    director: "Yamina Benguigui",
    year: 2023,
    country: "France",
    duration: 38,
    format: "court",
    genre: "documentaire",
    synopsis: "Yamina Benguigui revient sur les traces des mères de l'immigration algérienne en France — celles qui ont élevé leurs enfants dans l'invisibilité et dont le travail n'a jamais été reconnu. Un hommage filmé avec amour et une rigueur historique remarquable.",
    screenings: [
      { date: "2027-03-11", time: "19:00", city: "Marseille",       venue: "Alcazar — Médiathèque",  venueType: "association" },
      { date: "2027-03-18", time: "18:30", city: "Toulon",          venue: "Cinéma La Colline",      venueType: "cinema"      },
    ]
  },
  {
    id: 45,
    title: "Droit d'Exister",
    director: "Ken Loach",
    year: 2025,
    country: "Royaume-Uni / France",
    duration: 24,
    format: "court",
    genre: "documentaire",
    synopsis: "Ken Loach, fidèle à son engagement de toute une vie, documente les coupes dans les aides sociales britanniques qui poussent des milliers de personnes à la rue. Un film-manifeste d'une clarté et d'une efficacité redoutable, signé par un maître qui n'a rien perdu de sa colère.",
    screenings: [
      { date: "2027-03-14", time: "20:00", city: "Montpellier",     venue: "Cinéma Utopia Montpellier", venueType: "cinema"  },
      { date: "2027-03-21", time: "19:00", city: "Avignon",         venue: "Association Solidarités",venueType: "association" },
    ]
  },
  {
    id: 46,
    title: "L'Enfant Soldat",
    director: "Bertrand Tavernier",
    year: 2025,
    country: "France",
    duration: 130,
    format: "long",
    genre: "documentaire",
    synopsis: "Testament filmique de Bertrand Tavernier, achevé par ses collaborateurs, ce documentaire-fleuve retrace trente ans d'enrôlement d'enfants soldats en Afrique centrale, en Asie et au Moyen-Orient. Un travail d'archive colossal au service d'une réflexion sur l'enfance volée et la responsabilité internationale.\n\nPorté par les archives audiovisuelles de Human Rights Watch et le témoignage d'anciens enfants soldats devenus adultes, le film alterne montage d'une précision chirurgicale et longs plans fixes qui laissent le temps de ressentir.\n\nFilm testament, Cannes Classics 2025.",
    screenings: [
      { date: "2027-03-07", time: "17:00", city: "Marseille",       venue: "Cinéma L'Alhambra",      venueType: "cinema"      },
      { date: "2027-03-14", time: "20:00", city: "Nice",            venue: "Cinémathèque de Nice",   venueType: "cinema"      },
    ]
  },
  {
    id: 47,
    title: "Les Derniers Témoins",
    director: "Alain Guiraudie",
    year: 2024,
    country: "France",
    duration: 79,
    format: "long",
    genre: "documentaire",
    synopsis: "Alain Guiraudie part à la rencontre des derniers témoins vivants des grandes persécutions du XXe siècle. Des survivants de la Shoah aux rescapés du génocide cambodgien, il recueille des paroles ultimes avec une attention qui touche au sacré.\n\nLe cinéaste de L'Inconnu du Lac s'aventure dans un territoire radicalement différent de sa filmographie, avec une humilité et une précision qui bouleversent. Un film sur la mémoire comme droit.\n\nSélection officielle, IDFA 2024.",
    screenings: [
      { date: "2027-03-09", time: "18:00", city: "Avignon",         venue: "Cinéma Utopia",          venueType: "cinema"      },
      { date: "2027-03-16", time: "20:00", city: "Arles",           venue: "Cinéma Actes Sud",       venueType: "cinema"      },
      { date: "2027-03-23", time: "19:30", city: "Orange",          venue: "Association Mémoire Vive", venueType: "association" },
    ]
  },
  {
    id: 48,
    title: "Les Invisibles de Calais",
    director: "François Ruffin",
    year: 2024,
    country: "France",
    duration: 91,
    format: "long",
    genre: "documentaire",
    synopsis: "François Ruffin retourne à Calais, dix ans après Merci Patron, pour filmer ceux qui sont toujours là — dans la jungle reconstituée, dans les squats, dans les marges. Un film de colère et de tendresse sur ce que l'Europe a choisi de ne pas voir.\n\nAvec son style direct et son engagement assumé, Ruffin signe un documentaire-pamphlet d'une urgence politique totale. Parce que la Jungle de Calais ne disparaît pas — elle se déplace.\n\nSortie nationale, nominé aux Doléances 2024.",
    screenings: [
      { date: "2027-03-05", time: "20:30", city: "Marseille",       venue: "Cinéma César",           venueType: "cinema"      },
      { date: "2027-03-12", time: "19:00", city: "Montpellier",     venue: "Cinéma Diagonal",        venueType: "cinema"      },
      { date: "2027-03-19", time: "18:30", city: "Nîmes",           venue: "Lycée Dhuoda",           venueType: "ecole"       },
    ]
  },
  {
    id: 49,
    title: "La Mémoire des Murs",
    director: "Thierry Baudet",
    year: 2023,
    country: "France / Allemagne",
    duration: 82,
    format: "long",
    genre: "documentaire",
    synopsis: "À travers les graffitis et les fresques murales des quartiers populaires de Marseille, Berlin et São Paulo, Thierry Baudet explore comment l'art public devient vecteur de résistance et d'affirmation identitaire pour des communautés marginalisées.\n\nUn documentaire poétique sur le droit à la ville et à la parole, qui filme l'éphémère avec l'urgence de qui sait qu'on va bientôt repeindre le mur.\n\nPrix du public, Clermont-Ferrand Docs 2023.",
    screenings: [
      { date: "2027-03-06", time: "19:30", city: "Marseille",       venue: "Friche la Belle de Mai", venueType: "association" },
      { date: "2027-03-13", time: "18:00", city: "Toulon",          venue: "Lycée Rouvière",         venueType: "ecole"       },
      { date: "2027-03-20", time: "20:00", city: "Fréjus",          venue: "Cinéma Forum",           venueType: "cinema"      },
    ]
  },
  {
    id: 50,
    title: "Enfants de la Rue",
    director: "Magda Serrano",
    year: 2025,
    country: "Colombie",
    duration: 88,
    format: "long",
    genre: "documentaire",
    synopsis: "À Bogotá, Magda Serrano suit pendant deux ans une association qui tente de réintégrer les enfants des rues. Ni misérabilisme ni angélisme, le film choisit d'accompagner les ambivalences — les rechutes, les progrès, les liens qui se tissent et qui se défont.\n\nUn documentaire d'une honnêteté rare sur le travail social et les limites de l'action individuelle face à des violences systémiques. Magnifiquement photographié.\n\nSélection officielle, FIDMarseille 2025.",
    screenings: [
      { date: "2027-03-10", time: "18:00", city: "Digne-les-Bains", venue: "Cinéma L'Espagne",       venueType: "cinema"      },
      { date: "2027-03-17", time: "19:30", city: "Gap",             venue: "Lycée Aristide Briand",  venueType: "ecole"       },
      { date: "2027-03-24", time: "20:00", city: "Sisteron",        venue: "Cinéma Lido",            venueType: "cinema"      },
    ]
  },
];

// Helper: get all unique cities from screenings
function getAllCities() {
  const cities = new Set();
  FILMS.forEach(f => f.screenings.forEach(s => cities.add(s.city)));
  return Array.from(cities).sort();
}

// Helper: get screenings by city
function getScreeningsByCity(cityName) {
  const result = [];
  FILMS.forEach(film => {
    film.screenings.filter(s => s.city === cityName).forEach(s => {
      result.push({ film, screening: s });
    });
  });
  return result.sort((a, b) => a.screening.date.localeCompare(b.screening.date) || a.screening.time.localeCompare(b.screening.time));
}

// Helper: get film by id
function getFilmById(id) {
  return FILMS.find(f => f.id === parseInt(id));
}

// Helper: format date
function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-');
  const months = ['jan', 'fév', 'mar', 'avr', 'mai', 'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc'];
  return `${parseInt(d)} ${months[parseInt(m) - 1]}`;
}

// Helper: format duration
function formatDuration(minutes) {
  if (minutes >= 60) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h${m.toString().padStart(2, '0')}` : `${h}h`;
  }
  return `${minutes} min`;
}
