import { Car, HardHat, Stethoscope, AlertTriangle, Heart, HelpCircle, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Car,
      title: "Prometne nesreče",
      description: "Če ste bili poškodovani kot voznik, sopotnik, kolesar ali pešec vam pomagamo pridobiti ustrezno odškodnino – v določenih primerih tudi, če niste krivi."
    },
    {
      icon: HardHat,
      title: "Poškodbe pri delu",
      description: "Padec, nepravilna zaščita, nezavarovano delovno okolje – vse to so razlogi za uveljavljanje škode."
    },
    {
      icon: Stethoscope,
      title: "Zdravniške napake",
      description: "Napačna diagnoza, slabo izveden poseg ali okužba v bolnišnici lahko pomenijo odgovornost zdravnika ali ustanove."
    },
    {
      icon: AlertTriangle,
      title: "Nesreče na javnih površinah",
      description: "Padec na poledeneli poti, poškodba v trgovini ali na gradbišču – odgovorni morajo prevzeti posledice."
    },
    {
      icon: Heart,
      title: "Moralna škoda",
      description: "Če ste izgubili bližnjega zaradi nesreče ali malomarnosti, imate kot svojec pravico do pravičnega zadoščenja."
    }
  ];

  return (
    <section id="storitve" className="py-12 sm:py-16 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">
            PRAVNE STORITVE
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">Pri nas poskrbimo za vse – od prvega nasveta do zaključka postopka</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Imamo pokrite podrobnosti, da se lahko manj obremenjujete. 
            Različne dejavnosti, povezane s primerom.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="text-center group p-4"
                data-testid={`service-${index}`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-6 lg:mb-8 relative">
                  <div className="w-full h-full bg-gold-light rounded-2xl flex items-center justify-center">
                    <IconComponent className="text-gold w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}