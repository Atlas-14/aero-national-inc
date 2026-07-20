# Aero National Website

Production-ready Next.js website designed for deployment on Vercel.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Create a new GitHub repository.
2. Upload this project to the repository.
3. In Vercel, choose **Add New → Project**.
4. Import the GitHub repository.
5. Keep the default Next.js settings.
6. Add the environment variables from `.env.example`.
7. Deploy.
8. In Vercel, open **Settings → Domains** and add:
   - `aeronational.inc`
   - `www.aeronational.inc`
9. Update the DNS records at your registrar using the values Vercel provides.

## Project-support form

The form works immediately in development and logs submissions to the server when no email provider is configured.

For email delivery:

1. Create a Resend account.
2. Verify `aeronational.inc`.
3. Add:
   - `RESEND_API_KEY`
   - `PROJECT_SUPPORT_TO_EMAIL`
   - `PROJECT_SUPPORT_FROM_EMAIL`

Recommended inbox:
`projects@aeronational.inc`

## Before public launch

Replace representative photography with Aero National-owned project, fleet, container and equipment photography as it becomes available. Do not publish unsupported project statistics or claims.
