import { MapPin, Heart, Sparkles } from "lucide-react";
import entrance from "@/assets/its-seasonal-entrance.jpg";
import sign from "@/assets/its-seasonal-sign.jpg";
import decorations from "@/assets/its-seasonal-decorations.jpg";
import snacks from "@/assets/its-seasonal-snacks.jpg";

const photos = [
  { src: entrance, alt: "Entrance to It's Seasonal gift shop in Timberlake, NC" },
  { src: sign, alt: "It's Seasonal storefront sign" },
  { src: decorations, alt: "Seasonal decorations inside the shop" },
  { src: snacks, alt: "Snacks and treats available at It's Seasonal" },
];

const About = () => {
  return (
    <section id="about" className="relative bg-gradient-cream py-24 md:py-32">
      <div className="container mx-auto grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Our Story</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            A little shop with a whole lot of seasonal charm.
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="text-lg leading-relaxed text-muted-foreground">
            It's Seasonal is a locally owned shop in Timberlake, North Carolina, dedicated to the simple joy of
            decorating for the seasons. Every few months we refresh our shelves with new collections — from spring
            blooms and summer porches to fall harvest, Halloween whimsy, and the magic of Christmas.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Stop in and you'll be greeted like a neighbor, helped like a friend, and surprised by finds you won't
            see anywhere else in the county.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-card p-5 shadow-card">
              <Sparkles className="h-5 w-5 text-primary" />
              <p className="mt-3 font-display text-lg">Rotating collections</p>
              <p className="text-sm text-muted-foreground">Always something new on the shelves.</p>
            </div>
            <div className="rounded-2xl bg-card p-5 shadow-card">
              <Heart className="h-5 w-5 text-primary" />
              <p className="mt-3 font-display text-lg">Friendly service</p>
              <p className="text-sm text-muted-foreground">Locally owned and proudly community-first.</p>
            </div>
            <div className="rounded-2xl bg-card p-5 shadow-card">
              <MapPin className="h-5 w-5 text-primary" />
              <p className="mt-3 font-display text-lg">Find us at</p>
              <p className="text-sm text-muted-foreground">7416 Durham Rd, Timberlake, NC 27583</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {photos.map((photo) => (
            <div key={photo.alt} className="overflow-hidden rounded-2xl aspect-square shadow-card">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-smooth hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
