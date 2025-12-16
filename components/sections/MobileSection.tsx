import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Apple,
  Play,
  Battery,
  Signal,
  Wifi,
} from "lucide-react";

// 1. Image-Based Phone Screen Component
function PhoneScreen({
  imageSrc,
  altText
}: {
  imageSrc: string,
  altText: string
}) {
  return (
    <div className="relative h-full w-full bg-black select-none overflow-hidden flex flex-col">
      {/* Status Bar Overlay - Optional if image doesn't have it */}
      <div className="absolute top-0 inset-x-0 h-12 z-20 flex justify-between items-center px-7 pt-2 text-[10px] font-medium tracking-wide text-white mix-blend-difference opacity-80 pointer-events-none">
        <span>9:41</span>
        <div className="flex gap-1.5">
          <Signal className="h-3 w-3" />
          <Wifi className="h-3 w-3" />
          <Battery className="h-3 w-3" />
        </div>
      </div>

      <Image
        src={imageSrc}
        alt={altText}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

// 2. The Hardware Shell (High-Fidelity iPhone Mockup)
function PhoneFrame({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`relative rounded-[55px] bg-[#121212] p-[12px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/10 ${className}`}
      style={style}
    >
      {/* Outer Bezel */}
      <div className="absolute inset-0 rounded-[55px] border-[1px] border-white/10 pointer-events-none z-50"></div>

      {/* Dynamic Island */}
      <div className="absolute top-[22px] left-1/2 -translate-x-1/2 h-[35px] w-[120px] bg-black rounded-full z-20 flex items-center justify-center pointer-events-none">
        <div className="absolute right-[25%] size-3 rounded-full bg-[#1a1a1a] shadow-inner" />
      </div>

      {/* Screen Container */}
      <div className="relative h-full w-full rounded-[44px] overflow-hidden bg-white shadow-[inset_0_0_0_2px_rgba(0,0,0,0.1)]">
        {children}
      </div>

      {/* Glossy Reflection */}
      <div
        className="absolute inset-0 rounded-[55px] pointer-events-none bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-10 z-40"
        style={{ mixBlendMode: "overlay" }}
      />
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
            Justice is a Swipe Away
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Review evidence, cast your vote, and level up your juror rank from
            anywhere.
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
        <div className="relative mx-auto mt-12 h-[550px] w-full max-w-5xl perspective-[2000px]">
          <div className="relative h-full w-full flex justify-center items-start pt-10">
            {/* Left Phone: Staking Page */}
            <div
              className="absolute left-1/2 w-[300px] h-[600px] z-10 transition-all duration-500 ease-out origin-bottom
                            -translate-x-[290px] translate-y-[40px] -rotate-12 scale-90
                            hover:-translate-x-[320px] hover:-rotate-[15deg] hover:scale-95 hover:z-20"
            >
              <PhoneFrame className="h-full w-full opacity-90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                <PhoneScreen imageSrc="/images/staking-page-wireframe.png" altText="Staking Interface" />
              </PhoneFrame>
            </div>

            {/* Right Phone: Vote Page */}
            <div
              className="absolute left-1/2 w-[300px] h-[600px] z-10 transition-all duration-500 ease-out origin-bottom
                            translate-x-[-10px] translate-y-[40px] rotate-12 scale-90
                            hover:translate-x-[20px] hover:rotate-[15deg] hover:scale-95 hover:z-20"
            >
              <PhoneFrame className="h-full w-full opacity-90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                <PhoneScreen imageSrc="/images/vote-page-wireframe.png" altText="Voting Interface" />
              </PhoneFrame>
            </div>

            {/* Center Phone (Hero): Main Dashboard */}
            <div className="absolute left-1/2 w-[320px] h-[650px] -translate-x-1/2 z-30 transition-transform duration-500 hover:scale-[1.02] hover:-translate-y-2">
              <PhoneFrame className="h-full w-full shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] ring-4 ring-black/5">
                <PhoneScreen imageSrc="/images/main-page-wireframe.png" altText="Slice Main Dashboard" />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
