import { CheckCircle2, Globe2, Plug, Smartphone } from "lucide-react";

const chainBadges = ["Base", "OP Mainnet", "Arbitrum", "Polygon", "BNB Chain", "Avalanche", "Gnosis", "zkSync", "Linea", "Scroll"];

export function DeployAnywhere() {
  return (
    <section id="ecosystem" className="relative overflow-hidden bg-[#FAFAFA] py-24 text-[#0D1A12]">
      {/* Background Grid Pattern (Subtle) */}
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
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.25em] text-gray-500 font-bold">
            Every chain
          </div>
          <h2 className="mt-8 text-4xl md:text-5xl font-extrabold tracking-tight">Deploy Safe on any chain</h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">Secure assets everywhere your team builds and deploys.</p>
        </div>

        {/* Chain Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {chainBadges.map((chain) => (
            <div
              key={chain}
              className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-[#12FF80] hover:text-black hover:shadow-md cursor-default"
            >
              <div className="size-2 rounded-full bg-[#12FF80]" />
              {chain}
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl md:grid-cols-3">
          <FeatureColumn
            icon={Globe2}
            title="Programmability"
            items={["Build on open modules", "Automate actions", "Bring your policies"]}
          />
          <FeatureColumn
            icon={Smartphone}
            title="Mobile"
            items={["Native approvals", "Push notifications", "Biometric signing"]}
          />
          <FeatureColumn
            icon={Plug}
            title="Integrations"
            items={["Safe apps ready", "Wallet connectors", "MPC + AA friendly"]}
          />
        </div>
      </div>
    </section>
  );
}

function FeatureColumn({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: string[];
  icon: typeof Globe2;
}) {
  return (
    <div className="space-y-4 rounded-2xl border border-gray-100 bg-[#FAFAFA] p-8 transition-colors hover:bg-gray-50">
      <div className="flex items-center gap-3 text-xl font-bold text-[#0D1A12]">
        <div className="flex size-12 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-black">
          <Icon className="h-5 w-5" />
        </div>
        {title}
      </div>
      <ul className="space-y-3 pt-2 text-base text-gray-600">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-[#12FF80] fill-black/5" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
