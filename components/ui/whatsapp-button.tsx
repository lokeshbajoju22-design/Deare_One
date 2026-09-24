import { Product } from '@/types';

export function WhatsAppButton({ text = 'Order on WhatsApp', className = '' }: { text?: string; className?: string }) {
  const url = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '') || '919876543210'}`;

  return (
    <a href={url} target="_blank" rel="noreferrer" className={className || 'inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3.5 text-sm font-medium text-white'}>
      {text}
    </a>
  );
}
