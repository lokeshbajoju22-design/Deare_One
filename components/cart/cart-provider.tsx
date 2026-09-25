'use client';

import { useEffect, useState, createContext, useContext } from 'react';
import { calculateDelivery } from '@/lib/delivery';
import { Product } from '@/types';

export type CartItem = {
  id: string;
  productId: string;
  name: string;
  image: string;
  variant: string;
  price: number;
  quantity: number;
};

type CartContextValue = {
  cart: CartItem[];
  subtotal: number;
  delivery: number;
  total: number;
  addItem: (product: Product, variant: string, quantity?: number, image?: string, priceOverride?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, nextQuantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const raw = window.localStorage.getItem('deare-one-cart');
    if (raw) {
      try {
        setCart(JSON.parse(raw));
      } catch {
        setCart([]);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('deare-one-cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addItem = (product: Product, variant: string, quantity = 1, image?: string, priceOverride?: number) => {
    const variantInfo = product.variants.find((entry) => entry.name === variant) || product.variants[0];
    const itemImage = image || product.images[0] || '/images/brand/deare-one-badge.svg';
    const price = priceOverride ?? variantInfo?.price ?? product.price;
    const id = `${product.id}-${variant}`;

    setCart((prev) => {
      const existing = prev.find((entry) => entry.id === id);
      if (existing) {
        return prev.map((entry) => (entry.id === id ? { ...entry, quantity: entry.quantity + quantity } : entry));
      }
      return [...prev, { id, productId: product.id, name: product.name, image: itemImage, variant, price, quantity }];
    });
  };

  const removeFromCart = (id: string) => setCart((prev) => prev.filter((entry) => entry.id !== id));

  const updateQuantity = (id: string, nextQuantity: number) => {
    if (nextQuantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart((prev) => prev.map((entry) => (entry.id === id ? { ...entry, quantity: nextQuantity } : entry)));
  };

  const clearCart = () => setCart([]);

  const subtotal = cart.reduce((sum, entry) => sum + entry.price * entry.quantity, 0);
  const delivery = calculateDelivery(cart);
  const total = subtotal + delivery;

  const value: CartContextValue = { cart, subtotal, delivery, total, addItem, removeFromCart, updateQuantity, clearCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
