import { Layers, Zap, Network, Share2, Fingerprint, MousePointer2 } from "lucide-react";

export function DeployAnywhere() {
  return (
    <section id="chains" className="relative overflow-hidden bg-[#FAFAFA] py-24 text-[#0D1A12]">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
            `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#BC5FEF] font-bold">
            Chain Abstraction
          </div>
          <h2 className="mt-8 text-4xl md:text-5xl font-extrabold tracking-tight">One Interface. Any Chain.</h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Forget about bridging, gas tokens, and network switching. Slice abstracts the blockchain so you can focus on delivering justice.
          </p>
        </div>

        {/* Chain Badges (Simplified to show breadth without clutter) */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {["Ethereum", "Base", "Optimism", "Arbitrum", "Polygon", "Gnosis", "Scroll", "Linea"].map((chain, i) => (
            <div key={chain} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-bold text-gray-500">
              <div className="size-2 rounded-full bg-gray-300" />
              {chain}
            </div>
          ))}
          <div className="text-xs font-bold text-gray-400">+ 100 EVM Chains</div>
        </div>

        {/* Features Grid - Focus on UX */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <UXFeature
            icon={Fingerprint}
            title="Universal Profile"
            description="Build your reputation once. Your juror score, history, and staked assets are unified across every supported network."
          />

          <UXFeature
            icon={Zap}
            title="Gasless Voting"
            description="Never worry about having ETH for gas. The protocol handles transaction fees via meta-transactions, so you just sign and vote."
          />

          <UXFeature
            icon={Share2}
            title="Seamless Bridging"
            description="Rewards are automatically aggregated. Withdraw your earnings to your preferred chain in a single click."
          />

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
    <div className="group relative rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-[#BC5FEF]/30 overflow-hidden">
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#BC5FEF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-[#FAFAFA] border border-gray-100 shadow-sm text-[#BC5FEF] mb-6 group-hover:scale-110 transition-transform">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-[#0D1A12] mb-3">{title}</h3>
        <p className="text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
