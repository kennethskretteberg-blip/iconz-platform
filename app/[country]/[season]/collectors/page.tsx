"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import SeasonSelector from "@/components/SeasonSelector";
import FilterChips from "@/components/FilterChips";
import { collectors } from "@/data/collectors";

export default function CollectorsPage() {
  const params = useParams<{ country: string; season: string }>();

  // useParams kan i noen tilfeller gi string | string[]
  const country = Array.isArray(params.country) ? params.country[0] : params.country;
  const season = Array.isArray(params.season) ? params.season[0] : params.season;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const levels = ["All", "Rookie", "Active", "Elite"];

  const filteredCollectors = useMemo(() => {
    return collectors.filter((collector) => {
      const matchesSearch = collector.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesLevel =
        selectedLevel === "All" || collector.level === selectedLevel;
      return matchesSearch && matchesLevel;
    });
  }, [searchQuery, selectedLevel]);

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      {/* Header Section */}
      <div className="mb-12 space-y-6">
        {/* Title and Season Selector */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Collectors
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-300">
              Browse the public collector directory and community showcase.
              View digital collections, verified card inventories, and
              collector profiles. This demonstration highlights the social and
              discovery features of the ICONZ platform.
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

      {/* Search and Filter Section */}
      <div className="mb-10 space-y-6">
        {/* Search Input */}
        <div>
          <input
            type="text"
            placeholder="Search collectors by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-5 py-3 text-base text-white placeholder-zinc-500 transition-colors focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        </div>

        {/* Level Filter */}
        <div>
          <FilterChips
            options={levels}
            value={selectedLevel}
            onChange={setSelectedLevel}
          />
        </div>
      </div>

      {/* Results */}
      {filteredCollectors.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCollectors.map((collector) => (
            <Link
              key={collector.id}
              href={`/${country}/${season}/collectors/${collector.id}`}
              className="block rounded-2xl border-2 border-zinc-800 bg-zinc-900 p-6 shadow-lg transition-all duration-300 hover:border-zinc-600 hover:shadow-2xl focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <article className="space-y-3">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {collector.name}
                </h3>
                <div className="flex items-center gap-3">
                  <p className="text-sm font-medium text-zinc-400">
                    {collector.country}
                  </p>
                  <span className="text-zinc-700">•</span>
                  <span
                    className={`text-sm font-bold uppercase tracking-wider ${
                      collector.level === "Elite"
                        ? "text-cyan-400"
                        : collector.level === "Active"
                        ? "text-purple-400"
                        : "text-zinc-400"
                    }`}
                  >
                    {collector.level}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-12 text-center">
          <p className="text-lg font-medium text-zinc-400">
            No collectors found
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}


