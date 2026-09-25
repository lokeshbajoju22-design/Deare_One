'use client';

import Link from 'next/link';
import { useCart } from '@/components/cart/cart-provider';
import { formatCurrency } from '@/lib/format';
import { Product } from '@/types';

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-brand-line bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img src={product.images[0]} alt={product.name} className="h-72 w-full object-cover transition duration-300 group-hover:scale-[1.02]" />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-brand-green px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white">
            {product.badge}
          </span>
        )}
      </div>

      <div className="space-y-5 p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-brand-green/70">{product.category}</div>
          <div className="text-xs text-brand-body/60">{product.tags[0]}</div>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-brand-green">{product.name}</h3>
          <p className="mt-2 text-sm leading-6 text-brand-body/70">{product.shortDescription}</p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xl font-semibold text-brand-green">{formatCurrency(product.price)}</div>
            {product.compareAtPrice && (
              <div className="text-sm text-brand-body/40 line-through">{formatCurrency(product.compareAtPrice)}</div>
            )}
          </div>

          <Link href={`/product/${product.slug}`} className="text-sm font-medium text-brand-green underline-offset-4 hover:underline">
            View details
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => addItem(product, product.variants[0]?.name || 'Default')}
            className="inline-flex flex-1 items-center justify-center rounded-full bg-brand-green px-4 py-3 text-sm font-medium text-white transition hover:bg-brand-greenSoft"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
