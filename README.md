# CodePath — Full HTML, CSS, JavaScript and PHP source

This project recreates the CodePath coding-learning website with language categories, lesson dialogs, search/filtering, progress tracking, and included SVG illustrations.

## Files
- `index.php` — PHP-served website entry point (same UI as the HTML version)
- `index.html` — static version; works without PHP
- `style.css` — responsive dark-theme styles
- `script.js` — language cards, category filters, search, lesson dialogs, and local progress
- `php-progress-sync.js` — optional JavaScript helper for syncing progress to the PHP session
- `api.php` — PHP JSON API for session-based progress (`GET` and `POST`)
- `images/` — included SVG illustrations for the hero and categories

## Run locally with PHP
1. Install PHP 8 or newer.
2. Extract the ZIP.
3. Open a terminal in this folder (the folder containing `index.php`).
4. Run:
   ```bash
   php -S localhost:8000
   ```
5. Visit `http://localhost:8000/index.php`.

To check the API, visit `http://localhost:8000/api.php?action=health`.

## Run without PHP
Double-click `index.html` to use the front end. Search, filters, lessons, and browser-local progress work without a server. The PHP API is available only when served through PHP.

## Progress storage notes
The front end's existing progress tracking uses browser local storage. The included PHP API additionally supports progress in the current PHP session. Session progress is temporary and is not a user account or permanent cross-device storage. To make progress persistent for registered users, add a database and authentication system.

## Deployment
Upload the files to a PHP-enabled host and ensure it runs a supported PHP version. For a public production site, use HTTPS and add proper authentication, CSRF protection, rate limits, and database-backed user accounts before storing personal data.


## Expanded lessons
Each of the 13 language lessons now includes longer explanations, key concepts, practical guidance, and a suggested learning path. Lesson text preserves paragraph breaks for readability.


## Extended programming notes
All 13 language lessons now include dedicated notes on data types, text/strings, variables, collections, functions, and language-specific concepts, plus a practical exercise. HTML and CSS lessons cover their own relevant value, element, attribute, and layout concepts.

\n## Advanced lessons, video lessons, and Premium\n\n- Each of the 13 language lessons now includes Beginner, Intermediate, and Advanced guidance plus a larger project challenge and an advanced checklist.\n- Open `video-lessons.html` for topic-based video searches. Links open YouTube search results; video hosting is external.\n- Open `premium.html` or use the Premium section on the home page to view the $9.00/month demonstration membership.\n- IMPORTANT: payment is not integrated. The checkout button is a demo only; connect a trusted payment provider, server-side verification, and subscription management before taking real payments.\n- Launch locally using a PHP-capable server for the PHP progress API. Static pages can be opened directly, but server-backed progress requires PHP.\n
\n## Premium pricing and MTN Mobile Money (MoMo)\n\nPremium demo packages are priced at GHS 20 (Starter), GHS 40 (Practice Plus), GHS 75 (Project Builder), and GHS 120 (Pro Learning Pack). The `premium.html` page lets a visitor select a package and enter a Ghanaian MTN MoMo phone number.\n\n**Real payments are not active in this ZIP.** The current form is a front-end demonstration and does not contact MTN, debit a wallet, or unlock paid content. To activate real payments, register for official MTN MoMo merchant/API access, implement payment requests on a secure server, store credentials in environment variables (never in browser JavaScript), verify callbacks/status with the provider, and only grant access after server-side confirmation. Use test/sandbox credentials before production and consult official MTN MoMo developer documentation for the current requirements.\n

## MTN MoMo server-side integration scaffold

This ZIP now includes PHP server-side endpoints for initiating a Collection Request-to-Pay and checking transaction status directly with MTN:

- `momo-config.php` — reads credentials from server environment variables.
- `.env.example` — documents required settings; it contains placeholders only, not real credentials.
- `momo-create-payment.php` — validates the selected plan and Ghana number, uses server-defined prices, then sends the Request-to-Pay request to MTN.
- `momo-check-payment.php` — queries MTN's transaction-status endpoint and checks status, amount and currency before reporting a verified result.
- `momo-callback.php` — callback receiver scaffold; callbacks are treated as signals, and the status endpoint verifies directly with MTN.
- `storage/` — local payment record storage; keep it outside public access on your host if possible.

### Required setup before any real payments

1. Create/sign in to your account at the official [MTN MoMo Developer Portal](https://momodeveloper.mtn.com/) and subscribe to the **Collection** product.
2. Obtain the correct Collection subscription key and API User/API Key for the intended environment. Sandbox and production credentials are different.
3. Configure the environment variables in `.env.example` using your hosting control panel. Do not upload real secrets to public Git repositories or put them in JavaScript.
4. Set `MOMO_BASE_URL`, `MOMO_TARGET_ENVIRONMENT`, `MOMO_ENVIRONMENT`, `MOMO_CURRENCY`, and a publicly reachable callback URL according to MTN's current Ghana onboarding/API instructions.
5. Deploy on a PHP host with cURL enabled. Production must use HTTPS. Ensure the storage folder is writable and inaccessible to public downloads.
6. Test in sandbox first, including pending, successful, failed, timeout and network-error cases. Check MTN's current official API documentation for exact environment, currency and callback requirements before go-live.

### Important limitations

- **No MTN credentials have been added** because credentials are private, account-specific secrets that only you/your merchant account can obtain.
- The payment endpoints are a backend integration scaffold, not proof that a live merchant account is enabled. Real payment collection will not work until valid credentials, product subscription, environment settings, callback registration and hosting are configured.
- The current Premium UI is not yet wired to these PHP endpoints, and this project does not have a complete authenticated customer/order database. The status endpoint intentionally returns `premiumUnlocked: false`; connect a verified successful order to a logged-in customer in a proper database before unlocking paid lessons.
- The callback endpoint does not independently authenticate callback signatures. It does not grant access based on callback payload. The server-side status query is the verification path. Add production-grade callback validation, database transactions, rate limiting, CSRF protection where appropriate, and monitoring before commercial launch.
- Do not store wallet PINs or ask users to share their MoMo PIN with CodePath.

Official references: [MTN MoMo API portal](https://momo.mtn.com/api/) and [MTN MoMo API documentation](https://momodeveloper.mtn.com/).
