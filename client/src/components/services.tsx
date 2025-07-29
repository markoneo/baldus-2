import { Car, HardHat, Stethoscope, AlertTriangle, Heart, HelpCircle } from "lucide-react";

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
    <section id="storitve" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Vrste odškodnin</h2>
          <p className="text-slate text-lg">Vrste primerov, ki jih obravnavamo</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow"
                data-testid={`service-${index}`}
              >
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{service.title}</h3>
                <p className="text-slate leading-relaxed">{service.description}</p>
              </div>
            );
          })}
          <div className="bg-gold-light border border-gold rounded-xl p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-4">
              <HelpCircle className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-3">Niste prepričani?</h3>
            <p className="text-slate leading-relaxed">
              Kontaktirajte nas za brezplačno analizo vašega primera. Pomagali bomo ugotoviti, 
              ali imate pravico do odškodnine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
