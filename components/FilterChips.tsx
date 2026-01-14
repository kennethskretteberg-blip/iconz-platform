interface FilterChipsProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function FilterChips({
  options,
  value,
  onChange,
}: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-3" role="group" aria-label="Filter options">
      {options.map((option) => {
        const isSelected = value === option;
        return (
          <button
            key={option}
            onClick={() => onChange(option)}
            aria-pressed={isSelected}
            className={`
              rounded-full border px-5 py-2 text-sm font-bold uppercase tracking-wider
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-zinc-950
              ${
                isSelected
                  ? "border-white bg-white text-zinc-900 shadow-lg"
                  : "border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800/80 hover:text-zinc-200"
              }
            `}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
