# MAESTRO PAPADOUPOLUS / CodePath — Security & HTTPS

## Important hosting note
This ZIP contains PHP endpoints (API, MTN MoMo payments, sessions). **GitHub Pages is static hosting and does not execute PHP.** Deploy this project to a PHP 8+ host with HTTPS (for example, cPanel hosting, a VPS, or a PHP-capable platform). GitHub Pages alone cannot safely host the PHP payment endpoints.

## HTTPS
- `https-redirect.js` redirects browser visits from HTTP to HTTPS.
- `.htaccess` provides server-side HTTPS redirection and security headers on Apache.
- Enable HTTPS/SSL in your hosting control panel first. A redirect does not create a certificate.
- Do not enable HSTS until HTTPS works correctly for every relevant subdomain.

## Security changes included
- Apache security headers and directory listing disabled.
- Direct web access to `storage/` denied; keep payment records outside the public web root if your host supports it.
- PHP session cookies use `HttpOnly`, `SameSite=Lax`, and `Secure` when HTTPS is detected; strict session mode enabled.
- API POST requests check Origin when provided and limit request size.
- Removed duplicate MTN `X-Reference-Id` header in request.

## Still required before production
1. Store MTN MoMo credentials as environment variables in the hosting control panel. Never commit real keys or `.env`.
2. Move `MOMO_STORAGE_DIR` to a private directory outside `public_html` / web root.
3. Add rate limiting/WAF (Cloudflare or hosting WAF) for payment endpoints.
4. Implement authenticated accounts and server-side order-to-user association before granting Premium.
5. Test payment flows in sandbox, then production; verify amount/currency and webhook behavior.
6. Keep PHP and dependencies updated; monitor server logs and backups.
7. Configure a strict Content Security Policy appropriate to any external libraries actually used. The included Apache CSP is a starting point and may need adjustment if external scripts/fonts are added.

## GitHub Pages
For a static-only copy, GitHub Pages can serve HTML/CSS/JS and enforce HTTPS in repository Settings → Pages. It cannot run PHP, securely store MoMo secrets, or process payments. Remove/disable PHP payment functionality if deploying only to GitHub Pages.
