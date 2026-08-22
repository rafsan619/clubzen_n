"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroImages } from "@/lib/products";

export function BackgroundHero() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={heroImages.background}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-110 blur-[28px] saturate-[0.35] brightness-[0.55] contrast-[0.95]"
        />
        <div className="absolute inset-0 bg-[#1a1a1a]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute left-4 top-5 z-[1] text-[9px] tracking-[0.28em] text-white/55 uppercase md:left-8 md:top-8 md:text-[10px]"
      >
        Club Zen — Spring/Summer 2026
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25, duration: 0.8 }}
        className="absolute right-4 top-5 z-[1] max-w-[140px] text-right text-[9px] leading-relaxed tracking-[0.22em] text-white/45 uppercase md:right-8 md:top-8 md:max-w-none md:text-[10px]"
      >
        Designed for everyday movement
      </motion.p>
    </div>
  );
}
