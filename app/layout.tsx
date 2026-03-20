import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viabostad",
  description: "Modern bostadsplattform för säljare och mäklare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="bg-white text-gray-900">
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold">
              Viabostad
            </Link>

            <nav className="hidden gap-6 md:flex">
              <Link href="/annonsera" className="text-sm text-gray-700 hover:text-black">
                Bostäder
              </Link>
              <Link href="/for-maklare" className="text-sm text-gray-700 hover:text-black">
                För mäklare
              </Link>
              <Link href="/om-oss" className="text-sm text-gray-700 hover:text-black">
                Om oss
              </Link>
              <Link href="/kontakt" className="text-sm text-gray-700 hover:text-black">
                Kontakt
              </Link>
            </nav>

            <div className="flex gap-3">
              <Link
                href="/kontakt"
                className="rounded-xl border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
              >
                Logga in
              </Link>
              <Link
                href="/bostader"
                className="rounded-xl bg-black px-4 py-2 text-sm text-white hover:opacity-90"
              >
                Annonsera bostad
              </Link>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
