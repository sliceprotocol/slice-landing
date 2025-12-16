import Navigation from "@/components/sections/Navigation";
import { ControlCenter } from "@/components/sections/ControlCenter";
import { DeployAnywhere } from "@/components/sections/DeployAnywhere";
import { DevelopersSection } from "@/components/sections/DevelopersSection";
import { AppsSection } from "@/components/sections/AppsSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MoveFaster } from "@/components/sections/MoveFaster";
import { SecurityGuarantees } from "@/components/sections/SecurityGuarantees";
import { SelfCustody } from "@/components/sections/SelfCustody";
import { MobileSection } from "@/components/sections/MobileSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />
      <main className="overflow-hidden">
        <HeroSection />
        <SelfCustody />
        <ControlCenter />
        <DeployAnywhere />
        <SecurityGuarantees />
        <MoveFaster />
        <AppsSection />
        <DevelopersSection />
        <MobileSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
