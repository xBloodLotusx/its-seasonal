import { Quote, Star } from "lucide-react";

const quotes = [
  {
    text: "Every visit feels like walking into a friend's beautifully decorated home. I always leave with something special.",
    name: "Mary B.",
    place: "Roxboro, NC",
    rating: 5,
  },
  {
    text: "The fall display is unreal. They have things you simply can't find at the big box stores.",
    name: "Jenna K.",
    place: "Timberlake, NC",
    rating: 5,
  },
  {
    text: "Sweetest staff in the county. They wrapped a last-minute gift for me — pure Southern hospitality.",
    name: "Tom & Linda R.",
    place: "Hurdle Mills, NC",
    rating: 5,
  },
  {
    text: "If you're ever passing through, make sure to stop in. Southern hospitality mixed with quaint charm and so much love makes this the best gift shop!",
    name: "Wendy McNamee",
    place: "",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-accent py-24 text-accent-foreground md:py-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-highlight">Loved by Locals</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Kind words from our community.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="rounded-3xl bg-accent-foreground/5 p-8 backdrop-blur-sm ring-1 ring-accent-foreground/10"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-7 w-7 text-highlight" />
                <div className="flex gap-0.5">
                  {Array.from({ length: q.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-highlight text-highlight" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-4 font-display text-xl leading-snug">
                "{q.text}"
              </blockquote>
              <figcaption className="mt-6 text-sm text-accent-foreground/70">
                <span className="font-medium text-accent-foreground">{q.name}</span>
                {q.place && <> · {q.place}</>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
