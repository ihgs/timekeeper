import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

const title = "Time Keeper"
const description = "Time keeper is a graphical timer for event with multiple sessions."
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: title,
    url: 'https://ihgs.github.io/timekeeper/',
    locale: 'ja_JP',
    type: 'website'
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA_ID}`} />
    </html>
  );
}
