import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ICONZ",
  description: "ICONZ prototype rebuild (V1.1) – premium neo-luxe dark baseline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-950">
      <body className="flex min-h-screen flex-col bg-neutral-950 text-neutral-100 antialiased">
        <div className="flex min-h-0 flex-1 flex-col bg-neutral-950">{children}</div>
        <footer className="border-t border-neutral-800/80 bg-neutral-950">
          <div className="mx-auto w-full max-w-6xl px-6 py-4">
            <div className="flex flex-col items-center gap-2 text-center text-sm text-neutral-300 sm:flex-row sm:justify-between sm:text-left">
              <div className="flex items-center gap-2">
                <span className="font-medium tracking-wide text-neutral-400">ICONZ</span>
                <span className="text-neutral-500">•</span>
                <span>© ICONZ 2026</span>
              </div>
              <div>
                <span className="text-neutral-400">Prototype / Demo – data is illustrative</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
