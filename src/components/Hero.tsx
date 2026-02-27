import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

export const Hero = () => {
  const business = siteConfig;

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-screen flex">

      {/* ── IMAGEN DE FONDO (ocupa todo en mobile, mitad derecha en desktop) ── */}
      <div className="absolute inset-0 lg:left-1/2 lg:right-0 lg:inset-y-0">
        <img
          src="/images/unique-nails/hero.png"
          alt="Elegant nail art"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay oscuro en mobile para que el texto sea legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-background/40 lg:hidden" />
        {/* Overlay lateral en desktop */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      {/* ── CONTENIDO (flota sobre la imagen en mobile, lado izquierdo en desktop) ── */}
      <div className="relative z-10 w-full lg:w-1/2 flex items-end lg:items-center justify-center pb-12 lg:pb-0 px-6 lg:px-16">
        <div className="max-w-xl w-full text-center lg:text-left">

          {/* Badge */}
          <div className="inline-block mb-5 px-4 py-2 bg-primary/15 backdrop-blur-sm rounded-full">
            <span className="text-sm font-medium text-primary tracking-wide">
              ⭐ 4.7 Stars on Google · 182 Reviews · 7+ Years
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-5 leading-tight">
            Where Beauty{" "}
            <span className="text-primary italic">Meets Detail</span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed">
            Nail art, pedicures, waxing & lashes —<br className="hidden sm:block" />
            crafted with care in Oviedo, FL.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-full"
            >
              <a href={business.bookingUrl}>Book an Appointment</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-foreground bg-background/60 backdrop-blur-sm hover:bg-primary/5 px-8 py-6 text-base rounded-full"
            >
              <a href="#services">View Services</a>
            </Button>
          </div>

          {/* Trust stats */}
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 pt-8 border-t border-border/40">
            <div>
              <div className="text-2xl font-display font-bold text-foreground">7+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Years in Oviedo</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <div className="text-2xl font-display font-bold text-foreground">180+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">5-Star Reviews</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <div className="text-2xl font-display font-bold text-foreground">Spa</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Nails · Waxing · Lashes</div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
