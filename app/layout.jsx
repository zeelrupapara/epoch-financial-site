import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const SITE_URL = "https://www.epochfinancial.com";
const GA_MEASUREMENT_ID = "G-Z38PFH46VS";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "EPOCH Financial | Commercial Finance Advisory",
  description:
    "EPOCH Financial structures and facilitates senior secured credit solutions for middle market companies and specialty lenders.",
  keywords:
    "asset based lending, accounts receivable financing, bridge loans, commercial real estate loans, private credit, middle market",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "EPOCH Financial",
    locale: "en_US",
    url: SITE_URL,
    title: "EPOCH Financial | Commercial Finance Advisory",
    description:
      "EPOCH Financial structures and facilitates senior secured credit solutions for middle market companies and specialty lenders.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EPOCH Financial | Commercial Finance Advisory",
    description:
      "EPOCH Financial structures and facilitates senior secured credit solutions for middle market companies and specialty lenders.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-white text-slate-900 antialiased overflow-x-hidden" suppressHydrationWarning>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <StructuredData />
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
