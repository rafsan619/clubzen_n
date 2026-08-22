"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { useCartStore } from "@/lib/cart-store";

const links = [
  { href: "#essentials", label: "Shop" },
  { href: "#collection", label: "About" },
  { href: "#lookbook", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const openCart = useCartStore((s) => s.openCart);
  const itemCount = useCartStore((s) => s.itemCount());

  useEffect(() => setMounted(true), []);
  const count = mounted ? itemCount : 0;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute inset-x-0 top-0 z-[5] flex items-center justify-between px-4 py-4 md:px-8 md:py-5"
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="Club Zen home">
          <Logo className="h-8 w-8 md:h-9 md:w-9" priority />
          <span className="hidden text-[11px] tracking-[0.22em] text-zen-black uppercase sm:inline">
            Club Zen
          </span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[10px] tracking-[0.2em] text-zen-black/70 uppercase transition-colors hover:text-zen-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-4 w-4 text-zen-black" strokeWidth={1.5} />
        </button>

        <div className="flex items-center gap-5 md:gap-6">
          <button
            type="button"
            aria-label="Search"
            className="hidden items-center gap-1.5 sm:flex"
          >
            <Search className="h-3.5 w-3.5 text-zen-black" strokeWidth={1.5} />
            <span className="text-[10px] tracking-[0.18em] text-zen-black/70 uppercase">
              Search
            </span>
          </button>
          <button
            type="button"
            aria-label="Open bag"
            className="relative flex items-center gap-1.5"
            onClick={openCart}
          >
            <ShoppingBag className="h-3.5 w-3.5 text-zen-black" strokeWidth={1.5} />
            <span className="text-[10px] tracking-[0.18em] text-zen-black/70 uppercase">
              Bag
            </span>
            {count > 0 && (
              <span className="absolute -top-2 -right-3 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-zen-green px-1 text-[8px] font-medium text-zen-black">
                {count}
              </span>
            )}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[6] bg-zen-offwhite/98 backdrop-blur-sm md:hidden"
          >
            <div className="flex items-center justify-between px-4 py-4">
              <Logo className="h-9 w-9" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 px-6 pt-10">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl tracking-wide text-zen-black uppercase"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
