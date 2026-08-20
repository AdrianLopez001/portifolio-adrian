import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adrian Lopes — Desenvolvedor Fullstack (Java 21, Spring Boot, Python, AI)",
  description:
    "Portfólio de Adrian Lopes, Desenvolvedor Fullstack com 4 anos de experiência em Java 21, Spring Boot, Python, React, Next.js e integração de IA (RAG, pgvector, LLMs). Natal, RN - Brasil.",
  keywords: [
    "Adrian Lopes",
    "Desenvolvedor Fullstack",
    "Fullstack Developer",
    "Java 21",
    "Spring Boot",
    "Python",
    "React",
    "Next.js",
    "RAG",
    "pgvector",
    "Claude Vision API",
    "n8n",
    "Natal RN",
    "Brasil",
  ],
  authors: [{ name: "Adrian Lopes" }],
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://portfolio-adrian.vercel.app"
  ),
  openGraph: {
    title: "Adrian Lopes — Desenvolvedor Fullstack (Java, Python, AI)",
    description:
      "Desenvolvedor Fullstack com 4 anos de experiência em Java 21, Spring Boot, React/Next.js e soluções de IA (RAG, pgvector, LLMs).",
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Adrian Lopes Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 400,
        height: 400,
        alt: "Adrian Lopes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Lopes — Desenvolvedor Fullstack",
    description: "Java 21 · Spring Boot · Python · AI & RAG · React/Next.js",
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Adrian Lopes",
  "jobTitle": "Desenvolvedor Fullstack",
  "url": "https://portfolio-adrian.vercel.app",
  "sameAs": [
    "https://github.com/AdrianLopez001",
    "https://www.linkedin.com/in/adrian-lopes-a42699371",
    "https://instagram.com/adrianlopes.dev"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Natal",
    "addressRegion": "RN",
    "addressCountry": "BR"
  },
  "knowsAbout": [
    "Java 21",
    "Spring Boot",
    "Python",
    "React",
    "Next.js",
    "PostgreSQL",
    "pgvector",
    "Retrieval-Augmented Generation (RAG)",
    "LLMs",
    "Docker",
    "AWS"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased transition-colors duration-300`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
