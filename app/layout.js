import { Rethink_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import MouseTracker from "@/components/MouseTracker";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://greenglobeagro.com"),
  title: {
    default: "GreenGlobe Agrochemical Industries | Bulk Agricultural Fertilizers & Raw Materials",
    template: "%s | GreenGlobe Agrochemical Industries",
  },
  description: "Leading importer, manufacturer, and bulk supplier of high-purity fertilizer raw materials, water-soluble fertilizers, PGR biostimulants, and chelated micronutrients in India.",
  keywords: [
    "Fertilizer Raw Materials",
    "Water Soluble Fertilizers",
    "PGR Biostimulants",
    "Chelated Micronutrients",
    "Potassium Humate Flakes",
    "Bulk Fertilizer Sourcing",
    "GreenGlobe Agrochemical Industries",
    "Pune Fertilizer Supplier",
  ],
  authors: [{ name: "GreenGlobe Agrochemical Industries" }],
  creator: "GreenGlobe Agrochemical Industries",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://greenglobeagro.com",
    title: "GreenGlobe Agrochemical Industries | Bulk Agricultural Fertilizers",
    description: "Leading importer, manufacturer, and bulk supplier of high-purity fertilizer raw materials across India. Certified wholesale license: LCFWD2023100392.",
    siteName: "GreenGlobe Agrochemical Industries",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "GreenGlobe Agrochemical Industries Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenGlobe Agrochemical Industries",
    description: "Leading importer, manufacturer, and bulk supplier of high-purity fertilizer raw materials across India.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${rethinkSans.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#ffffff] text-[#4E4E4E] font-sans">
        <MouseTracker />
        {children}
      </body>
    </html>
  );
}
