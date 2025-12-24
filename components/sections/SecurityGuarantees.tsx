import { ShieldCheck, Gavel, EyeOff, Scale, Shuffle, Plus } from "lucide-react";

// 1. The "Matrix" Lock Visual (now VRF Selector)
function MatrixLock() {
  return (
    <div className="relative flex justify-center items-center py-12 mb-8">
      {/* Background Matrix Text (Decorative) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <div
          className="text-[10px] leading-3 font-mono text-primary/20 text-center whitespace-pre-wrap opacity-30 blur-[0.5px]"
          style={{ maskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)' }}
        >
          {`0x71C7656EC7ab88b098defB751B7401B5f6d8976F
            c8912301384013401348102348012834012830481230
            89127349812734981273498123749812374981234791
            a789sd7f98a7sd98f7as98d7f98as7d9f87asd98f798
            71230498712304987123409871230498712304981234
            12341234123412341234123412341234123412341234
            0x71C7656EC7ab88b098defB751B7401B5f6d8976F
            c8912301384013401348102348012834012830481230`}
        </div>
      </div>

      {/* The Dial Ring */}
      <div className="relative z-10 size-24 rounded-full border border-white/10 bg-[#0C110F] flex items-center justify-center shadow-2xl shadow-black/50">
        {/* Ticks ring */}
        <div className="absolute inset-0 rounded-full border border-white/5" />
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-1.5 bg-gray-700"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-40px)`
            }}
          />
        ))}

        {/* Center Icon */}
        <div className="size-10 text-primary">
          <Shuffle className="size-full" />
        </div>
      </div>
    </div>
  );
}

export function SecurityGuarantees() {
  return (
    <section className="bg-black text-white py-32 overflow-hidden">
      <div className="container mx-auto max-w-5xl px-6 relative">

        {/* Top Visual Section */}
        <MatrixLock />

        {/* Headings */}
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-3xl font-bold mb-4">A Protocol of Pure Truth</h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            The only court where code guarantees fairness. No biased arbitrators, just math.
          </p>
        </div>

        {/* The Crosshair Feature Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">

          {/* Desktop Crosshair Lines (Absolute Positioned) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-gray-800 -translate-x-1/2" />
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-gray-800 -translate-y-1/2" />
            {/* Center Plus Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary bg-black p-1">
              <Plus className="size-6" />
            </div>
          </div>

          {/* Feature 1: Random Selection */}
          <div className="p-8 md:p-12 md:pr-16 md:pb-16 border-b border-dashed border-gray-800 md:border-none">
            <Shuffle className="size-8 text-primary mb-6" />
            <h3 className="text-lg font-bold mb-3">Random VRF Selection</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Jurors are selected cryptographically. No one controls the court or the outcome.
            </p>
          </div>

          {/* Feature 2: On-Chain Execution */}
          <div className="p-8 md:p-12 md:pl-16 md:pb-16 border-b border-dashed border-gray-800 md:border-none">
            <Gavel className="size-8 text-primary mb-6" />
            <h3 className="text-lg font-bold mb-3">On-Chain Execution</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Rulings are final. Smart contracts execute the verdict and transfers automatically.
            </p>
          </div>

          {/* Feature 3: Commit-Reveal */}
          <div className="p-8 md:p-12 md:pr-16 md:pt-16 border-b border-dashed border-gray-800 md:border-none">
            <div className="flex items-center gap-1 mb-6 text-primary">
              <EyeOff className="size-8" />
            </div>
            <h3 className="text-lg font-bold mb-3">Commit-Reveal Voting</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Prevents herd behavior. You win by being honest to the truth, not by following the crowd.
            </p>
          </div>

          {/* Feature 4: Appeals */}
          <div className="p-8 md:p-12 md:pl-16 md:pt-16">
            <Scale className="size-8 text-primary mb-6" />
            <h3 className="text-lg font-bold mb-3">Scalable Appeals</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Disputes can be appealed to a larger jury, ensuring accuracy scales with stakes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
