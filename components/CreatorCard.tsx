import type { Creator } from "@/data/creators";

interface CreatorCardProps {
  creator: Creator;
}

const RARITY_STYLES = {
  Base: "border-zinc-700/80 shadow-zinc-900/60",
  Foil: "border-purple-500/50 shadow-purple-800/40 shadow-2xl",
  Holo: "border-cyan-400/50 shadow-cyan-800/40 shadow-2xl",
};

const RARITY_BADGE_STYLES = {
  Base: "bg-zinc-800 text-zinc-200 border-zinc-600/50",
  Foil: "bg-purple-950/80 text-purple-200 border-purple-500/40",
  Holo: "bg-cyan-950/80 text-cyan-200 border-cyan-400/40",
};

const RARITY_EFFECTS = {
  Base: null,
  Foil: (
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  ),
  Holo: (
    <>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-purple-500/5 to-pink-500/8 opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-cyan-400/5 via-transparent to-cyan-300/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </>
  ),
};

export default function CreatorCard({ creator }: CreatorCardProps) {
  return (
    <article
      className={`
        group relative overflow-hidden
        rounded-2xl border-2 bg-zinc-900
        shadow-xl transition-all duration-300
        hover:scale-[1.02] hover:shadow-2xl
        ${RARITY_STYLES[creator.rarity]}
      `}
    >
      {/* Rarity Effects Overlay */}
      {RARITY_EFFECTS[creator.rarity]}

      {/* Card Art Window */}
      <div className="relative aspect-[3/4] overflow-hidden border-b-2 border-zinc-800/50 bg-gradient-to-br from-zinc-800 to-zinc-900">
        {/* Inner Frame */}
        <div className="absolute inset-2 rounded-lg border border-zinc-700/30 bg-gradient-to-br from-zinc-800/50 to-zinc-900/80">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl font-black tracking-tighter text-zinc-700/40">
              {creator.name.charAt(0)}
            </span>
          </div>
        </div>

        {/* Foil Sheen Effect */}
        {creator.rarity === "Foil" && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-purple-300/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        )}
      </div>

      {/* Content Section */}
      <div className="relative space-y-3 p-6">
        {/* Name */}
        <h3 className="text-xl font-bold leading-tight tracking-tight text-white">
          {creator.name}
        </h3>

        {/* Category */}
        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
          {creator.category}
        </p>

        {/* Rarity Badge */}
        <div className="flex items-center pt-1">
          <span
            className={`
              inline-flex items-center rounded-full border px-3.5 py-1.5
              text-[10px] font-black uppercase tracking-[0.15em]
              shadow-sm transition-all
              ${RARITY_BADGE_STYLES[creator.rarity]}
            `}
          >
            {creator.rarity}
          </span>
        </div>
      </div>
    </article>
  );
}
