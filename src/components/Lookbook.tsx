"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { formatPrice, getProductById, looks } from "@/lib/products";
import { useCartStore } from "@/lib/cart-store";

export function Lookbook() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const addItem = useCartStore((s) => s.addItem);
  const active = looks.find((l) => l.id === activeId);

  return (
    <section id="lookbook" className="relative z-10 mx-auto mt-24 w-[94vw] max-w-[1400px] md:mt-32 md:w-[90vw]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 flex items-end justify-between md:mb-14"
      >
        <h2 className="font-display text-[14vw] leading-none tracking-[-0.03em] text-zen-offwhite uppercase md:text-[7vw]">
          Club Zen / 01
        </h2>
        <p className="hidden max-w-[200px] text-right text-[10px] tracking-[0.18em] text-white/40 uppercase md:block">
          Click a look to shop the pieces
        </p>
      </motion.div>

      <div className="grid grid-cols-12 gap-3 md:gap-4">
        {looks.map((look, i) => {
          const spans = [
            "col-span-12 md:col-span-7 aspect-[4/5] md:aspect-[5/4]",
            "col-span-12 md:col-span-5 aspect-[3/4] md:mt-20",
            "col-span-6 md:col-span-4 aspect-[3/4] md:-mt-10",
            "col-span-6 md:col-span-8 aspect-[3/4] md:aspect-[16/9]",
          ][i];

          return (
            <motion.button
              key={look.id}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              onClick={() => setActiveId(look.id)}
              className={`group relative overflow-hidden text-left ${spans}`}
            >
              <Image
                src={look.image}
                alt={look.title}
                fill
                sizes="(max-width: 768px) 94vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
              <span className="absolute top-4 left-4 text-[10px] tracking-[0.22em] text-white uppercase drop-shadow">
                {look.label}
              </span>
              <span className="absolute right-4 bottom-4 text-[10px] tracking-[0.16em] text-white/80 uppercase opacity-0 transition-opacity group-hover:opacity-100">
                Shop look →
              </span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm md:items-center"
            onClick={() => setActiveId(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-[20px] bg-zen-offwhite"
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setActiveId(null)}
                className="absolute top-4 right-4 z-10"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[420px]">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <p className="text-[10px] tracking-[0.22em] text-zen-gray uppercase">
                      {active.label}
                    </p>
                    <h3 className="font-display mt-2 text-4xl uppercase">
                      {active.title}
                    </h3>
                    <ul className="mt-8 space-y-5">
                      {active.productIds.map((id) => {
                        const product = getProductById(id);
                        if (!product) return null;
                        return (
                          <li
                            key={id}
                            className="flex items-center justify-between gap-4 border-b border-zen-black/10 pb-4"
                          >
                            <div className="flex items-center gap-3">
                              <div className="relative h-14 w-11 overflow-hidden bg-zen-gray-soft/50">
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  fill
                                  className="object-cover"
                                  sizes="44px"
                                />
                              </div>
                              <div>
                                <p className="text-[11px] tracking-[0.12em] uppercase">
                                  {product.name}
                                </p>
                                <p className="mt-1 text-xs text-zen-gray">
                                  {formatPrice(product.price)}
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() =>
                                addItem({
                                  productId: product.id,
                                  name: product.name,
                                  price: product.price,
                                  image: product.image,
                                  size: "L",
                                })
                              }
                              className="text-[9px] tracking-[0.16em] whitespace-nowrap text-zen-black uppercase hover:text-zen-green-deep"
                            >
                              Add +
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
