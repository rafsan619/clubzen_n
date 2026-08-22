import { BackgroundHero } from "@/components/BackgroundHero";
import { BrandStatement } from "@/components/BrandStatement";
import { CollectionSection } from "@/components/CollectionSection";
import { FloatingPanel } from "@/components/FloatingPanel";
import { Footer } from "@/components/Footer";
import { HeroGridOverlay } from "@/components/HeroGridOverlay";
import { HeroComposition } from "@/components/HeroComposition";
import { Lookbook } from "@/components/Lookbook";
import { Navbar } from "@/components/Navbar";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductPreview } from "@/components/ProductPreview";

export default function HomePage() {
  return (
    <main className="relative min-h-dvh pb-8">
      <BackgroundHero />

      <FloatingPanel>
        <HeroGridOverlay />
        <HeroComposition />
        <ProductPreview />
        <Navbar />
      </FloatingPanel>

      <CollectionSection />
      <Lookbook />
      <ProductGrid />
      <BrandStatement />
      <Footer />
    </main>
  );
}
