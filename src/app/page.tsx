import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import ModernFarming from "@/components/ModernFarming";
import CoreValues from "@/components/CoreValues";
import QualityBiosecurity from "@/components/QualityBiosecurity";
import Sustainability from "@/components/Sustainability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

/* Structured data - helps the farm surface properly in local search. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  logo: "/logo.png",
  image: ["/logo.png", "/banner1.png"],
  description:
    "Registered broiler poultry farm focused on quality production, responsible care, biosecurity and sustainable growth.",
  telephone: site.phones.map((p) => p.tel),
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Kharian",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  founder: { "@type": "Person", name: site.proprietor },
  slogan: site.tagline,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        <Hero />
        <TrustStrip />
        <About />
        <ModernFarming />
        <CoreValues />
        <QualityBiosecurity />
        <Sustainability />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
