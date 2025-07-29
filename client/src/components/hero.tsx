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
    <section id="domov" className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              Vaša pravica, naša skrb – z nami zanesljivo do{" "}
              <span className="text-gold">pravične odškodnine</span>
            </h1>
            <p className="text-lg text-slate mb-8 leading-relaxed">
              Utrpeli ste škodo, pa ne veste, kako uveljaviti svojo pravico? Pri Baldus odškodnine vam 
              pomagamo hitro, strokovno in brez tveganja do odškodnine, ki vam pripada.
            </p>
            <p className="text-slate mb-8">
              Delujemo transparentno, brez skritih stroškov in vas spremljamo od prvega klica do končnega izplačila.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-gold hover:bg-gold-light text-white px-8 py-4 font-semibold"
                size="lg"
                data-testid="button-free-analysis"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Brezplačna analiza primera
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 font-semibold"
                size="lg"
                asChild
                data-testid="button-call-hero"
              >
                <a href="tel:+38641288455">
                  <Phone className="mr-2 h-5 w-5" />
                  Pokličite nas
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:pl-8">
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional legal consultation" 
              className="rounded-xl shadow-2xl w-full"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
