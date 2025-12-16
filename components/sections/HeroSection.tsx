import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const trustedLogos = ["base", "optimism", "arbitrum", "binance", "polygon", "zksync"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#f4f5f6] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-16 size-24 rounded-3xl border border-[#e9ebef]/80 bg-white/70 blur-[1px]" />
        <div className="absolute right-24 top-10 size-16 rounded-2xl border border-[#e9ebef]/80 bg-white/60" />
        <div className="absolute bottom-20 left-[30%] h-72 w-72 rounded-full bg-[#00e673]/20 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_#c7ffdd_0%,_transparent_50%)] opacity-70" />
      </div>
      <div className="container relative mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4 md:max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#e2e4ea] bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#1c2b21] shadow-sm">
              Multisig security
              <span className="h-2 w-2 rounded-full bg-[#00e673]" />
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-[#0d1a12] sm:text-5xl lg:text-6xl">
              Multisig security for your organization assets
            </h1>
            <p className="text-lg text-[#4b5c50]">
              Run safer asset operations—different from centralized wallets or multi-sigs that slow teams down.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button className="h-12 rounded-full bg-[#00e673] px-8 text-base font-semibold text-black hover:bg-[#00cf68]">
                Get started
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-full border-[#d3d7de] bg-white px-8 text-base font-semibold text-[#0d1a12] hover:bg-[#f7f8f9]"
              >
                Schedule demo
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#6a7b6f]">
              <span className="font-semibold text-[#1c2b21]">Trusted by teams at</span>
              <div className="flex flex-wrap items-center gap-3">
                {trustedLogos.map((logo) => (
                  <div
                    key={logo}
                    className="flex items-center gap-2 rounded-full border border-[#e2e4ea] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#1c2b21]"
                  >
                    <div className="size-2 rounded-full bg-[#00e673]" />
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-xl">
            <div className="absolute -inset-8 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(0,230,115,0.28),transparent_50%),radial-gradient(circle_at_80%_0%,rgba(0,0,0,0.08),transparent_50%)]" />
            <div className="overflow-hidden rounded-[28px] border border-[#d7dde4] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.08)]">
              <img
                src="/modern-crypto-wallet-dashboard-interface-with-tran.jpg"
                alt="Safe dashboard"
                className="w-full"
              />
            </div>
            <div className="absolute -right-6 bottom-10 w-48 rounded-2xl border border-[#d7dde4] bg-white p-4 shadow-lg">
              <div className="text-xs uppercase tracking-[0.2em] text-[#6a7b6f]">Policy simulator</div>
              <div className="mt-3 space-y-2 text-sm text-[#1c2b21]">
                <p className="flex items-center justify-between">
                  <span>Transaction size</span>
                  <span className="font-semibold">$120,000</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Approvals</span>
                  <span className="font-semibold">3 of 5</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Risk status</span>
                  <span className="flex items-center gap-1 font-semibold text-[#00b85a]">
                    <CheckCircle2 className="h-4 w-4" />
                    Clear
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
