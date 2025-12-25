import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit"
});

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jinyounghwa.github.io/post"),
  title: "JINYH | Creative Developer",
  description: "Crafting digital experiences with code and creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`scroll-smooth ${outfit.variable} ${inter.variable}`}>
      <body className="antialiased bg-background text-foreground relative selection:bg-primary selection:text-white">
        <div className="mesh-bg">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full animate-[blob_7s_infinite] mix-blend-screen"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 blur-[120px] rounded-full animate-[blob_7s_infinite_2s] mix-blend-screen"></div>
          <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-accent/20 blur-[100px] rounded-full animate-[blob_7s_infinite_4s] mix-blend-screen"></div>
        </div>
        <div className="cosmic-grid fixed inset-0 z-[-1] opacity-30 pointer-events-none"></div>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <footer className="py-12 glass-panel border-t border-glass-border mt-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-2xl font-bold tracking-tighter text-white">JIN.</div>
            <div className="text-sm text-gray-400">© 2025 Jinyounghwa. Crafted with Cosmic Glass.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
