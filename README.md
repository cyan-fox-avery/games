# Avery's Games — hub

Minimal dark gallery. One title, a responsive grid of game logos, each
live game linking to its site in a new tab. No framework, no backend.

Live at https://cyan-fox-avery.github.io/games/

## Files

- `index.html` — page + rendering (reads `games.js`), incl. the EN/FR toggle
- `games.js` — **the data list.** The only file to edit to add/remove games.
- `styles.css` — dark theme, cards, focus, reduced-motion
- `assets/` — logo files (original proportions kept, never cropped)

## Add / remove a game

1. Drop the logo into `assets/`
2. Add an entry in `games.js` (`name`, `name_fr`, `logo`, `url`, `url_fr`)
3. A filled-in `url` links the card in English; a blank `url` shows
   Coming Soon. Same for `url_fr` in French.

## EN / FR

- Toggle at the top switches the whole hub: title, hint, card names,
  Coming Soon badges, and link targets. Choice is remembered.
- Each game has its own French title + French URL. A blank `url_fr`
  means Coming Soon in French, even when the English version is live.
- French titles: Rockhound → **Cherche-cailloux**, Tag Along →
  **Sur la piste des requins**, Berry Delightful → **Délices de fraises**,
  Fox & Found → **Renards retrouvés**, Snow War → **Guerre de neige**.

## Current status (checked 2026-10-19)

- Rockhound — LIVE in English, linked. Coming Soon in French
  (Cherche-cailloux). Logo still needed (no standalone logo file in its repo).
- Tag Along — LIVE in English, linked. Coming Soon in French
  (Sur la piste des requins). Logo in `assets/tag-along-logo.png`.
- Berry Delightful — Coming Soon (both languages; Délices de fraises).
  Its repo has no playable site yet; the grey-box prototype lives in
  `lab`, not a public destination. Logo still needed.
- Fox & Found — Coming Soon (both languages; Renards retrouvés).
  A vertical-slice prototype exists at `/fox-and-found/prototype/`
  but is not the game. Logo still needed.
- Snow War — Coming Soon (both languages; Guerre de neige).
  No playable site, no logo yet.

## Still needed (Avery's word)

- Final logos for Rockhound / Berry / Fox & Found / Snow War
- Whether the Berry grey-box or Fox prototype should ever be linked from the hub
