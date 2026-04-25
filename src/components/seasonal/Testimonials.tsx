import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Every visit feels like walking into a friend's beautifully decorated home. I always leave with something special.",
    name: "Mary B.",
    place: "Roxboro, NC",
  },
  {
    text: "The fall display is unreal. They have things you simply can't find at the big box stores.",
    name: "Jenna K.",
    place: "Timberlake, NC",
  },
  {
    text: "Sweetest staff in the county. They wrapped a last-minute gift for me — pure Southern hospitality.",
    name: "Tom & Linda R.",
    place: "Hurdle Mills, NC",
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

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="rounded-3xl bg-accent-foreground/5 p-8 backdrop-blur-sm ring-1 ring-accent-foreground/10"
            >
              <Quote className="h-7 w-7 text-highlight" />
              <blockquote className="mt-4 font-display text-xl leading-snug">
                "{q.text}"
              </blockquote>
              <figcaption className="mt-6 text-sm text-accent-foreground/70">
                <span className="font-medium text-accent-foreground">{q.name}</span> · {q.place}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
