"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

export const heroTitleClassName =
  "font-display w-full text-center text-[16.5vw] leading-[0.78] font-bold tracking-[-0.055em] whitespace-nowrap uppercase md:text-[11.4vw] lg:text-[10.2vw]";

export const heroTitlePosition =
  "absolute inset-x-[-3%] bottom-[4%] md:bottom-[2%]";

function HeroTitle({ color }: { color: "black" | "white" }) {
  return (
    <h1
      className={`${heroTitleClassName} ${color === "black" ? "text-zen-black" : "text-white"}`}
    >
      Wear Your Zen
    </h1>
  );
}

function getMaskStyles(
  panel: HTMLElement,
  img: HTMLImageElement,
): CSSProperties | null {
  const panelRect = panel.getBoundingClientRect();
  const imgRect = img.getBoundingClientRect();

  if (imgRect.width <= 0 || imgRect.height <= 0) return null;

  const x = imgRect.left - panelRect.left;
  const y = imgRect.top - panelRect.top;

  return {
    WebkitMaskImage: 'url("/images/model.png")',
    maskImage: 'url("/images/model.png")',
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: `${imgRect.width}px ${imgRect.height}px`,
    maskSize: `${imgRect.width}px ${imgRect.height}px`,
    WebkitMaskPosition: `${x}px ${y}px`,
    maskPosition: `${x}px ${y}px`,
  };
}

export function HeroComposition() {
  const panelRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [hovered, setHovered] = useState(false);
  const [maskStyle, setMaskStyle] = useState<CSSProperties>({});

  const syncMask = useCallback(() => {
    const panel = panelRef.current;
    const img = imgRef.current;
    if (!panel || !img) return;

    const styles = getMaskStyles(panel, img);
    if (styles) setMaskStyle(styles);
  }, []);

  useEffect(() => {
    syncMask();

    const panel = panelRef.current;
    const img = imgRef.current;
    if (!panel || !img) return;

    const observer = new ResizeObserver(() => syncMask());
    observer.observe(panel);
    observer.observe(img);

    img.addEventListener("load", syncMask);
    window.addEventListener("resize", syncMask);

    return () => {
      observer.disconnect();
      img.removeEventListener("load", syncMask);
      window.removeEventListener("resize", syncMask);
    };
  }, [syncMask]);

  useEffect(() => {
    syncMask();
    const timer = window.setTimeout(syncMask, 650);
    return () => window.clearTimeout(timer);
  }, [hovered, syncMask]);

  return (
    <div ref={panelRef} className="absolute inset-0">
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-none ${heroTitlePosition} z-[1] select-none`}
      >
        <HeroTitle color="black" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 bottom-0 z-[2] flex h-[88%] items-end justify-center md:h-[92%]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          animate={{ scale: hovered ? 1.018 : 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          onUpdate={syncMask}
          className="relative flex h-full items-end justify-center"
        >
          <Image
            ref={imgRef}
            src="/images/model.png"
            alt="Model wearing an oversized Club Zen tee and baggy pants"
            width={1000}
            height={1500}
            priority
            sizes="(max-width: 768px) 78vw, 42vw"
            className="h-full w-auto max-w-[min(520px,78vw)] object-contain object-bottom md:max-w-[min(560px,46vw)]"
          />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={maskStyle}
        className={`pointer-events-none absolute inset-0 z-[3] select-none`}
      >
        <div className={heroTitlePosition}>
          <HeroTitle color="white" />
        </div>
      </motion.div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15 }}
        className="absolute bottom-[22%] left-1/2 z-[4] flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-zen-black/10 bg-white/80 px-3.5 py-1.5 text-[9px] tracking-[0.18em] text-zen-black uppercase backdrop-blur-md transition-colors hover:bg-zen-green"
      >
        View look
        <ArrowUpRight className="h-3 w-3" strokeWidth={1.75} />
      </motion.button>
    </div>
  );
}
