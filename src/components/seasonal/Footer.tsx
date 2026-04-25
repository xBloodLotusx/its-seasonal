import { Leaf, Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background py-16">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-semibold">It's Seasonal</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A locally owned seasonal goods shop bringing warmth, charm, and a little bit of magic to every season —
              right here in Timberlake, NC.
            </p>
          </div>

          <div>
            <p className="font-display text-base">Visit</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>7416 Durham Rd</li>
              <li>Timberlake, NC 27583</li>
              <li>(336) 000-0000</li>
              <li>hello@itsseasonal.shop</li>
            </ul>
          </div>

          <div>
            <p className="font-display text-base">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#collections" className="transition-smooth hover:text-foreground">Collections</a></li>
              <li><a href="#featured" className="transition-smooth hover:text-foreground">Featured</a></li>
              <li><a href="#visit" className="transition-smooth hover:text-foreground">Visit & Hours</a></li>
              <li><a href="#about" className="transition-smooth hover:text-foreground">Our Story</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} It's Seasonal · Timberlake, NC</p>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-muted text-muted-foreground transition-smooth hover:bg-primary hover:text-primary-foreground">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-muted text-muted-foreground transition-smooth hover:bg-primary hover:text-primary-foreground">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Email" className="grid h-9 w-9 place-items-center rounded-full bg-muted text-muted-foreground transition-smooth hover:bg-primary hover:text-primary-foreground">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
