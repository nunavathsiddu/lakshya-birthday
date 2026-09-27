import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Playfair_Display, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "To Lakshya, With All My Love | Happy Birthday",
  description: "An extraordinary romantic birthday journey and celebration for Lakshya on October 23.",
  keywords: ["Lakshya", "Happy Birthday", "Love Story", "October 23"],
  openGraph: {
    title: "To Lakshya, With All My Love | Happy Birthday",
    description: "An extraordinary romantic celebration for Lakshya.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08070b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${jakarta.variable} ${caveat.variable} scroll-smooth dark`}
    >
      <body className="bg-[#08070B] text-[#FDFBF7] font-sans antialiased selection:bg-[#721124] selection:text-[#FFFDF9] overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
