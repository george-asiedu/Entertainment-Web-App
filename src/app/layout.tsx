import type { Metadata } from "next";
import {outfit} from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
    title: "Entertainment Web App",
    description: "Movie and TV shows streaming platform",
    icons: "favicon-32x32.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
