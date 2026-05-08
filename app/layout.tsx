import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Tactika | Football Tactics Learning",
  description: "Learn football tactics with Tifo-style breakdowns, formations, and an AI coach."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8 text-sm text-center text-neutral-500">
              © {new Date().getFullYear()} Tactika. All rights reserved.
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
