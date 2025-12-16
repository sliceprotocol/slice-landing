import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="container mx-auto max-w-7xl px-6 pt-14 pb-32 text-center">
      <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl mb-3">
        Multisig security for
        <br />
        your onchain assets
      </h1>
      <p className="text-xl text-muted-foreground text-balance mx-auto max-w-2xl mb-12">
        The most trusted platform to manage digital assets on Ethereum and EVM
        chains
      </p>
      <div className="flex items-center justify-center gap-4 mb-16">
        <Button className="bg-[#00e673] hover:bg-[#00cc66] text-black font-medium h-12 px-8">
          Create Account
        </Button>
        <Button variant="outline" className="h-12 px-8 bg-transparent">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Product Screenshot */}
      <div className="relative mx-auto max-w-6xl scale-[1.12]">
        <div className="rounded-2xl border border-border bg-card shadow-[0_30px_90px_rgba(0,0,0,0.22)] overflow-hidden">
          <img
            src="/modern-crypto-wallet-dashboard-interface-with-tran.jpg"
            alt="Safe Wallet Dashboard"
            className="w-full"
          />
        </div>
      </div>

      {/* Trusted By Logos */}
      <div className="mt-28">
        <p className="text-sm text-muted-foreground mb-8 uppercase tracking-[0.2em]">
          Trusted by leading organizations
        </p>
        <div className="flex items-center justify-center gap-12 flex-wrap opacity-60">
          <div className="h-8 w-24 bg-muted rounded" />
          <div className="h-8 w-24 bg-muted rounded" />
          <div className="h-8 w-24 bg-muted rounded" />
          <div className="h-8 w-24 bg-muted rounded" />
          <div className="h-8 w-24 bg-muted rounded" />
        </div>
      </div>
    </section>
  );
}
