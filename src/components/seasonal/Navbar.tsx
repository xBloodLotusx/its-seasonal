import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="container mx-auto flex items-center justify-between py-6">
        <a href="#" className="flex items-center gap-2 text-primary-foreground">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/15 backdrop-blur-sm">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">It's Seasonal</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-primary-foreground/90 md:flex">
          <a href="#collections" className="transition-smooth hover:text-primary-foreground">Collections</a>
          <a href="#featured" className="transition-smooth hover:text-primary-foreground">Featured</a>
          <a href="#visit" className="transition-smooth hover:text-primary-foreground">Visit</a>
          <a href="#about" className="transition-smooth hover:text-primary-foreground">About</a>
        </div>
        <Button variant="secondary" size="sm" className="rounded-full" asChild>
          <a href="#visit">Get Directions</a>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
