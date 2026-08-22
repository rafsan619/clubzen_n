"use client";

import { motion } from "framer-motion";

export function BrandStatement() {
  return (
    <section className="relative z-10 mx-auto mt-28 w-[94vw] max-w-[1400px] py-10 md:mt-36 md:w-[90vw] md:py-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="font-display text-[16vw] leading-[0.9] tracking-[-0.04em] text-zen-offwhite uppercase md:text-[9vw]"
      >
        More room.
        <br />
        More you.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-8 max-w-md text-sm leading-relaxed text-white/50 md:mt-10 md:text-base"
      >
        Club Zen is about oversized silhouettes, everyday comfort and expressing
        yourself without trying too hard.
      </motion.p>
    </section>
  );
}
