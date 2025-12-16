import { Button } from "@/components/ui/button";
import { Scale, Lock, ShieldCheck, Zap, ArrowRight, Check } from "lucide-react";

const featureBlocks = [
  {
    title: "Fair Selection",
    description:
      "Jurors are drawn cryptographically using verifiable randomness (VRF), ensuring no single party can influence the court.",
    bullets: ["Verifiable Randomness", "Sybil Resistance", "Unbiased Jury"],
    icon: Scale,
  },
  {
    title: "Private Voting",
    description:
      "A commit-reveal scheme hides votes until the end, preventing herd behavior and ensuring honest, independent judgment.",
    bullets: ["Encrypted Votes", "No Copying", "Anti-Bribery"],
    icon: Lock,
  },
  {
    title: "Game Theory",
    description:
      "Economic incentives align jurors with the truth. Coherent voting is rewarded, while malicious behavior is slashed.",
    bullets: ["Staking Rewards", "Slashing Penalties", "Nash Equilibrium"],
    icon: ShieldCheck,
  },
  {
    title: "Auto-Execution",
    description:
      "Rulings are final and enforced on-chain instantly. The smart contract executes the verdict without intermediaries.",
    bullets: ["Trustless Finality", "Smart Contract Logic", "Zero Latency"],
    icon: Zap,
  },
];

export function SelfCustody() {
  return (
    <section
      id="justice-stack"
      className="relative bg-[#050505] py-32 overflow-hidden"
    >
      {/* 1. Subtle Ambient Glow (Modern & Clean) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#BC5FEF] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto max-w-7xl px-6">
        {/* 2. Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#BC5FEF]/20 bg-[#BC5FEF]/5 px-4 py-1.5 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BC5FEF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BC5FEF]"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BC5FEF]">
              The Justice Stack
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Complexity Hidden, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
              Truth Revealed.
            </span>
          </h2>

          <p className="max-w-2xl text-lg text-zinc-400 leading-relaxed">
            Slice replaces expensive legal intermediaries with code. We combine
            cryptography, game theory, and smart contracts to create a dispute
            resolution system that is faster, cheaper, and fairer.
          </p>
        </div>

        {/* 3. The Feature Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featureBlocks.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative flex flex-col rounded-3xl bg-[#0A0A0A] border border-white/[0.08] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#BC5FEF]/30 hover:shadow-[0_20px_40px_-15px_rgba(188,95,239,0.1)]"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.03] border border-white/[0.05] text-[#BC5FEF] group-hover:bg-[#BC5FEF] group-hover:text-white transition-all duration-300">
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#BC5FEF] transition-colors">
                {feature.title}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-1">
                {feature.description}
              </p>

              {/* Footer / Bullets */}
              <div className="pt-6 border-t border-white/[0.06]">
                <ul className="space-y-3">
                  {feature.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors"
                    >
                      <Check className="h-3.5 w-3.5 text-[#BC5FEF]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
