import Link from 'next/link';
import { ProductGrid } from '@/components/products/product-grid';
import { siteConfig } from '@/data/site';

export const metadata = {
  title: 'Shop',
  description: 'Explore handcrafted gift boxes, bars, almond bites, and bubble chocolates from Dearé Øne.',
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green/70">Shop</div>
          <h1 className="mt-2 font-serif text-4xl text-brand-green md:text-5xl">Handmade chocolate for meaningful moments</h1>
        </div>
        <Link href="/" className="text-sm text-brand-green underline-offset-4 hover:underline">
          Back to home
        </Link>
      </div>

      <ProductGrid />
    </div>
  );
}
