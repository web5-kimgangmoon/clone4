import type { Metadata } from "next";
import localfont from "next/font/local";
import { Sansation } from "next/font/google";
import "./globals.css";

const sansation = Sansation({
  variable: "--font-sansation",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const pretendard = localfont({
  src: "../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  display: "swap",
  weight: "95 420",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Create Notion main page",
  description: "coding notion page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.className} antialiased ${sansation.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
