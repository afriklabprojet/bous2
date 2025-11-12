import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Transport et Bois de Chauffage JSGC | Livraison de bois au Québec",
  description:
    "Entreprise de transport et de vente de bois de chauffage à Ferland-et-Boilleau. Livraison rapide et fiable dans tout le Québec.",
  keywords: [
    "bois de chauffage",
    "transport",
    "livraison",
    "Québec",
    "Saguenay",
    "JSGC",
  ],
  authors: [{ name: "JSGC" }],
  openGraph: {
    title: "Transport et Bois de Chauffage JSGC",
    description: "Votre partenaire énergie au Québec",
    type: "website",
    locale: "fr_CA",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "Logo JSGC",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#2E7D32",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="antialiased">
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
