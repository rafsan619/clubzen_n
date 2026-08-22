"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { heroImages } from "@/lib/products";

const categories = [
  {
    id: "tees",
    title: "Oversized Tees",
    copy: "Relaxed silhouettes. Heavyweight comfort.",
    image: heroImages.collectionTees,
    href: "#essentials",
    wide: true,
  },
  {
    id: "pants",
    title: "Baggy Pants",
    copy: "Room to move. Built to style.",
    image: heroImages.collectionPants,
    href: "#essentials",
    wide: false,
  },
];

export function CollectionSection() {
  return (
    <section
      id="collection"
      className="relative z-10 mx-auto mt-16 w-[94vw] max-w-[1400px] px-1 md:mt-24 md:w-[90vw]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="font-display mb-10 text-[12vw] leading-none tracking-[-0.03em] text-zen-offwhite uppercase md:mb-14 md:text-[6.5vw]"
      >
        The Collection
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-12 md:gap-5">
        {categories.map((cat, index) => (
          <motion.article
            key={cat.id}
            id={cat.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={
              cat.wide
                ? "group relative md:col-span-7"
                : "group relative md:col-span-5 md:mt-16"
            }
          >
            <div
              className={`relative overflow-hidden ${
                cat.wide ? "aspect-[4/5] md:aspect-[5/6]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 768px) 94vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
            <div className="mt-5 flex items-end justify-between gap-4">
              <div>
                <h3 className="font-display text-3xl tracking-wide text-zen-offwhite uppercase md:text-4xl">
                  {cat.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm text-white/55">{cat.copy}</p>
              </div>
              <Link
                href={cat.href}
                className="group/link inline-flex shrink-0 items-center gap-1.5 text-[10px] tracking-[0.2em] text-zen-green uppercase transition-transform hover:translate-x-0.5"
              >
                Explore
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
