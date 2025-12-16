import { WalletMinimal } from "lucide-react";

const walletPartners = ["Coinbase", "Ledger", "Safe", "Rabby", "Rainbow", "WalletConnect"];

export function Wallets() {
  return (
    <section className="bg-[#f5f7f9] py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold text-[#0d1a12]">Compatible with whatever wallet you use</h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {walletPartners.map((wallet) => (
              <div
                key={wallet}
                className="flex items-center gap-2 rounded-full border border-[#dce2ea] bg-white px-4 py-2 text-sm font-semibold text-[#0d1a12]"
              >
                <WalletMinimal className="h-4 w-4 text-[#00c86b]" />
                {wallet}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
