"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { collectors } from "@/data/collectors";
import { creators } from "@/data/creators";

// Mock counters data
const COUNTERS = {
  printRun: 25000,
  activated: 3400,
  burned: 120,
};

// Mock activity feed
const RECENT_ACTIVITY = [
  { id: 1, user: "Alex N.", action: "activated", item: "Creator #142", time: "2m ago" },
  { id: 2, user: "Maria L.", action: "collected", item: "Foil Edition", time: "5m ago" },
  { id: 3, user: "Jonas K.", action: "burned", item: "Card #891", time: "8m ago" },
];

export default function HomePage() {
  const activatedPercentage = (COUNTERS.activated / COUNTERS.printRun) * 100;
  const burnedPercentage = (COUNTERS.burned / COUNTERS.printRun) * 100;

  return (
    <div className="flex min-h-full flex-1 flex-col bg-neutral-950 text-neutral-100">
      <Header />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 space-y-24">
        
        {/* HERO SECTION */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm tracking-wide text-neutral-400">ICONZ</p>
              <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
                Premium Creator Trading Cards
              </h1>
            </div>
            <p className="text-lg leading-relaxed text-neutral-300">
              A digital platform connecting creators, collectors, and brands through
              limited-edition trading cards. Collect physical cards, activate them digitally,
              and join an exclusive community ecosystem.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="/norway/season-1/creators"
                className="rounded-lg border border-neutral-700 bg-neutral-800 px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-700"
              >
                Explore Creators
              </Link>
              <Link
                href="/norway/season-1/collectors"
                className="rounded-lg border border-neutral-800 bg-neutral-950/60 px-6 py-3 font-medium text-neutral-300 transition-colors hover:bg-neutral-900"
              >
                View Collectors
              </Link>
            </div>
          </div>

          {/* Right: Card Showcase */}
          <div className="relative h-96 flex items-center justify-center">
            {/* Card 1 - Gold Foil */}
            <div className="absolute left-0 top-8 z-10 h-72 w-48 rounded-2xl border border-yellow-800/50 bg-gradient-to-br from-yellow-900/40 via-yellow-700/30 to-yellow-900/40 shadow-2xl shadow-yellow-900/20 transition-transform hover:scale-105 hover:rotate-[-2deg]">
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-yellow-500/10 to-transparent p-6">
                <div className="mb-4 text-xs font-medium tracking-wide text-yellow-400">GOLD FOIL</div>
                <div className="mt-auto">
                  <div className="h-24 w-full rounded-lg bg-yellow-900/30"></div>
                </div>
              </div>
            </div>

            {/* Card 2 - Aurora/Holo */}
            <div className="absolute left-1/2 top-0 z-30 h-80 w-52 -translate-x-1/2 rounded-2xl border border-purple-800/50 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-pink-900/40 shadow-2xl shadow-purple-900/30 transition-transform hover:scale-110 hover:rotate-[2deg]">
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 p-6">
                <div className="mb-4 text-xs font-medium tracking-wide text-purple-300">AURORA EDITION</div>
                <div className="mt-auto">
                  <div className="h-28 w-full rounded-lg bg-purple-900/30"></div>
                </div>
              </div>
            </div>

            {/* Card 3 - Silver */}
            <div className="absolute right-0 top-12 z-20 h-72 w-48 rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-neutral-800/60 via-neutral-700/40 to-neutral-800/60 shadow-2xl shadow-neutral-900/40 transition-transform hover:scale-105 hover:rotate-[2deg]">
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-neutral-400/10 to-transparent p-6">
                <div className="mb-4 text-xs font-medium tracking-wide text-neutral-300">SILVER FOIL</div>
                <div className="mt-auto">
                  <div className="h-24 w-full rounded-lg bg-neutral-800/40"></div>
                </div>
              </div>
            </div>

            {/* Glow effects */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/20 blur-3xl"></div>
          </div>
        </div>

        {/* COUNTERS SECTION */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Season 1 Metrics</h2>
            <p className="text-neutral-400">Live tracking of card circulation and community engagement</p>
          </div>

          {/* KPI Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
              <p className="text-sm font-medium text-neutral-400">Print Run</p>
              <p className="mt-2 text-4xl font-bold text-white">{COUNTERS.printRun.toLocaleString()}</p>
              <p className="mt-2 text-xs text-neutral-500">Total cards printed</p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
              <p className="text-sm font-medium text-neutral-400">Activated</p>
              <p className="mt-2 text-4xl font-bold text-blue-400">{COUNTERS.activated.toLocaleString()}</p>
              <p className="mt-2 text-xs text-neutral-500">Cards in digital collections</p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
              <p className="text-sm font-medium text-neutral-400">Burned</p>
              <p className="mt-2 text-4xl font-bold text-red-400">{COUNTERS.burned.toLocaleString()}</p>
              <p className="mt-2 text-xs text-neutral-500">Cards burned for rewards</p>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="space-y-6 rounded-2xl border border-neutral-800 bg-neutral-950/60 p-8">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-300">Activation Rate</span>
                <span className="text-sm font-bold text-white">{activatedPercentage.toFixed(1)}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-900">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-500"
                  style={{ width: `${activatedPercentage}%` }}
                />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-300">Burn Rate</span>
                <span className="text-sm font-bold text-white">{burnedPercentage.toFixed(2)}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-900">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-500"
                  style={{ width: `${burnedPercentage}%` }}
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/norway/season-1/counters"
              className="inline-flex text-sm text-neutral-400 transition-colors hover:text-neutral-200"
            >
              View detailed counters →
            </Link>
          </div>
        </div>

        {/* COMMUNITY PREVIEW */}
        <div className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Community Ecosystem</h2>
            <p className="text-neutral-400">Connecting collectors and creators in a premium marketplace</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Collectors Preview */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Featured Collectors</h3>
              <div className="grid grid-cols-2 gap-3">
                {collectors.slice(0, 4).map((collector) => (
                  <div
                    key={collector.id}
                    className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-4 transition-colors hover:border-neutral-700"
                  >
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-lg font-bold text-neutral-300">
                      {collector.name.charAt(0)}
                    </div>
                    <p className="font-medium text-white">{collector.name}</p>
                    <p className="text-xs text-neutral-500">{collector.country}</p>
                    <span className="mt-2 inline-block rounded-full bg-neutral-800 px-2 py-1 text-xs text-neutral-400">
                      {collector.level}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/norway/season-1/collectors"
                className="inline-flex text-sm text-neutral-400 transition-colors hover:text-neutral-200"
              >
                View all collectors →
              </Link>
            </div>

            {/* Creators Preview */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Featured Creators</h3>
              <div className="grid grid-cols-2 gap-3">
                {creators.slice(0, 4).map((creator) => (
                  <div
                    key={creator.id}
                    className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-4 transition-colors hover:border-neutral-700"
                  >
                    <div className="mb-2 h-12 w-12 rounded-full bg-gradient-to-br from-purple-900/40 to-blue-900/40"></div>
                    <p className="font-medium text-white">{creator.name}</p>
                    <p className="text-xs text-neutral-500">{creator.category}</p>
                    <span className={`mt-2 inline-block rounded-full px-2 py-1 text-xs ${
                      creator.rarity === "Holo" ? "bg-purple-950/40 text-purple-400" :
                      creator.rarity === "Foil" ? "bg-yellow-950/40 text-yellow-400" :
                      "bg-neutral-800 text-neutral-400"
                    }`}>
                      {creator.rarity}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/norway/season-1/creators"
                className="inline-flex text-sm text-neutral-400 transition-colors hover:text-neutral-200"
              >
                Explore creators →
              </Link>
            </div>
          </div>

          {/* Live Activity */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Live Activity</h3>
            <div className="space-y-3">
              {RECENT_ACTIVITY.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between rounded-lg border border-neutral-800/50 bg-neutral-900/40 p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-neutral-800"></div>
                    <div>
                      <p className="text-sm text-neutral-200">
                        <span className="font-medium">{activity.user}</span> {activity.action} <span className="text-neutral-400">{activity.item}</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
            <p className="text-neutral-400">From physical card to digital rewards in four simple steps</p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {/* Step 1 */}
            <div className="space-y-4 rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-950/40 text-2xl font-bold text-blue-400">
                1
              </div>
              <h3 className="font-semibold text-white">Collect</h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Purchase premium creator trading cards from retailers
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-4 rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-950/40 text-2xl font-bold text-purple-400">
                2
              </div>
              <h3 className="font-semibold text-white">Activate</h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Scan QR code to add card to your digital collection
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-4 rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-950/40 text-2xl font-bold text-red-400">
                3
              </div>
              <h3 className="font-semibold text-white">Burn</h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Return physical card to retailer for XP conversion
              </p>
            </div>

            {/* Step 4 */}
            <div className="space-y-4 rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-950/40 text-2xl font-bold text-green-400">
                4
              </div>
              <h3 className="font-semibold text-white">Redeem</h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Use XP for rewards and exclusive content
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-950/60 to-neutral-900/40 p-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Ready to Start Collecting?</h2>
          <p className="mb-8 text-neutral-300">
            Explore the ICONZ ecosystem and join the community
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/norway/season-1/creators"
              className="rounded-lg border border-neutral-700 bg-neutral-800 px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-700"
            >
              Browse Creators
            </Link>
            <Link
              href="/norway/season-1/brands"
              className="rounded-lg border border-neutral-800 bg-neutral-950/60 px-8 py-3 font-medium text-neutral-300 transition-colors hover:bg-neutral-900"
            >
              Brand Portal
            </Link>
          </div>
        </div>

        </div>
      </main>
    </div>
  );
}
