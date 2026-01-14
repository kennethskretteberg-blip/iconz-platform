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
    <html lang="en">
<body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
  {children}
</body>
    </html>
  );
}
