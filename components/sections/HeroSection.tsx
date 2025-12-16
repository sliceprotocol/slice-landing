import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bell,
  Check,
  X,
  Gavel,
  Award,
  TrendingUp,
  Clock,
  ChevronRight,
  LayoutDashboard,
  Wallet,
  Settings,
  FileText,
} from "lucide-react";

// --- 1. Background Grid Component ---
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* The Grid Lines */}
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

      {/* Soft Gradient Orbs */}
      <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-[#BC5FEF] opacity-[0.08] blur-[100px] rounded-full" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-blue-400 opacity-[0.05] blur-[80px] rounded-full" />
    </div>
  );
}

// --- 2. The Refined "Juror App" UI (Phone) ---
function HeroPhone() {
  return (
    <div className="relative w-[300px] h-[600px] rounded-[48px] bg-white border-[8px] border-[#1a1a1a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] overflow-hidden z-20">
      {/* Dynamic Island */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-[#1a1a1a] rounded-b-[18px] z-20" />

      {/* Screen Content */}
      <div className="flex flex-col h-full bg-[#FAFAFA] pt-12 font-sans relative">
        {/* Header */}
        <div className="px-6 flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-[#BC5FEF]/10 flex items-center justify-center text-[#BC5FEF]">
              <Gavel className="size-4" />
            </div>
            <span className="font-bold text-[#0D1A12] tracking-tight">
              Slice Jury
            </span>
          </div>
          <div className="relative">
            <Bell className="size-5 text-gray-400" />
            <div className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border-2 border-[#FAFAFA]" />
          </div>
        </div>

        {/* The Dispute Card Stack */}
        <div className="flex-1 px-4 pb-6 relative">
          {/* Background Card (Illusion of depth) */}
          <div className="absolute top-4 left-6 right-6 bottom-10 bg-white rounded-[24px] shadow-sm border border-gray-100 scale-95 translate-y-3 opacity-60 z-0" />

          {/* Main Active Card */}
          <div className="relative z-10 h-full bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-6 flex flex-col">
            {/* Badge & Timer */}
            <div className="flex justify-between items-start mb-4">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-blue-600 uppercase tracking-wide">
                Crowdfunding
              </span>
              <span className="flex items-center gap-1 text-[10px] font-medium text-orange-500 bg-orange-50 px-2 py-1 rounded-full">
                <Clock className="size-3" />
                2h left
              </span>
            </div>

            {/* Dispute Question */}
            <h3 className="text-xl font-bold text-[#0D1A12] leading-tight mb-4">
              Did "Project Alpha" meet the milestone requirements?
            </h3>

            {/* Evidence Snippet */}
            <div className="bg-gray-50 rounded-xl p-4 mb-auto border border-gray-100">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">
                Evidence Summary
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The prototype was delivered on time, but the API documentation
                is missing from the repository, violating term #3 of the grant
                agreement.
              </p>
            </div>

            {/* Voting Actions */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500 hover:bg-red-100 transition-colors">
                <X className="size-6" />
              </button>
              <button className="h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-green-500 hover:bg-green-100 transition-colors shadow-sm">
                <Check className="size-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Nav Indicator */}
        <div className="h-1 w-1/3 bg-gray-300 rounded-full mx-auto mb-2" />
      </div>
    </div>
  );
}

// --- 3. The Refined "Juror Dashboard" UI (Desktop) ---
function HeroDashboard() {
  return (
    <div className="w-[1050px] bg-white rounded-[24px] border border-gray-200/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden flex font-sans">
      {/* Sidebar - Clean & Minimal */}
      <div className="w-[240px] bg-gray-50/50 border-r border-gray-100 p-6 hidden md:flex flex-col">
        <div className="flex items-center gap-3 mb-10">
          <div className="size-8 bg-[#BC5FEF] rounded-lg flex items-center justify-center text-white shadow-md shadow-purple-200">
            <Gavel className="size-4" />
          </div>
          <span className="font-bold text-lg text-[#0D1A12]">Slice</span>
        </div>

        <div className="space-y-1">
          {[
            { name: "Overview", icon: LayoutDashboard, active: true },
            { name: "My Disputes", icon: Gavel, active: false },
            { name: "Staking", icon: Wallet, active: false },
            { name: "History", icon: FileText, active: false },
          ].map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${item.active ? "bg-white text-[#0D1A12] shadow-sm border border-gray-100" : "text-gray-500 hover:bg-gray-100/50 hover:text-gray-900"}`}
            >
              <item.icon
                className={`size-4 ${item.active ? "text-[#BC5FEF]" : "text-gray-400"}`}
              />
              {item.name}
            </button>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-900">
            <Settings className="size-4" />
            Settings
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-white">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0D1A12]">
              Welcome back, Juror
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              You have 3 disputes pending review.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="rounded-full border-gray-200 h-10 px-4 text-sm font-semibold"
            >
              Staking Dashboard
            </Button>
          </div>
        </div>

        {/* Stats Grid - High Visual Hierarchy */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {/* Stat 1 */}
          <div className="p-6 rounded-[20px] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className="size-10 rounded-full bg-purple-50 flex items-center justify-center text-[#BC5FEF] group-hover:scale-110 transition-transform">
                <Award className="size-5" />
              </div>
              <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                Senior
              </span>
            </div>
            <div className="text-3xl font-bold text-[#0D1A12] mb-1">
              Level 42
            </div>
            <div className="text-sm text-gray-400 font-medium">
              Top 5% of jurors
            </div>
          </div>

          {/* Stat 2 */}
          <div className="p-6 rounded-[20px] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className="size-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                <TrendingUp className="size-5" />
              </div>
              <span className="text-xs font-bold bg-green-50 text-green-700 px-2 py-1 rounded-full">
                +12%
              </span>
            </div>
            <div className="text-3xl font-bold text-[#0D1A12] mb-1">$1,450</div>
            <div className="text-sm text-gray-400 font-medium">
              Total Earnings (USDC)
            </div>
          </div>

          {/* Stat 3 */}
          <div className="p-6 rounded-[20px] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <Check className="size-5" />
              </div>
            </div>
            <div className="text-3xl font-bold text-[#0D1A12] mb-1">98.5%</div>
            <div className="text-sm text-gray-400 font-medium">
              Accuracy Score
            </div>
          </div>
        </div>

        {/* Recent Activity List */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
              Recent Rulings
            </h3>
            <button className="text-sm text-[#BC5FEF] font-semibold hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {[
              {
                id: "#4028",
                title: "Prediction Market: Election Result",
                time: "2h ago",
                reward: "+$45.00",
                status: "Resolved",
              },
              {
                id: "#3992",
                title: "Freelance Escrow: Logo Design",
                time: "1d ago",
                reward: "+$120.00",
                status: "Resolved",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-sm transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 font-bold text-xs group-hover:border-[#BC5FEF] group-hover:text-[#BC5FEF] transition-colors">
                    <Gavel className="size-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0D1A12]">
                      {item.title}{" "}
                      <span className="text-gray-400 font-normal ml-1">
                        {item.id}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {item.time} • {item.status}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {item.reward}
                  </div>
                  <ChevronRight className="size-4 text-gray-300 group-hover:text-gray-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

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
              {/* Highlight box behind text */}
              <span className="absolute inset-0 bg-[#BC5FEF] -rotate-1 skew-x-3 opacity-20 blur-sm rounded-lg -z-10" />
              deliver justice
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-10">
            Join the jury. Review disputes from crowdfunding to escrows. Earn
            rewards in a gamified, on-chain court.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="h-14 px-12 rounded-full bg-[#1A1025] text-white text-lg font-bold hover:bg-[#2a1a3a] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              Start Judging <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button
              variant="outline"
              className="h-14 px-8 rounded-full border-gray-200 text-gray-600 text-lg font-bold hover:bg-white hover:text-[#0D1A12] hover:border-gray-300 bg-white/50 backdrop-blur-sm"
            >
              How it Works
            </Button>
          </div>
        </div>

        {/* 2. Overlapping UI Composition */}
        <div className="relative h-[650px] w-full flex justify-center mt-12 perspective-[2000px]">
          {/* Desktop Dashboard (Back Layer) */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 scale-90 md:scale-100 transition-transform duration-700 hover:scale-[1.01] hover:-translate-y-2 origin-top shadow-2xl">
            <HeroDashboard />
          </div>

          {/* Mobile Phone (Front Layer - Offset Left) */}
          <div className="absolute top-24 left-[2%] md:left-[8%] transition-transform duration-700 hover:-translate-y-4 hover:rotate-[-2deg] z-30">
            <HeroPhone />
          </div>
        </div>
      </div>
    </section>
  );
}
