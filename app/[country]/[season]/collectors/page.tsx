import SeasonSelector from "@/components/SeasonSelector";

type PageProps = {
  params: Promise<{ country: string; season: string }>;
};

export default async function CollectorsPage({ params }: PageProps) {
  const { country, season } = await params;

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

      {/* Skeleton Content */}
      <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-10 text-neutral-300">
        Skeleton page. Next: collector directory + collection view.
      </div>
    </div>
  );
}

