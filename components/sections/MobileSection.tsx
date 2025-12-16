import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Apple, Play, Battery, Signal, Wifi } from "lucide-react";

// 1. Image-Based Phone Screen Component
function PhoneScreen({
  imageSrc,
  altText,
}: {
  imageSrc: string;
  altText: string;
}) {
  return (
    <div className="relative h-full w-full bg-white select-none overflow-hidden flex flex-col">
      {/* Status Bar Overlay */}
      <div className="absolute top-0 inset-x-0 h-12 z-20 flex justify-between items-center px-7 pt-2 text-[10px] font-medium tracking-wide text-white mix-blend-difference opacity-80 pointer-events-none">
        <span>9:41</span>
        <div className="flex gap-1.5">
          <Signal className="h-3 w-3" />
          <Wifi className="h-3 w-3" />
          <Battery className="h-3 w-3" />
        </div>
      </div>

      {/* Inner Padding Container */}
      <div className="absolute inset-0 p-3 pt-10">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

// 2. The Hardware Shell
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
      className={`relative rounded-[40px] md:rounded-[55px] bg-[#121212] p-[8px] md:p-[12px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/10 ${className}`}
      style={style}
    >
      <div className="absolute inset-0 rounded-[40px] md:rounded-[55px] border-[1px] border-white/10 pointer-events-none z-50"></div>
      <div className="absolute top-[18px] md:top-[22px] left-1/2 -translate-x-1/2 h-[25px] md:h-[35px] w-[90px] md:w-[120px] bg-black rounded-full z-20 flex items-center justify-center pointer-events-none">
        <div className="absolute right-[25%] size-2 md:size-3 rounded-full bg-[#1a1a1a] shadow-inner" />
      </div>
      <div className="relative h-full w-full rounded-[32px] md:rounded-[44px] overflow-hidden bg-white shadow-[inset_0_0_0_2px_rgba(0,0,0,0.1)]">
        {children}
      </div>
      <div
        className="absolute inset-0 rounded-[40px] md:rounded-[55px] pointer-events-none bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-10 z-40"
        style={{ mixBlendMode: "overlay" }}
      />
    </div>
  );
}

export function MobileSection() {
  return (
    <section className="relative pt-24 md:pt-32 pb-0 overflow-hidden bg-gradient-to-t from-gray-100 via-gray-50 to-white">
      <div className="container relative z-10 mx-auto max-w-7xl px-6 text-center">
        {/* Header Content */}
        <div className="mx-auto max-w-2xl mb-16 md:mb-24">
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
        <div className="relative mx-auto w-full max-w-5xl perspective-[2000px] flex justify-center mt-auto">
          {/* Main Scale Wrapper: Scales down everything on mobile (h-[400px]) and restores on desktop (h-[650px]) */}
          <div className="relative w-full h-[400px] md:h-[650px] scale-[0.65] md:scale-100 origin-bottom transition-transform duration-500">
            {/* Left Phone */}
            <div
              className="absolute left-1/2 bottom-0 w-[300px] h-[600px] z-10 transition-all duration-500 ease-out origin-bottom
                            -translate-x-[200px] md:-translate-x-[290px] translate-y-[60px] md:translate-y-[80px] -rotate-12 scale-90
                            hover:-translate-x-[320px] hover:-rotate-[15deg] hover:scale-95 hover:z-20"
            >
              <PhoneFrame className="h-full w-full opacity-90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                <PhoneScreen
                  imageSrc="/images/staking-page-wireframe.png"
                  altText="Staking Interface"
                />
              </PhoneFrame>
            </div>

            {/* Right Phone */}
            <div
              className="absolute left-1/2 bottom-0 w-[300px] h-[600px] z-10 transition-all duration-500 ease-out origin-bottom
                            translate-x-[-100px] md:translate-x-[-10px] translate-y-[60px] md:translate-y-[80px] rotate-12 scale-90
                            hover:translate-x-[20px] hover:rotate-[15deg] hover:scale-95 hover:z-20"
            >
              <PhoneFrame className="h-full w-full opacity-90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                <PhoneScreen
                  imageSrc="/images/vote-page-wireframe.png"
                  altText="Voting Interface"
                />
              </PhoneFrame>
            </div>

            {/* Center Phone (Hero) */}
            <div className="absolute left-1/2 bottom-0 w-[320px] h-[650px] -translate-x-1/2 z-30 transition-transform duration-500 hover:scale-[1.02] hover:-translate-y-2">
              <PhoneFrame className="h-full w-full shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] ring-4 ring-black/5">
                <PhoneScreen
                  imageSrc="/images/main-page-wireframe.png"
                  altText="Slice Main Dashboard"
                />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
