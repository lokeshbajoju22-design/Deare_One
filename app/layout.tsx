import { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { CartProvider } from '@/components/cart/cart-provider';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: `${siteConfig.brandName} | Premium Handmade Chocolates`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.defaultSeoDescription,
  keywords: [
    'premium chocolates Hyderabad',
    'homemade chocolates Hyderabad',
    'chocolate gift boxes',
    'handmade chocolate gifts',
    'custom chocolate gifts',
  ],
  openGraph: {
    title: siteConfig.brandName,
    description: siteConfig.defaultSeoDescription,
    siteName: siteConfig.brandName,
    url: '/',
    type: 'website',
    images: ['/images/brand/deare-one-badge.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.brandName,
    description: siteConfig.defaultSeoDescription,
    images: ['/images/brand/deare-one-badge.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="min-h-screen bg-brand-ivory text-brand-body">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
