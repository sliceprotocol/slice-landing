"use client";

import {
  ShoppingCart,
  Briefcase,
  Wallet,
  FileText,
  Umbrella,
  AlertTriangle,
  Code,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SLICE_LINKS } from "@/lib/constants";

const useCases = [
  {
    icon: ShoppingCart,
    title: "Marketplaces",
    subtitle: "(E-commerce, P2P, Services)",
  },
  {
    icon: Briefcase,
    title: "Freelancer and Contractor Platforms",
    subtitle: "",
  },
  {
    icon: Wallet,
    title: "Fintechs, Wallets, and Payment Platforms",
    subtitle: "",
  },
  {
    icon: FileText,
    title: "Web3 Platforms and On-chain Protocols",
    subtitle: "",
  },
  {
    icon: Umbrella,
    title: "Micro-insurance and Micro-claims",
    subtitle: "",
  },
  {
    icon: AlertTriangle,
    title: "Content Moderation and Platform Disputes",
    subtitle: "",
  },
  {
    icon: Code,
    title: "Code Quality Evaluation and OSS Reward Distribution",
    subtitle: "",
  },
  {
    icon: Users,
    title: "Governance and Collective Decision-Making",
    subtitle: "",
  },
];

export function BusinessUseCases() {
  return (
    <section id="business-use-cases" className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-8 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {"</>"} BUILT FOR DIGITAL PLATFORMS
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Built for real business use cases
          </h2>

          <p className="max-w-2xl text-lg text-zinc-400 leading-relaxed">
            Slice fits naturally into products where agreements and payments
            matter:
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl bg-[#1A1025] border border-primary/20 p-6 min-h-[180px] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-15px_var(--primary)]"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-white">
                <useCase.icon className="h-5 w-5" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-1">
                {useCase.title}
              </h3>
              {useCase.subtitle && (
                <p className="text-xs text-zinc-400">{useCase.subtitle}</p>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://docs.slicehub.xyz/overview/use-cases"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-12 px-12 rounded-full bg-primary text-white text-base font-bold hover:bg-[#a040d0] transition-colors">
              Explore use cases
            </Button>
          </Link>
          <Link
              href={SLICE_LINKS.DOCS}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="h-12 px-6 rounded-full border border-white/10 bg-white/5 text-base font-bold text-white hover:bg-white/10 hover:text-white"
              >
                Read the Docs <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}

