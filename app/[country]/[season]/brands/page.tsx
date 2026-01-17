"use client";

import { use, useState, useMemo } from "react";
import SeasonSelector from "@/components/SeasonSelector";
import FilterChips from "@/components/FilterChips";
import { brands, type Brand } from "@/data/brands";

type PageProps = {
  params: Promise<{ country: string; season: string }>;
};

export default function BrandsPage({ params }: PageProps) {
  const { country, season } = use(params);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  const industries = ["All", "Energy", "Sportswear", "Technology", "Food & Beverage"];

  const filteredBrands = useMemo(() => {
    return brands.filter((brand) => {
      const matchesSearch = brand.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesIndustry =
        selectedIndustry === "All" || brand.industry === selectedIndustry;
      return matchesSearch && matchesIndustry;
    });
  }, [searchQuery, selectedIndustry]);

  // Demo matched creators
  const matchedCreators = [
    { id: "c1", name: "Creator One", match: "92%" },
    { id: "c2", name: "Creator Two", match: "87%" },
    { id: "c3", name: "Creator Three", match: "81%" },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      {/* Header Section */}
      <div className="mb-12 space-y-6">
        {/* Title and Season Selector */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Brands
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-300">
              Explore the Brand Portal: a discovery and matching interface for
              global brands seeking creator partnerships. This demonstration
              showcases brand profiles, collaboration opportunities, and
              alignment tools for season-specific campaigns.
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
            placeholder="Search brands by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-5 py-3 text-base text-white placeholder-zinc-500 transition-colors focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        </div>

        {/* Industry Filter */}
        <div>
          <FilterChips
            options={industries}
            value={selectedIndustry}
            onChange={setSelectedIndustry}
          />
        </div>
      </div>

      {/* Results */}
      {filteredBrands.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Brand List */}
          <div className="space-y-4 lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {filteredBrands.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => setSelectedBrand(brand)}
                  className={`group rounded-2xl border-2 bg-zinc-900 p-6 text-left shadow-lg transition-all duration-300 hover:border-zinc-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/30 ${
                    selectedBrand?.id === brand.id
                      ? "border-white"
                      : "border-zinc-800"
                  }`}
                >
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold tracking-tight text-white">
                      {brand.name}
                    </h3>
                    <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                      {brand.industry}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Matching Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 rounded-2xl border-2 border-zinc-800 bg-zinc-900 p-6 shadow-xl">
              {selectedBrand ? (
                <div className="space-y-6">
                  {/* Selected Brand Info */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      {selectedBrand.name}
                    </h3>
                    <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                      {selectedBrand.industry}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-zinc-800" />

                  {/* Matched Creators */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                      Matched Creators (Demo)
                    </h4>
                    <div className="space-y-3">
                      {matchedCreators.map((creator) => (
                        <div
                          key={creator.id}
                          className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-3"
                        >
                          <span className="text-sm font-semibold text-white">
                            {creator.name}
                          </span>
                          <span className="text-xs font-bold text-cyan-400">
                            {creator.match}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Request Intro Button */}
                  <button
                    disabled
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-5 py-3 text-sm font-bold uppercase tracking-wider text-zinc-500 transition-all cursor-not-allowed"
                  >
                    Request Intro (Demo)
                  </button>
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-base font-medium text-zinc-400">
                    Select a brand to preview matching
                  </p>
                  <p className="mt-2 text-sm text-zinc-600">
                    Click any brand to see potential creator matches
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-12 text-center">
          <p className="text-lg font-medium text-zinc-400">No brands found</p>
          <p className="mt-2 text-sm text-zinc-500">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}

