import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const integrationApps = [
  { name: "Safe Account Abstraction", tag: "By Safe" },
  { name: "Safe 4337 Module", tag: "By Safe" },
  { name: "Safe Web3Auth", tag: "By Safe x Web3Auth" },
  { name: "Etherspot Safe module", tag: "By Etherspot" },
  { name: "Pimlico", tag: "Sponsor" },
  { name: "Circle", tag: "Sponsor" },
  { name: "Fireblocks", tag: "Security" },
  { name: "Gnosis Pay", tag: "Payments" },
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="bg-[#f5f7f9] py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5c6c61]">Integrations</span>
          <h2 className="mt-3 text-4xl font-semibold text-[#0d1a12]">Integrations in one click</h2>
          <p className="mt-3 text-lg text-[#4b5c50]">Safe helps you discover and deploy key smart wallet features.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {integrationApps.map((app) => (
            <Card
              key={app.name}
              className="border-[#dce2ea] bg-white p-5 transition-shadow hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-center justify-between text-sm text-[#6a7b6f]">
                <div className="size-8 rounded-lg bg-[#eef1f5]" />
                <span className="rounded-full border border-[#e6e9ef] px-3 py-1 text-xs font-semibold text-[#0d1a12]">{app.tag}</span>
              </div>
              <div className="mt-6 text-lg font-semibold text-[#0d1a12]">{app.name}</div>
              <div className="mt-4 flex items-center gap-2 text-sm text-[#4b5c50]">
                <ArrowRight className="h-4 w-4" />
                Explore app
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
