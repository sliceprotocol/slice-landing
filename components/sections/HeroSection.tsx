import { Button } from "@/components/ui/button";
import { SLICE_LINKS } from "@/lib/constants";
import {
  ArrowRight,
  Gavel,
  Award,
  TrendingUp,
  Clock,
  LayoutDashboard,
  Wallet,
  Settings,
  FileText,
  ChevronLeft,
  User,
  Image as ImageIcon,
  Calendar,
  Maximize2,
  CheckCircle2,
  MoreHorizontal,
} from "lucide-react";
import Link from "next/link";

// --- Main Hero Section Export ---
export function HeroSection() {
  return (
    <section className="relative bg-[#FAFAFA] pt-32 pb-32 overflow-hidden">
      <GridBackground />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* 1. Hero Copy */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h4 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-6">
            The Standard for Decentralized Justice
          </h4>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0D1A12] mb-6 leading-[1.1]">
            Get paid to <br />
            <span className="relative inline-block">
              deliver justice
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-10">
            Join the jury. Review disputes from crowdfunding to escrows. Earn
            rewards in a gamified, on-chain court.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={SLICE_LINKS.APP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="h-14 px-12 rounded-full bg-[#1A1025] text-white text-lg font-bold hover:bg-[#2a1a3a] shadow-xl hover:shadow-2xl transition-all">
                Start Judging <ArrowRight className="ml-2 size-5" />
              </Button>
            </Link>
            <Link
              href={SLICE_LINKS.DOCS}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="h-14 px-8 rounded-full border-gray-200 text-gray-600 text-lg font-bold hover:bg-white hover:text-[#0D1A12] hover:border-gray-300 bg-white/50 backdrop-blur-sm"
              >
                How it Works
              </Button>
            </Link>
          </div>
        </div>

        {/* 2. Overlapping UI Composition (RESPONSIVE FIX) */}
        <div className="relative h-[500px] sm:h-[600px] md:h-[650px] w-full flex justify-center mt-12 perspective-[2000px]">
          {/* Desktop Dashboard (Back Layer) */}
          <div
            className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2
                          scale-[0.6] sm:scale-[0.7] md:scale-[0.8] lg:scale-100
                          origin-top shadow-2xl"
          >
            <HeroDashboard />
          </div>

          {/* Mobile Phone (Front Layer - Offset Left) */}
          <div
            className="absolute top-16 sm:top-24 left-1/2 -translate-x-1/2 md:left-[8%] md:translate-x-0
                          scale-[0.9] sm:scale-[0.92] md:scale-[0.95] lg:scale-100
                          origin-center z-30 pointer-events-auto"
          >
            <HeroPhone />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- 1. Background Grid Component ---
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
            `,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-primary opacity-[0.08] blur-[100px] rounded-full" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-blue-400 opacity-[0.05] blur-[80px] rounded-full" />
    </div>
  );
}

// --- 2. The Refined "Evidence App" UI (Phone) ---
function HeroPhone() {
  return (
    <div className="relative w-[300px] h-[600px] rounded-[48px] bg-white border-[8px] border-[#1a1a1a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] overflow-hidden font-sans pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-[#1a1a1a] rounded-b-[18px] z-20" />
      <div className="flex flex-col h-full bg-[#F2F2F4] pt-12 relative overflow-hidden">
        <div className="px-6 pb-4 pt-2">
          <button className="size-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-[#0D1A12]">
            <ChevronLeft className="size-5" />
          </button>
        </div>
        <div className="flex-1 overflow-hidden pb-8 px-4 space-y-4">
          <div className="bg-white rounded-[24px] p-5 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100">
            <div className="flex items-center gap-2 font-bold text-[#0D1A12]">
              <Clock className="size-5" />
              <span className="text-sm">Time left to vote:</span>
            </div>
            <span className="font-mono font-bold text-primary text-lg">
              2:45h
            </span>
          </div>
          <div className="bg-white rounded-[32px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 space-y-6">
            <div className="flex items-center gap-4">
              <div className="size-14 rounded-2xl bg-gray-100 overflow-hidden border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=faces"
                  alt="Plaintiff"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-[#0D1A12] text-lg leading-tight">
                  Project Alpha
                </h3>
                <div className="mt-1">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide">
                    <User className="size-3 mr-1" /> Plaintiff
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0D1A12] mb-2">
                Claim Details
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                We delivered the prototype on Oct 15th as per the milestone
                agreement. The client refuses to release the escrow citing
                features not in the original spec.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-base font-bold text-[#0D1A12]">Evidence</h4>
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1.5">
                  <ImageIcon className="size-3" /> Images
                </span>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
                <div className="relative w-40 h-28 flex-shrink-0 rounded-2xl bg-gray-100 overflow-hidden border border-gray-200 group cursor-pointer hover:opacity-90 transition-opacity">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
                    alt="Dashboard Evidence"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg shadow-sm border border-gray-100">
                    <Maximize2 className="size-3.5 text-black" />
                  </div>
                </div>
                <div className="relative w-40 h-28 flex-shrink-0 rounded-2xl bg-gray-100 overflow-hidden border border-gray-200 group cursor-pointer hover:opacity-90 transition-opacity">
                  <img
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop"
                    alt="Code Evidence"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg shadow-sm border border-gray-100">
                    <Maximize2 className="size-3.5 text-black" />
                  </div>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 bg-[#FAFAFA] px-3 py-2 rounded-xl border border-gray-100 w-full">
                <Calendar className="size-4 text-gray-400" />
                <span className="text-xs font-semibold text-gray-500">
                  Submitted: 10/24/2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- 3. The Professional Juror Dashboard UI ---
function HeroDashboard() {
  return (
    <div className="w-[1100px] h-[680px] bg-white rounded-[32px] border border-gray-200 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] overflow-hidden flex font-sans">
      {/* Sidebar */}
      <div className="w-[260px] bg-white border-r border-gray-100 flex flex-col p-6">
        <div className="flex items-center gap-3 mb-12 pl-2">
          {/* Logo Container */}
          <div className="size-9 bg-black rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
            {/* Replaced Icon with SVG Image */}
            {/* 'brightness-0 invert' makes the black SVG white to match the design */}
            <img
              src="/icons/slice-logo-transparent.svg"
              alt="Slice"
              className="size-5 object-contain brightness-0 invert"
            />
          </div>

          <span className="font-bold text-xl text-[#0D1A12] tracking-tight">
            Slice
          </span>
        </div>
        <div className="space-y-1.5 flex-1">
          {[
            { name: "Overview", icon: LayoutDashboard, active: true },
            { name: "My Disputes", icon: Gavel, active: false, badge: "3" },
            { name: "Staking", icon: Wallet, active: false },
            { name: "History", icon: FileText, active: false },
          ].map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200 group ${
                item.active
                  ? "bg-[#F3E8FF] text-[#9333EA]"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon
                  className={`size-5 ${item.active ? "text-[#9333EA]" : "text-gray-400 group-hover:text-gray-600"}`}
                />
                {item.name}
              </div>
              {item.badge && (
                <span className="bg-[#9333EA] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-auto border-t border-gray-100 pt-6">
          <div className="flex items-center gap-3 px-2 mb-4">
            <div className="size-10 rounded-full bg-gray-100 border border-gray-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
                alt="Juror"
                className="size-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-[#0D1A12] truncate">
                Alex Juror
              </div>
              <div className="text-xs text-gray-400 truncate">0x82...39a1</div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <Settings className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#FAFAFA] p-10 flex flex-col overflow-hidden">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0D1A12] tracking-tight mb-2">
              Juror Dashboard
            </h2>
            <p className="text-gray-500 font-medium">
              Manage your stakes, review cases, and earn rewards.
            </p>
          </div>
          <Button className="rounded-full bg-[#0D1A12] text-white px-6 h-11 font-bold shadow-lg hover:bg-gray-800 transition-colors">
            Staking Pool
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-10">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <div className="size-12 rounded-2xl bg-purple-50 flex items-center justify-center text-primary">
                <Award className="size-6" />
              </div>
              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Senior
              </span>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#0D1A12] tracking-tight mb-1">
                Level 42
              </div>
              <div className="text-sm text-gray-400 font-medium">
                Top 5% of jurors
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <div className="size-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600">
                <TrendingUp className="size-6" />
              </div>
              <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                +12%
              </span>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#0D1A12] tracking-tight mb-1">
                $1,450
              </div>
              <div className="text-sm text-gray-400 font-medium">
                Total Earnings (USDC)
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <div className="size-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                <CheckCircle2 className="size-6" />
              </div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#0D1A12] tracking-tight mb-1">
                98.5%
              </div>
              <div className="text-sm text-gray-400 font-medium">
                Accuracy Score
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-[28px] border border-gray-100 shadow-sm flex-1 p-2">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50">
            <h3 className="font-bold text-gray-900 text-lg">Recent Rulings</h3>
            <button className="text-sm font-semibold text-primary hover:bg-purple-50 px-3 py-1.5 rounded-lg transition-colors">
              View All
            </button>
          </div>
          <div className="p-2 space-y-1">
            {[
              {
                title: "Prediction Market: Election Result",
                id: "#4028",
                reward: "+$45.00",
                time: "2h ago",
                status: "Resolved",
                type: "Market",
              },
              {
                title: "Freelance Escrow: Logo Design",
                id: "#3992",
                reward: "+$120.00",
                time: "1d ago",
                status: "Resolved",
                type: "Escrow",
              },
              {
                title: "Grant Milestone: DeFi Protocol",
                id: "#3821",
                reward: "Pending",
                time: "3d ago",
                status: "Voting",
                type: "Grant",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 hover:bg-[#FAFAFA] rounded-2xl transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 font-bold group-hover:bg-white group-hover:border-primary group-hover:text-primary transition-all">
                    {item.type === "Market" && (
                      <TrendingUp className="size-5" />
                    )}
                    {item.type === "Escrow" && <User className="size-5" />}
                    {item.type === "Grant" && <Award className="size-5" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#0D1A12] text-sm">
                        {item.title}
                      </span>
                      <span className="text-xs text-gray-400 bg-gray-100 px-1.5 rounded">
                        {item.id}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1 flex items-center gap-2">
                      {item.time}
                      <span className="size-0.5 rounded-full bg-gray-300" />
                      <span
                        className={`${item.status === "Voting" ? "text-orange-500" : "text-gray-500"}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div
                    className={`text-sm font-bold ${item.reward === "Pending" ? "text-gray-400" : "text-green-600 bg-green-50 px-3 py-1 rounded-full"}`}
                  >
                    {item.reward}
                  </div>
                  <button className="p-2 text-gray-300 hover:text-gray-600">
                    <MoreHorizontal className="size-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
