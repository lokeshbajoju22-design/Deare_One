import Link from 'next/link';
import { useCart } from '@/components/cart/cart-provider';
import { useState } from 'react';
import { Product } from '@/types';
import { formatCurrency } from '@/lib/format';
import { generateWhatsAppLink, buildWhatsAppOrderMessage } from '@/lib/whatsapp';
import { ProductVariantSelector } from '@/components/products/product-variant-selector';
import { QuantitySelector } from '@/components/products/product-variant-selector';

export function ProductDetailPage({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]?.name || 'Default');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const variantInfo = product.variants.find((variant) => variant.name === selectedVariant) || product.variants[0];
  const price = variantInfo?.price || product.price;

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity, selectedImage, price);
  };

  const whatsappUrl = generateWhatsAppLink(
    buildWhatsAppOrderMessage({
      items: [{ name: product.name, quantity, variant: selectedVariant, price }],
      subtotal: price * quantity,
      delivery: 0,
      total: price * quantity,
      customerName: '',
      deliveryLocation: '',
    }),
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[2rem] border border-brand-line bg-white p-3 shadow-soft">
            <img src={selectedImage} alt={product.name} className="h-[500px] w-full rounded-[1.5rem] object-cover" />
          </div>

          <div className="grid grid-cols-4 gap-3">
            {product.images.map((image, index) => (
              <button key={image} onClick={() => setSelectedImage(image)} className={`overflow-hidden rounded-[1rem] border ${selectedImage === image ? 'border-brand-green' : 'border-brand-line'} bg-white p-1`}>
                <img src={image} alt={`${product.name} view ${index + 1}`} className="h-20 w-full rounded-[0.75rem] object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green/70">{product.category}</div>
            <h1 className="mt-3 font-serif text-5xl text-brand-green">{product.name}</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-3xl font-semibold text-brand-green">{formatCurrency(price)}</div>
            {product.compareAtPrice && (
              <div className="text-lg text-brand-body/40 line-through">{formatCurrency(product.compareAtPrice)}</div>
            )}
          </div>

          <p className="text-base leading-7 text-brand-body/75">{product.description}</p>

          <div className="space-y-4 rounded-[1.5rem] border border-brand-line bg-brand-cream p-5">
            {product.variants.length > 1 && (
              <ProductVariantSelector product={product} value={selectedVariant} onChange={setSelectedVariant} />
            )}

            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-medium text-brand-body/70">Quantity</div>
                <div className="mt-2">
                  <QuantitySelector value={quantity} onChange={setQuantity} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button onClick={handleAdd} className="inline-flex flex-1 items-center justify-center rounded-full bg-brand-green px-6 py-3.5 text-sm font-medium text-white hover:bg-brand-greenSoft">
                Add to cart
              </button>
              <Link href="/checkout" className="inline-flex flex-1 items-center justify-center rounded-full border border-brand-green/20 bg-white px-6 py-3.5 text-sm font-medium text-brand-green hover:bg-brand-cream">
                Buy now
              </Link>
            </div>

            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center rounded-full border border-brand-green/20 bg-transparent px-6 py-3.5 text-sm font-medium text-brand-green hover:bg-brand-cream">
              Order on WhatsApp
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.25rem] border border-brand-line bg-white p-4">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-brand-green/70">Ingredients</div>
              <p className="mt-3 text-sm leading-6 text-brand-body/75">{product.ingredients || 'Ingredients to be updated.'}</p>
            </div>
            <div className="rounded-[1.25rem] border border-brand-line bg-white p-4">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-brand-green/70">Allergens</div>
              <p className="mt-3 text-sm leading-6 text-brand-body/75">{product.allergens || 'Allergen details to be added.'}</p>
            </div>
            <div className="rounded-[1.25rem] border border-brand-line bg-white p-4">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-brand-green/70">Weight</div>
              <p className="mt-3 text-sm leading-6 text-brand-body/75">{product.weight || 'Weight to be confirmed.'}</p>
            </div>
            <div className="rounded-[1.25rem] border border-brand-line bg-white p-4">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-brand-green/70">Storage</div>
              <p className="mt-3 text-sm leading-6 text-brand-body/75">{product.storage || 'Storage instructions to be updated.'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
