import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderNav from "@/components/header-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const websiteTitle = 'Kefilino\'s Page | Personal Blog & Portfolio';
const websiteDescription = 'Welcome to Kefilino\'s Page, a personal blog and portfolio where I share my journey, insights, and projects. Explore my work, learn about my experiences, and discover the things I’m passionate about.';

export const metadata: Metadata = {
  title: websiteTitle,
  description: websiteDescription,
  openGraph: {
    title: websiteTitle,
    description: websiteDescription,
    type: 'website'
  },
  icons: {
    icon: [
      { url: '/icon.svg' },
      { url: '/icon-dark.svg', media: '(prefers-color-scheme: dark)' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderNav/>
        <div className="h-px min-h-[calc(100vh-4rem)]">
          {children}
        </div>
      </body>
    </html>
  );
}
