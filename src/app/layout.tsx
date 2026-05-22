import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "conote — AI-Assisted Lecture Note Taking",
  description: "Stop watching passively. active recall coaches you to synthesize online lectures in your own words.",
  keywords: ["active recall", "lecture notes", "study helper", "learning coach", "youtube transcript notes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-[#0B0E14] text-[#E5E2E1] font-sans selection:bg-[#8B5CF6]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

