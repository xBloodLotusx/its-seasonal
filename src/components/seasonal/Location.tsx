import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday – Friday", time: "10:00 AM – 6:00 PM" },
  { day: "Saturday", time: "9:00 AM – 6:00 PM" },
  { day: "Sunday", time: "12:00 PM – 5:00 PM" },
];

const Location = () => {
  const address = "7416 Durham Rd, Timberlake, NC 27583";
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section id="visit" className="bg-background py-24 md:py-32">
      <div className="container mx-auto grid gap-12 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl shadow-soft">
          <iframe
            title="Map to It's Seasonal in Timberlake, NC"
            src={embedUrl}
            className="h-full min-h-[400px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Come Visit</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Stop by and say hello.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We're just down the road in Timberlake. Plan your visit — and don't forget to pet the shop dog.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium">Address</p>
                <p className="text-muted-foreground">{address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="font-medium">Hours</p>
                <ul className="mt-2 divide-y divide-border">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between py-1.5 text-sm">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium">Call Us</p>
                <p className="text-muted-foreground">(336) 000-0000</p>
              </div>
            </div>
          </div>

          <Button size="lg" className="mt-8 w-fit rounded-full px-7 shadow-warm" asChild>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-1 h-4 w-4" /> Get Directions
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Location;
