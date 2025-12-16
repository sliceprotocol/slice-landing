import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Terminal, FileCode2, Braces, Layers } from "lucide-react";

// --- Visual Components ---

function CodeWindow() {
  return (
    <div className="relative rounded-xl bg-[#1E1E1E] shadow-2xl border border-gray-800 overflow-hidden font-mono text-sm">
      {/* Window Controls */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-gray-800">
        <div className="flex gap-1.5">
          <div className="size-3 rounded-full bg-[#FF5F56]" />
          <div className="size-3 rounded-full bg-[#FFBD2E]" />
          <div className="size-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="ml-4 text-xs text-gray-400 font-medium">deploy-safe.ts</div>
      </div>

      {/* Code Content */}
      <div className="p-6 overflow-x-auto">
        <pre className="leading-relaxed">
          <code>
            <span className="text-[#C586C0]">import</span>{" "}
            <span className="text-[#9CDCFE]">{`{ SafeFactory }`}</span>{" "}
            <span className="text-[#C586C0]">from</span>{" "}
            <span className="text-[#CE9178]">'@safe-global/protocol-kit'</span>
            {"\n\n"}
            <span className="text-[#6A9955]">// Initialize the Factory</span>
            {"\n"}
            <span className="text-[#569CD6]">const</span>{" "}
            <span className="text-[#9CDCFE]">safeFactory</span>{" "}
            <span className="text-[#D4D4D4]">=</span>{" "}
            <span className="text-[#C586C0]">await</span>{" "}
            <span className="text-[#4EC9B0]">SafeFactory</span>
            <span className="text-[#D4D4D4]">.</span>
            <span className="text-[#DCDCAA]">init</span>
            <span className="text-[#D4D4D4]">({`{`}</span>
            {"\n"}
            {"  "}
            <span className="text-[#9CDCFE]">provider</span>
            <span className="text-[#9CDCFE]">:</span>{" "}
            <span className="text-[#CE9178]">'https://eth-mainnet.g.alchemy.com...'</span>
            <span className="text-[#D4D4D4]">,</span>
            {"\n"}
            {"  "}
            <span className="text-[#9CDCFE]">signer</span>
            <span className="text-[#9CDCFE]">:</span>{" "}
            <span className="text-[#9CDCFE]">owner1</span>
            {"\n"}
            <span className="text-[#D4D4D4]">{`}`})</span>
            {"\n\n"}
            <span className="text-[#6A9955]">// Deploy a new Safe</span>
            {"\n"}
            <span className="text-[#569CD6]">const</span>{" "}
            <span className="text-[#9CDCFE]">safeSdk</span>{" "}
            <span className="text-[#D4D4D4]">=</span>{" "}
            <span className="text-[#C586C0]">await</span>{" "}
            <span className="text-[#9CDCFE]">safeFactory</span>
            <span className="text-[#D4D4D4]">.</span>
            <span className="text-[#DCDCAA]">deploySafe</span>
            <span className="text-[#D4D4D4]">({`{`}</span>
            {"\n"}
            {"  "}
            <span className="text-[#9CDCFE]">safeAccountConfig</span>
            <span className="text-[#9CDCFE]">:</span>{" "}
            <span className="text-[#D4D4D4]">{`{`}</span>
            {"\n"}
            {"    "}
            <span className="text-[#9CDCFE]">owners</span>
            <span className="text-[#9CDCFE]">:</span>{" "}
            <span className="text-[#D4D4D4]">[</span>
            <span className="text-[#CE9178]">'0x...'</span>
            <span className="text-[#D4D4D4]">,</span>{" "}
            <span className="text-[#CE9178]">'0x...'</span>
            <span className="text-[#D4D4D4]">],</span>
            {"\n"}
            {"    "}
            <span className="text-[#9CDCFE]">threshold</span>
            <span className="text-[#9CDCFE]">:</span>{" "}
            <span className="text-[#B5CEA8]">2</span>
            {"\n"}
            {"  "}
            <span className="text-[#D4D4D4]">{`}`}</span>
            {"\n"}
            <span className="text-[#D4D4D4]">{`})`}</span>
          </code>
        </pre>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#12FF80]/5 rounded-bl-[100px] pointer-events-none" />
    </div>
  );
}


export function DevelopersSection() {
  return (
    <section id="developers" className="py-32 bg-white text-[#0D1A12] relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-3 py-1 text-xs font-bold mb-8">
              <Terminal className="size-3" />
              <span>Format. TypeScript</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Build on the <br />
              standard for <br />
              <span className="text-[#12FF80] drop-shadow-sm selection:bg-[#12FF80] selection:text-black">smart acccounts</span>
            </h2>

            <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed">
              Leverage the most battle-tested smart account modular stack. Integrate Safe into your dapp in minutes, not days.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: Braces, text: "Type-safe SDKs & Kits" },
                { icon: Layers, text: "Account Abstraction (ERC-4337)" },
                { icon: FileCode2, text: "Rich Module Ecosystem" }
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="size-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-[#12FF80] group-hover:border-[#12FF80] transition-colors duration-300">
                    <feature.icon className="size-5 text-gray-600 group-hover:text-black transition-colors duration-300" />
                  </div>
                  <span className="text-lg font-semibold text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button className="h-12 px-6 rounded-full bg-black text-white font-bold hover:bg-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                Read the Docs
              </Button>
              <Button variant="outline" className="h-12 px-6 rounded-full border-gray-200 font-bold hover:bg-gray-50">
                Github
              </Button>
            </div>
          </div>

          {/* Right: Code Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#12FF80] to-blue-500 rounded-2xl opacity-20 blur-2xl -z-10" />
            <CodeWindow />

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="size-10 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="size-6 text-green-600" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Status</div>
                <div className="text-sm font-bold text-[#0D1A12]">Audit Passed</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
