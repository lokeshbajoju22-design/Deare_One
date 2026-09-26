'use client';

import { useState } from 'react';
import { Product } from '@/types';
import { formatCurrency } from '@/lib/format';

export function ProductVariantSelector({ product, value, onChange }: { product: Product; value: string; onChange: (variant: string) => void }) {
  if (!product.variants || product.variants.length <= 1) return null;

  return (
    <label className="block text-sm font-medium text-brand-body/75">
      Variant
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-full border border-brand-line bg-brand-ivory px-4 py-3 outline-none ring-0 focus:border-brand-green"
      >
        {product.variants.map((variant) => (
          <option key={variant.name} value={variant.name}>
            {variant.name} — {formatCurrency(variant.price)}
          </option>
        ))}
      </select>
    </label>
  );
}

export function QuantitySelector({ value, onChange }: { value: number; onChange: (next: number) => void }) {
  const safeValue = Math.max(1, value);

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-brand-line bg-brand-cream px-2 py-1">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, safeValue - 1))}
        className="h-8 w-8 rounded-full bg-white text-lg text-brand-green transition hover:bg-brand-cream"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-8 text-center text-sm font-medium">{safeValue}</span>
      <button
        type="button"
        onClick={() => onChange(safeValue + 1)}
        className="h-8 w-8 rounded-full bg-white text-lg text-brand-green transition hover:bg-brand-cream"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
