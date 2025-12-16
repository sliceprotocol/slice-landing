import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Sparkles } from "lucide-react";

const replaceCards = [
  {
    title: "Multi-sig wallet",
    description: "Designed for simple approvals and cold storage.",
    items: ["Limited UX for teams", "Fragmented operations", "Not designed for speed"],
  },
  {
    title: "Self-custodial wallet",
    description: "Fast but risky without layered controls.",
    items: ["Single-signer risk", "Hard to audit changes", "No built-in policies"],
  },
  {
    title: "100% on-chain + multi-sig",
    description: "Safe brings the best of both worlds for organizations.",
    items: ["Flexible approvals", "Clear audit history", "Automated protection"],
    highlight: true,
  },
];

export function ReplaceWallets() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5c6c61]">Built for orgs</span>
          <h2 className="mt-3 text-4xl font-semibold text-[#0d1a12]">Safe can replace your self-custodial wallet</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {replaceCards.map((card) => (
            <Card
              key={card.title}
              className={`rounded-2xl border p-6 text-left shadow-[0_10px_40px_rgba(0,0,0,0.05)] ${
                card.highlight
                  ? "border-[#00e673]/40 bg-gradient-to-b from-[#e7ffef] to-white"
                  : "border-[#e6e9ef] bg-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`size-10 rounded-full ${card.highlight ? "bg-[#caffde]" : "bg-[#eef1f5]"} flex items-center justify-center`}>
                  {card.highlight ? <Sparkles className="h-5 w-5 text-[#0d1a12]" /> : <Shield className="h-5 w-5 text-[#4b5c50]" />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0d1a12]">{card.title}</h3>
                  <p className="text-sm text-[#4b5c50]">{card.description}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[#1c2b21]">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className={`h-4 w-4 ${card.highlight ? "text-[#00c86b]" : "text-[#8a95a0]"}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
