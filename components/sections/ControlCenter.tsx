import {
  Lock,
  Unlock,
  Check,
  Coins,
  FileText,
  Share2,
  Eye,
} from "lucide-react";

// Helper for the Card container to ensure consistent "Glass" feel
function BentoCard({
  children,
  className,
  glowPosition = "top",
}: {
  children: React.ReactNode;
  className?: string;
  glowPosition?: "top" | "bottom";
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[32px] border border-white/5 bg-[#0C110F] p-8 md:p-12 ${className}`}
    >
      {/* Subtle Gradient Glow */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-[#BC5FEF]/10 blur-[80px] pointer-events-none
        ${glowPosition === "top" ? "-top-10" : "-bottom-10"}`}
      />

      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </div>
  );
}

// 1. Top Card: Commit-Reveal Visualization
function CommitRevealFlow() {
  return (
    <div className="mt-12 flex items-center justify-center relative px-4 md:px-20 py-8 gap-12">
      {/* Connecting Line */}
      <div className="absolute top-1/2 left-[20%] right-[20%] h-[2px] bg-white/10 -z-10" />

      {/* Step 1: Commit */}
      <div className="flex flex-col items-center gap-4">
        <div className="size-16 rounded-2xl bg-[#151A17] border border-white/10 flex items-center justify-center relative">
          <Lock className="size-8 text-gray-500" />
          <div className="absolute -top-2 -right-2 bg-[#BC5FEF] text-[10px] text-white px-2 py-0.5 rounded-full font-bold">
            Encrypted
          </div>
        </div>
        <div className="text-center">
          <div className="text-sm font-bold text-white">Commit</div>
          <div className="text-xs text-gray-500">Vote Hidden</div>
        </div>
      </div>

      {/* Arrow */}
      <div className="text-gray-600">
        <Share2 className="size-6 rotate-90 md:rotate-0" />
      </div>

      {/* Step 2: Reveal */}
      <div className="flex flex-col items-center gap-4">
        <div className="size-16 rounded-2xl bg-[#151A17] border border-[#BC5FEF]/30 shadow-[0_0_30px_rgba(188,95,239,0.2)] flex items-center justify-center">
          <Unlock className="size-8 text-[#BC5FEF]" />
        </div>
        <div className="text-center">
          <div className="text-sm font-bold text-white">Reveal</div>
          <div className="text-xs text-gray-500">Vote Published</div>
        </div>
      </div>

      {/* Arrow */}
      <div className="text-gray-600">
        <Check className="size-6" />
      </div>

      {/* Step 3: Reward */}
      <div className="flex flex-col items-center gap-4">
        <div className="size-16 rounded-2xl bg-[#BC5FEF]/10 border border-[#BC5FEF] flex items-center justify-center">
          <Coins className="size-8 text-[#BC5FEF]" />
        </div>
        <div className="text-center">
          <div className="text-sm font-bold text-white">Earn</div>
          <div className="text-xs text-gray-500">Tokens + XP</div>
        </div>
      </div>
    </div>
  );
}

// 2. Bottom Left: Staking UI
function StakingUI() {
  return (
    <div className="mt-auto pt-10">
      {/* The Mini Card UI */}
      <div className="rounded-xl bg-[#111614] border border-white/5 overflow-hidden p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-gray-400 font-medium">Your Stake</span>
          <span className="text-xs text-[#BC5FEF] font-bold">+4.5% APR</span>
        </div>

        <div className="flex items-end gap-2 mb-6">
          <div className="text-3xl font-bold text-white">5,000</div>
          <div className="text-sm font-medium text-gray-500 mb-1">SLC</div>
        </div>

        <div className="w-full bg-white/5 rounded-full h-2 mb-2">
          <div className="bg-[#BC5FEF] h-2 rounded-full w-[70%]" />
        </div>
        <div className="flex justify-between text-[10px] text-gray-500">
          <span>Juror Power</span>
          <span>High (70%)</span>
        </div>
      </div>
    </div>
  );
}

// 3. Bottom Right: Evidence UI
function EvidenceUI() {
  return (
    <div className="mt-auto pt-10">
      <div className="rounded-xl bg-[#111614] border border-white/5 overflow-hidden p-2 space-y-2">
        {/* Evidence Item 1 */}
        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
          <div className="size-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
            <FileText className="size-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white group-hover:text-[#BC5FEF] transition-colors">
              Contract.pdf
            </div>
            <div className="text-[10px] text-gray-500">
              2.4 MB • Legal Agreement
            </div>
          </div>
          <Eye className="size-4 text-gray-600 ml-auto group-hover:text-white" />
        </div>

        {/* Evidence Item 2 */}
        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
          <div className="size-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
            <Coins className="size-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white group-hover:text-[#BC5FEF] transition-colors">
              Transaction Hash
            </div>
            <div className="text-[10px] text-gray-500">
              Etherscan • 0x4a...92b
            </div>
          </div>
          <Eye className="size-4 text-gray-600 ml-auto group-hover:text-white" />
        </div>
      </div>
    </div>
  );
}

export function ControlCenter() {
  return (
    <section id="controls" className="bg-black text-white py-32">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            The Courtroom in Your Pocket
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A strategy game where your move is the truth. Stake tokens, vote
            privately, and reveal to win.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Full Width Card: Mechanism */}
          <BentoCard className="md:col-span-2 min-h-[360px] flex flex-col items-center justify-center">
            <div className="text-center z-10">
              <h3 className="text-2xl font-semibold text-[#BC5FEF] mb-2">
                Commit-Reveal Voting
              </h3>
              <p className="text-gray-400 text-sm">
                Votes are encrypted. No copying, no bribery. Reveal your
                decision later to unlock rewards.
              </p>
            </div>
            <div className="w-full max-w-3xl">
              <CommitRevealFlow />
            </div>
          </BentoCard>

          {/* 2. Left Card: Staking */}
          <BentoCard glowPosition="bottom" className="min-h-[400px]">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                Stake to Judge
              </h3>
              <p className="text-gray-400 text-sm">
                Skin in the game. Stake tokens to increase your chances of being
                selected for high-value disputes.
              </p>
            </div>
            <StakingUI />
          </BentoCard>

          {/* 3. Right Card: Evidence */}
          <BentoCard glowPosition="bottom" className="min-h-[400px]">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                Zero Legalese
              </h3>
              <p className="text-gray-400 text-sm">
                No complex legal jargon. Evidence is presented in simple,
                organized cards. Justice is just a swipe away.
              </p>
            </div>
            <EvidenceUI />
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
