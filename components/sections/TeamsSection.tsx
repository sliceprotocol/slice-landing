import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const teamUse = [
  {
    title: "Product",
    description: "Ship fast and approve contracts on every supported chain.",
    bullets: ["Connect any on-chain product", "Operate across EVM", "Track signer actions"],
  },
  {
    title: "Treasury",
    description: "Run payroll, investments, and payments with guardrails.",
    bullets: ["Automate recurring payments", "Assign spending limits", "Simulate before sending"],
  },
  {
    title: "Operations",
    description: "Give teams freedom while keeping governance controls tight.",
    bullets: ["Policy-based automation", "Approval routing", "Full audit trails"],
  },
];

export function TeamsSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5c6c61]">Teams</span>
          <h2 className="mt-3 text-4xl font-semibold text-[#0d1a12]">Built to help your teams move faster</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {teamUse.map((team) => (
            <Card key={team.title} className="h-full border-[#e6e9ef] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-[#e9fdf1]" />
                <h3 className="text-lg font-semibold text-[#0d1a12]">{team.title}</h3>
              </div>
              <p className="mt-3 text-sm text-[#4b5c50]">{team.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-[#1c2b21]">
                {team.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00c86b]" />
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
