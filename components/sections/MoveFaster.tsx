import {
  ArrowRight,
  Gavel,
  Scale,
  Coins,
  ShieldCheck,
  Users,
  Code2,
} from "lucide-react";
import Link from "next/link";
import { SLICE_LINKS } from "@/lib/constants";

// 1. Reusable Pill Component for the Right Card
function FloatingPill({
  icon: Icon,
  label,
  className,
  rotate,
}: {
  icon: any;
  label: string;
  className?: string;
  rotate?: string;
}) {
  return (
    <div
      className={`absolute flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1025] border border-[#BC5FEF]/30 text-[#BC5FEF] shadow-lg backdrop-blur-sm transition-transform hover:scale-105 ${className}`}
      style={{ transform: rotate }}
    >
      <Icon className="size-4" />
      <span className="text-sm font-semibold whitespace-nowrap">{label}</span>
    </div>
  );
}

export function MoveFaster() {
  return (
    <section id="features" className="bg-[#FAFAFA] py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1A12] mb-6 tracking-tight">
            Justice for Everyone
          </h2>
          <p className="text-lg text-gray-500">
            Whether you want to{" "}
            <span className="bg-purple-100 text-purple-700 px-1 rounded font-medium">
              earn yield
            </span>{" "}
            by judging or need a neutral arbitration layer for your dApp, Slice
            is the standard.
          </p>
        </div>

        {/* The Two-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-auto lg:h-[500px]">
          {/* --- Left Card: For Jurors --- */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-[32px] bg-[#0C110F] p-8 md:p-12 flex flex-col justify-between group border border-gray-800/50">
            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BC5FEF]/10 text-[#BC5FEF] text-xs font-bold uppercase tracking-wider mb-4">
                <Gavel className="size-3" />
                Start Earning
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">For Jurors</h3>
              <p className="text-gray-400 mb-6 max-w-[280px] leading-relaxed">
                Join the decentralized court. Stake tokens, review evidence, and
                get paid for honest rulings.
              </p>
              <Link href={SLICE_LINKS.APP} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-2 text-[#BC5FEF] font-bold text-sm hover:gap-3 transition-all">
                  Join the Jury <ArrowRight className="size-4" />
                </button>
              </Link>
            </div>

            {/* Abstract Visuals (Bottom Right) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Purple Curved Lines */}
              <div className="absolute bottom-[-50px] right-[-50px] size-[400px] border-[1px] border-[#BC5FEF]/10 rounded-full" />
              <div className="absolute bottom-[-20px] right-[-20px] size-[300px] border-[1px] border-[#BC5FEF]/20 rounded-full" />

              {/* Colorful Circles */}
              <div className="absolute bottom-12 right-12">
                <div className="relative">
                  {/* Main Circle - Purple Theme */}
                  <div className="size-16 rounded-full bg-[#BC5FEF] flex items-center justify-center shadow-[0_0_30px_rgba(188,95,239,0.4)] z-10 relative">
                    <Coins className="text-white size-8" />
                  </div>
                  {/* Decorative overlap */}
                  <div className="absolute top-8 -left-6 size-12 rounded-full bg-blue-500/20 blur-xl" />
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Card: For Builders --- */}
          <div className="lg:col-span-3 relative overflow-hidden rounded-[32px] bg-[#0C110F] p-8 md:p-12 flex flex-col group border border-gray-800/50">
            {/* Content */}
            <div className="relative z-10 mb-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-[#BC5FEF] text-xs font-bold uppercase tracking-wider mb-4">
                <Code2 className="size-3" />
                Integrate Instantly
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">
                For Builders
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Plug-and-play dispute resolution for your protocol. <br />
                Secure your escrows, grants, and markets with a neutral oracle.
              </p>
              <Link href={SLICE_LINKS.DOCS} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-2 text-[#BC5FEF] font-bold text-sm hover:gap-3 transition-all">
                  Read the Docs <ArrowRight className="size-4" />
                </button>
              </Link>
            </div>

            {/* Floating Pills Visuals - Slice Use Cases */}
            <div className="relative h-[300px] w-full mt-8 md:mt-0">
              <FloatingPill
                icon={ShieldCheck}
                label="Escrows"
                className="top-[20%] left-[5%]"
                rotate="rotate(-6deg)"
              />

              <FloatingPill
                icon={Scale}
                label="Crowdfunding"
                className="top-[10%] right-[15%]"
                rotate="rotate(4deg)"
              />

              <FloatingPill
                icon={Users}
                label="Freelance Markets"
                className="top-[50%] left-[35%] z-20"
                rotate="rotate(-2deg)"
              />

              <FloatingPill
                icon={Gavel}
                label="DAO Grants"
                className="bottom-[15%] left-[15%]"
                rotate="rotate(8deg)"
              />

              <FloatingPill
                icon={Coins}
                label="Prediction Markets"
                className="bottom-[25%] right-[10%]"
                rotate="rotate(-5deg)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
