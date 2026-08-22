"use client";

import { motion } from "framer-motion";

const TILES = 12;

export function HeroGridOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.85, duration: 0.8 }}
      aria-hidden
      className="hero-glass-grid pointer-events-none absolute inset-0 z-[1] grid grid-cols-4 grid-rows-3"
    >
      {Array.from({ length: TILES }).map((_, i) => (
        <div key={i} className="hero-glass-tile" />
      ))}
    </motion.div>
  );
}
