export const metadata = {
  title: 'Contact',
  description: 'Contact Dearé Øne for chocolate gifting, product enquiries, and custom order conversations.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green/70">Contact</div>
        <h1 className="mt-3 font-serif text-4xl text-brand-green md:text-5xl">Get in touch</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[1.75rem] border border-brand-line bg-white p-8 shadow-soft">
          <h2 className="font-serif text-3xl text-brand-green">Order & enquiry details</h2>
          <div className="mt-6 space-y-5 text-brand-body/80">
            <p><strong>Email:</strong> hello@deareone.in</p>
            <p><strong>Instagram:</strong> @deare_one</p>
            <p><strong>WhatsApp:</strong> +91 98765 43210</p>
            <p><strong>Location:</strong> Hyderabad, India</p>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-brand-line bg-brand-cream p-8 shadow-soft">
          <h2 className="font-serif text-3xl text-brand-green">Ask about a gift order</h2>
          <p className="mt-4 leading-7 text-brand-body/75">
            Whether you are planning a birthday surprise, anniversary gift, festive treat, or a custom corporate order, we would be happy to help.
          </p>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3.5 text-sm font-medium text-white">
            Message on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
