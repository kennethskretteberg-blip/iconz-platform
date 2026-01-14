type PageProps = {
  params: Promise<{ country: string; season: string }>;
};

export default async function CreatorsPage({ params }: PageProps) {
  const { country, season } = await params;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Creators</h1>
      <p className="mt-3 text-neutral-300">
        Country: <span className="text-neutral-100">{country}</span> · Season:{" "}
        <span className="text-neutral-100">{season}</span>
      </p>

      <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-950/60 p-10 text-neutral-300">
        Skeleton page. Next: creator card grid + profile routes.
      </div>
    </div>
  );
}
