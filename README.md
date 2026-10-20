# folkloreskies.com

Static marketing site for **Folklore Skies** (Caveman Tech LLC). Plain HTML/CSS plus one small optional script; no build step, no web fonts, no analytics, trackers or cookies (consistent with the app's "Data Not Collected" label).

| Path | What |
|---|---|
| `/` | Homepage (OG/Twitter tags, Smart App Banner, device-aware store link) |
| `/privacy/` | Privacy Policy (synced from the app repo's `docs/privacy/index.html`, effective 19 Oct 2026) |
| `/terms/` | Terms of Use (Apple Standard EULA applies) |
| `/support/` | Support |
| `404.html` | GitHub Pages not-found page |
| `CNAME` | `folkloreskies.com` for GitHub Pages |

## Before launch: fill in the App Store ID
Search for `APP_STORE_ID` in `index.html` (3 places: the `apple-itunes-app` meta tag and two App Store links) and replace it with the numeric Apple ID from App Store Connect › App Information › General Information › Apple ID, e.g. `sed -i 's/APP_STORE_ID/1234567890/g' index.html`.

## Android later
Set `PLAY_STORE_URL` at the top of `assets/store.js`. Android visitors then get the Play button instead of the "coming soon" note.

## Store link logic
Without JavaScript everyone sees the App Store badge. `assets/store.js` sets `data-platform` on `<html>` (`ios`, `mac`, `android`, `desktop`; iPadOS, which reports itself as a Mac, is detected by `navigator.maxTouchPoints > 1`). Only Android changes what is shown.

## Preview
`python3 -m http.server 8765` in this folder, then open http://localhost:8765/.
