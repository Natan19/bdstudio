import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BD Studio - Indie Game Development",
  description:
    "BD Studio is an indie gaming development company currently under construction. Stay tuned for amazing gaming experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
