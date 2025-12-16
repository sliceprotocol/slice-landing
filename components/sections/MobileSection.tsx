
import { Button } from "@/components/ui/button";
import { Apple, Play, Battery, Signal, Wifi, ChevronDown, Bell, ScanLine } from "lucide-react";

// 1. The Internal App UI (Reused for all phones)
function PhoneContent({ isDark = false }: { isDark?: boolean }) {
  const bgClass = isDark ? "bg-[#0C110F] text-white" : "bg-white text-black";
  const textMuted = isDark ? "text-gray-500" : "text-gray-400";
  const itemHover = isDark ? "bg-white/5" : "bg-gray-50";
  const greenText = "text-[#12FF80]";

  return (
    <div className={`h - full w - full flex flex - col font - sans ${bgClass} `}>
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-2 text-[10px] font-medium">
        <span>9:41</span>
        <div className="flex gap-1.5">
          <Signal className="h-3 w-3" />
          <Wifi className="h-3 w-3" />
          <Battery className="h-3 w-3" />
        </div>
      </div>

      {/* App Header */}
      <div className="px-6 py-2 flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className={`size - 8 rounded - full flex items - center justify - center text - xs font - bold ${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} `}>
            💰
          </div>
          <div>
            <div className="flex items-center gap-1 text-sm font-semibold cursor-pointer">
              Main treasury <ChevronDown className="size-3 opacity-50" />
            </div>
            <div className={`text - [10px] ${textMuted} `}>0x13d9...4589</div>
          </div>
        </div>
        <div className="flex gap-3">
          <ScanLine className="size-5 opacity-70" />
          <Bell className="size-5 opacity-70" />
        </div>
      </div>

      {/* Balance Hero */}
      <div className="px-6 py-6 text-center">
        <div className="text-4xl font-bold tracking-tight">
          $1,854,380<span className="text-gray-400 text-2xl">.52</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-6 border-b border-gray-100/10 mb-4">
        {["Tokens", "Positions", "NFTs"].map((tab, i) => (
          <div key={tab} className={`pb - 3 px - 2 text - sm font - medium border - b - 2 cursor - pointer transition - colors ${i === 0 ? "border-black dark:border-white opacity-100" : "border-transparent opacity-40 hover:opacity-70"} `}>
            {tab}
          </div>
        ))}
      </div>

      {/* Token List */}
      <div className="flex-1 overflow-hidden px-4 space-y-1">
        {[
          { name: "USDC", amount: "1,144,064.33", val: "$1,144,064.33", change: "+0.21%", color: "bg-blue-500" },
          { name: "Ethereum", amount: "132.527 ETH", val: "$619,809.02", change: "+2.51%", color: "bg-purple-500" },
          { name: "Morpho", amount: "150,000 MORPHO", val: "$78,511.38", change: "+2.01%", color: "bg-indigo-500" },
          { name: "Tether USD", amount: "8,634 USDT", val: "$8,639.64", change: "+0%", color: "bg-green-500" },
          { name: "ENS", amount: "30 ENS", val: "$645.34", change: "-0.31%", color: "bg-blue-400", negative: true },
        ].map((token) => (
          <div key={token.name} className={`flex justify - between items - center p - 3 rounded - xl ${itemHover} `}>
            <div className="flex items-center gap-3">
              <div className={`size - 9 rounded - full ${token.color} flex items - center justify - center text - white text - [10px]`}>
                {token.name[0]}
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold">{token.name}</div>
                <div className={`text - xs ${textMuted} `}>{token.amount}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{token.val}</div>
              <div className={`text - xs ${token.negative ? "text-red-400" : "text-[#00C46B]"} `}>{token.change}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. The Hardware Shell (iPhone 14/15 Pro style)
function PhoneFrame({
  children,
  className,
  style
}: {
  children: React.ReactNode,
  className?: string,
  style?: React.CSSProperties
}) {
  return (
    <div
      className={`relative rounded - [50px] bg - black p - [8px] shadow - 2xl border - [6px] border - [#1a1a1a] ring - 1 ring - gray - 800 ${className} `}
      style={style}
    >
      {/* Dynamic Island */}
      <div className="absolute top-[18px] left-1/2 -translate-x-1/2 h-[24px] w-[90px] bg-black rounded-full z-20 pointer-events-none" />

      {/* Screen Container */}
      <div className="relative h-full w-full rounded-[42px] overflow-hidden bg-white">
        {children}
      </div>

      {/* Glass Reflection/Glare Overlay */}
      <div className="absolute inset-0 rounded-[50px] pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-20 z-30" />
    </div>
  );
}

export function MobileSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#FAFAFA]">
      <div className="container relative z-10 mx-auto max-w-7xl px-6 text-center">

        {/* Header Content */}
        <div className="mx-auto max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0D1A12] mb-4">
            Track and sign transactions on mobile
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Get notifications and sign transactions on the move.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="h-12 px-6 rounded-lg bg-white border border-gray-200 text-black hover:bg-gray-50 shadow-sm transition-all hover:-translate-y-0.5">
              <Apple className="mr-2 h-5 w-5" />
              Download on iOS
            </Button>
            <Button className="h-12 px-6 rounded-lg bg-white border border-gray-200 text-black hover:bg-gray-50 shadow-sm transition-all hover:-translate-y-0.5">
              <Play className="mr-2 h-5 w-5 fill-current" />
              Download on Android
            </Button>
          </div>
        </div>

        {/* 3. The 3-Phone Composition */}
        <div className="relative mx-auto mt-12 h-[500px] w-full max-w-5xl perspective-[2000px]">
          {/* Gradient Mask to fade phones at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FAFAFA] to-transparent z-40" />

          <div className="relative h-full w-full flex justify-center items-start pt-10">

            {/* Left Phone (Dark Mode, Tilted) */}
            <div className="absolute left-1/2 w-[300px] h-[600px] transition-transform duration-700 ease-out hover:-translate-x-[260px]"
              style={{
                transform: 'translateX(-280px) translateY(40px) rotate(-12deg) scale(0.9)',
                zIndex: 0
              }}>
              <PhoneFrame className="h-full w-full opacity-80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                <PhoneContent isDark={true} />
              </PhoneFrame>
            </div>

            {/* Right Phone (Dark Mode, Tilted) */}
            <div className="absolute left-1/2 w-[300px] h-[600px] transition-transform duration-700 ease-out hover:translate-x-[-40px]"
              style={{
                transform: 'translateX(-20px) translateY(40px) rotate(12deg) scale(0.9)',
                zIndex: 0
              }}>
              <PhoneFrame className="h-full w-full opacity-80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                <PhoneContent isDark={true} />
              </PhoneFrame>
            </div>

            {/* Center Phone (Light Mode, Hero) */}
            <div className="absolute left-1/2 w-[320px] h-[650px] -translate-x-1/2 z-10 transition-transform duration-500 hover:scale-[1.02]">
              <PhoneFrame className="h-full w-full shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] ring-4 ring-black/5">
                <PhoneContent isDark={false} />
              </PhoneFrame>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

