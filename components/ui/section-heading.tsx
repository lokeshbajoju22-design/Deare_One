export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green/70">{eyebrow}</div>
      <h2 className="mt-3 font-serif text-4xl text-brand-green md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-brand-body/75">{description}</p>
    </div>
  );
}
