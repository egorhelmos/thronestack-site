# ThroneStack site

Independent static launch site for `ThroneStack.com`. This repository must not
contain private Ars Goetia source, credentials, data, screenshots with private
information, or personal archives.

## Preview

From this directory:

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Sales configuration

Edit `site-config.js` after the corresponding accounts are ready:

- `checkoutUrl` — Lemon Squeezy product checkout URL
- `salesOpen` — keep `false` until purchase, delivery, and refund tests pass

Never put API keys or private credentials in `site-config.js`; it is public in
the browser.

## Required before launch

- add a sanitized demonstration video
- test mobile layout and keyboard navigation
- test checkout, delivery, and refund from a customer perspective
- update the privacy notice with the approved merchant and support process

## GitHub Pages deployment

The public repository deploys from the root of `main` through GitHub Pages.
`CNAME` attaches `thronestack.com`, `.nojekyll` keeps the static files unchanged,
and `404.html` supplies the not-found page.
