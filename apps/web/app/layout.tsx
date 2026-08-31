import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UX4G React Library — Showcase",
  description: "Live examples of components from @ux4g/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
