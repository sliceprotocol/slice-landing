import Navigation from "@/components/sections/Navigation";
import { ChainAbstraction } from "@/components/sections/ChainAbstraction";
import { DevelopersSection } from "@/components/sections/DevelopersSection";
import { AppsSection } from "@/components/sections/AppsSection";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { JusticeForEveryone } from "@/components/sections/JusticeForEveryone";
import { SecurityGuarantees } from "@/components/sections/SecurityGuarantees";
import { MobileSection } from "@/components/sections/MobileSection";
import { JusticeFeatures } from "@/components/sections/JusticeFeatures";
import { TechnicalFeatures } from "@/components/sections/TechnicalFeatures";
import { BusinessUseCases } from "@/components/sections/BusinessUseCases";
import { SliceForBusiness } from "@/components/sections/SliceForBusiness";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />
      <main className="overflow-hidden">
        <HeroSection />
        <SliceForBusiness />
        <BusinessUseCases />
        <JusticeFeatures />
        <TechnicalFeatures />
        <ChainAbstraction />
        <SecurityGuarantees />
        <JusticeForEveryone />
        <AppsSection />
        <DevelopersSection />
        <MobileSection />
      </main>
      <Footer />
    </div>
  );
}
