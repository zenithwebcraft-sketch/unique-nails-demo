import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import businessData from "@/config/business.json";
import { useLanguage } from "@/hooks/useLanguage";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { business } = businessData;
  const { translations: t } = useLanguage();

  const navigationItems = [
    { label: t.navigation.services, href: "#servicios" },
    { label: t.navigation.pricing, href: "#precios" },
    { label: t.navigation.team, href: "#equipo" },
    { label: t.navigation.testimonials, href: "#opiniones" },
    { label: t.navigation.location, href: "#ubicacion" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <img src={logo} alt={business.name} className="h-12 w-auto" />
            <span className="font-display text-xl font-semibold text-foreground hidden sm:inline">
              {business.name}
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden lg:block">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href={business.bookingUrl}>{t.navigation.bookNow}</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-background border-b lg:hidden">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 mt-4">
                <a href={business.bookingUrl}>{t.navigation.bookNow}</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
