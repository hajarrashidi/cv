import type {Metadata} from "next";
import "./style/globals.css";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Hajar Rashidi - CV",
  description: "Hajar Rashidi CV",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>Hajar Rashidi</title>
    </head>
    <body className={inter.className}>{children}</body>
    </html>
  );
}
