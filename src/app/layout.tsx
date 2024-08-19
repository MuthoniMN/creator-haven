import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digishop E-Commerce Web App",
  description: "A web app that allows users to sell their digital products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>{children}</body>
    </html>
  );
}
