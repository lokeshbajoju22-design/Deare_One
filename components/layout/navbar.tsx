import Link from 'next/link';
import { siteConfig } from '@/data/site';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-brand-ivory/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/brand/deare-one-badge.svg" alt={siteConfig.brandName} className="h-12 w-12 rounded-full object-cover" />
          <div>
            <div className="font-serif text-xl text-brand-green">{siteConfig.brandName}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-brand-body/55">{siteConfig.tagline}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-body/75 lg:flex">
          <Link href="/" className="hover:text-brand-green">Home</Link>
          <Link href="/shop" className="hover:text-brand-green">Shop</Link>
          <Link href="/about" className="hover:text-brand-green">About</Link>
          <Link href="/contact" className="hover:text-brand-green">Contact</Link>
          <Link href="/faq" className="hover:text-brand-green">FAQ</Link>
          <a href={`https://instagram.com/${siteConfig.instagramHandle.replace('@', '')}`} target="_blank" rel="noreferrer" className="hover:text-brand-green">Instagram</a>
          <a href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="hover:text-brand-green">WhatsApp</a>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/cart" className="inline-flex items-center justify-center rounded-full bg-brand-green px-4 py-2 text-sm font-medium text-white">
            Cart
          </Link>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-line bg-white text-brand-green lg:hidden" aria-label="Open menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
