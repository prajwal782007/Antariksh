import type { Metadata } from "next";
import { Inter, Space_Grotesk, Syne, Anton, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarShower from "@/components/StarShower";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Antariksh DPES Dashboard",
  description: "Space and Technology Club Mission Control",
  icons: {
    icon: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${syne.variable} ${anton.variable} ${bebasNeue.variable} h-full antialiased selection:bg-black selection:text-brand-orange`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans relative">
        <StarShower />
        <Navbar />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
