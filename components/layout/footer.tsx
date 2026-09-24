import Link from 'next/link';
import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-brand-line bg-brand-green text-brand-ivory">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr_0.9fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/images/brand/deare-one-badge.svg" alt={siteConfig.brandName} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <div className="font-serif text-xl text-white">{siteConfig.brandName}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-brand-ivory/75">{siteConfig.tagline}</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">Shop</h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-ivory/80">
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">Resources</h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-ivory/80">
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/shipping">Shipping</Link></li>
              <li><Link href="/refund">Refund Policy</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">Connect</h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-ivory/80">
              <li><a href={`https://instagram.com/${siteConfig.instagramHandle.replace('@', '')}`} target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-brand-ivory/70">
          © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
