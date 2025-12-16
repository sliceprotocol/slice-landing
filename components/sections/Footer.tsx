
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-x-0 top-[-20%] h-[420px] bg-[radial-gradient(circle_at_50%_20%,rgba(0,230,115,0.16),transparent_55%)]" />
      <div className="container relative mx-auto max-w-6xl px-6 pb-16 pt-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-4xl font-semibold">Safe</div>
            <p className="mt-4 max-w-xl text-white/70">
              The most trusted platform to manage digital assets. Built for organizations that need speed and control.
            </p>
          </div>
          <div className="space-y-3 text-sm text-white/70">
            <div className="text-white">Product</div>
            <Link href="#" className="block hover:text-white">
              Features
            </Link>
            <Link href="#" className="block hover:text-white">
              Pricing
            </Link>
            <Link href="#" className="block hover:text-white">
              Security
            </Link>
          </div>
          <div className="space-y-3 text-sm text-white/70">
            <div className="text-white">Developers</div>
            <Link href="#" className="block hover:text-white">
              Documentation
            </Link>
            <Link href="#" className="block hover:text-white">
              SDKs
            </Link>
            <Link href="#" className="block hover:text-white">
              Modules
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm text-white/60">
            <span>© 2025 Safe</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>All rights reserved</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              Cookies
            </Link>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span className="text-white/80">hello@safe.global</span>
          </div>
        </div>
      </div>
      <div className="relative h-24 w-full border-t border-white/5 bg-[#050706]/60">
        <div className="absolute inset-0 flex items-center justify-center text-[120px] font-semibold uppercase tracking-tight text-white/5">
          Safe
        </div>
      </div>
    </footer>
  );
}
