"use client";

import { use } from "react";

type PageProps = {
  params: Promise<{ country: string; season: string }>;
};

// Mock data - replace with API/database in future versions
const MOCK_DATA = {
  printRun: 25000,
  activated: 3400,
  burned: 120,
};

export default function CountersPage({ params }: PageProps) {
  const { country, season } = use(params);

  const activatedPercentage = (MOCK_DATA.activated / MOCK_DATA.printRun) * 100;
  const burnedPercentage = (MOCK_DATA.burned / MOCK_DATA.printRun) * 100;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Season Counters
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
          Live metrics tracking card print runs, digital activations, and retail burns
          for the current season. Data updates as fans collect and retailers process cards.
        </p>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-sm font-medium text-neutral-300">
            {country.toUpperCase()}
          </span>
          <span className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-sm font-medium text-neutral-300">
            {season}
          </span>
        </div>
      </div>

      {/* Primary Metric Cards */}
      <div className="mb-12 grid gap-6 md:grid-cols-3">
        {/* Print Run */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-8 transition-colors hover:border-neutral-700">
          <div className="mb-4">
            <p className="text-sm font-medium text-neutral-400">Print Run</p>
            <p className="mt-2 text-5xl font-bold tracking-tight text-white">
              {MOCK_DATA.printRun.toLocaleString()}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-neutral-500">
            Total cards printed for this season
          </p>
        </div>

        {/* Activated Cards */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-8 transition-colors hover:border-neutral-700">
          <div className="mb-4">
            <p className="text-sm font-medium text-neutral-400">Activated Cards</p>
            <p className="mt-2 text-5xl font-bold tracking-tight text-white">
              {MOCK_DATA.activated.toLocaleString()}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-neutral-500">
            Cards added to digital collections
          </p>
        </div>

        {/* Burned Cards */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-8 transition-colors hover:border-neutral-700">
          <div className="mb-4">
            <p className="text-sm font-medium text-neutral-400">Burned Cards</p>
            <p className="mt-2 text-5xl font-bold tracking-tight text-white">
              {MOCK_DATA.burned.toLocaleString()}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-neutral-500">
            Cards burned at retail for rewards
          </p>
        </div>
      </div>

      {/* Progress Visualization */}
      <div className="mb-12 rounded-2xl border border-neutral-800 bg-neutral-950/60 p-8">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          Season Progress
        </h2>
        
        <div className="space-y-8">
          {/* Activated Progress */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-300">
                  Activation Rate
                </p>
                <p className="text-xs text-neutral-500">
                  Cards scanned and added to digital collections
                </p>
              </div>
              <p className="text-2xl font-bold text-white">
                {activatedPercentage.toFixed(1)}%
              </p>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-900">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all"
                style={{ width: `${activatedPercentage}%` }}
                role="progressbar"
                aria-valuenow={activatedPercentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Activation rate"
              />
            </div>
            <div className="flex items-center justify-between text-xs text-neutral-500">
              <span>{MOCK_DATA.activated.toLocaleString()} activated</span>
              <span>{(MOCK_DATA.printRun - MOCK_DATA.activated).toLocaleString()} remaining</span>
            </div>
          </div>

          {/* Burned Progress */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-300">
                  Burn Rate
                </p>
                <p className="text-xs text-neutral-500">
                  Cards burned at retail for XP conversion
                </p>
              </div>
              <p className="text-2xl font-bold text-white">
                {burnedPercentage.toFixed(1)}%
              </p>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-900">
              <div
                className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-500 transition-all"
                style={{ width: `${burnedPercentage}%` }}
                role="progressbar"
                aria-valuenow={burnedPercentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Burn rate"
              />
            </div>
            <div className="flex items-center justify-between text-xs text-neutral-500">
              <span>{MOCK_DATA.burned.toLocaleString()} burned</span>
              <span>{(MOCK_DATA.printRun - MOCK_DATA.burned).toLocaleString()} remaining</span>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Panel */}
      <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-8">
        <h2 className="mb-4 text-xl font-semibold text-white">
          Understanding the Counters
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-neutral-300">
          <div className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-950/40 text-blue-400">
              ✓
            </div>
            <div>
              <p className="font-medium text-white">Card Activation</p>
              <p className="mt-1 text-neutral-400">
                Fans scan the QR code on physical cards to add them to their digital collection.
                This activates the card and begins tracking its journey through the ICONZ ecosystem.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-950/40 text-red-400">
              🔥
            </div>
            <div>
              <p className="font-medium text-white">Card Burning</p>
              <p className="mt-1 text-neutral-400">
                Retailers and distributors burn physical cards at point of sale, generating
                unique redemption codes that convert cards into XP for fans to use across the platform.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-neutral-800/50 bg-neutral-950/40 p-4">
          <p className="text-xs text-neutral-500">
            <span className="font-medium text-neutral-400">Demo Data</span> —
            Values shown are mock data for prototype purposes. Production will show real-time metrics.
          </p>
        </div>
      </div>
    </div>
  );
}
