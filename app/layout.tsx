import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const SITE_URL = "https://nurgazy.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zhangozy Nurgazy — Mobile Developer & AI Vibe Coder",
    template: "%s · Zhangozy Nurgazy",
  },
  description:
    "Zhangozy Nurgazy — Mobile Developer & AI Vibe Coder. I build production-ready MVPs with Swift, Flutter and AI. Native iOS, cross-platform Flutter, backend and AI integration.",
  keywords: [
    "Zhangozy Nurgazy",
    "Mobile Developer",
    "iOS Developer",
    "Swift",
    "SwiftUI",
    "Flutter",
    "AI Engineer",
    "MVP",
    "Portfolio",
  ],
  authors: [{ name: "Zhangozy Nurgazy" }],
  creator: "Zhangozy Nurgazy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Zhangozy Nurgazy — Mobile Developer & AI Vibe Coder",
    description:
      "I build production-ready MVPs with Swift, Flutter and AI.",
    siteName: "Zhangozy Nurgazy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zhangozy Nurgazy — Mobile Developer & AI Vibe Coder",
    description:
      "I build production-ready MVPs with Swift, Flutter and AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
