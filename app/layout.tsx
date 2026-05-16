import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hiry.agency";
const SITE_NAME = "Хайри";
const TITLE = "Хайри — закрываем дизайнерские вакансии за 2–4 недели";
const DESCRIPTION =
  "HR-агентство для дизайнеров. Подбираем продуктовых и графических дизайнеров, арт-директоров и руководителей для Wildberries, ВкусВилл, ВКонтакте, Самолёт, X5 Group, Яндекс Лавки и других. Конверсия в закрытие — 90%.";

const alsHauss = localFont({
  src: [
    { path: "../public/fonts/ALSHauss-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/ALSHauss-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-als-hauss",
  display: "swap",
});

const gtAmerica = localFont({
  src: [
    { path: "../public/fonts/GT-America-LC-Compressed-Bold-Italic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-gt-america",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Хайри",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "хайри",
    "hr-агентство",
    "подбор дизайнеров",
    "найм дизайнеров",
    "продуктовый дизайнер",
    "графический дизайнер",
    "арт-директор",
    "вакансии дизайнеров",
    "работа для дизайнеров",
  ],
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: SITE_NAME,
    url: "/",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/img/og.webp", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/img/og.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "Hiry",
  url: SITE_URL,
  logo: `${SITE_URL}/icons/Hiry_Logo.svg`,
  description: DESCRIPTION,
  sameAs: ["https://t.me/hiry_agency"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${alsHauss.variable} ${gtAmerica.variable}`}>
      <body>
        {children}
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
