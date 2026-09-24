export const siteConfig = {
  brandName: 'Dearé Øne',
  tagline: 'Because every dear one deserves something sweet.',
  instagramHandle: '@deare_one',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+91 98765 43210',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@deareone.in',
  defaultSeoDescription: 'Premium handmade chocolate gifts and boutique chocolate collections by Dearé Øne.',
  delivery: {
    FREE_DELIVERY_MIN_QUANTITY: 3,
    DELIVERY_CHARGE: 150,
    FREE_DELIVERY_THRESHOLD: 900,
  },
};
