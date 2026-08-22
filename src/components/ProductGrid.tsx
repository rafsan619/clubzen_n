"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { formatPrice, products, type Product } from "@/lib/products";
import { useCartStore } from "@/lib/cart-store";

function ProductCard({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes[2] ?? "L");
  const [hovered, setHovered] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  return (
    <article
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#ebebe6]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={`object-cover transition-opacity duration-500 ${
            hovered && product.hoverImage ? "opacity-0" : "opacity-100"
          }`}
        />
        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className={`object-cover transition-all duration-500 ${
              hovered ? "scale-105 opacity-100" : "scale-100 opacity-0"
            }`}
          />
        )}
        <button
          type="button"
          onClick={() =>
            addItem({
              productId: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              size,
            })
          }
          className="absolute inset-x-3 bottom-3 translate-y-2 bg-zen-black/90 py-2.5 text-center text-[9px] tracking-[0.2em] text-zen-offwhite uppercase opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Add to bag +
        </button>
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[11px] tracking-[0.14em] text-zen-black uppercase">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-zen-gray">{formatPrice(product.price)}</p>
        </div>
        <div className="flex flex-wrap justify-end gap-1">
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={`px-1.5 text-[9px] tracking-wider uppercase transition-colors ${
                size === s
                  ? "text-zen-black"
                  : "text-zen-gray/60 hover:text-zen-black"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ProductGrid() {
  const tees = products.filter((p) => p.category === "tees");
  const pants = products.filter((p) => p.category === "pants");

  return (
    <section
      id="essentials"
      className="relative z-10 mx-auto mt-24 w-[94vw] max-w-[1400px] rounded-[22px] bg-zen-offwhite px-5 py-14 md:mt-32 md:w-[90vw] md:px-10 md:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex items-end justify-between"
      >
        <h2 className="font-display text-5xl tracking-wide text-zen-black uppercase md:text-7xl">
          Essentials
        </h2>
        <p className="hidden text-[10px] tracking-[0.2em] text-zen-gray uppercase md:block">
          8 pieces / SS26
        </p>
      </motion.div>

      <div className="mb-16">
        <p className="mb-6 text-[10px] tracking-[0.22em] text-zen-gray uppercase">
          Oversized Tees
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {tees.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-6 text-[10px] tracking-[0.22em] text-zen-gray uppercase">
          Baggy / Relaxed Pants
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {pants.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
