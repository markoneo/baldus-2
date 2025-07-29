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
    <section id="storitve" className="py-20 lg:py-32 bg-gray-50">
      <div className="container-modern">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">
            PRAVNE STORITVE
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Naredimo več z BALDUS</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Imamo pokrite podrobnosti, da se lahko manj obremenjujete. 
            Različne dejavnosti, povezane s primerom.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="text-center group"
                data-testid={`service-${index}`}
              >
                <div className="w-24 h-24 mx-auto mb-8 relative">
                  <div className="w-full h-full bg-blue-100 rounded-2xl flex items-center justify-center">
                    <IconComponent className="text-blue-600 w-12 h-12" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}