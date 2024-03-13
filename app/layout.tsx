import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google"
import "./globals.css";

// Main font and their weights
const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ]
})


export const metadata: Metadata = {
  title: "Coffe List",
  description: "Coffe list challange from devchallenges.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  );
}
