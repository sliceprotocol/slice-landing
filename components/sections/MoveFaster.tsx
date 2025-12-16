import { ArrowRight, Wrench, Diamond, Users, Droplet, Landmark } from "lucide-react";

// 1. Reusable Pill Component for the Right Card
function FloatingPill({
  icon: Icon,
  label,
  className,
  rotate
}: {
  icon: any,
  label: string,
  className?: string,
  rotate?: string
}) {
  return (
    <div
      className={`absolute flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#112319] border border-[#12FF80]/20 text-[#12FF80] shadow-lg backdrop-blur-sm transition-transform hover:scale-105 ${className}`}
      style={{ transform: rotate }}
    >
      <Icon className="size-4" />
      <span className="text-sm font-semibold whitespace-nowrap">{label}</span>
    </div>
  );
}

export function MoveFaster() {
  return (
    <section className="bg-[#FAFAFA] py-32">
      <div className="container mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1A12] mb-6 tracking-tight">
            Trusted by onchain organizations <br /> and power users
          </h2>
          <p className="text-lg text-gray-500">
            From DAOs, power users, teams, protocol and <span className="bg-blue-100 text-blue-600 px-1 rounded">treasury</span> operator, everyone is using Safe{"{Wallet}"}
          </p>
        </div>

        {/* The Two-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-auto lg:h-[500px]">

          {/* --- Left Card: For Organizations --- */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-[32px] bg-[#0C110F] p-8 md:p-12 flex flex-col justify-between group">

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-3">For Organizations</h3>
              <p className="text-gray-400 mb-6 max-w-[280px]">
                Treasury security, multisig, policy management, SafeApps
              </p>
              <button className="flex items-center gap-2 text-[#12FF80] font-bold text-sm hover:gap-3 transition-all">
                Learn More <ArrowRight className="size-4" />
              </button>
            </div>

            {/* Abstract Visuals (Bottom Right) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Green Curved Lines */}
              <div className="absolute bottom-[-50px] right-[-50px] size-[400px] border-[1px] border-[#12FF80]/10 rounded-full" />
              <div className="absolute bottom-[-20px] right-[-20px] size-[300px] border-[1px] border-[#12FF80]/10 rounded-full" />

              {/* Colorful Circles */}
              <div className="absolute bottom-12 right-12">
                <div className="relative">
                  {/* Main Circle */}
                  <div className="size-16 rounded-full bg-blue-600 flex items-center justify-center shadow-2xl z-10 relative">
                    <div className="size-8 border-t-4 border-l-4 border-yellow-400 rounded-tl-full" />
                  </div>
                  {/* Decorative overlap */}
                  <div className="absolute top-8 -left-6 size-12 rounded-full bg-yellow-400/20 blur-xl" />
                </div>
              </div>
            </div>
          </div>


          {/* --- Right Card: For Power Users --- */}
          <div className="lg:col-span-3 relative overflow-hidden rounded-[32px] bg-[#0C110F] p-8 md:p-12 flex flex-col group">

            {/* Content */}
            <div className="relative z-10 mb-auto">
              <h3 className="text-2xl font-bold text-white mb-3">For Power Users</h3>
              <p className="text-gray-400 mb-6">
                Scan risks, access DeFi and recover accounts
              </p>
              <button className="flex items-center gap-2 text-[#12FF80] font-bold text-sm hover:gap-3 transition-all">
                Learn More <ArrowRight className="size-4" />
              </button>
            </div>

            {/* Floating Pills Visuals */}
            <div className="relative h-[300px] w-full mt-8 md:mt-0">
              {/* We position these absolutely to create the scattered cloud effect */}

              <FloatingPill
                icon={Droplet}
                label="DeFi Operator"
                className="top-[20%] left-[5%]"
                rotate="rotate(-6deg)"
              />

              <FloatingPill
                icon={Landmark}
                label="Institutions"
                className="top-[10%] right-[15%]"
                rotate="rotate(4deg)"
              />

              <FloatingPill
                icon={Wrench}
                label="Builder"
                className="top-[50%] left-[35%] z-20"
                rotate="rotate(-2deg)"
              />

              <FloatingPill
                icon={Diamond}
                label="Power user"
                className="bottom-[15%] left-[15%]"
                rotate="rotate(8deg)"
              />

              <FloatingPill
                icon={Users}
                label="DAOs"
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
