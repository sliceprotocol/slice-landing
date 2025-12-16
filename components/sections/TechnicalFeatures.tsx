import {
  Lock,
  Coins,
  FileText,
  Check,
  EyeOff,
  ShieldCheck,
  Users,
  Scale,
  Gavel,
} from "lucide-react";

// Reusable Bento Card
function BentoCard({
  children,
  className,
  title,
  description,
  icon: Icon,
}: {
  children?: React.ReactNode;
  className?: string;
  title: string;
  description: string;
  icon: any;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[32px] bg-[#0C110F] border border-white/5 p-8 md:p-10 flex flex-col group transition-all duration-300 hover:border-primary/30 hover:shadow-[0_20px_60px_-20px_var(--primary)] ${className}`}
    >
      {/* Header - Removed flex-1 so it doesn't push the visual down */}
      <div className="relative z-10 mb-6">
        <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
          <Icon className="size-6" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-base leading-relaxed w-full max-w-none">
          {description}
        </p>
      </div>

      {/* Visual Content Area - Added flex-1 to fill space and center content */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full min-h-[160px]">
        {children}
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}
function CommitRevealVisual() {
  return (
    // Changes: max-w-[80%] to constrain width, mx-auto to center, px-0 to remove extra internal padding
    <div className="relative w-full md:max-w-[70%] mx-auto h-full flex items-center justify-between py-4">
      {/* Step 1: Encrypted (Commit) */}
      <div className="flex flex-col items-center gap-3 z-10">
        <div className="size-16 md:size-18 rounded-2xl bg-[#1A1025] border-2 border-white/10 flex items-center justify-center text-gray-500 shadow-lg relative group">
          <EyeOff className="size-6 md:size-8" />
          {/* Badge */}
          <div className="absolute -top-2 -right-2 size-6 bg-gray-800 rounded-full border border-gray-700 flex items-center justify-center">
            <Lock className="size-3 text-gray-400" />
          </div>
        </div>
        <span className="text-xs md:text-sm uppercase tracking-wider text-gray-500 font-bold">
          Commit
        </span>
      </div>

      {/* Arrow Animation */}
      <div className="flex-1 h-[2px] bg-white/10 mx-4 md:mx-6 relative overflow-hidden rounded-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent w-1/2 -translate-x-full animate-[shimmer_2s_infinite]" />
      </div>

      {/* Step 2: Revealed (Reveal) */}
      <div className="flex flex-col items-center gap-3 z-10">
        <div className="size-16 md:size-18 rounded-2xl bg-primary text-white shadow-[0_0_30px_var(--primary)] flex items-center justify-center relative scale-110">
          <Check className="size-8 md:size-10" />
        </div>
        <span className="text-xs md:text-sm uppercase tracking-wider text-primary font-bold">
          Reveal
        </span>
      </div>
    </div>
  );
}

// 2. Visual for Sovereign Truth (Consensus)
function ConsensusVisual() {
  return (
    // Uses CSS variables for responsive orbit radius: 80px on mobile, 110px on desktop
    <div className="relative flex items-center justify-center w-full py-8 [--radius:80px] md:[--radius:110px]">
      {/* Central "Truth" Node - Responsive Size (16->20) */}
      <div className="relative z-10 size-16 md:size-20 bg-gray-900 rounded-full flex items-center justify-center shadow-[0_0_50px_var(--primary)] border-[3px] border-primary transition-all duration-500">
        <Scale className="size-6 md:size-8 text-primary transition-all duration-500" />
      </div>

      {/* Orbiting Juror Nodes */}
      <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            // Responsive Node Size (8->10)
            className="absolute top-1/2 left-1/2 size-8 md:size-10 bg-[#1A1025] border border-white/10 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
            style={{
              // Uses the variable set on the parent container
              transform: `rotate(${i * 60}deg) translate(var(--radius)) rotate(-${i * 60}deg)`,
            }}
          >
            <div
              className={`size-2 md:size-3 rounded-full ${i % 2 === 0 ? "bg-primary" : "bg-gray-600"}`}
            />
          </div>
        ))}
      </div>

      {/* Connecting Lines (Decorative) - Responsive Size (40->56) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="size-40 md:size-56 rounded-full border border-dashed border-primary transition-all duration-500" />
      </div>
    </div>
  );
}

// Detailed "Zero Legalese" Card Skeleton
function ZeroLegaleseVisual() {
  return (
    <div className="relative w-[220px] bg-white rounded-2xl p-4 shadow-xl rotate-6 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 border border-gray-100">
      {/* Header Skeleton */}
      <div className="flex justify-between items-start mb-4">
        <div className="h-2 w-16 bg-blue-100 rounded-full" />
        <div className="h-2 w-8 bg-gray-100 rounded-full" />
      </div>

      {/* Title Lines */}
      <div className="space-y-2 mb-5 px-3">
        <div className="h-3 w-full bg-gray-400 rounded-md opacity-90" />
        <div className="h-3 w-3/4 bg-gray-400 rounded-md opacity-90" />
      </div>

      {/* Content/Evidence Lines */}
      <div className="space-y-1.5 mb-5 p-3 bg-gray-50 rounded-xl border border-gray-100">
        <div className="h-1.5 w-full bg-gray-300 rounded-full" />
        <div className="h-1.5 w-5/6 bg-gray-300 rounded-full" />
        <div className="h-1.5 w-4/6 bg-gray-300 rounded-full" />
      </div>

      {/* Action Buttons Skeleton */}
      <div className="grid grid-cols-2 gap-3">
        <div className="h-9 bg-red-50 rounded-xl flex items-center justify-center border border-red-100">
          <div className="size-2 rounded-full bg-red-400 opacity-60" />
        </div>
        <div className="h-9 bg-green-50 rounded-xl flex items-center justify-center border border-green-100 shadow-sm">
          <div className="size-2 rounded-full bg-green-500" />
        </div>
      </div>
    </div>
  );
}

