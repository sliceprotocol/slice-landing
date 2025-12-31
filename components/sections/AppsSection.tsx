"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gavel, Scale, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SLICE_LINKS } from "@/lib/constants";
import { Particles } from "@/components/ui/particles";

// 1. Reusable App Icon Component
function AppIcon({
  className,
  blur = false,
  size = "md",
  type = "placeholder",
}: {
  className?: string;
  blur?: boolean;
  size?: "sm" | "md" | "lg";
  type?:
    | "stack"
    | "dots"
    | "world"
    | "purple"
    | "black-stack"
    | "placeholder"
    | "scales";
}) {
  // Generate random values only on client to avoid hydration mismatch
  const [animationStyle, setAnimationStyle] = useState<{
    animationDelay?: string;
    animationDuration?: string;
  }>({});

  useEffect(() => {
    setAnimationStyle({
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${8 + Math.random() * 4}s`,
    });
  }, []);

  // Size variants
  const sizeClasses = {
    sm: "size-16",
    md: "size-20",
    lg: "size-24",
  };

  return (
    <div
      className={cn(
        "absolute bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex items-center justify-center border border-gray-100/50 animate-float",
        sizeClasses[size],
        blur ? "blur-[2px] opacity-60 scale-90" : "scale-100 opacity-100 z-10",
        className,
      )}
      style={animationStyle}
    >
      {/* Logic to render different "logo" mimics */}

      {/* 1. Purple Block (Abstract Protocol) */}
      {type === "purple" && (
        <div className="size-8 bg-primary rounded-md shadow-sm" />
      )}

      {/* 2. Stacked Lines (Documents/Evidence) */}
      {type === "stack" && (
        <div className="flex flex-col gap-1 items-center">
          <div className="w-8 h-2 bg-gray-300 rounded-full opacity-60" />
          <div className="w-10 h-2 bg-gray-400 rounded-full" />
          <div className="w-6 h-2 bg-primary rounded-full opacity-80" />
        </div>
      )}

      {/* 3. Black Stack (Strict Contracts) */}
      {type === "black-stack" && (
        <div className="flex flex-col gap-1 items-center">
          <div className="w-6 h-2 bg-black rounded-full" />
          <div className="w-10 h-2 bg-black rounded-full" />
          <div className="w-8 h-2 bg-black rounded-full" />
        </div>
      )}

      {/* 4. Text Label (World/DAO) */}
      {type === "world" && (
        <span className="font-bold text-xs tracking-tight text-[#1A1025] flex flex-col items-center">
          <div className="size-2 rounded-full bg-primary mb-1" />
          DAO
        </span>
      )}

      {/* 5. Dots Grid (Decentralization) */}
      {type === "dots" && (
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`size-1.5 rounded-full ${i % 2 === 0 ? "bg-primary" : "bg-gray-300"} ${i % 2 === 0 ? "opacity-100" : "opacity-40"}`}
            />
          ))}
        </div>
      )}

      {/* 6. Scales Icon (Justice) */}
      {type === "scales" && (
        <Scale className="size-8 text-gray-800 opacity-80" />
      )}

      {/* 7. Placeholder */}
      {type === "placeholder" && (
        <div className="size-full bg-gray-50 rounded-2xl flex items-center justify-center">
          <div className="size-6 rounded-full border-2 border-dashed border-gray-200" />
        </div>
      )}
    </div>
  );
}


export function AppsSection() {
  return (
    <section
      id="integrations"
      className="relative py-24 lg:py-64 bg-[#F9FAFB] overflow-hidden"
    >
      {/* Particle Background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={80}
        color="#bc5fef"
        size={0.4}
        refresh
      />
      {/* Container for the scattered icons - Hidden on Mobile to preserve readability */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none hidden md:block">
        {/* Top Left Cluster */}
        <AppIcon
          type="dots"
          className="top-20 left-[10%] lg:left-[25%]"
          size="md"
        />
        <AppIcon
          type="stack"
          className="top-40 left-[5%] lg:left-[15%]"
          size="lg"
          blur
        />
        <AppIcon
          type="world"
          className="top-60 left-[8%] lg:left-[20%]"
          size="md"
        />
        <AppIcon
          type="placeholder"
          className="top-32 left-[30%] lg:left-[40%] opacity-40 blur-sm"
          size="sm"
        />

        {/* Top Right Cluster */}
        <AppIcon
          type="purple"
          className="top-20 right-[10%] lg:right-[25%]"
          size="md"
        />
        <AppIcon
          type="black-stack"
          className="top-60 right-[8%] lg:right-[20%]"
          size="lg"
        />
        <AppIcon
          type="placeholder"
          className="top-32 right-[5%] lg:right-[15%]"
          size="sm"
          blur
        />

        {/* Bottom Scatter */}
        <AppIcon
          type="scales"
          className="bottom-32 left-[15%] lg:left-[30%]"
          size="lg"
          blur
        />
        <AppIcon
          type="dots"
          className="bottom-10 left-[50%] -translate-x-1/2"
          size="md"
        />
        <AppIcon
          type="placeholder"
          className="bottom-60 right-[10%] lg:right-[25%]"
          size="md"
        />
      </div>

      <div className="container relative z-20 mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1A12] mb-6 tracking-tight">
        Dispute Resolution for <br/>Digital Products
        </h2>
        <p className="text-base text-gray-500 mb-10 max-w-xl mx-auto">
        Slice helps platforms resolve small, frequent disputes without support teams, manual reviews, or biased decisions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={SLICE_LINKS.DOCS}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="h-12 px-6 rounded-full border-gray-200 bg-white text-gray-600 text-base font-bold hover:bg-white hover:text-[#0D1A12] hover:border-gray-300 w-full sm:w-auto"
            >
              Integrate Slice
            </Button>
          </Link>
          <Link
            href="https://docs.slicehub.xyz/overview/use-cases"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-12 px-12 rounded-full bg-[#1A1025] text-white text-base font-bold hover:bg-primary transition-colors w-full sm:w-auto">
              Explore Use Cases
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
