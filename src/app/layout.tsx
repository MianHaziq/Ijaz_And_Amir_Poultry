import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Caveat } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

/* Display: confident, corporate, geometric - closest match to the weight
   and proportion of the wordmark on the client's print material. */
const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

/* Handwritten accent, used only for the brand script lines. */
const script = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  /* Set NEXT_PUBLIC_SITE_URL to the live domain at deploy time so that
     Open Graph / Twitter image URLs resolve absolutely. */
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${site.name} — Healthy Birds, Better Tomorrow`,
    template: `%s | ${site.name}`,
  },
  description:
    "Ijaz & Amir Poultry Farm is a registered broiler farm in Village Burnali, Tehsil Kharian, District Gujrat — built on quality production, responsible care, strong biosecurity and sustainable growth.",
  keywords: [
    "poultry farm",
    "broiler farm",
    "Kharian",
    "Gujrat",
    "Punjab",
    "Pakistan poultry",
    "broiler production",
    "Ijaz & Amir Poultry Farm",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_PK",
    title: `${site.name} — Healthy Birds, Better Tomorrow`,
    description:
      "Modern poultry farming built on quality production, responsible care, strong biosecurity and sustainable growth.",
    siteName: site.name,
    images: [{ url: "/banner1.png", width: 1671, height: 941, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Healthy Birds, Better Tomorrow`,
    description:
      "Modern poultry farming built on quality production, responsible care, strong biosecurity and sustainable growth.",
    images: ["/banner1.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#013e20",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${script.variable} antialiased`}>
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-deep focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
