
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0e0c] via-[#0a0e0c] to-[#050706] py-20 text-white">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_50%_0%,rgba(0,230,115,0.28),transparent_60%)]" />
      <div className="container relative mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#9adfb2]">
          Ready to move faster
        </div>
        <h2 className="mt-4 text-4xl font-semibold leading-tight">Make your organization unstoppable</h2>
        <p className="mt-3 text-lg text-white/70">
          Deploy Safe and invite your team. Build products, manage assets, and automate workflows with confidence.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button className="h-12 rounded-full bg-[#00e673] px-8 text-base font-semibold text-black hover:bg-[#00cf68]">
            Get started
          </Button>
          <Button
            variant="ghost"
            className="h-12 rounded-full border border-white/15 bg-white/5 px-8 text-base font-semibold text-white hover:bg-white/10"
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
