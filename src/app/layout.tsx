import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aye Mya Phyu Sin - Pharmacist",
  description: "Create by Coder-Verse",
  openGraph: {
    title: "Aye Mya Phyu Sin - Pharmacist",
    description: "Create by Coder-Verse",
    images: [
      {
        url: "/hero.jpeg", // or your actual image file
        width: 1200,
        height: 630,
        alt: "Aye Mya Phyu Sin - Pharmacist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aye Mya Phyu Sin - Pharmacist",
    description: "Create by Coder-Verse",
    images: ["/hero.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable}antialiased gradient-bg min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
