import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 mx-auto mt-20 w-[94vw] max-w-[1400px] border-t border-white/10 pb-12 pt-10 md:mt-28 md:w-[90vw]">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Image
            src="/images/logo.png"
            alt="Club Zen"
            width={56}
            height={56}
            className="object-contain"
          />
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-white/40">
            Oversized essentials for everyday movement. Designed in Bangladesh.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="mb-3 text-[10px] tracking-[0.2em] text-white/35 uppercase">
              Shop
            </p>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <Link href="#tees" className="hover:text-zen-green">
                  Oversized Tees
                </Link>
              </li>
              <li>
                <Link href="#pants" className="hover:text-zen-green">
                  Baggy Pants
                </Link>
              </li>
              <li>
                <Link href="#essentials" className="hover:text-zen-green">
                  Essentials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-[10px] tracking-[0.2em] text-white/35 uppercase">
              Info
            </p>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <span className="hover:text-zen-green">Shipping</span>
              </li>
              <li>
                <span className="hover:text-zen-green">Returns</span>
              </li>
              <li>
                <span className="hover:text-zen-green">Size guide</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-[10px] tracking-[0.2em] text-white/35 uppercase">
              Social
            </p>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <a href="#" className="hover:text-zen-green">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zen-green">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-2 text-[10px] tracking-[0.16em] text-white/30 uppercase sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Club Zen</span>
        <span>Spring / Summer 2026</span>
      </div>
    </footer>
  );
}
