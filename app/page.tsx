import Navigation from "@/components/sections/Navigation";
import { Controls } from "@/components/sections/Controls";
import { DeployAnywhere } from "@/components/sections/DeployAnywhere";
import { DevelopersSection } from "@/components/sections/DevelopersSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { MoveFaster } from "@/components/sections/MoveFaster";
import { ReplaceWallets } from "@/components/sections/ReplaceWallets";
import { SelfCustody } from "@/components/sections/SelfCustody";
import { StartToday } from "@/components/sections/StartToday";
import { TeamsSection } from "@/components/sections/TeamsSection";
import { Wallets } from "@/components/sections/Wallets";
import { MobileSection } from "@/components/sections/MobileSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />
      <main className="overflow-hidden">
        <HeroSection />
        <SelfCustody />
        <Controls />
        <DeployAnywhere />
        <ReplaceWallets />
        <MoveFaster />
        <TeamsSection />
        <IntegrationsSection />
        <DevelopersSection />
        <StartToday />
        <Wallets />
        <MobileSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
