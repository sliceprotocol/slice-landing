import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, CheckCircle2, KeyRound, Layers, Shield } from "lucide-react";

const featureBlocks = [
  {
    title: "Multisig controls",
    description: "Set tailored spending rules and policies per wallet.",
    bullets: ["Role-based approvals", "Policy-enforced spending", "Granular limits"],
    icon: Shield,
  },
  {
    title: "Operations",
    description: "Streamline approvals so teams can move without bottlenecks.",
    bullets: ["Batch transactions", "Automated workflows", "Track every change"],
    icon: Layers,
  },
  {
    title: "Security",
    description: "Battle-tested contracts protecting the largest treasuries.",
    bullets: ["$100B secured", "SOC2-ready controls", "Open-source audits"],
    icon: KeyRound,
  },
  {
    title: "Automation",
    description: "Trigger actions with confidence and remove manual toil.",
    bullets: ["Policy simulators", "Pre-flight checks", "Programmatic triggers"],
    icon: Bot,
  },
];

export function SelfCustody() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <span className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#5c6c61]">
            Simplified security
          </span>
          <h2 className="text-4xl font-semibold text-[#0d1a12]">Self-custody without friction</h2>
          <p className="mt-4 max-w-3xl text-lg text-[#4b5c50]">
            Safe gives organizations flexible control based on how you run operations.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featureBlocks.map((feature) => (
            <Card
              key={feature.title}
              className="h-full border-[#e6e9ef] bg-white/90 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-[#e9fdf1] text-[#00b85a]">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#0d1a12]">{feature.title}</h3>
              </div>
              <p className="mt-3 text-sm text-[#4b5c50]">{feature.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-[#1c2b21]">
                {feature.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00c86b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button className="h-11 rounded-full bg-[#00e673] px-7 text-black hover:bg-[#00cf68]">Discover more</Button>
        </div>
      </div>
    </section>
  );
}