export function TechnicalFeatures() {
  return (
    <section id="mechanics" className="bg-[#050505] py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            The Courtroom <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              in Your Pocket
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A strategy game where your move is the truth. Stake tokens, vote
            privately, and reveal to win.
          </p>
        </div>

        {/* Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Commit-Reveal */}
          <BentoCard
            className="md:col-span-2 lg:col-span-2"
            title="Commit-Reveal Voting"
            description="Votes are encrypted using a hash + secret. No copying, no bribery. Reveal your decision later to unlock rewards."
            icon={Lock}
          >
            <CommitRevealVisual />
          </BentoCard>

          {/* Card 2: Staking */}
          <BentoCard
            className="md:col-span-1 lg:col-span-1"
            title="Stake to Judge"
            description="Skin in the game. Stake tokens to increase your probability of being drawn for high-value disputes."
            icon={Coins}
          >
            {/* Staking Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary blur-[40px] opacity-20" />
              <div className="relative size-24 rounded-full border-4 border-primary flex items-center justify-center bg-[#0C110F]">
                <ShieldCheck className="size-10 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#1A1025] px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-primary">
                +12% APR
              </div>
            </div>
          </BentoCard>

          {/* Card 3: Zero Legalese */}
          <BentoCard
            className="md:col-span-1 lg:col-span-1"
            title="Zero Legalese"
            description="No complex legal jargon. Evidence is presented in simple, organized cards. Justice is just a swipe away."
            icon={FileText}
          >
            <ZeroLegaleseVisual />
          </BentoCard>

          {/* Card 4: Sovereign Truth */}
          <BentoCard
            className="md:col-span-2 lg:col-span-2 min-h-[240px]"
            title="Sovereign Truth"
            description="The protocol doesn't decide; you do. The final ruling is the aggregate of hundreds of independent, private minds coming together to find the truth."
            icon={Users}
          >
            <ConsensusVisual />
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
