# Dearé Øne

A premium boutique chocolate storefront for Dearé Øne, designed for gifting, boutique ordering, and future ecommerce growth.

## Features
- Premium brand-first storefront experience
- Centralized product catalog and pricing
- Product listing, product detail, cart, and checkout flow
- WhatsApp ordering support
- Payment abstraction for future Razorpay or manual checkout
- SEO metadata and legal pages
- Mobile-first responsive design
- Centralized business and delivery configuration

## Prerequisites
- Node.js 18 or newer
- npm 9 or newer

## Local setup

1. Clone the repository and switch to the working branch:
   ```bash
   git checkout feature/deare-one-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create the local environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Update the values in `.env.local` if needed.

5. Start the app in development mode:
   ```bash
   npm run dev
   ```

6. Open the site in your browser:
   ```bash
   http://localhost:3000
   ```

## Production build

Run the production build locally before deploying:

```bash
npm install
npm run build
```

Then start the production server:

```bash
npm run start
```

## Deployment

This site is ready for deployment on Vercel, Netlify, or any Node.js-hosted platform.

### Vercel
1. Import the repository in Vercel.
2. Set the project framework to Next.js.
3. Add the environment variables from `.env.example` in the Vercel dashboard.
4. Deploy the project.

Recommended environment variables:
```bash
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+919876543210
NEXT_PUBLIC_CONTACT_EMAIL=hello@deareone.in
NEXT_PUBLIC_INSTAGRAM_HANDLE=@deare_one
NEXT_PUBLIC_RAZORPAY_KEY_ID=
NEXT_PUBLIC_ENABLE_PAYMENT=false
```

## Project structure
- `app/` – routes and page-level UI
- `components/` – reusable storefront components
- `data/` – product and site configuration
- `lib/` – utility functions and payment logic
- `public/images/` – brand and product imagery
- `types/` – shared TypeScript models

## Important notes
- Product prices and delivery settings are centrally managed for easy updates.
- The checkout flow is intentionally abstracted for future payment gateway integration.
- No payment secret or API key should be committed to the frontend.
