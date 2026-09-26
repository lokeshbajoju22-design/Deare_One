export function createOrder({ items, customer, total, subtotal, delivery, paymentMethod }: { items: any[]; customer: Record<string, any>; total: number; subtotal: number; delivery: number; paymentMethod: string }) {
  return {
    id: `DEARE-${Date.now()}`,
    items,
    customer,
    amount: total,
    subtotal,
    delivery,
    paymentMethod,
    createdAt: new Date().toISOString(),
  };
}

export async function processPayment({ order, method }: { order: any; method: string }) {
  if (method === 'gateway') {
    return {
      success: false,
      message: 'Payment gateway integration is not enabled yet. Choose manual or WhatsApp order.',
    };
  }

  return { success: true, orderId: order.id, message: 'Payment flow accepted.' };
}

export async function confirmPayment({ orderId, paymentMethod }: { orderId: string; paymentMethod: string }) {
  return { success: true, orderId, paymentMethod, message: 'Order confirmed.' };
}

export function paymentSuccess(orderId: string, paymentMethod: string) {
  return { ok: true, orderId, paymentMethod };
}

export function paymentFailure(orderId: string, message: string) {
  return { ok: false, orderId, message };
}
