import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center md:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-brand-line bg-white p-10 shadow-soft">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green/70">404</div>
        <h1 className="mt-4 font-serif text-4xl text-brand-green">This page could not be found</h1>
        <p className="mt-4 text-brand-body/75">The page you requested is not available. Explore our chocolates and gift collections.</p>
      </div>
    </div>
  );
}
