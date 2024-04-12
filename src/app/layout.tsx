import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jade Bot List",
  description: "Find the best bots for your Discord server",
  keywords: [
    "discord bots",
    "dbl",
    "discord botlist",
    "botlist",
    "bots",
    "best discord bots",
    "public bots",
    "bots discord",
    "bots on discord",
    "top bots",
    "top discord bots",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={cn(inter.className, "h-full w-full")}>{children}</body>
    </html>
  );
}
