import { Scale, Lock, ShieldCheck, Zap, ArrowRight, Check } from "lucide-react";

const featureBlocks = [
  {
    title: "Fair Selection",
    description:
      "Jurors are selected using verifiable randomness (VRF), preventing any party from influencing the court.",
    bullets: ["Verifiable Randomness", "Sybil Resistance", "Unbiased Jury"],
    icon: Scale,
  },
  {
    title: "Private Voting",
    description:
      "Commit–reveal keeps votes hidden until the end, ensuring independent and honest decisions.",
    bullets: ["Encrypted Votes", "No Copying", "Anti-Bribery"],
    icon: Lock,
  },
  {
    title: "Game Theory",
    description:
      "Incentives reward correct voting and penalize malicious behavior, aligning jurors with the truth.",
    bullets: ["Staking Rewards", "Slashing Penalties", "Nash Equilibrium"],
    icon: ShieldCheck,
  },
  {
    title: "Auto-Execution",
    description:
      "Final rulings are enforced on-chain instantly, with no intermediaries involved.",
    bullets: ["Trustless Finality", "Smart Contract Logic", "Zero Latency"],
    icon: Zap,
  },
];

export function JusticeFeatures() {
  return (
    <section
      id="justice-stack"
      className="relative bg-[#050505] py-32 overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              The Justice Stack
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
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

        {/* Feature Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featureBlocks.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex flex-col rounded-3xl bg-[#0A0A0A] border border-white/[0.08] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_var(--primary)]"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.03] border border-white/[0.05] text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-base text-zinc-400 leading-relaxed mb-8 flex-1">
                {feature.description}
              </p>

              {/* Bullets */}
              <div className="pt-6 border-t border-white/[0.06]">
                <ul className="space-y-3">
                  {feature.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors"
                    >
                      <Check className="h-3.5 w-3.5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
