export const metadata = {
  title: 'About Dearé Øne',
  description: 'Learn about the story behind Dearé Øne and our handcrafted gifting philosophy.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green/70">About</div>
        <h1 className="mt-3 font-serif text-4xl text-brand-green md:text-5xl">About Dearé Øne</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-brand-body/80">
          <p className="text-lg leading-8">
            Dearé Øne was created around the idea that chocolate is more than a sweet. It is a way of expressing affection, appreciation, and celebration.
          </p>
          <p className="leading-8">
            We craft chocolate gifts that feel thoughtful, elegant, and personal — ideal for those moments when a small gesture says so much. Each collection is designed to bring warmth to gift-giving, from birthdays and anniversaries to thank-yous and spontaneous celebrations.
          </p>
          <p className="leading-8">
            Our approach is rooted in premium presentation, small-batch character, and the feeling of a moment genuinely shared. The brand is intentionally minimal and refined, designed to feel like an elevated boutique chocolate experience rather than a generic confectionery offering.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-brand-line bg-white p-4 shadow-soft">
          <img src="/images/brand/deare-one-badge.svg" alt="Dearé Øne brand mark" className="h-[440px] w-full rounded-[1.5rem] object-cover" />
        </div>
      </div>
    </div>
  );
}
