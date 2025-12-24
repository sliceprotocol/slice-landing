import { Layers, Zap, Fingerprint, MousePointer2 } from "lucide-react";

export function ChainAbstraction() {
  return (
    <section
      id="chains"
      className="relative overflow-hidden bg-[#FAFAFA] py-24 text-[#0D1A12]"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
            `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-primary font-bold shadow-[0_0_20px_rgba(188,95,239,0.15)]">
            <Layers className="size-3" />
            Chain Abstraction
          </div>

          <h2 className="mt-8 text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            The Blockchain is <span className="text-primary">Invisible</span>.
          </h2>

          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            Experience the speed of a modern app with the guarantees of a
            decentralized protocol. No bridging, no gas tokens, no friction.
          </p>
        </div>

        {/* Features Grid - Focus on UX/UI interactions */}
        <div className="grid gap-8 md:grid-cols-3 relative z-10">
          <UXFeature
            icon={MousePointer2}
            title="One-Click Justice"
            description="No more wallet popups for every action. Sign a session key once and vote on multiple disputes instantly."
          />

          <UXFeature
            icon={Zap}
            title="Gasless Interactions"
            description="The protocol handles the fees. You don't need to hold ETH, MATIC, or OP to participate. Just log in and earn."
          />

          <UXFeature
            icon={Fingerprint}
            title="Unified Identity"
            description="Your reputation travels with you. Build your juror score on one chain and leverage it across the entire ecosystem."
          />
        </div>

        {/* Footer: Tech Stack (Subtle, confirming robustness without clutter) */}
        <div className="mt-24 pt-10 border-t border-gray-100 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
            Secured by the world's best networks
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {[
              "Ethereum",
              "Base",
              "Optimism",
              "Arbitrum",
              "Polygon",
              "Gnosis",
              "Scroll",
              "Linea",
            ].map((chain) => (
              <div
                key={chain}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-xs font-bold text-gray-500 hover:border-primary/30 hover:text-primary transition-colors cursor-default"
              >
                <div className="size-1.5 rounded-full bg-gray-300 group-hover:bg-primary" />
                {chain}
              </div>
            ))}
            <div className="px-3 py-2 text-xs font-bold text-gray-400">
              + 100 EVM Chains
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UXFeature({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: any;
}) {
  return (
    <div className="group relative rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/30 overflow-hidden">
      {/* Hover Gradient using Primary Variable */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-[#FAFAFA] border border-gray-100 shadow-sm text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-[#0D1A12] mb-3">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
