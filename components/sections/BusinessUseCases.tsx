"use client";

import {
  ShoppingCart,
  Briefcase,
  Wallet,
  Blocks,
  ShieldAlert,
  Gavel,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SLICE_LINKS } from "@/lib/constants";

const useCases = [
  {
    icon: ShoppingCart,
    title: "Marketplaces",
    subtitle: "E-commerce, P2P, Services",
  },
  {
    icon: Briefcase,
    title: "Freelancer & Gig Platforms",
    subtitle: "Dispute resolution for service agreements",
  },
  {
    icon: Wallet,
    title: "Fintech & Payment Platforms",
    subtitle: "Transaction disputes and chargeback handling",
  },
  {
    icon: Blocks,
    title: "Web3 & On-chain Protocols",
    subtitle: "Decentralized arbitration for smart contracts",
  },
  {
    icon: ShieldAlert,
    title: "Content Moderation",
    subtitle: "Community-driven content review",
  },
  {
    icon: Gavel,
    title: "Governance & DAOs",
    subtitle: "Unbiased proposal and treasury dispute resolution",
  },
];

export function BusinessUseCases() {
  return (
    <section
      id="business-use-cases"
      className="relative bg-[#050505] py-24 md:py-32 overflow-hidden"
    >
      {/* Background Ambience - Deep Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 opacity-20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8 backdrop-blur-md shadow-lg shadow-black/20">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/90">
              {"</>"} BUILT FOR DIGITAL PLATFORMS
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 drop-shadow-sm">
            Built for real business use cases
          </h2>

          <p className="max-w-2xl text-lg text-zinc-400 leading-relaxed font-light">
            Justly fits naturally into products where agreements, trust, and
            payments matter:
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary/30 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-primary/5 overflow-hidden"
            >
              {/* Internal Gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-100 transition-opacity duration-500" />

              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Modern Glass Icon Container with Scaling & Color Change */}
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary shadow-inner transition-all duration-500 ease-out group-hover:scale-125 group-hover:rotate-3 group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                  <useCase.icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-105" />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-white transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                  {useCase.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://docs.justly.one/overview/use-cases"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-12 px-10 rounded-full bg-primary text-white text-base font-bold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
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
              className="h-12 px-8 rounded-full border border-white/10 bg-white/5 text-base font-bold text-white hover:text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Read the Docs <ArrowRight className="ml-2 size-4 opacity-70" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
