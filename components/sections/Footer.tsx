import Link from "next/link";
import { Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SLICE_LINKS } from "@/lib/constants";

// Custom X (Twitter) Icon since Lucide's might differ slightly
const XIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
  >
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080808] text-white min-h-screen flex flex-col justify-center py-24 border-t border-white/5">
      {/* 1. Background Gradient Glow (From CTA) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* 2. The Final Content (CTA) - Merged Here */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-primary font-bold mb-8">
            Ready to join?
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            Make justice your profession
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Join the protocol, stake tokens, and help resolve the world's
            disputes. The court is open.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={SLICE_LINKS.APP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="h-14 px-8 rounded-full bg-primary text-white text-lg font-bold hover:bg-[#a040d0] shadow-[0_0_40px_var(--primary)] transition-all hover:-translate-y-1">
                Start Judging
              </Button>
            </Link>
            <Link
              href={SLICE_LINKS.DOCS}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="h-14 px-8 rounded-full border border-white/10 bg-white/5 text-lg font-bold text-white hover:bg-white/10 hover:text-white"
              >
                Read the Docs <ArrowRight className="ml-2 size-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-white/5 mb-20" />

        {/* 3. The Footer Links Grid */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr]">
          {/* Logo Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-3xl font-bold">
                {/* Replaced Inline SVG with Image Tag referencing the uploaded file */}
                <img
                  src="/icons/slice-light-logo-transparent.svg"
                  alt="Slice Protocol Logo"
                  className="w-12 h-12 object-contain"
                />
                Slice
              </div>
            </Link>
          </div>

          {/* Links Columns */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-500">Product</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href={SLICE_LINKS.APP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Juror Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href={`${SLICE_LINKS.APP}/staking`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Staking
                </Link>
              </li>
              <li>
                <Link
                  href={`${SLICE_LINKS.APP}/disputes`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Disputes
                </Link>
              </li>
              <li>
                <Link
                  href={SLICE_LINKS.DOCS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Governance
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-500">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href={SLICE_LINKS.DOCS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  For Protocols
                </Link>
              </li>
              <li>
                <Link
                  href={SLICE_LINKS.DOCS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  For Marketplaces
                </Link>
              </li>
              <li>
                <Link
                  href={SLICE_LINKS.DOCS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  For DAOs
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-500">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href={SLICE_LINKS.DOCS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={SLICE_LINKS.DOCS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href={SLICE_LINKS.DOCS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={SLICE_LINKS.DOCS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Imprint
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-500">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href={SLICE_LINKS.DOCS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href={SLICE_LINKS.DOCS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Help centre
                </Link>
              </li>
              <li>
                <Link
                  href={SLICE_LINKS.DOCS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href={SLICE_LINKS.DOCS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-500">Social</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href={SLICE_LINKS.X}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  X (Twitter)
                </Link>
              </li>
              <li>
                <Link
                  href={SLICE_LINKS.GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Github
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Content (Icons & Copyright) */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <div className="flex gap-4">
            <Link
              href={SLICE_LINKS.X}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <XIcon className="h-5 w-5" />
            </Link>
            <Link
              href={SLICE_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-600">
              © 2025 Slice Protocol. All rights reserved.
            </p>
            <p className="text-xs text-gray-700 mt-1">
              {SLICE_LINKS.SOCIAL_HANDLE}
            </p>
          </div>
        </div>
      </div>

      {/* GIANT BACKGROUND TEXT SVG */}
      <div className="pointer-events-none absolute bottom-[-5%] left-1/2 w-full -translate-x-1/2 select-none opacity-40">
        <svg
          viewBox="0 0 1350 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <defs>
            <linearGradient
              id="sliceGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.8" />
              <stop
                offset="100%"
                stopColor="var(--primary)"
                stopOpacity="0.05"
              />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="85%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="480"
            fontWeight="700"
            letterSpacing="-0.04em"
            stroke="url(#sliceGradient)"
            strokeWidth="2"
            fill="none"
            fontFamily="sans-serif"
          >
            Slice
          </text>
        </svg>
      </div>
    </footer>
  );
}
