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
  title: "Adrian Lopes — Software Engineer",
  description:
    "Portfólio de Adrian Lopes, Software Engineer especializado em Java, Spring Boot, Python e AI (RAG, Machine Learning). Desenvolvendo sistemas backend escaláveis em Natal, RN.",
  keywords: [
    "Adrian Lopes",
    "Software Engineer",
    "Java",
    "Spring Boot",
    "Python",
    "Machine Learning",
    "RAG",
    "Backend Developer",
    "Natal",
    "Brazil",
  ],
  authors: [{ name: "Adrian Lopes" }],
  openGraph: {
    title: "Adrian Lopes — Software Engineer",
    description:
      "Software Engineer | Java & Spring Boot | Python & AI — Building scalable backend systems",
    type: "website",
    locale: "pt_BR",
    url: "https://portfolio-adrian.vercel.app",
    siteName: "Adrian Lopes Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/261272747?v=4",
        width: 400,
        height: 400,
        alt: "Adrian Lopes",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Adrian Lopes — Software Engineer",
    description: "Software Engineer | Java & Spring Boot | Python & AI",
    images: ["https://avatars.githubusercontent.com/u/261272747?v=4"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
