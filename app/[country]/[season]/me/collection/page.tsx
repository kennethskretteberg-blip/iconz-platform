"use client";

import { use } from "react";
import Link from "next/link";

type PageProps = {
  params: Promise<{ country: string; season: string }>;
};

type Card = {
  id: string;
  name: string;
  rarity: "Base" | "Foil" | "Holo";
  category: string;
  owned: boolean;
};

// Mock collection data
const MOCK_CARDS: Card[] = [
  { id: "1", name: "Creator One", rarity: "Base", category: "Gaming", owned: true },
  { id: "2", name: "Creator Two", rarity: "Foil", category: "Lifestyle", owned: true },
  { id: "3", name: "Creator Three", rarity: "Holo", category: "Sports", owned: true },
  { id: "4", name: "Creator Four", rarity: "Base", category: "Music", owned: true },
  { id: "5", name: "Creator Five", rarity: "Foil", category: "Gaming", owned: false },
  { id: "6", name: "Creator Six", rarity: "Base", category: "Tech", owned: true },
  { id: "7", name: "Creator Seven", rarity: "Holo", category: "Fashion", owned: false },
  { id: "8", name: "Creator Eight", rarity: "Base", category: "Food", owned: true },
  { id: "9", name: "Creator Nine", rarity: "Foil", category: "Travel", owned: false },
  { id: "10", name: "Creator Ten", rarity: "Base", category: "Sports", owned: true },
  { id: "11", name: "Creator Eleven", rarity: "Holo", category: "Gaming", owned: false },
  { id: "12", name: "Creator Twelve", rarity: "Base", category: "Lifestyle", owned: true },
  { id: "13", name: "Creator Thirteen", rarity: "Foil", category: "Music", owned: false },
  { id: "14", name: "Creator Fourteen", rarity: "Base", category: "Tech", owned: false },
  { id: "15", name: "Creator Fifteen", rarity: "Holo", category: "Fashion", owned: false },
  { id: "16", name: "Creator Sixteen", rarity: "Base", category: "Food", owned: true },
];

export default function MyCollectionPage({ params }: PageProps) {
  const { country, season } = use(params);
  
  const ownedCards = MOCK_CARDS.filter(card => card.owned);
  const totalCards = MOCK_CARDS.length;
  const completionPercentage = (ownedCards.length / totalCards) * 100;

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Holo":
        return "from-purple-900/40 via-blue-900/40 to-pink-900/40";
      case "Foil":
        return "from-yellow-900/40 via-yellow-700/30 to-yellow-900/40";
      default:
        return "from-neutral-800/60 via-neutral-700/40 to-neutral-800/60";
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case "Holo":
        return "border-purple-800/50";
      case "Foil":
        return "border-yellow-800/50";
      default:
        return "border-neutral-700/50";
    }
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-12 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            My Collection
          </h1>
          <Link
            href={`/${country}/${season}/me`}
            className="text-sm text-neutral-400 transition-colors hover:text-neutral-200"
          >
            ← Back to Profile
          </Link>
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
          Your digital card binder for {season}. Cards are activated via QR when added to your collection.
        </p>
      </div>

      {/* Collection Stats */}
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
          <p className="text-sm font-medium text-neutral-400">Cards Owned</p>
          <p className="mt-2 text-4xl font-bold text-white">{ownedCards.length}</p>
          <p className="mt-2 text-xs text-neutral-500">out of {totalCards} total</p>
        </div>
        
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
          <p className="text-sm font-medium text-neutral-400">Completion</p>
          <p className="mt-2 text-4xl font-bold text-white">{completionPercentage.toFixed(0)}%</p>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-900">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
        
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
          <p className="text-sm font-medium text-neutral-400">Rarest Card</p>
          <p className="mt-2 text-2xl font-bold text-purple-400">Holo Edition</p>
          <p className="mt-2 text-xs text-neutral-500">Most valuable rarity</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button className="rounded-full border border-neutral-700 bg-neutral-800 px-4 py-2 text-sm font-medium text-white">
          All Cards
        </button>
        <button className="rounded-full border border-neutral-800 bg-neutral-950/40 px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-neutral-700 hover:text-neutral-300">
          Owned Only
        </button>
        <button className="rounded-full border border-neutral-800 bg-neutral-950/40 px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-neutral-700 hover:text-neutral-300">
          Missing
        </button>
      </div>

      {/* Card Binder Grid */}
      <div className="mb-8 rounded-2xl border border-neutral-800 bg-neutral-950/60 p-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {MOCK_CARDS.map((card) => (
            <div
              key={card.id}
              className={`group relative aspect-[2/3] overflow-hidden rounded-xl border transition-all ${
                card.owned
                  ? `${getRarityBorder(card.rarity)} bg-gradient-to-br ${getRarityColor(card.rarity)} hover:scale-105`
                  : "border-neutral-800/50 bg-neutral-900/20"
              }`}
            >
              {card.owned ? (
                <div className="flex h-full flex-col justify-between p-4">
                  <div>
                    <span className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${
                      card.rarity === "Holo" ? "bg-purple-950/40 text-purple-400" :
                      card.rarity === "Foil" ? "bg-yellow-950/40 text-yellow-400" :
                      "bg-neutral-800/60 text-neutral-400"
                    }`}>
                      {card.rarity}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">{card.category}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{card.name}</p>
                    <p className="mt-1 text-xs text-neutral-500">#{card.id}</p>
                  </div>
                </div>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-12 w-12 rounded-full border-2 border-dashed border-neutral-800"></div>
                    <p className="text-xs text-neutral-600">Not Owned</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
          <h3 className="mb-3 text-lg font-semibold text-white">
            How to Add Cards
          </h3>
          <div className="space-y-2 text-sm text-neutral-300">
            <p>1. Purchase physical creator cards from retailers</p>
            <p>2. Scan the QR code on the back of the card</p>
            <p>3. Card is instantly added to your digital collection</p>
            <p>4. View and manage all your cards in this binder</p>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
          <h3 className="mb-3 text-lg font-semibold text-white">
            Collection Benefits
          </h3>
          <div className="space-y-2 text-sm text-neutral-300">
            <p>• Track your complete card collection</p>
            <p>• Showcase rare and exclusive cards</p>
            <p>• Earn XP by burning cards at retailers</p>
            <p>• Unlock rewards as you collect more</p>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="mt-6 rounded-lg border border-neutral-800/50 bg-neutral-950/40 p-4">
        <p className="text-xs text-neutral-500">
          <span className="font-medium text-neutral-400">Demo Collection</span> —
          Cards shown are mock data. Production will display your actual activated cards from QR scans.
        </p>
      </div>
    </div>
  );
}
