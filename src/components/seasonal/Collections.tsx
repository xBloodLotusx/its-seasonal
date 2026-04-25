import spring from "@/assets/spring.jpg";
import summer from "@/assets/summer.jpg";
import fall from "@/assets/fall.jpg";
import christmas from "@/assets/christmas.jpg";
import gifts from "@/assets/gifts.jpg";

const collections = [
  { title: "Spring Décor", desc: "Pastels, florals, and fresh starts.", img: spring, span: "md:col-span-4" },
  { title: "Summer Outdoor", desc: "Bright porches and patio touches.", img: summer, span: "md:col-span-4" },
  { title: "Fall & Halloween", desc: "Pumpkins, plaid, and harvest hues.", img: fall, span: "md:col-span-4" },
  { title: "Christmas & Holiday", desc: "Wreaths, lights, and merry magic.", img: christmas, span: "md:col-span-7" },
  { title: "Gifts & Home Accents", desc: "Year-round finds for every occasion.", img: gifts, span: "md:col-span-5" },
];

const Collections = () => {
  return (
    <section id="collections" className="bg-background py-24 md:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Shop by Season</span>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              A collection for every chapter of the year.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground md:text-right">
            Our shelves change with the seasons. Come early to catch the freshest finds.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-12">
          {collections.map((c) => (
            <article
              key={c.title}
              className={`group relative overflow-hidden rounded-3xl shadow-card transition-smooth hover:shadow-warm ${c.span}`}
            >
              <div className="relative aspect-[4/5] md:aspect-[4/5]">
                <img
                  src={c.img}
                  alt={`${c.title} seasonal collection at It's Seasonal Timberlake NC`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="absolute inset-0 h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/85 via-accent/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className="font-display text-2xl text-primary-foreground md:text-3xl">{c.title}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/80">{c.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
