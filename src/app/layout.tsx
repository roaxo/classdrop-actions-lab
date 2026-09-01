import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClassDrop Actions Lab",
  description:
    "A tiny demo app for practicing GitHub Actions with git cherry-pick.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
