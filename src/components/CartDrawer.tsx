"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FREE_SHIPPING_THRESHOLD,
  SHIPPING_FLAT,
  useCartStore,
} from "@/lib/cart-store";
import { formatPrice } from "@/lib/products";

export function CartDrawer() {
  const isOpen = useCartStore((s) => s.isOpen);
  const closeCart = useCartStore((s) => s.closeCart);
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const subtotal = useCartStore((s) => s.subtotal());

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const shipping = subtotal === 0 ? 0 : remaining === 0 ? 0 : SHIPPING_FLAT;
  const total = subtotal + shipping;
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close bag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/45 backdrop-blur-[2px]"
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            className="fixed top-0 right-0 z-[70] flex h-dvh w-full max-w-md flex-col bg-zen-offwhite shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-zen-black/10 px-5 py-4">
              <div>
                <p className="text-[10px] tracking-[0.22em] text-zen-gray uppercase">
                  Your bag
                </p>
                <p className="mt-1 font-display text-2xl uppercase">
                  {items.length === 0 ? "Empty" : `${items.length} item${items.length > 1 ? "s" : ""}`}
                </p>
              </div>
              <button type="button" aria-label="Close" onClick={closeCart}>
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>

            {subtotal > 0 && (
              <div className="border-b border-zen-black/10 px-5 py-4">
                <div className="mb-2 flex justify-between text-[10px] tracking-[0.14em] uppercase">
                  <span className="text-zen-gray">
                    {remaining === 0
                      ? "Free shipping unlocked"
                      : `${formatPrice(remaining)} to free shipping`}
                  </span>
                  <span className="text-zen-green-deep">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-zen-gray-soft">
                  <motion.div
                    className="h-full bg-zen-green"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <p className="text-sm text-zen-gray">Your bag is empty.</p>
                  <button
                    type="button"
                    onClick={closeCart}
                    className="mt-4 text-[10px] tracking-[0.2em] text-zen-black uppercase hover:text-zen-green-deep"
                  >
                    Continue shopping →
                  </button>
                </div>
              ) : (
                <ul className="space-y-5">
                  {items.map((item) => (
                    <li key={item.key} className="flex gap-4">
                      <div className="relative h-24 w-[4.5rem] shrink-0 overflow-hidden bg-zen-gray-soft/40">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="72px"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-[11px] tracking-[0.12em] uppercase">
                              {item.name}
                            </p>
                            <p className="mt-1 text-[10px] text-zen-gray uppercase">
                              Size {item.size}
                            </p>
                          </div>
                          <p className="text-xs">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center gap-3 border border-zen-black/15 px-2 py-1">
                            <button
                              type="button"
                              aria-label="Decrease"
                              onClick={() =>
                                updateQuantity(item.key, item.quantity - 1)
                              }
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="min-w-4 text-center text-xs">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              aria-label="Increase"
                              onClick={() =>
                                updateQuantity(item.key, item.quantity + 1)
                              }
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.key)}
                            className="text-[9px] tracking-[0.16em] text-zen-gray uppercase hover:text-zen-black"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-zen-black/10 px-5 py-5">
                <div className="mb-1 flex justify-between text-xs">
                  <span className="text-zen-gray">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="mb-3 flex justify-between text-xs">
                  <span className="text-zen-gray">Shipping</span>
                  <span>
                    {shipping === 0 ? "Free" : formatPrice(shipping)}
                  </span>
                </div>
                <div className="mb-5 flex justify-between text-sm font-medium">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="flex w-full items-center justify-center rounded-full bg-zen-black py-3.5 text-[10px] tracking-[0.22em] text-zen-offwhite uppercase transition-colors hover:bg-zen-green hover:text-zen-black"
                >
                  Checkout
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
