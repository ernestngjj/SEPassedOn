# SEPassedOn

Practical guides for Singaporean NUS students going on SEP, written by students who have been there.

A static site. No backend, no build step. Open `index.html` to run it locally.

## Folder layout

```
index.html            page shell, meta tags, script list
config.js             form links, analytics token, site URL
css/style.css         all styles
fonts/                self-hosted fonts (no Google Fonts, works in China)
js/core.js            data registry
js/app.js             app logic (routing, search, rendering)
data/sep.js           NUS SEP guides shared by all unis (nus-apply, nus-mapping, nus-credit)
data/unis/*.js        one file per partner university
data/unis/_template.js  copy this to add a university
og-image.png          preview image when the link is shared
```

## Run locally

```
open index.html
```

## Edit content

- University content: `data/unis/<uni>.js`
- NUS SEP admin content: `data/sep.js`
- Bump `updated` in the file whenever you change facts
- Each intake, update `intake`, `facts` and `dates` (dates are ISO, e.g. `2027-09-02`)

## How a university page is structured

- **Facts**: the tiles at the top
- **Dates**: key-dates strip. The next upcoming date is highlighted automatically
- **Phases**: the SEP journey tabs (Apply, Prepare, Arrive, Study, Live, Return). Each has a checklist and a list of guides
- **Guides**: the detailed pages. Checklist items link to them with `guide: '<id>'`

## Add a university

1. Copy `data/unis/_template.js` to `data/unis/<name>.js`
2. Fill it in
3. Add `<script src="data/unis/<name>.js"></script>` in `index.html`, above `js/app.js`
4. Open `index.html` to check, then push

## Links you can share

Every page has its own link:

- `#/fudan` university page
- `#/fudan/prepare` a phase of the journey
- `#/fudan/g/fudan-visa` a specific guide

## Settings (config.js)

| Setting | What it does |
|---|---|
| `tipFormUrl` | Google Form link for the "Share a tip" button |
| `reportFormUrl` | Google Form link for "Report it" on every page |
| `reportPrefillField` | Optional. Google Form prefill id (`entry.123...`) so the page name fills in automatically |
| `cloudflareAnalyticsToken` | Free Cloudflare Web Analytics token |
| `siteUrl` | Your live URL |

To get a Google Form prefill id: open the form, ⋮ > Get pre-filled link, type anything in the "which page" question, click Get link, and copy the `entry.xxxxx` part.

## Deploy on GitHub Pages (free)

1. Push this folder to the repo
2. Repo > Settings > Pages
3. Source: Deploy from a branch. Branch: `main`, folder `/ (root)`. Save
4. Live in about a minute at `https://ernestngjj.github.io/SEPassedOn/`

If you use a custom domain, update `siteUrl` in `config.js` and the `og:` and `canonical` URLs at the top of `index.html`.

## Notes

- `github.io` can be slow or blocked in mainland China. Most readers use it before leaving Singapore.
- Progress (checklist ticks, guides read) is saved in each visitor's browser only.
- Fonts are under the SIL Open Font License (`fonts/OFL-LICENSE.txt`).
