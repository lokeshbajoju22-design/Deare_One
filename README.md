# Dearé Øne

A premium, handcrafted chocolate storefront for Dearé Øne, designed for gifting, boutique ordering, and future ecommerce growth.

## Features
- Premium brand-first storefront experience
- Centralized product catalog and pricing
- Product listing, product detail, cart, and checkout flow
- WhatsApp ordering support
- Payment abstraction for future Razorpay or manual checkout
- SEO metadata and legal pages
- Mobile-first responsive design

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Environment variables
Copy `.env.example` and update values:

```bash
cp .env.example .env.local
```

## Deployment
This project is ready for Vercel deployment. Ensure the environment variables are added in the Vercel project settings.

## Product and image updates
- Add or edit product data in `data/products.ts`
- Update brand settings in `data/site.ts`
- Replace placeholder images in `public/images/`
- Keep filenames descriptive and permanent

## Project structure
- `app/` – routes and page-level UI
- `components/` – reusable storefront components
- `data/` – product and site configuration
- `lib/` – utility functions and payment logic
- `public/images/` – placeholder and real brand/product imagery
- `types/` – shared TypeScript models

## Important notes
- No payment secret or API keys are stored in the frontend.
- The checkout flow is intentionally abstracted for future payment gateway integration.
- Product prices and delivery settings are centrally managed for easy updates.
