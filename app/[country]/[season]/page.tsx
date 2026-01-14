type PageProps = {
  params: Promise<{ country: string; season: string }>;
};

export default async function SeasonHomePage({ params }: PageProps) {
  const { country, season } = await params;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-10">
        <p className="text-sm tracking-wide text-neutral-400">ICONZ</p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight">
          {country.toUpperCase()} / {season}
        </h1>

        <p className="mt-4 max-w-2xl text-neutral-300">
          This is the locked route structure: /{`{country}`}/{`{season}`}/...
        </p>
      </div>
    </div>
  );
}
