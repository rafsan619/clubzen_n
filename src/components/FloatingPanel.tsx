"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FloatingPanelProps = {
  children: ReactNode;
};

export function FloatingPanel({ children }: FloatingPanelProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative isolate z-10 mx-auto mt-[6vh] h-[84vh] w-[94vw] overflow-hidden rounded-[22px] bg-[#f7f7f2] shadow-[0_30px_80px_-28px_rgba(0,0,0,0.55)] md:mt-[8vh] md:h-[78vh] md:w-[92vw] md:rounded-[26px] lg:w-[90vw]"
    >
      {children}
    </motion.section>
  );
}
