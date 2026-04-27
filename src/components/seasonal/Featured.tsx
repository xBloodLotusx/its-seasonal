import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import entrance from "@/assets/its-seasonal-entrance.jpg";
import sign from "@/assets/its-seasonal-sign.jpg";
import decorations from "@/assets/its-seasonal-decorations.jpg";
import snacks from "@/assets/its-seasonal-snacks.jpg";

const items = [
  { name: "Welcoming Entrance", tag: "Storefront", price: "", img: entrance },
  { name: "Charming Sign", tag: "Our Sign", price: "", img: sign },
  { name: "Seasonal Decorations", tag: "Inside Look", price: "", img: decorations },
  { name: "Snacks & Treats", tag: "Local Favorites", price: "", img: snacks },
];

const Featured = () => {
  return (
    <section id="featured" className="bg-secondary/40 py-24 md:py-32">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">This Season's Picks</span>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Featured this week</h2>
          </div>
          <Button variant="ghost" className="group rounded-full text-base text-foreground hover:bg-foreground hover:text-background">
            See What's New This Season
            <ArrowRight className="ml-1 h-4 w-4 transition-smooth group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.name} className="group">
              <div className="relative overflow-hidden rounded-3xl bg-card shadow-card">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                  />
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  {item.tag}
                </span>
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="font-display text-xl">{item.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
