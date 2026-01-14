export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-10">
          <p className="text-sm tracking-wide text-neutral-400">ICONZ</p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            Premium Creator Trading Cards + Digital Collection
          </h1>

          <p className="mt-4 max-w-2xl text-neutral-300">
            Prototype rebuild (V1.1). Dark premium baseline. Next: country/season routing,
            navigation shell, and creator card UI.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-300">
              /{`{country}`}/{`{season}`}/...
            </span>
            <span className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-300">
              Tailwind + App Router
            </span>
            <span className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-300">
              Neo-Luxe Dark
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
