// Avery's Games — the only file to edit to add, remove, or update a game.
//
// Each game has an English side and a French side:
//   name / url    = English version. Blank url = Coming Soon in English.
//   name_fr / url_fr = French version. Blank url_fr = Coming Soon in French.
//   Leave name_fr blank to keep the English title in the French view
//   until the French title is decided.
//
// To add a game:
//   1. Drop its logo file into assets/ (keep the original proportions —
//      the hub never crops or stretches logos).
//   2. Add one entry below: name, name_fr, logo path, url, url_fr.
//
// To launch a French version: fill in that game's name_fr + url_fr.
// Nothing else needs to change.
//
// To remove a game: delete its entry. To take a game down temporarily
// without deleting it, blank out its url (and url_fr).

const GAMES = [
  {
    name: 'Rockhound',
    name_fr: 'Cherche-cailloux',
    logo: null, // Logo to come — no standalone logo file in the Rockhound repo yet.
    url: 'https://cyan-fox-avery.github.io/rockhound/',
    url_fr: '', // French version not out yet.
  },
  {
    name: 'Tag Along',
    name_fr: 'Sur la piste des requins',
    logo: 'assets/tag-along-logo.png',
    url: 'https://cyan-fox-avery.github.io/tag-along/',
    url_fr: '', // French version not out yet.
  },
  {
    name: 'Berry Delightful',
    name_fr: 'Délices de fraises',
    logo: null, // Logo to come — do not use the AI exploration drafts as the final logo.
    url: '',
    url_fr: '',
  },
  {
    name: 'Fox & Found',
    name_fr: 'Renards retrouvés',
    logo: null, // Logo to come — Fox & Found uses real photography, no AI imagery.
    url: '',
    url_fr: '',
  },
  {
    name: 'Snow War',
    name_fr: 'Guerre de neige',
    logo: null, // Logo to come.
    url: '',
    url_fr: '',
  },
];
