"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "nav" | "mark";
  className?: string;
  priority?: boolean;
};

export function Logo({ variant = "nav", className, priority }: LogoProps) {
  if (variant === "mark") {
    return (
      <Image
        src="/images/logo.png"
        alt="Club Zen"
        width={72}
        height={72}
        priority={priority}
        className={cn("object-contain", className)}
      />
    );
  }

  return (
    <Image
      src="/images/logo-nav.svg"
      alt="Club Zen"
      width={44}
      height={44}
      priority={priority}
      className={cn("object-contain", className)}
    />
  );
}
