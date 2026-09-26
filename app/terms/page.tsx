export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for Dearé Øne purchases and customer orders.',
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green/70">Terms</div>
        <h1 className="mt-3 font-serif text-4xl text-brand-green md:text-5xl">Terms & Conditions</h1>
      </div>

      <div className="space-y-6 rounded-[1.75rem] border border-brand-line bg-white p-8 shadow-soft text-brand-body/75">
        <p>By placing an order with Dearé Øne, you agree to provide accurate delivery details and understand that all orders are subject to product availability and confirmation.</p>
        <p>Orders may be revised, delayed, or rejected if the information provided is incorrect or incomplete. We will make reasonable efforts to communicate any issues promptly.</p>
        <p>Product images and descriptions are provided for display purposes and may evolve as the brand expands or real product photography becomes available.</p>
        <p>Dearé Øne reserves the right to update order policies, pricing, and products as needed. The latest terms will be reflected in the website content.</p>
      </div>
    </div>
  );
}
