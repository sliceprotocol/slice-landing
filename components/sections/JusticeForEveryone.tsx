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

// 1. Reusable Pill Component
function FloatingPill({
  icon: Icon,
  label,
  className,
  rotate,
  isStatic = false, // New prop to handle static vs absolute positioning
}: {
  icon: any;
  label: string;
  className?: string;
  rotate?: string;
  isStatic?: boolean;
}) {
  // Base styles shared by both versions
  const baseStyles =
    "flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-[#1A1025] border border-primary/30 text-primary shadow-lg backdrop-blur-sm transition-transform hover:scale-105";

  if (isStatic) {
    return (
      <div className={baseStyles}>
        <Icon className="size-4" />
        <span className="text-sm font-semibold whitespace-nowrap">{label}</span>
      </div>
    );
  }

  return (
    <div
      className={`absolute ${baseStyles} ${className}`}
      style={{ transform: rotate }}
    >
      <Icon className="size-4" />
      <span className="text-sm font-semibold whitespace-nowrap">{label}</span>
    </div>
  );
}

export function JusticeForEveryone() {
  return (
    <section id="solutions" className="bg-[#FAFAFA] py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1A12] mb-6 tracking-tight">
            Justice for Everyone
          </h2>
          <p className="text-base text-gray-500">
            Whether you want to{" "}
            <span className="bg-purple-100 text-purple-700 px-1 rounded font-medium">
              earn yield
            </span>{" "}
            by judging or need a neutral arbitration layer for your dApp, Slice
            is the standard.
          </p>
        </div>

        {/* The Two-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* --- Left Card: For Jurors --- */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-[32px] bg-[#0C110F] p-8 md:p-12 flex flex-col justify-between group border border-gray-800/50 min-h-[400px] lg:min-h-[500px]">
            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <Gavel className="size-3" />
                Start Earning
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">For Jurors</h3>
              <p className="text-gray-400 mb-6 max-w-[280px] leading-relaxed">
                Join the decentralized court. Stake tokens, review evidence, and
                get paid for honest rulings.
              </p>
              <Link
                href={SLICE_LINKS.APP}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                  Join the Jury <ArrowRight className="size-4" />
                </button>
              </Link>
            </div>

            {/* Abstract Visuals (Bottom Right) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Purple Curved Lines */}
              <div className="absolute bottom-[-50px] right-[-50px] size-[400px] border-[1px] border-primary/10 rounded-full" />
              <div className="absolute bottom-[-20px] right-[-20px] size-[300px] border-[1px] border-primary/20 rounded-full" />

              {/* Colorful Circles */}
              <div className="absolute bottom-8 md:bottom-12 right-8 md:right-12">
                <div className="relative">
                  <div className="size-14 md:size-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_var(--primary)] z-10 relative">
                    <Coins className="text-white size-8" />
                  </div>
                  <div className="absolute top-8 -left-6 size-12 rounded-full bg-blue-500/20 blur-xl" />
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Card: For Builders --- */}
          <div className="lg:col-span-3 relative overflow-hidden rounded-[32px] bg-[#0C110F] p-8 md:p-12 flex flex-col justify-between group border border-gray-800/50 min-h-[400px] lg:min-h-[500px]">
            {/* Content Section */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <Code2 className="size-3" />
                Integrate Instantly
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">
                For Builders
              </h3>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Plug-and-play dispute resolution for your protocol. Secure your
                escrows, grants, and markets with a neutral oracle.
              </p>
              <Link
                href={SLICE_LINKS.DOCS}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                  Read the Docs <ArrowRight className="size-4" />
                </button>
              </Link>
            </div>

            {/* Floating Pills Section */}
            <div className="relative z-10 hidden lg:block h-[220px]">
              <FloatingPill
                icon={ShieldCheck}
                label="Escrows"
                className="bottom-[20%] left-[5%]"
                rotate="rotate(-6deg)"
              />
              <FloatingPill
                icon={Scale}
                label="Crowdfunding"
                className="top-[15%] right-[10%]"
                rotate="rotate(4deg)"
              />
              <FloatingPill
                icon={Users}
                label="Freelance Markets"
                className="top-[50%] left-[30%]"
                rotate="rotate(-2deg)"
              />
              <FloatingPill
                icon={Gavel}
                label="DAO Grants"
                className="bottom-[10%] left-[12%]"
                rotate="rotate(8deg)"
              />
              <FloatingPill
                icon={Coins}
                label="Prediction Markets"
                className="bottom-[25%] right-[8%]"
                rotate="rotate(-5deg)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
