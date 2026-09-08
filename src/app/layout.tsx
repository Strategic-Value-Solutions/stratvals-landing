import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../context/ThemeContext";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stratvals.com"),
  title: {
    default: "Strategic Value Solutions | Enterprise Technology Consulting",
    template: "%s | Strategic Value Solutions",
  },
  description:
    "Strategic Value Solutions delivers executive technology consulting, enterprise architecture, cloud SecDevOps, digital transformation, and product engineering across global organizations.",
  keywords: [
    "Strategic Value Solutions",
    "SVS",
    "Enterprise Architecture",
    "Cloud SecDevOps",
    "Technology Transformation",
    "Strategic Program Management",
    "Product Engineering",
    "Digital Transformation",
    "IT Consulting",
    "Executive Advisory",
  ],
  authors: [{ name: "Strategic Value Solutions", url: "https://stratvals.com" }],
  creator: "Strategic Value Solutions",
  publisher: "Strategic Value Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Strategic Value Solutions | Enterprise Technology Consulting",
    description:
      "Driving digital excellence, cloud SecDevOps, enterprise architecture, and product engineering for global organizations.",
    url: "https://stratvals.com",
    siteName: "Strategic Value Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strategic Value Solutions - Enterprise Technology Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic Value Solutions | Enterprise Technology Consulting",
    description:
      "Driving digital excellence, cloud SecDevOps, enterprise architecture, and product engineering.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
