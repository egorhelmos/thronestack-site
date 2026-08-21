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

## Launch configuration

Edit `site-config.js` after the corresponding accounts are ready:

- `waitlistEndpoint` — HTTPS endpoint supplied by the selected email provider
- `checkoutUrl` — Lemon Squeezy product checkout URL
- `roadmapUrl` — sanitized application or scheduling URL
- `supportEmail` — public ThroneStack support address
- `salesOpen` — keep `false` until purchase, delivery, and refund tests pass

Never put API keys or private credentials in `site-config.js`; it is public in
the browser.

## Required before launch

- replace the privacy and terms drafts with reviewed final text
- connect and test the waitlist
- add a sanitized demonstration video
- test mobile layout and keyboard navigation
- test checkout, delivery, and refund from a customer perspective
- connect `ThroneStack.com` only after the deployment is stable
