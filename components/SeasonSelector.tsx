export default function SeasonSelector() {
  const seasons = [
    { id: "s1", label: "S1", status: "Live", active: true },
    { id: "s2", label: "S2", status: "Coming", active: false },
    { id: "s3", label: "S3", status: "Coming", active: false },
  ];

  return (
    <div className="inline-flex items-center gap-4">
      {/* Label */}
      <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
        Season
      </span>

      {/* Season Buttons */}
      <div className="flex items-center gap-2">
        {seasons.map((season) => (
          <button
            key={season.id}
            disabled={!season.active}
            aria-current={season.active ? "true" : undefined}
            className={`
              rounded-lg border px-4 py-2 text-sm font-bold transition-all
              ${
                season.active
                  ? "border-white bg-white text-zinc-900 shadow-lg"
                  : "cursor-not-allowed border-zinc-800 bg-zinc-900/30 text-zinc-600"
              }
            `}
          >
            <span className="block">{season.label}</span>
            <span
              className={`block text-[10px] font-semibold uppercase tracking-wider ${
                season.active ? "text-zinc-600" : "text-zinc-700"
              }`}
            >
              {season.status}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
