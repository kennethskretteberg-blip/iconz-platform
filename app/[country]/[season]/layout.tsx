import Link from "next/link";
type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ country: string; season: string }>;
};

export default async function SeasonLayout({ children, params }: LayoutProps) {
  const { country, season } = await params;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="border-b border-neutral-800/80 bg-neutral-950/60 backdrop-blur">
        <div className="mx-auto w-full max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-baseline gap-3">
              <span className="text-sm tracking-wide text-neutral-400">ICONZ</span>
              <span className="text-sm text-neutral-500">/</span>
              <span className="text-sm text-neutral-300">
                {country.toUpperCase()} • {season}
              </span>
            </div>

<nav className="flex items-center gap-3 text-sm text-neutral-300">
  <Link className="hover:text-neutral-100" href={`/${country}/${season}`}>
    Home
  </Link>
  <Link className="hover:text-neutral-100" href={`/${country}/${season}/creators`}>
    Creators
  </Link>
  <Link className="hover:text-neutral-100" href={`/${country}/${season}/collectors`}>
    Collectors
  </Link>
  <Link className="hover:text-neutral-100" href={`/${country}/${season}/brands`}>
    Brands
  </Link>
  <Link className="hover:text-neutral-100" href={`/${country}/${season}/retailer`}>
    Retailer
  </Link>
</nav>

          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
