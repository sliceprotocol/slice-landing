import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Clock3,
  Database,
  Globe2,
  KeyRound,
  Layers,
  Plug,
  Shield,
  Smartphone,
  Sparkles,
  UploadCloud,
  Wallet2,
  WalletMinimal,
  Zap,
} from "lucide-react";

const trustedLogos = ["base", "optimism", "arbitrum", "binance", "polygon", "zksync"];

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

const controlStats = [
  { label: "Avg. transaction approval time", value: "4.5 hrs" },
  { label: "Execution + notifications", value: "All in one view" },
  { label: "Transactions approved per week", value: "12M+" },
];

const chainBadges = ["Base", "OP Mainnet", "Arbitrum", "Polygon", "BNB Chain", "Avalanche", "Gnosis", "zkSync", "Linea", "Scroll"];

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

const developerFeatures = [
  "Build custom modules and flows",
  "TypeScript SDKs and quick starts",
  "Roll-ups and chains out of the box",
  "Permissions, guards, and policies",
];

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

const walletPartners = ["Coinbase", "Ledger", "Safe", "Rabby", "Rainbow", "WalletConnect"];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />
      <main className="overflow-hidden">
        <HeroSection />
        <SelfCustody />
        <Controls />
        <DeployAnywhere />
        <ReplaceWallets />
        <MoveFaster />
        <Teams />
        <Integrations />
        <Developers />
        <StartToday />
        <Wallets />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#f4f5f6] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-16 size-24 rounded-3xl border border-[#e9ebef]/80 bg-white/70 blur-[1px]" />
        <div className="absolute right-24 top-10 size-16 rounded-2xl border border-[#e9ebef]/80 bg-white/60" />
        <div className="absolute bottom-20 left-[30%] h-72 w-72 rounded-full bg-[#00e673]/20 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_#c7ffdd_0%,_transparent_50%)] opacity-70" />
      </div>
      <div className="container relative mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4 md:max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#e2e4ea] bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#1c2b21] shadow-sm">
              Multisig security
              <span className="h-2 w-2 rounded-full bg-[#00e673]" />
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-[#0d1a12] sm:text-5xl lg:text-6xl">
              Multisig security for your organization assets
            </h1>
            <p className="text-lg text-[#4b5c50]">
              Run safer asset operations—different from centralized wallets or multi-sigs that slow teams down.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button className="h-12 rounded-full bg-[#00e673] px-8 text-base font-semibold text-black hover:bg-[#00cf68]">
                Get started
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-full border-[#d3d7de] bg-white px-8 text-base font-semibold text-[#0d1a12] hover:bg-[#f7f8f9]"
              >
                Schedule demo
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#6a7b6f]">
              <span className="font-semibold text-[#1c2b21]">Trusted by teams at</span>
              <div className="flex flex-wrap items-center gap-3">
                {trustedLogos.map((logo) => (
                  <div
                    key={logo}
                    className="flex items-center gap-2 rounded-full border border-[#e2e4ea] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#1c2b21]"
                  >
                    <div className="size-2 rounded-full bg-[#00e673]" />
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-xl">
            <div className="absolute -inset-8 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(0,230,115,0.28),transparent_50%),radial-gradient(circle_at_80%_0%,rgba(0,0,0,0.08),transparent_50%)]" />
            <div className="overflow-hidden rounded-[28px] border border-[#d7dde4] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.08)]">
              <img
                src="/modern-crypto-wallet-dashboard-interface-with-tran.jpg"
                alt="Safe dashboard"
                className="w-full"
              />
            </div>
            <div className="absolute -right-6 bottom-10 w-48 rounded-2xl border border-[#d7dde4] bg-white p-4 shadow-lg">
              <div className="text-xs uppercase tracking-[0.2em] text-[#6a7b6f]">Policy simulator</div>
              <div className="mt-3 space-y-2 text-sm text-[#1c2b21]">
                <p className="flex items-center justify-between">
                  <span>Transaction size</span>
                  <span className="font-semibold">$120,000</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Approvals</span>
                  <span className="font-semibold">3 of 5</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Risk status</span>
                  <span className="flex items-center gap-1 font-semibold text-[#00b85a]">
                    <CheckCircle2 className="h-4 w-4" />
                    Clear
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SelfCustody() {
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
      </div>
    </section>
  );
}

function Controls() {
  return (
    <section id="security" className="relative overflow-hidden bg-gradient-to-b from-[#0c0f0d] to-[#050706] py-24 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-[#00e673]/20 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-48 w-48 rounded-full bg-[#1f3c2a]/60 blur-3xl" />
      </div>
      <div className="container relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#9adfb2]">
            Controls for teams
          </div>
          <h2 className="text-4xl font-semibold leading-tight">Let your team spend with controls</h2>
          <p className="text-lg text-white/70">
            Capture the speed of self-custody with the clear controls of Safe. Approval policies, simulation, and alerts in one place.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {controlStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="text-sm uppercase tracking-[0.2em] text-white/60">{stat.label}</div>
                <div className="mt-3 text-2xl font-semibold text-white">{stat.value}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button className="h-11 rounded-full bg-[#00e673] px-7 text-black hover:bg-[#00cf68]">
              Explore controls
            </Button>
            <Button
              variant="ghost"
              className="h-11 rounded-full border border-white/15 bg-white/5 px-7 text-white hover:bg-white/10"
            >
              Talk to security <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#00e673]/30 blur-3xl" />
          <div className="rounded-[28px] border border-white/10 bg-[#0f1311] shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
            <img
              src="/transaction-management-interface-with-approval-wor.jpg"
              alt="Team approvals"
              className="w-full rounded-[28px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DeployAnywhere() {
  return (
    <section id="ecosystem" className="relative overflow-hidden bg-[#0b0f0d] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,230,115,0.15),transparent_45%),radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.45),transparent_55%)]" />
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#9adfb2]">
            Every chain
          </div>
          <h2 className="mt-4 text-4xl font-semibold">Deploy Safe on any chain</h2>
          <p className="mt-3 text-lg text-white/70">Secure assets everywhere your team builds and deploys.</p>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {chainBadges.map((chain) => (
            <div
              key={chain}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold"
            >
              <div className="size-2 rounded-full bg-[#00e673]" />
              {chain}
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)] md:grid-cols-3">
          <FeatureColumn icon={Globe2} title="Programmability" items={["Build on open modules", "Automate actions", "Bring your policies"]} />
          <FeatureColumn icon={Smartphone} title="Mobile" items={["Native approvals", "Push notifications", "Biometric signing"]} />
          <FeatureColumn icon={Plug} title="Integrations" items={["Safe apps ready", "Wallet connectors", "MPC + AA friendly"]} />
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
  icon: typeof Shield;
}) {
  return (
    <div className="space-y-3 rounded-2xl border border-white/10 bg-black/30 p-6">
      <div className="flex items-center gap-3 text-lg font-semibold">
        <div className="flex size-10 items-center justify-center rounded-full bg-[#133624] text-[#00e673]">
          <Icon className="h-5 w-5" />
        </div>
        {title}
      </div>
      <ul className="space-y-2 text-sm text-white/80">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#00e673]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReplaceWallets() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5c6c61]">Built for orgs</span>
          <h2 className="mt-3 text-4xl font-semibold text-[#0d1a12]">Safe can replace your self-custodial wallet</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {replaceCards.map((card) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MoveFaster() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#080c0a] via-[#090d0b] to-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(0,230,115,0.2),transparent_45%)]" />
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#9adfb2]">
            Move faster
          </div>
          <h2 className="mt-4 text-4xl font-semibold">Move faster with what you already use</h2>
          <p className="mt-3 text-lg text-white/70">
            Safe is the most battle-tested decentralized wallet with global support.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-1 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
            <img
              src="/mobile-app-showing-crypto-wallet-transaction-list.jpg"
              alt="Mobile approvals"
              className="w-full rounded-2xl"
            />
          </div>
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-1 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
            <img
              src="/dark-theme-control-panel-dashboard-with-graphs-and.jpg"
              alt="Operations dashboard"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Shield className="h-4 w-4 text-[#00e673]" />
            Soc2 ready
          </span>
          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Zap className="h-4 w-4 text-[#00e673]" />
            Self-custody native
          </span>
          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Database className="h-4 w-4 text-[#00e673]" />
            Full audit trails
          </span>
        </div>
      </div>
    </section>
  );
}

function Teams() {
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

function Integrations() {
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

function Developers() {
  return (
    <section id="developers" className="relative overflow-hidden bg-gradient-to-b from-[#0b0f0d] via-[#0c110e] to-[#050706] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(0,230,115,0.18),transparent_45%)]" />
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#9adfb2]">
              Developers
            </div>
            <h2 className="text-4xl font-semibold leading-tight">Developers build on the leading tech stack</h2>
            <p className="text-lg text-white/70">
              Secure any use case and any access point. Connect with custom modules, policies, and simulations.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {developerFeatures.map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[#00e673]" />
                  <span className="text-sm text-white/90">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="h-11 rounded-full bg-[#00e673] px-7 text-black hover:bg-[#00cf68]">View docs</Button>
              <Button
                variant="ghost"
                className="h-11 rounded-full border border-white/15 bg-white/5 px-7 text-white hover:bg-white/10"
              >
                Explore SDKs
              </Button>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-black/40 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
            <img
              src="/code-editor-showing-smart-contract-integration.jpg"
              alt="Developer tools"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StartToday() {
  return (
    <section id="start" className="bg-white py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5c6c61]">Start today</span>
          <h2 className="mt-3 text-4xl font-semibold text-[#0d1a12]">Get started with Safe</h2>
          <p className="mt-3 text-lg text-[#4b5c50]">Start with a template that fits your organization, or talk to us to plan your migration.</p>
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

function Wallets() {
  return (
    <section className="bg-[#f5f7f9] py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold text-[#0d1a12]">Compatible with whatever wallet you use</h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {walletPartners.map((wallet) => (
              <div
                key={wallet}
                className="flex items-center gap-2 rounded-full border border-[#dce2ea] bg-white px-4 py-2 text-sm font-semibold text-[#0d1a12]"
              >
                <WalletMinimal className="h-4 w-4 text-[#00c86b]" />
                {wallet}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0e0c] via-[#0a0e0c] to-[#050706] py-20 text-white">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_50%_0%,rgba(0,230,115,0.28),transparent_60%)]" />
      <div className="container relative mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#9adfb2]">
          Ready to move faster
        </div>
        <h2 className="mt-4 text-4xl font-semibold leading-tight">Make your organization unstoppable</h2>
        <p className="mt-3 text-lg text-white/70">
          Deploy Safe and invite your team. Build products, manage assets, and automate workflows with confidence.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button className="h-12 rounded-full bg-[#00e673] px-8 text-base font-semibold text-black hover:bg-[#00cf68]">
            Get started
          </Button>
          <Button
            variant="ghost"
            className="h-12 rounded-full border border-white/15 bg-white/5 px-8 text-base font-semibold text-white hover:bg-white/10"
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-x-0 top-[-20%] h-[420px] bg-[radial-gradient(circle_at_50%_20%,rgba(0,230,115,0.16),transparent_55%)]" />
      <div className="container relative mx-auto max-w-6xl px-6 pb-16 pt-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-4xl font-semibold">Safe</div>
            <p className="mt-4 max-w-xl text-white/70">
              The most trusted platform to manage digital assets. Built for organizations that need speed and control.
            </p>
          </div>
          <div className="space-y-3 text-sm text-white/70">
            <div className="text-white">Product</div>
            <Link href="#" className="block hover:text-white">
              Features
            </Link>
            <Link href="#" className="block hover:text-white">
              Pricing
            </Link>
            <Link href="#" className="block hover:text-white">
              Security
            </Link>
          </div>
          <div className="space-y-3 text-sm text-white/70">
            <div className="text-white">Developers</div>
            <Link href="#" className="block hover:text-white">
              Documentation
            </Link>
            <Link href="#" className="block hover:text-white">
              SDKs
            </Link>
            <Link href="#" className="block hover:text-white">
              Modules
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm text-white/60">
            <span>© 2025 Safe</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>All rights reserved</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              Cookies
            </Link>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span className="text-white/80">hello@safe.global</span>
          </div>
        </div>
      </div>
      <div className="relative h-24 w-full border-t border-white/5 bg-[#050706]/60">
        <div className="absolute inset-0 flex items-center justify-center text-[120px] font-semibold uppercase tracking-tight text-white/5">
          Safe
        </div>
      </div>
    </footer>
  );
}
