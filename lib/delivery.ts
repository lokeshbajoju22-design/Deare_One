import { Product, products } from '@/data/products';

export function calculateDelivery(cart: { quantity: number; price: number }[], overrides = { FREE_DELIVERY_MIN_QUANTITY: 3, DELIVERY_CHARGE: 150, FREE_DELIVERY_THRESHOLD: 900 }) {
  const quantityTotal = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (quantityTotal >= overrides.FREE_DELIVERY_MIN_QUANTITY || subtotal >= overrides.FREE_DELIVERY_THRESHOLD) {
    return 0;
  }

  return overrides.DELIVERY_CHARGE;
}
