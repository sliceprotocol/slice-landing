import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Wallet2 } from "lucide-react";

const controlStats = [
  { label: "Avg. transaction approval time", value: "4.5 hrs" },
  { label: "Execution + notifications", value: "All in one view" },
  { label: "Transactions approved per week", value: "12M+" },
];

export function Controls() {
  return (
    <section id="security" className="relative overflow-hidden bg-gradient-to-b from-[#0c0f0d] to-[#050706] py-24 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-[#00e673]/20 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-48 w-48 rounded-full bg-[#1f3c2a]/60 blur-3xl" />
      </div>
      <div className="container relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#9adfb2]">
            Controls for teams
          </div>
          <h2 className="text-4xl font-semibold leading-tight">Let your team spend with controls</h2>
          <p className="text-lg text-white/70">
            Capture the speed of self-custody with the clear controls of Safe. Approval policies, simulation, and alerts in one place.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {controlStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="text-sm uppercase tracking-[0.2em] text-white/60">{stat.label}</div>
                <div className="mt-3 text-2xl font-semibold text-white">{stat.value}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button className="h-11 rounded-full bg-[#00e673] px-7 text-black hover:bg-[#00cf68]">
              Explore controls
            </Button>
            <Button
              variant="ghost"
              className="h-11 rounded-full border border-white/15 bg-white/5 px-7 text-white hover:bg-white/10"
            >
              Talk to security <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#00e673]/30 blur-3xl" />
          <div className="rounded-[28px] border border-white/10 bg-[#0f1311] shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
            <img
              src="/transaction-management-interface-with-approval-wor.jpg"
              alt="Team approvals"
              className="w-full rounded-[28px]"
            />
          </div>
          <div className="absolute -right-5 bottom-6 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white">
            <Wallet2 className="h-5 w-5 text-[#00e673]" />
            <div>
              <div className="font-semibold">Pending approval</div>
              <div className="text-white/70">2 of 5 signers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
