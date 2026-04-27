import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/its-seasonal.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Cozy seasonal storefront display with pumpkins, candles, and autumn decor"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="absolute inset-0 bg-accent/30 mix-blend-multiply" />

      <div className="container relative z-10 mx-auto flex min-h-[92vh] flex-col justify-end pb-20 pt-32 md:justify-center md:pb-0">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary-foreground backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            Now in season — Autumn Harvest
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] text-primary-foreground text-balance md:text-7xl lg:text-8xl">
            Celebrate Every Season <em className="text-highlight not-italic">in Style</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85 md:text-xl">
            Your local destination for seasonal décor, gifts, and home accents — handpicked in the heart of Timberlake, NC.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" className="group rounded-full bg-primary px-7 text-base shadow-warm hover:bg-primary/90" asChild>
              <a href="#collections">
                Browse Seasonal Items
                <ArrowRight className="ml-1 h-4 w-4 transition-smooth group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-primary-foreground/10 px-7 text-base text-primary-foreground backdrop-blur-md hover:bg-primary-foreground hover:text-foreground" asChild>
              <a href="#visit">
                <MapPin className="mr-1 h-4 w-4" />
                Visit Us in Timberlake
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
