"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Logo } from "@/components/Logo";
import {
  FREE_SHIPPING_THRESHOLD,
  SHIPPING_FLAT,
  useCartStore,
} from "@/lib/cart-store";
import { formatPrice } from "@/lib/products";

type Step = "details" | "success";

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const subtotal = useCartStore((s) => s.subtotal());
  const [step, setStep] = useState<Step>("details");
  const [loading, setLoading] = useState(false);

  const shipping = useMemo(() => {
    if (subtotal === 0) return 0;
    return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT;
  }, [subtotal]);

  const total = subtotal + shipping;

  async function handlePlaceOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    clearCart();
    setLoading(false);
    setStep("success");
  }

  if (step === "success") {
    return (
      <main className="flex min-h-dvh items-center justify-center bg-zen-offwhite px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md text-center"
        >
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-zen-green">
            <Check className="h-5 w-5 text-zen-black" strokeWidth={2} />
          </div>
          <h1 className="font-display text-4xl uppercase">Order placed</h1>
          <p className="mt-3 text-sm text-zen-gray">
            Thanks for shopping Club Zen. A confirmation will land in your inbox
            shortly.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-zen-black px-6 py-3 text-[10px] tracking-[0.2em] text-zen-offwhite uppercase"
          >
            Back to shop
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-dvh bg-zen-offwhite">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-5 md:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Continue shopping
        </Link>
        <Logo className="h-10 w-10" />
        <span className="text-[10px] tracking-[0.18em] text-zen-gray uppercase">
          Checkout
        </span>
      </header>

      {items.length === 0 ? (
        <div className="mx-auto max-w-md px-6 py-24 text-center">
          <h1 className="font-display text-4xl uppercase">Bag is empty</h1>
          <Link
            href="/#essentials"
            className="mt-6 inline-block text-[10px] tracking-[0.2em] uppercase hover:text-zen-green-deep"
          >
            Browse essentials →
          </Link>
        </div>
      ) : (
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-5 pb-16 md:grid-cols-[1.1fr_0.9fr] md:px-8">
          <form onSubmit={handlePlaceOrder} className="space-y-8">
            <section>
              <h2 className="mb-4 text-[10px] tracking-[0.22em] text-zen-gray uppercase">
                Contact
              </h2>
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full border border-zen-black/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-zen-black"
              />
            </section>

            <section>
              <h2 className="mb-4 text-[10px] tracking-[0.22em] text-zen-gray uppercase">
                Shipping
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  required
                  placeholder="First name"
                  className="border border-zen-black/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-zen-black"
                />
                <input
                  required
                  placeholder="Last name"
                  className="border border-zen-black/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-zen-black"
                />
                <input
                  required
                  placeholder="Address"
                  className="sm:col-span-2 border border-zen-black/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-zen-black"
                />
                <input
                  required
                  placeholder="City"
                  className="border border-zen-black/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-zen-black"
                />
                <input
                  required
                  placeholder="Phone"
                  className="border border-zen-black/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-zen-black"
                />
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-[10px] tracking-[0.22em] text-zen-gray uppercase">
                Payment
              </h2>
              <div className="space-y-3">
                <label className="flex cursor-pointer items-center gap-3 border border-zen-black bg-zen-black px-4 py-3 text-zen-offwhite">
                  <input
                    type="radio"
                    name="pay"
                    defaultChecked
                    className="accent-zen-green"
                  />
                  <span className="text-xs tracking-[0.14em] uppercase">
                    Cash on delivery
                  </span>
                </label>
                <label className="flex cursor-pointer items-center gap-3 border border-zen-black/15 px-4 py-3">
                  <input type="radio" name="pay" className="accent-zen-green" />
                  <span className="text-xs tracking-[0.14em] uppercase">
                    bKash / Nagad
                  </span>
                </label>
              </div>
            </section>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-zen-black py-4 text-[10px] tracking-[0.22em] text-zen-offwhite uppercase transition-colors hover:bg-zen-green hover:text-zen-black disabled:opacity-60"
            >
              {loading ? "Placing order…" : `Place order · ${formatPrice(total)}`}
            </button>
          </form>

          <aside className="h-fit rounded-[18px] border border-zen-black/10 bg-white/50 p-5 md:sticky md:top-6">
            <h2 className="mb-5 text-[10px] tracking-[0.22em] text-zen-gray uppercase">
              Order summary
            </h2>
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.key} className="flex gap-3">
                  <div className="relative h-16 w-12 overflow-hidden bg-zen-gray-soft/40">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] tracking-[0.1em] uppercase">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-[10px] text-zen-gray uppercase">
                      {item.size} · Qty {item.quantity}
                    </p>
                  </div>
                  <p className="text-xs">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 border-t border-zen-black/10 pt-4 text-xs">
              <div className="flex justify-between">
                <span className="text-zen-gray">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zen-gray">Shipping</span>
                <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between pt-2 text-sm font-medium">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
