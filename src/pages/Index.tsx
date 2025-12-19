import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Team />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
};

export default Index;
