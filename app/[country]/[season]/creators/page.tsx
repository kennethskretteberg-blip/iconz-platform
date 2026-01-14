"use client";

import { useState } from "react";
import Link from "next/link";
import { creators } from "@/data/creators";
import CreatorCard from "@/components/CreatorCard";
import FilterChips from "@/components/FilterChips";

type Rarity = "All" | "Base" | "Foil" | "Holo";

type PageProps = {
  params: { country: string; season: string };
};

export default function CreatorsPage({ params }: PageProps) {
  const { country, season } = params;
  const [selectedRarity, setSelectedRarity] = useState<Rarity>("All");

  const filteredCreators =
    selectedRarity === "All"
      ? creators
      : creators.filter((creator) => creator.rarity === selectedRarity);

  const rarities: Rarity[] = ["All", "Base", "Foil", "Holo"];

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Creators</h1>
      <p className="mt-3 text-neutral-300">
        Country: <span className="text-neutral-100">{country}</span> · Season:{" "}
        <span className="text-neutral-100">{season}</span>
      </p>

      {/* Rarity Filter */}
      <div className="mt-8">
        <FilterChips
          options={rarities}
          value={selectedRarity}
          onChange={(value) => setSelectedRarity(value as Rarity)}
        />
      </div>

      {/* Creator Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
