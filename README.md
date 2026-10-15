# Avery's Games — hub

Minimal dark gallery. One title, a responsive grid of game logos, each
live game linking to its site in a new tab. No framework, no backend.

Live at https://cyan-fox-avery.github.io/games/ once PR #1 is merged
and Pages is enabled on `main`.

## Files

- `index.html` — page + rendering (reads `games.js`)
- `games.js` — **the data list.** The only file to edit to add/remove games.
- `styles.css` — dark theme, cards, focus, reduced-motion
- `assets/` — logo files (original proportions kept, never cropped)

## Add / remove a game

1. Drop the logo into `assets/`
2. Add an entry in `games.js` (`name`, `logo`, `url`, `status`)
3. `status: "live"` links the card; `"coming-soon"` shows a non-linked Coming Soon card

## Current status (checked 2026-10-15)

- Rockhound — LIVE, linked. Logo still needed (no standalone logo file in its repo).
- Tag Along — LIVE, linked. Logo in `assets/tag-along-logo.png`.
- Berry Delightful — Coming Soon. Its repo has no playable site yet; the
  grey-box prototype lives in `lab`, not a public destination. Logo still needed.
- Fox & Found — Coming Soon. A vertical-slice prototype exists at
  `/fox-and-found/prototype/` but is not the game. Logo still needed.
- Snow War — Coming Soon. No playable site, no logo yet.

## Still needed (Avery's word)

- Final logos for Rockhound / Berry / Fox & Found / Snow War
- Whether the Berry grey-box or Fox prototype should ever be linked from the hub
