export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy details for Dearé Øne order and contact information.',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green/70">Privacy</div>
        <h1 className="mt-3 font-serif text-4xl text-brand-green md:text-5xl">Privacy Policy</h1>
      </div>

      <div className="space-y-6 rounded-[1.75rem] border border-brand-line bg-white p-8 shadow-soft text-brand-body/75">
        <p>Dearé Øne values your privacy. We only collect the information needed to process orders, respond to enquiries, and improve our customer experience.</p>
        <p>We may collect your name, contact details, and delivery information for order fulfilment. This information is used only for order processing and communication related to your purchase.</p>
        <p>We do not store card information on the storefront. Payment details are handled through a future gateway provider integration, if enabled.</p>
        <p>We may update this policy as the business grows or legal requirements change. Please review it periodically.</p>
      </div>
    </div>
  );
}
