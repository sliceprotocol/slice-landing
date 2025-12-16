import { Database, Shield, Zap } from "lucide-react";

export function MoveFaster() {
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
