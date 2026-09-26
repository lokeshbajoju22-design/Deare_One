import Link from 'next/link';

export const metadata = {
  title: 'Order placed',
  description: 'Your Dearé Øne order has been confirmed.',
};

export default function OrderSuccessPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-brand-line bg-white p-10 text-center shadow-soft">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-green text-3xl text-white">✓</div>
        <h1 className="mt-6 font-serif text-4xl text-brand-green md:text-5xl">Thank you for your order</h1>
        <p className="mt-4 text-brand-body/75">Your Dearé Øne order has been received successfully and is being prepared with care.</p>
        <div className="mt-8 space-y-3 text-sm text-brand-body/70">
          <p>We will confirm the details on WhatsApp or email shortly.</p>
          <p>Order reference: DEARE-ORDER-001</p>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/shop" className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3.5 text-sm font-medium text-white">
            Continue shopping
          </Link>
          <Link href="/" className="inline-flex items-center justify-center rounded-full border border-brand-green/20 bg-brand-cream px-6 py-3.5 text-sm font-medium text-brand-green">
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
