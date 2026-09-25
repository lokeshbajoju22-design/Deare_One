import { siteConfig } from '@/data/site';

export type DeliveryConfig = {
  FREE_DELIVERY_MIN_QUANTITY: number;
  DELIVERY_CHARGE: number;
  FREE_DELIVERY_THRESHOLD: number;
};

export function calculateDelivery(
  cart: { quantity: number; price: number }[],
  overrides: Partial<DeliveryConfig> = {},
) {
  const config: DeliveryConfig = {
    ...siteConfig.delivery,
    ...overrides,
  };

  const quantityTotal = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (quantityTotal >= config.FREE_DELIVERY_MIN_QUANTITY || subtotal >= config.FREE_DELIVERY_THRESHOLD) {
    return 0;
  }

  return config.DELIVERY_CHARGE;
}
