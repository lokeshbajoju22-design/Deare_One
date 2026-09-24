export const metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about gifting, delivery, and Dearé Øne chocolate orders.',
};

export default function FAQPage() {
  const faqs = [
    {
      q: 'Do you offer gifting for special occasions?',
      a: 'Yes. Dearé Øne is designed for birthdays, anniversaries, thank-you gestures, and other meaningful moments.',
    },
    {
      q: 'Is delivery available across India?',
      a: 'The storefront is structured to support India-wide delivery. Delivery charges and conditions are managed centrally in the business settings.',
    },
    {
      q: 'Can I place a bulk or corporate order?',
      a: 'Yes. The corporate gifting section is built for larger order conversations and can be expanded later into a dedicated corporate gifting flow.',
    },
    {
      q: 'Can I order on WhatsApp?',
      a: 'Yes. The site supports WhatsApp ordering and includes a prefilled message for customer orders.',
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green/70">FAQ</div>
        <h1 className="mt-3 font-serif text-4xl text-brand-green md:text-5xl">Frequently asked questions</h1>
      </div>

      <div className="space-y-4">
        {faqs.map((item) => (
          <div key={item.q} className="rounded-[1.5rem] border border-brand-line bg-white p-6 shadow-soft">
            <h2 className="font-serif text-2xl text-brand-green">{item.q}</h2>
            <p className="mt-3 text-base leading-7 text-brand-body/75">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
