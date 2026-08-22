import type { Metadata } from "next";
import { Figtree, Oswald } from "next/font/google";
import { CartDrawer } from "@/components/CartDrawer";
import "./globals.css";

const display = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Club Zen — Wear Your Zen",
  description:
    "Premium oversized tees and baggy pants. Built for everyday movement.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#1a1a1a] text-zen-black">
        {children}
        <CartDrawer />
      </body>
    </html>
  );
}
