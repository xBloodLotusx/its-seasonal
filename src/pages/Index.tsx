import { useEffect } from "react";
import Navbar from "@/components/seasonal/Navbar";
import Hero from "@/components/seasonal/Hero";
import About from "@/components/seasonal/About";
import Collections from "@/components/seasonal/Collections";
import Location from "@/components/seasonal/Location";
import Testimonials from "@/components/seasonal/Testimonials";
import Footer from "@/components/seasonal/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "It's Seasonal | Seasonal Décor & Gifts in Timberlake, NC";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "It's Seasonal in Timberlake, NC — locally owned shop for seasonal décor, holiday items, gifts, and home accents. Visit us at 7416 Durham Rd."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");

    const ldId = "ld-localbusiness";
    document.getElementById(ldId)?.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = ldId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Store",
      name: "It's Seasonal",
      description: "Local seasonal-goods shop offering rotating décor, gifts, and home accents.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7416 Durham Rd",
        addressLocality: "Timberlake",
        addressRegion: "NC",
        postalCode: "27583",
        addressCountry: "US",
      },
    });
    document.head.appendChild(ld);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <Location />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
