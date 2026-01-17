import Link from "next/link";

type HeaderProps = {
  country?: string;
  season?: string;
};

export default function Header({ country = "norway", season = "season-1" }: HeaderProps) {
  return (
    <header className="border-b border-neutral-800/80 bg-neutral-950/60 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-baseline gap-3">
            <Link href="/" className="text-sm tracking-wide text-neutral-400 hover:text-neutral-200 transition-colors">
              ICONZ
            </Link>
            <span className="text-sm text-neutral-500">/</span>
            <span className="text-sm text-neutral-300">
              {country.toUpperCase()} • {season}
            </span>
          </div>

          <nav className="flex items-center gap-3 text-sm text-neutral-300">
            <Link className="hover:text-neutral-100" href="/">
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
            <Link className="hover:text-neutral-100" href={`/${country}/${season}/me`}>
              My Profile
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
