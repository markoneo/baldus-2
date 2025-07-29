import { Button } from "@/components/ui/button";
import { Calculator, Phone } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="domov" className="bg-gradient-to-br from-gray-50/50 to-white section-padding">
      <div className="container-modern">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <h1 className="text-hero text-navy mb-8">
              Vaša pravica, naša skrb – z nami zanesljivo do{" "}
              <span className="text-gold">pravične odškodnine</span>
            </h1>
            <p className="text-xl text-slate mb-8 leading-relaxed max-w-lg">
              Utrpeli ste škodo, pa ne veste, kako uveljaviti svojo pravico? Pri Baldus odškodnine vam 
              pomagamo hitro, strokovno in brez tveganja do odškodnine, ki vam pripada.
            </p>
            <p className="text-lg text-slate mb-12 max-w-lg">
              Delujemo transparentno, brez skritih stroškov in vas spremljamo od prvega klica do končnega izplačila.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                onClick={scrollToContact}
                className="btn-primary"
                size="lg"
                data-testid="button-free-analysis"
              >
                <Calculator className="mr-3 h-5 w-5" />
                Brezplačna analiza primera
              </Button>
              <Button
                variant="outline"
                className="btn-secondary"
                size="lg"
                asChild
                data-testid="button-call-hero"
              >
                <a href="tel:+38641288455">
                  <Phone className="mr-3 h-5 w-5" />
                  Pokličite nas
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:pl-12">
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional legal consultation" 
              className="rounded-3xl shadow-2xl w-full hover:shadow-3xl transition-all duration-500"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
