import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  const commitments = [
    "Pravno strokovno zastopanje z dokazano uspešnostjo",
    "Ljudem prijazen pristop – razumemo stisko in ukrepamo odgovorno",
    "Poštenost, preglednost in jasna komunikacija"
  ];

  return (
    <section id="o-nas" className="py-12 sm:py-16 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-8 lg:space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4 lg:mb-6">Kdo smo?</h2>
              <p className="text-slate mb-4 lg:mb-6 leading-relaxed">
                Ekipa Baldus odškodnine je neodvisna ekipa pravnih strokovnjakov, ki si prizadeva za 
                pošteno obravnavo vseh, ki so utrpeli telesno, psihično ali materialno škodo.
              </p>
              <p className="text-slate mb-6 lg:mb-8 leading-relaxed">
                Vemo, da je pot do odškodnine lahko stresna, zato poskrbimo, da vas strokovno in 
                zanesljivo vodimo skozi celoten postopek.
              </p>
              <div className="space-y-3 lg:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-3 lg:mb-4">Naša zaveza:</h3>
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-start space-x-3" data-testid={`commitment-${index}`}>
                    <CheckCircle className="text-gold w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                    <p className="text-slate text-sm sm:text-base">{commitment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 mb-8 lg:mb-0">
            <img 
              src="https://baldus.sirv.com/canstockphoto-3-3357160048.jpg" 
              alt="Legal professionals consultation" 
              className="rounded-lg lg:rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
