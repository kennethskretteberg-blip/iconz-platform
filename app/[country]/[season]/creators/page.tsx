"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { creators } from "@/data/creators";
import CreatorCard from "@/components/CreatorCard";
import FilterChips from "@/components/FilterChips";
import SeasonSelector from "@/components/SeasonSelector";

type Rarity = "All" | "Base" | "Foil" | "Holo";

export default function CreatorsPage() {
  const params = useParams<{ country: string; season: string }>();

// useParams may return string | string[]
  const country = Array.isArray(params.country) ? params.country[0] : params.country;
  const season = Array.isArray(params.season) ? params.season[0] : params.season;
  const [selectedRarity, setSelectedRarity] = useState<Rarity>("All");

  const filteredCreators =
    selectedRarity === "All"
      ? creators
      : creators.filter((creator) => creator.rarity === selectedRarity);

  const rarities: Rarity[] = ["All", "Base", "Foil", "Holo"];

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      {/* Header Section */}
      <div className="mb-12 space-y-6">
        {/* Title and Season Selector */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Creators
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-300">
              ICONZ connects premium physical trading cards with digital
              collectibles, enabling brand-matched collaborations between
              creators and global brands. Each season features exclusive cards
              with verified authenticity and rarity tiers.
            </p>
          </div>

          <div className="shrink-0">
            <SeasonSelector />
          </div>
        </div>

        {/* Route Context Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            Current:
          </span>
          <span className="rounded-full border border-zinc-700 bg-zinc-900/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-300">
            {country}
          </span>
          <span className="rounded-full border border-zinc-700 bg-zinc-900/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-300">
            {season}
          </span>
        </div>
      </div>

      {/* Rarity Filter */}
      <div className="mb-10">
        <FilterChips
          options={rarities}
          value={selectedRarity}
          onChange={(value) => setSelectedRarity(value as Rarity)}
        />
      </div>

      {/* Creator Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCreators.map((creator) => (
          <Link
            key={creator.id}
            href={`/${country}/${season}/creators/${creator.id}`}
            className="block rounded-2xl transition-all hover:ring-2 hover:ring-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <CreatorCard creator={creator} />
          </Link>
        ))}
      </div>
    </div>
  );
}
