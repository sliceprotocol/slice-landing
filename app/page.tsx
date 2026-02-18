import Navigation from "@/components/sections/Navigation";
import { ChainAbstraction } from "@/components/sections/ChainAbstraction";
import { DevelopersSection } from "@/components/sections/DevelopersSection";
import { AppsSection } from "@/components/sections/AppsSection";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SecurityGuarantees } from "@/components/sections/SecurityGuarantees";
import { MobileSection } from "@/components/sections/MobileSection";
import { JusticeFeatures } from "@/components/sections/JusticeFeatures";
import { BusinessUseCases } from "@/components/sections/BusinessUseCases";
import { ForBusiness } from "@/components/sections/ForBusiness";
import { PartnersSection } from "@/components/sections/PartnersSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />
      <main className="overflow-hidden">
        <HeroSection />
        <SecurityGuarantees />
        <JusticeFeatures />
        <ForBusiness />
        <PartnersSection />
        <BusinessUseCases />
        <ChainAbstraction />
        <AppsSection />
        <DevelopersSection />
        <MobileSection />
      </main>
      <Footer />
    </div>
  );
}
