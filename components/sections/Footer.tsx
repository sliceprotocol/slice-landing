import Link from "next/link";
import { Github } from "lucide-react";

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
    <footer className="relative overflow-hidden bg-[#080808] text-white pt-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr]">
          {/* Logo Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-xl font-bold">
                {/* Safe Logo Mark */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H10C13.3137 4 16 6.68629 16 10V14H10C6.68629 14 4 11.3137 4 8V4Z" fill="white" />
                  <path d="M14 10H20V14C20 17.3137 17.3137 20 14 20H8V16H14C15.6569 16 17 14.6569 17 13C17 11.3431 15.6569 10 14 10Z" fill="#12FF80" />
                </svg>
                Safe
              </div>
            </Link>
          </div>

          {/* Links Columns */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-500">Product</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Multisig wallet</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Mobile wallet</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Safe Shield</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Developer APIs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Appstore</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-500">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Teams</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Power Users</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Deploy new networks</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-500">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Imprint</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-500">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Help centre</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-500">Social</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">X (Twitter)</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Github</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Content (Icons & Copyright) */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">
              <XIcon className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-sm text-gray-600">
            © 2025 Safe.global. All rights reserved.
          </p>
        </div>
      </div>

      {/* GIANT BACKGROUND TEXT SVG */}
      <div className="pointer-events-none absolute bottom-[-5%] left-1/2 min-w-[1920px] -translate-x-1/2 select-none opacity-40">
        <svg
          viewBox="0 0 1350 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <defs>
            <linearGradient id="safeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#12FF80" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#12FF80" stopOpacity="0.05" />
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
            stroke="url(#safeGradient)"
            strokeWidth="2"
            fill="none"
            fontFamily="sans-serif"
          >
            Safe
          </text>
        </svg>
      </div>
    </footer>
  );
}
