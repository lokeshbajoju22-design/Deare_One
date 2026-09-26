import { products } from '@/data/products';
import { ProductCard } from './product-card';

export function ProductGrid({ category, limit }: { category?: string; limit?: number } = {}) {
  const items = category
    ? products.filter((product) => product.category === category)
    : products;

  const visibleProducts = typeof limit === 'number' ? items.slice(0, limit) : items;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {visibleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
