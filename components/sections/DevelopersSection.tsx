import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const developerFeatures = [
  "Build custom modules and flows",
  "TypeScript SDKs and quick starts",
  "Roll-ups and chains out of the box",
  "Permissions, guards, and policies",
];

export function DevelopersSection() {
  return (
    <section id="developers" className="relative overflow-hidden bg-gradient-to-b from-[#0b0f0d] via-[#0c110e] to-[#050706] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(0,230,115,0.18),transparent_45%)]" />
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#9adfb2]">
              Developers
            </div>
            <h2 className="text-4xl font-semibold leading-tight">Developers build on the leading tech stack</h2>
            <p className="text-lg text-white/70">
              Secure any use case and any access point. Connect with custom modules, policies, and simulations.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {developerFeatures.map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[#00e673]" />
                  <span className="text-sm text-white/90">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="h-11 rounded-full bg-[#00e673] px-7 text-black hover:bg-[#00cf68]">View docs</Button>
              <Button
                variant="ghost"
                className="h-11 rounded-full border border-white/15 bg-white/5 px-7 text-white hover:bg-white/10"
              >
                Explore SDKs
              </Button>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-black/40 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
            <img
              src="/code-editor-showing-smart-contract-integration.jpg"
              alt="Developer tools"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
