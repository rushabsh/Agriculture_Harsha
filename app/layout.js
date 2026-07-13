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
  title: "VerdaAgro - Sustainable Agriculture & Modern Farming Solutions",
  description: "Replication of VerdaAgro website homepage focusing on sustainable agriculture, crop planning, soil testing, and modern farming solutions.",
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
