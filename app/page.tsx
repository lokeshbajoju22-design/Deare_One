import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { products } from '@/data/products';
import { ProductCard } from '@/components/products/product-card';
import { SectionHeading } from '@/components/ui/section-heading';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';

export default function HomePage() {
  const featured = products.filter((product) => product.featured).slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-brand-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:pb-24 lg:pt-16">
          <div className="space-y-7">
            <div className="inline-flex items-center rounded-full border border-brand-line bg-white/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-brand-green">
              {siteConfig.brandName}
            </div>

            <div className="space-y-4">
              <h1 className="max-w-xl font-serif text-4xl leading-tight text-brand-green md:text-5xl lg:text-6xl">
                Because every dear one deserves something sweet.
              </h1>
              <p className="max-w-lg text-lg text-brand-body/80">
                Premium handmade chocolate gifts for meaningful moments, thoughtful surprises, and memorable celebrations.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/shop" className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3.5 text-sm font-medium text-white transition hover:bg-brand-greenSoft">
                Shop Chocolates
              </Link>
              <Link href="/shop?category=Gift%20Boxes" className="inline-flex items-center justify-center rounded-full border border-brand-green/20 bg-white px-6 py-3.5 text-sm font-medium text-brand-green transition hover:border-brand-green hover:bg-brand-cream">
                Explore Gift Boxes
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 text-sm text-brand-body/70">
              <span>Handcrafted gifting</span>
              <span>•</span>
              <span>Premium presentation</span>
              <span>•</span>
              <span>Made for meaningful moments</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-brand-gold/20 blur-2xl" />
            <div className="absolute -right-8 bottom-8 h-32 w-32 rounded-full bg-brand-green/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-brand-line bg-white p-3 shadow-soft">
              <img
                src="/images/hero/deare-one-hero.svg"
                alt="Dearé Øne premium handmade chocolate gift collection"
                className="h-[440px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-18 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Chocolates"
          title="A thoughtfully made chocolate experience"
          description="Beautifully presented and crafted for life’s sweetest moments."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-brand-green text-brand-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-18 md:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4">
            <img
              src="/images/products/gift-boxes/signature-mix-box.svg"
              alt="Signature Mix 6-piece gift box"
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-brand-gold">
              Signature Gift Box
            </div>
            <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">
              Gift-worthy chocolate, beautifully composed.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-brand-ivory/80">
              Discover the Signature Mix 6-Piece Box — a premium assortment of speciality chocolates designed for birthdays, celebrations, thank-yous, and thoughtful gifting.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-brand-ivory/80">
              <li>• Plain Milk</li>
              <li>• Plain Dark</li>
              <li>• Pumpkin Seeds</li>
              <li>• Sunflower Seeds</li>
              <li>• Black Raisin</li>
              <li>• Cashew</li>
              <li>• Roasted Almond</li>
              <li>• Dried Strawberry</li>
              <li>• Pistachio</li>
              <li>• Signature Mix</li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/product/signature-mix-6-piece-box" className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3.5 text-sm font-medium text-brand-green">
                View Gift Box
              </Link>
              <Link href="/shop?category=Gift%20Boxes" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3.5 text-sm font-medium text-white hover:bg-white/5">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-18 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Dearé Øne"
          title="Thoughtfully made for meaningful moments"
          description="A premium boutique chocolate experience shaped by presentation, warmth, and gifting intention."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ['Thoughtfully made', 'A carefully considered chocolate experience built for special occasions and everyday sweetness.'],
            ['Beautifully gifted', 'Designed to feel premium from the first glance to the final bite.'],
            ['Made for meaningful moments', 'Ideal for anniversaries, birthdays, thank-yous, and quiet gestures of affection.'],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-[1.5rem] border border-brand-line bg-white p-7 shadow-soft">
              <div className="mb-4 h-12 w-12 rounded-full bg-brand-cream flex items-center justify-center text-lg text-brand-green">✦</div>
              <h3 className="font-serif text-2xl text-brand-green">{title}</h3>
              <p className="mt-3 text-base leading-7 text-brand-body/75">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 py-18 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Gifting Moments"
            title="Create a sweet moment"
            description="Thoughtful gifting for birthdays, anniversaries, thank-yous, small celebrations, and just because."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              'Birthdays',
              'Anniversaries',
              'Thank-you gifts',
              'Corporate gifting',
            ].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-brand-line bg-white p-6 text-center shadow-soft">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-green text-2xl text-white">✦</div>
                <h3 className="font-serif text-2xl text-brand-green">{item}</h3>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3.5 text-sm font-medium text-white hover:bg-brand-greenSoft">
              Create a Sweet Moment
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-18 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Chocolates"
          title="Premium selections for every craving"
          description="From signature gift boxes to bars, almond bites, and bubble chocolates."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-brand-green text-white">
        <div className="mx-auto max-w-7xl px-4 py-18 md:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-brand-gold">
                Corporate & Bulk Orders
              </div>
              <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">
                Planning a larger order?
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-brand-ivory/80">
                Talk to us about customized chocolate gifting for festive moments, team appreciation, and special celebrations.
              </p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <WhatsAppButton text="Enquire on WhatsApp" className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3.5 text-sm font-medium text-brand-green hover:opacity-95" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-18 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Instagram"
          title={`Follow ${siteConfig.instagramHandle}`}
          description="A glimpse of chocolate moments, gifting inspiration, and new arrivals."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {['/images/brand/deare-one-badge.svg','/images/products/gift-boxes/signature-mix-box.svg','/images/hero/deare-one-hero.svg'].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-[1.5rem] border border-brand-line bg-white p-3 shadow-soft">
              <img src={src} alt="Dearé Øne chocolate feature" className="h-72 w-full rounded-[1.25rem] object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`https://instagram.com/${siteConfig.instagramHandle.replace('@', '')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-brand-green/20 bg-white px-6 py-3.5 text-sm font-medium text-brand-green hover:border-brand-green hover:bg-brand-cream"
          >
            Follow us on Instagram
          </a>
        </div>
      </section>
    </>
  );
}
