import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import "./styles.css";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://rivo.gg"),
  alternates: {
    canonical: "/",
  },
  title: SITE.title2,
  description: SITE.description,
  twitter: {
    title: SITE.title2,
    card: "summary_large_image",
    description: SITE.description,
  },
  openGraph: {
    title: SITE.title2,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  maximumScale: 1,
  themeColor: "#4876F2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col flex-1 items-center pt-28 px-6">
      {children}
    </main>
  );
}
