// Avery's Games — the only file to edit to add, remove, or update a game.
//
// To add a game:
//   1. Drop its logo file into assets/ (keep the original proportions —
//      the hub never crops or stretches logos).
//   2. Add one entry below: name, logo path, url, status.
//   3. Set status to "live" to link it, or "coming-soon" to show it
//      as a non-linked Coming Soon card.
//
// To remove a game: delete its entry. To take a game down temporarily
// without deleting it, flip its status to "coming-soon".

const GAMES = [
  {
    name: 'Rockhound',
    logo: null, // Logo to come — no standalone logo file in the Rockhound repo yet.
    url: 'https://cyan-fox-avery.github.io/rockhound/',
    status: 'live',
  },
  {
    name: 'Tag Along',
    logo: 'assets/tag-along-logo.png',
    url: 'https://cyan-fox-avery.github.io/tag-along/',
    status: 'live',
  },
  {
    name: 'Berry Delightful',
    logo: null, // Logo to come — do not use the AI exploration drafts as the final logo.
    url: '',
    status: 'coming-soon',
  },
  {
    name: 'Fox & Found',
    logo: null, // Logo to come — Fox & Found uses real photography, no AI imagery.
    url: '',
    status: 'coming-soon',
  },
  {
    name: 'Snow War',
    logo: null, // Logo to come.
    url: '',
    status: 'coming-soon',
  },
];
