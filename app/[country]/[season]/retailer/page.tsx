"use client";

import { use, useState } from "react";

type PageProps = {
  params: Promise<{ country: string; season: string }>;
};

type BurnRecord = {
  id: string;
  serialCode: string;
  redemptionCode: string;
  timestamp: string;
};

export default function RetailerPage({ params }: PageProps) {
  const { country, season } = use(params);
  
  // Mock retailer/distributor info
  const retailerName = "Power AS";
  const storeId = "PWR-OSL-001";
  const location = "Oslo, Norway";
  const userEmail = "staff@power.no";
  
  // Burn workflow state
  const [serialInput, setSerialInput] = useState("");
  const [inputError, setInputError] = useState("");
  const [currentBurn, setCurrentBurn] = useState<BurnRecord | null>(null);
  const [burnHistory, setBurnHistory] = useState<BurnRecord[]>([]);
  const [copySuccess, setCopySuccess] = useState(false);

  const generateRedemptionCode = (): string => {
    const segment1 = Math.random().toString(36).substring(2, 6).toUpperCase();
    const segment2 = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `ICONZ-${segment1}-${segment2}`;
  };

  const maskSerial = (code: string): string => {
    if (code.length <= 4) return code;
    return "•".repeat(code.length - 4) + code.slice(-4);
  };

  const handleConfirmBurn = () => {
    const serial = serialInput.trim();
    
    if (!serial) {
      setInputError("Serial code is required");
      return;
    }
    
    if (serial.length < 6) {
      setInputError("Serial code must be at least 6 characters");
      return;
    }

    setInputError("");

    const burnRecord: BurnRecord = {
      id: Date.now().toString(),
      serialCode: serial,
      redemptionCode: generateRedemptionCode(),
      timestamp: new Date().toLocaleString(),
    };

    setCurrentBurn(burnRecord);
    setBurnHistory((prev) => [burnRecord, ...prev].slice(0, 5)); // Keep last 5
    setSerialInput("");
  };

  const handleBurnAnother = () => {
    setCurrentBurn(null);
    setSerialInput("");
    setInputError("");
    setCopySuccess(false);
  };

  const handleCopyRedemptionCode = async () => {
    if (currentBurn) {
      try {
        await navigator.clipboard.writeText(currentBurn.redemptionCode);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  const handleScanButton = () => {
    // Placeholder - in production would open camera/QR scanner
    const demoCode = `CARD-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    setSerialInput(demoCode);
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Distributor Portal
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
          Burn cards at retail to activate fan rewards
        </p>
        <div className="flex items-center gap-2 text-sm text-neutral-400">
          <span>{country.toUpperCase()}</span>
          <span>•</span>
          <span>{season}</span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Main Workflow */}
        <div className="space-y-6 lg:col-span-2">
          {/* Retailer Info Card */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
            <h2 className="mb-4 text-sm font-medium text-neutral-400">
              Retailer Information
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs text-neutral-500">Retailer Name</p>
                <p className="mt-1 font-semibold text-white">{retailerName}</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500">Store ID</p>
                <p className="mt-1 font-mono text-sm text-neutral-300">{storeId}</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500">Location</p>
                <p className="mt-1 text-sm text-neutral-300">{location}</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500">Signed in as</p>
                <p className="mt-1 text-sm text-neutral-300">{userEmail}</p>
              </div>
            </div>
          </div>

          {!currentBurn ? (
            /* Burn Workflow Card */
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-8">
              <h2 className="mb-6 text-xl font-semibold text-white">
                Burn Card
              </h2>

              <div className="space-y-6">
                {/* Scan Section */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-neutral-300">
                    Scan QR Code
                  </label>
                  <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-neutral-800 bg-neutral-900/40 p-8">
                    <button
                      onClick={handleScanButton}
                      disabled
                      className="rounded-lg border border-neutral-800 bg-neutral-900 px-6 py-3 font-medium text-neutral-500 cursor-not-allowed"
                    >
                      📷 Scan (Prototype)
                    </button>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Camera scanning disabled in prototype
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-neutral-800"></div>
                  <span className="text-xs text-neutral-500">or enter serial manually</span>
                  <div className="h-px flex-1 bg-neutral-800"></div>
                </div>

                {/* Manual Input Section */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-neutral-300">
                    Card Serial / QR Code
                  </label>
                  <input
                    type="text"
                    value={serialInput}
                    onChange={(e) => {
                      setSerialInput(e.target.value);
                      setInputError("");
                    }}
                    placeholder="Enter card serial number"
                    className={`w-full rounded-lg border bg-neutral-900 px-4 py-2.5 font-mono text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:ring-1 ${
                      inputError
                        ? "border-red-800 focus:border-red-700 focus:ring-red-700"
                        : "border-neutral-800 focus:border-neutral-600 focus:ring-neutral-600"
                    }`}
                  />
                  {inputError && (
                    <p className="text-xs text-red-400">{inputError}</p>
                  )}
                </div>

                {/* Confirm Burn Button */}
                <button
                  onClick={handleConfirmBurn}
                  disabled={!serialInput.trim()}
                  className="w-full rounded-lg border border-red-900/50 bg-red-950/40 px-4 py-3 font-semibold text-red-400 transition-colors hover:bg-red-950/60 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-red-950/40"
                >
                  🔥 Confirm Burn
                </button>
              </div>
            </div>
          ) : (
            /* Burn Result / Redemption Code */
            <div className="rounded-2xl border border-green-900/50 bg-green-950/20 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900/40 text-green-400">
                  ✓
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    Burn Successful
                  </h2>
                  <p className="text-sm text-neutral-400">{currentBurn.timestamp}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-4">
                  <p className="text-xs text-neutral-500">Card Serial (Masked)</p>
                  <p className="mt-1 font-mono text-sm text-neutral-300">
                    {maskSerial(currentBurn.serialCode)}
                  </p>
                </div>

                <div className="rounded-lg border border-green-900/50 bg-green-950/30 p-4">
                  <p className="text-xs text-green-400">Redemption Code</p>
                  <p className="mt-2 font-mono text-2xl font-bold text-white">
                    {currentBurn.redemptionCode}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    onClick={handleCopyRedemptionCode}
                    className="rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2.5 font-medium text-white transition-colors hover:bg-neutral-700"
                  >
                    {copySuccess ? "✓ Copied!" : "📋 Copy Code"}
                  </button>
                  <button
                    onClick={handleBurnAnother}
                    className="rounded-lg border border-neutral-800 bg-neutral-950/60 px-4 py-2.5 font-medium text-neutral-300 transition-colors hover:bg-neutral-900"
                  >
                    Burn Another Card
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Activity Log */}
          {burnHistory.length > 0 && (
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-8">
              <h2 className="mb-4 text-xl font-semibold text-white">
                Recent Activity
              </h2>
              <div className="space-y-2">
                {burnHistory.map((record) => (
                  <div
                    key={record.id}
                    className="flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-900/40 p-4"
                  >
                    <div className="flex-1">
                      <p className="font-mono text-sm text-neutral-300">
                        {maskSerial(record.serialCode)}
                      </p>
                      <p className="mt-1 text-xs text-neutral-500">
                        {record.timestamp}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-green-400">
                        {record.redemptionCode}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Explanation */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
            <h3 className="mb-4 text-sm font-medium text-neutral-400">
              How It Works
            </h3>
            <div className="space-y-3 text-sm text-neutral-300">
              <p>
                When you burn a card, a unique redemption code is generated for the customer.
              </p>
              <p>
                The customer uses this code in the ICONZ app to convert their physical card into digital XP.
              </p>
              <p>
                This XP is usable throughout the ICONZ ecosystem for rewards, collectibles, and exclusive content.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-neutral-800/50 bg-neutral-950/40 p-4">
            <p className="text-xs text-neutral-500">
              <span className="font-medium text-neutral-400">Demo Mode</span> —
              No real scanning, database, or backend. Session data only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
