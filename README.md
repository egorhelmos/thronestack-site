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

- export and review the complete customer guide
- package the clean starter and worksheets without runtime data
- add a sanitized demonstration video or equivalent launch walkthrough
- test mobile layout and keyboard navigation
- configure the live Lemon Squeezy product and upload every delivery file
- test checkout and refunds in Lemon Squeezy test mode
- verify the live delivery files separately because test-mode downloads are disabled
- add and verify a public support email address
- update `checkoutUrl` with the live product link only after every gate passes

## GitHub Pages deployment

The public repository deploys from the root of `main` through GitHub Pages.
`CNAME` attaches `thronestack.com`, `.nojekyll` keeps the static files unchanged,
and `404.html` supplies the not-found page.
