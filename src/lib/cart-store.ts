"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  key: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, "key" | "quantity"> & { quantity?: number }) => void;
  removeItem: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: () => number;
  subtotal: () => number;
};

const FREE_SHIPPING_THRESHOLD = 5000;
const SHIPPING_FLAT = 120;

export { FREE_SHIPPING_THRESHOLD, SHIPPING_FLAT };

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),
      addItem: (item) => {
        const key = `${item.productId}:${item.size}`;
        const existing = get().items.find((i) => i.key === key);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.key === key
                ? { ...i, quantity: i.quantity + (item.quantity ?? 1) }
                : i,
            ),
            isOpen: true,
          });
          return;
        }
        set({
          items: [
            ...get().items,
            {
              ...item,
              key,
              quantity: item.quantity ?? 1,
            },
          ],
          isOpen: true,
        });
      },
      removeItem: (key) =>
        set({ items: get().items.filter((i) => i.key !== key) }),
      updateQuantity: (key, quantity) => {
        if (quantity <= 0) {
          get().removeItem(key);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.key === key ? { ...i, quantity } : i,
          ),
        });
      },
      clearCart: () => set({ items: [] }),
      itemCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      subtotal: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    {
      name: "clubzen-cart",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);
