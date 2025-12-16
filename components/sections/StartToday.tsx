import { Card } from "@/components/ui/card";
import { ArrowRight, Clock3, UploadCloud, Wallet2 } from "lucide-react";

const startSteps = [
  {
    title: "Setup in one hour",
    description: "Move onchain with controls that mirror how your org already works.",
    icon: Clock3,
  },
  {
    title: "Start transacting",
    description: "Use supported modules to manage account abstraction and automation.",
    icon: Wallet2,
  },
  {
    title: "Migrate in one click",
    description: "Bring existing smart wallets to Safe without downtime.",
    icon: UploadCloud,
  },
];

export function StartToday() {
  return (
    <section id="start" className="bg-white py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5c6c61]">Start today</span>
          <h2 className="mt-3 text-4xl font-semibold text-[#0d1a12]">Get started with Safe</h2>
          <p className="mt-3 text-lg text-[#4b5c50]">
            Start with a template that fits your organization, or talk to us to plan your migration.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {startSteps.map((step) => (
            <Card key={step.title} className="h-full border-[#e6e9ef] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#e9fdf1] text-[#00b85a]">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#0d1a12]">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm text-[#4b5c50]">{step.description}</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#f5f7f9] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0d1a12]">
                Start now <ArrowRight className="h-4 w-4" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
