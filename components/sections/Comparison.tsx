import { X, Check } from "lucide-react";

export function Comparison() {
  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Headline */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
            Evolution of Justice
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why protocols choose Justly
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="relative rounded-3xl border border-white/10 bg-[#0C110F] overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-3 border-b border-white/5 bg-white/5">
            <div className="p-6"></div>
            <div className="p-6 text-center text-lg font-bold text-gray-400">
              Traditional / Web2
            </div>
            <div className="p-6 text-center text-lg font-bold text-primary">
              Justly Protocol
            </div>
          </div>

          {/* Row 1: Speed */}
          <div className="grid grid-cols-3 border-b border-white/5 items-center hover:bg-white/5 transition-colors">
            <div className="p-6 text-sm font-medium text-gray-400">
              Speed of Resolution
            </div>
            <div className="p-6 text-center text-gray-500">Months or Years</div>
            <div className="p-6 text-center font-bold text-white">
              Hours or Days
            </div>
          </div>

          {/* Row 2: Cost */}
          <div className="grid grid-cols-3 border-b border-white/5 items-center hover:bg-white/5 transition-colors">
            <div className="p-6 text-sm font-medium text-gray-400">
              Cost Structure
            </div>
            <div className="p-6 text-center text-gray-500">
              Expensive Legal Fees
            </div>
            <div className="p-6 text-center font-bold text-white">
              Minimal Gas Fees
            </div>
          </div>

          {/* Row 3: Neutrality */}
          <div className="grid grid-cols-3 border-b border-white/5 items-center hover:bg-white/5 transition-colors">
            <div className="p-6 text-sm font-medium text-gray-400">
              Neutrality
            </div>
            <div className="p-6 text-center flex justify-center">
              <div className="flex items-center gap-2 text-red-500/70 text-sm font-medium">
                <X className="size-4" /> Biased / Opacity
              </div>
            </div>
            <div className="p-6 text-center flex justify-center">
              <div className="flex items-center gap-2 text-primary text-sm font-bold">
                <Check className="size-4" /> Math-Verified
              </div>
            </div>
          </div>

          {/* Row 4: Incentives */}
          <div className="grid grid-cols-3 items-center hover:bg-white/5 transition-colors">
            <div className="p-6 text-sm font-medium text-gray-400">
              Juror Incentive
            </div>
            <div className="p-6 text-center text-gray-500">
              Civic Duty (Unpaid)
            </div>
            <div className="p-6 text-center font-bold text-white flex items-center justify-center gap-2">
              <span>Gamified Rewards</span>
              <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full">
                XP + APY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
