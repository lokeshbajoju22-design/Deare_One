'use client';

import Link from 'next/link';
import { useCart } from '@/components/cart/cart-provider';
import { calculateDelivery } from '@/lib/delivery';
import { formatCurrency } from '@/lib/format';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal, delivery, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-brand-line bg-white p-10 text-center shadow-soft">
          <h1 className="font-serif text-4xl text-brand-green">Your cart is empty</h1>
          <p className="mt-4 text-brand-body/70">Add a few handcrafted chocolate favourites and come back here to continue your order.</p>
          <Link href="/shop" className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3.5 text-sm font-medium text-white">
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-8">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green/70">Cart</div>
        <h1 className="mt-2 font-serif text-4xl text-brand-green md:text-5xl">Your order</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-5">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col gap-4 rounded-[1.5rem] border border-brand-line bg-white p-4 shadow-soft sm:flex-row sm:items-center">
              <img src={item.image} alt={item.name} className="h-28 w-28 rounded-[1rem] object-cover" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-2xl text-brand-green">{item.name}</h2>
                    <p className="mt-1 text-sm text-brand-body/65">{item.variant}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-sm text-brand-green underline-offset-4 hover:underline">
                    Remove
                  </button>
                </div>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="inline-flex items-center gap-3 rounded-full border border-brand-line bg-brand-cream px-2 py-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-8 w-8 rounded-full bg-white text-lg text-brand-green"
                      aria-label={`Decrease quantity for ${item.name}`}
                    >
                      −
                    </button>
                    <span className="min-w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8 rounded-full bg-white text-lg text-brand-green"
                      aria-label={`Increase quantity for ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  <div className="text-lg font-semibold text-brand-green">{formatCurrency(item.price * item.quantity)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-[1.75rem] border border-brand-line bg-brand-cream p-6 shadow-soft">
          <h2 className="font-serif text-3xl text-brand-green">Summary</h2>
          <div className="mt-6 space-y-4 text-brand-body/75">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Delivery</span>
              <span>{delivery === 0 ? 'Free' : formatCurrency(delivery)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-brand-line pt-4 text-lg font-semibold text-brand-green">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>

          <Link href="/checkout" className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-brand-green px-6 py-3.5 text-sm font-medium text-white">
            Proceed to checkout
          </Link>
        </aside>
      </div>
    </div>
  );
}
