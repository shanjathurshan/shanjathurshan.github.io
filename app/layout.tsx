import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], display: 'swap', weight: ["300", "400", "500","600", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Software Engineer",
  viewport: "width=device-width, initial-scale=1",
  keywords: "JavaScript, TypeScript, Angular, React, Next.js, TailwindCSS, Designer, Software Engineer, Engineering, Frontend, Developer, Shan Jathu, Shan Jathurshan, shanjathu, jathurshan manistar, Jaffna, Sri Lanka, SLIIT, Moodforcode, Entrepreneur",
  authors: [
    { name: 'Shan Jathurshan', url: 'https://github.com/shanjathurshan' }
  ],
  referrer: 'origin-when-cross-origin',
  robots: 'follow, index',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '',
    title: 'Shan Jathurshan',
    description: 'Software Engineer',
    images: [
      {
        url: './shan1.jpeg',
        width: 800,
        height: 600,
        alt: 'Shan Jathurshan',
      },
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
