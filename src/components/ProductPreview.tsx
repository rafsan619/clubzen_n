"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProductPreview() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute top-[4.6rem] left-4 z-[4] max-w-[210px] text-[9px] leading-[1.75] tracking-[0.16em] text-zen-black/70 uppercase md:top-[5.6rem] md:left-8 md:max-w-[260px] md:text-[10px]"
      >
        Club Zen is built for those who choose form over noise — and let the
        fit speak where words don&apos;t have to.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.08, duration: 0.6 }}
        className="absolute top-[38%] right-4 z-[4] max-w-[130px] text-right text-[9px] leading-[1.65] tracking-[0.18em] text-zen-black/55 uppercase md:top-[42%] md:right-8 md:max-w-[170px] md:text-[10px]"
      >
        Fashion without the shout.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.12, duration: 0.6 }}
        className="absolute top-[46%] left-4 z-[4] md:left-8"
      >
        <Link
          href="#essentials"
          className="group inline-flex items-center gap-2.5 rounded-full bg-[#2a2a2a] px-5 py-2.5 text-[10px] tracking-[0.2em] text-white uppercase transition-all hover:translate-x-0.5 hover:bg-zen-black"
        >
          Shop the drop
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            strokeWidth={1.5}
          />
        </Link>
      </motion.div>
    </>
  );
}
