export const metadata = {
  title: 'Shipping & Delivery',
  description: 'Shipping and delivery information for Dearé Øne chocolate orders.',
};

export default function ShippingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green/70">Shipping</div>
        <h1 className="mt-3 font-serif text-4xl text-brand-green md:text-5xl">Shipping & Delivery</h1>
      </div>

      <div className="space-y-6 rounded-[1.75rem] border border-brand-line bg-white p-8 shadow-soft text-brand-body/75">
        <p>Dearé Øne currently supports India-based delivery with centrally managed delivery settings for easy updates.</p>
        <p>Free delivery is available when the order meets the configured threshold, and delivery charges are displayed clearly during checkout. These settings can be updated without modifying the storefront UI.</p>
        <p>Delivery timelines may vary depending on location, product availability, and order volume. Customers will be informed of any major delays.</p>
      </div>
    </div>
  );
}
