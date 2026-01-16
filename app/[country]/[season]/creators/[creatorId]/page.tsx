import Link from "next/link";
import { creators } from "@/data/creators";

type PageProps = {
  params: { country: string; season: string; creatorId: string };
};

export default function CreatorProfilePage({ params }: PageProps) {
  const { country, season, creatorId } = params;

  const creator = creators.find((c) => c.id === creatorId);

  if (!creator) {
    return (
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-10">
          <h1 className="text-2xl font-semibold tracking-tight">Creator not found</h1>
          <p className="mt-3 text-neutral-300">
            No creator with id <span className="text-neutral-100">{creatorId}</span>.
          </p>

          <div className="mt-8">
            <Link
              className="text-sm text-neutral-300 hover:text-neutral-100"
              href={`/${country}/${season}/creators`}
            >
              ← Back to creators
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-8">
        <Link
          className="text-sm text-neutral-300 hover:text-neutral-100"
          href={`/${country}/${season}/creators`}
        >
          ← Back to creators
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-neutral-800 bg-neutral-950/60 p-10">
          <p className="text-sm tracking-wide text-neutral-400">Creator Profile</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">{creator.name}</h1>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-neutral-800 px-3 py-1 text-neutral-300">
              Category: <span className="text-neutral-100">{creator.category}</span>
            </span>
            <span className="rounded-full border border-neutral-800 px-3 py-1 text-neutral-300">
              Rarity: <span className="text-neutral-100">{creator.rarity}</span>
            </span>
          </div>

          <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-950 p-10 text-neutral-300">
            Skeleton profile content. Next: stats, card variants, ranking, and CTA modules.
          </div>
        </div>

        <aside className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-10">
          <p className="text-sm tracking-wide text-neutral-400">Context</p>
          <div className="mt-4 space-y-2 text-sm text-neutral-300">
            <div>
              Country: <span className="text-neutral-100">{country}</span>
            </div>
            <div>
              Season: <span className="text-neutral-100">{season}</span>
            </div>
            <div>
              ID: <span className="text-neutral-100">{creatorId}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
