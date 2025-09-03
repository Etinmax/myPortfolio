import '../app/globals.css';
import type { Metadata } from "next";
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Etinosa Maxwell | Fullstack Developer & IT Specialist",
  description:
    "Portfolio of Etinosa Maxwell, a Fullstack Developer and IT Specialist from Nigeria with 10+ years of experience. Skilled in Next.js, React, Prisma, PostgreSQL, MongoDB, Git/GitHub, IT support, and web design. Certified in Google IT Support, Web Development, and Backend Development.",
  keywords: [
    "Etinosa Maxwell",
    "Fullstack Developer Nigeria",
    "Next.js Developer",
    "React Developer",
    "Prisma PostgreSQL MongoDB",
    "IT Support Specialist",
    "Web Designer",
    "Software Engineer Nigeria",
    "Google IT Support Certified",
    "Axia Africa Backend Developer",
    "Next College Full Stack Developer"
  ],
  authors: [{ name: "Etinosa Maxwell", url: "https://yourportfolio.com" }],
  creator: "Etinosa Maxwell",
  publisher: "Etinosa Maxwell",
  metadataBase: new URL("https://yourportfolio.com"),
  openGraph: {
    title: "Etinosa Maxwell | Fullstack Developer & IT Specialist | Web Designer",
    description:
      "Explore the portfolio of Etinosa Maxwell, a Nigerian Fullstack Developer with 10 years of IT experience. Expertise in Next.js, React, Prisma, PostgreSQL, MongoDB, and IT support.",
    url: "https://yourportfolio.com",
    siteName: "Etinosa Maxwell Portfolio",
    images: [
      {
        url: "//etin.png", 
        width: 1200,
        height: 630,
        alt: "Etinosa Maxwell - Fullstack Developer Portfolio",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Etinosa Maxwell | Fullstack Developer & IT Specialist",
    description:
      "Fullstack Developer from Nigeria with 10+ years of IT experience. Skilled in Next.js, React, Prisma, PostgreSQL, MongoDB, Git/GitHub, and IT Support.",
    images: ["/etin.png"], 
    creator: "@etinosamaxville", // optional if you have Twitter/X
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Etinosa - Founder and Full Stack Developer </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </head>
      <body className="bg-black text-gray-200 font-poppins">{children}</body>
    </html>
  );
}