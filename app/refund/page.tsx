export const metadata = {
  title: 'Refund Policy',
  description: 'Refund and cancellation information for Dearé Øne orders.',
};

export default function RefundPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green/70">Refunds</div>
        <h1 className="mt-3 font-serif text-4xl text-brand-green md:text-5xl">Refund / Cancellation Policy</h1>
      </div>

      <div className="space-y-6 rounded-[1.75rem] border border-brand-line bg-white p-8 shadow-soft text-brand-body/75">
        <p>Cancellation and refund requests are reviewed on a case-by-case basis and depend on the order status.</p>
        <p>If a product is damaged or the delivery is incorrect, customers may request a review through direct contact with Dearé Øne.</p>
        <p>Please contact the brand as soon as possible with details of your order and issue. Additional documentation may be required for verification.</p>
      </div>
    </div>
  );
}
