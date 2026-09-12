import type { Metadata } from "next";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { project } from "@/data/project";

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${project.name} — ${project.tagline}`,
  description: project.heroStatement,
  icons: {
    icon: "/assets/logos/ssb-suraksha-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-paper-50 font-sans text-navy-950 antialiased">{children}</body>
    </html>
  );
}
