import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison Studio — Architectural Interior Design",
  description:
    "Maison Studio designs serene, minimal interiors for considered living spaces — bedroom, bathroom, kitchen, hall, balcony and beyond.",
  openGraph: {
    title: "Maison Studio — Architectural Interior Design",
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
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="antialiased bg-[#FAF8F5] text-[#141210] selection:bg-[#8A7664] selection:text-white">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}

