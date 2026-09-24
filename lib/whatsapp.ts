export function buildWhatsAppOrderMessage({
  items,
  subtotal,
  delivery,
  total,
  customerName,
  deliveryLocation,
}: {
  items: Array<{ name: string; quantity: number; variant: string; price: number }>;
  subtotal: number;
  delivery: number;
  total: number;
  customerName: string;
  deliveryLocation: string;
}) {
  const lines = [
    'Hello Dearé Øne,',
    '',
    'I would like to place an order:',
    '',
    ...items.map((item, index) => `${index + 1}. ${item.quantity} × ${item.name} (${item.variant})`),
    '',
    `Subtotal: ₹${subtotal}`,
    `Delivery: ₹${delivery}`,
    `Total: ₹${total}`,
    '',
    customerName ? `Name: ${customerName}` : 'Name:',
    deliveryLocation ? `Delivery Location: ${deliveryLocation}` : 'Delivery Location:',
    '',
    'Thank you.',
  ];

  return lines.join('\n');
}

export function generateWhatsAppLink(message: string) {
  const phone = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+919876543210').replace(/\D/g, '');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
