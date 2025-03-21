import type {Metadata} from "next";
import "./style/globals.css";
import "./style/cv/cv-pdf.css";
import {Source_Sans_3 } from "next/font/google";

const sans = Source_Sans_3();

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
    <body className={sans.className}>{children}</body>
    </html>
  );
}
