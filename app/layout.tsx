import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sean-portfolio-dun.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Sean Beaman | Entrepreneur. Investor. CEO of Gemalgo.",
    template: "%s | Sean Beaman",
  },
  description:
    "Sean Beaman is a veteran entrepreneur, investor, and CEO of Gemalgo. 30+ years scaling businesses with $250M+ in exits across tech, fintech, real estate, and data.",
  authors: [{ name: "Sean Beaman", url: BASE_URL }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Sean Beaman",
    title: "Sean Beaman | Entrepreneur. Investor. CEO of Gemalgo.",
    description: "30+ years scaling businesses and $250M+ in exits.",
    url: BASE_URL,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Sean Beaman" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sean Beaman | Entrepreneur. Investor. CEO of Gemalgo.",
    description: "30+ years scaling businesses and $250M+ in exits.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sean Beaman",
              jobTitle: "CEO & Entrepreneur",
              description:
                "Veteran entrepreneur, investor, and CEO of Gemalgo with 30+ years and $250M+ in exits across tech, fintech, real estate, and data.",
              url: BASE_URL,
              sameAs: [],
              worksFor: {
                "@type": "Organization",
                name: "Gemalgo",
                url: "https://gemalgo.com",
              },
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
