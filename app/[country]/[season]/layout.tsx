import Header from "@/components/Header";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ country: string; season: string }>;
};

export default async function SeasonLayout({ children, params }: LayoutProps) {
  const { country, season } = await params;

  return (
    <div className="flex min-h-full flex-1 flex-col bg-neutral-950 text-neutral-100">
      <Header country={country} season={season} />
      <main className="flex-1">{children}</main>
    </div>
  );
}
