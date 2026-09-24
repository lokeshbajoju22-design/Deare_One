'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/components/cart/cart-provider';
import { createOrder, processPayment, confirmPayment, paymentSuccess, paymentFailure } from '@/lib/payments';
import { formatCurrency } from '@/lib/format';
import { siteConfig } from '@/data/site';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, subtotal, delivery, total, clearCart } = useCart();
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    house: '',
    street: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
    instructions: '',
    notes: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('manual');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-brand-line bg-white p-10 text-center shadow-soft">
          <h1 className="font-serif text-4xl text-brand-green">Your cart is empty</h1>
          <p className="mt-4 text-brand-body/70">Please add products before proceeding to checkout.</p>
          <Link href="/shop" className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3.5 text-sm font-medium text-white">
            Shop now
          </Link>
        </div>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    const requiredFields = ['name', 'mobile', 'email', 'address', 'city', 'state', 'pincode'];
    const missing = requiredFields.find((field) => !form[field as keyof typeof form]?.toString().trim());

    if (missing) {
      setError('Please fill in all required fields before placing your order.');
      return;
    }

    setLoading(true);

    try {
      const order = createOrder({ items: cart, customer: form, total, subtotal, delivery, paymentMethod });
      const paymentResult = await processPayment({ order, method: paymentMethod });

      if (!paymentResult.success) {
        paymentFailure(order.id, paymentResult.message);
        setError(paymentResult.message || 'Payment could not be processed right now.');
        setLoading(false);
        return;
      }

      const confirmed = await confirmPayment({ orderId: order.id, paymentMethod });

      if (!confirmed.success) {
        paymentFailure(order.id, confirmed.message);
        setError(confirmed.message || 'Order confirmation failed.');
        setLoading(false);
        return;
      }

      paymentSuccess(order.id, paymentMethod);
      clearCart();
      router.push('/order-success');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong while placing the order.';
      paymentFailure('unknown', message);
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green/70">Checkout</div>
        <h1 className="mt-2 font-serif text-4xl text-brand-green md:text-5xl">Complete your order</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
        <form onSubmit={handleSubmit} className="space-y-8 rounded-[1.75rem] border border-brand-line bg-white p-6 shadow-soft">
          <div>
            <h2 className="font-serif text-3xl text-brand-green">Customer details</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="block text-sm font-medium text-brand-body/75">
                Customer name
                <input value={form.name} onChange={(e) => handleChange('name', e.target.value)} className="mt-2 w-full rounded-full border border-brand-line bg-brand-ivory px-4 py-3 outline-none ring-0 focus:border-brand-green" required />
              </label>
              <label className="block text-sm font-medium text-brand-body/75">
                Mobile number
                <input value={form.mobile} onChange={(e) => handleChange('mobile', e.target.value)} className="mt-2 w-full rounded-full border border-brand-line bg-brand-ivory px-4 py-3 outline-none ring-0 focus:border-brand-green" required />
              </label>
              <label className="block text-sm font-medium text-brand-body/75 md:col-span-2">
                Email
                <input type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} className="mt-2 w-full rounded-full border border-brand-line bg-brand-ivory px-4 py-3 outline-none ring-0 focus:border-brand-green" required />
              </label>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-brand-green">Delivery address</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="block text-sm font-medium text-brand-body/75 md:col-span-2">
                Address
                <input value={form.address} onChange={(e) => handleChange('address', e.target.value)} className="mt-2 w-full rounded-full border border-brand-line bg-brand-ivory px-4 py-3 outline-none ring-0 focus:border-brand-green" required />
              </label>
              <label className="block text-sm font-medium text-brand-body/75">
                House/Flat
                <input value={form.house} onChange={(e) => handleChange('house', e.target.value)} className="mt-2 w-full rounded-full border border-brand-line bg-brand-ivory px-4 py-3 outline-none ring-0 focus:border-brand-green" />
              </label>
              <label className="block text-sm font-medium text-brand-body/75">
                Street
                <input value={form.street} onChange={(e) => handleChange('street', e.target.value)} className="mt-2 w-full rounded-full border border-brand-line bg-brand-ivory px-4 py-3 outline-none ring-0 focus:border-brand-green" />
              </label>
              <label className="block text-sm font-medium text-brand-body/75">
                Area
                <input value={form.area} onChange={(e) => handleChange('area', e.target.value)} className="mt-2 w-full rounded-full border border-brand-line bg-brand-ivory px-4 py-3 outline-none ring-0 focus:border-brand-green" />
              </label>
              <label className="block text-sm font-medium text-brand-body/75">
                City
                <input value={form.city} onChange={(e) => handleChange('city', e.target.value)} className="mt-2 w-full rounded-full border border-brand-line bg-brand-ivory px-4 py-3 outline-none ring-0 focus:border-brand-green" required />
              </label>
              <label className="block text-sm font-medium text-brand-body/75">
                State
                <input value={form.state} onChange={(e) => handleChange('state', e.target.value)} className="mt-2 w-full rounded-full border border-brand-line bg-brand-ivory px-4 py-3 outline-none ring-0 focus:border-brand-green" required />
              </label>
              <label className="block text-sm font-medium text-brand-body/75">
                PIN code
                <input value={form.pincode} onChange={(e) => handleChange('pincode', e.target.value)} className="mt-2 w-full rounded-full border border-brand-line bg-brand-ivory px-4 py-3 outline-none ring-0 focus:border-brand-green" required />
              </label>
              <label className="block text-sm font-medium text-brand-body/75 md:col-span-2">
                Delivery instructions
                <input value={form.instructions} onChange={(e) => handleChange('instructions', e.target.value)} className="mt-2 w-full rounded-full border border-brand-line bg-brand-ivory px-4 py-3 outline-none ring-0 focus:border-brand-green" />
              </label>
              <label className="block text-sm font-medium text-brand-body/75 md:col-span-2">
                Order notes
                <textarea value={form.notes} onChange={(e) => handleChange('notes', e.target.value)} className="mt-2 min-h-28 w-full rounded-[1.25rem] border border-brand-line bg-brand-ivory px-4 py-3 outline-none ring-0 focus:border-brand-green" />
              </label>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-brand-green">Payment</h2>
            <div className="mt-5 space-y-3">
              {[
                { id: 'manual', label: 'Cash / Manual order' },
                { id: 'whatsapp', label: 'WhatsApp order' },
                { id: 'gateway', label: 'Payment gateway placeholder' },
              ].map((option) => (
                <label key={option.id} className="flex cursor-pointer items-center gap-3 rounded-full border border-brand-line bg-brand-cream px-4 py-3 text-sm font-medium text-brand-body">
                  <input type="radio" checked={paymentMethod === option.id} onChange={() => setPaymentMethod(option.id)} name="paymentMethod" />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          {error && <div className="rounded-full border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}

          <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center rounded-full bg-brand-green px-6 py-3.5 text-sm font-medium text-white disabled:opacity-65">
            {loading ? 'Placing order...' : 'Place order'}
          </button>
        </form>

        <aside className="rounded-[1.75rem] border border-brand-line bg-brand-cream p-6 shadow-soft">
          <h2 className="font-serif text-3xl text-brand-green">Order summary</h2>

          <div className="mt-5 space-y-4 text-brand-body/75">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-4 border-b border-brand-line pb-3">
                <div>
                  <p className="font-medium text-brand-green">{item.name}</p>
                  <p className="text-sm">{item.variant} × {item.quantity}</p>
                </div>
                <span>{formatCurrency(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>

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

          <div className="mt-6 rounded-[1.25rem] border border-brand-line bg-white p-4 text-sm text-brand-body/75">
            Delivery charge is managed centrally in <span className="font-medium text-brand-green">data/site.ts</span> and can be adjusted without changing UI components.
          </div>
        </aside>
      </div>
    </div>
  );
}
