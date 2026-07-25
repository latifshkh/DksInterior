import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison Studio — Interior Design for Considered Living",
  description:
    "Maison Studio designs warm, minimal interiors for homes and spaces — bedroom, bathroom, kitchen, hall, balcony and beyond.",
  openGraph: {
    title: "Maison Studio — Interior Design",
    description: "Warm, minimal interiors for homes and considered spaces.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="antialiased bg-[#F8F7F4] text-[#1A0F0A]">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
