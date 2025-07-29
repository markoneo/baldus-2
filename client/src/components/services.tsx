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
    <section id="storitve" className="section-padding bg-white">
      <div className="container-modern">
        <div className="text-center mb-12">
          <h2 className="text-section-title text-navy mb-6">Vrste odškodnin</h2>
          <p className="text-slate text-xl max-w-2xl mx-auto">Vrste primerov, ki jih obravnavamo</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="card-modern p-8 group"
                data-testid={`service-${index}`}
              >
                <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-white w-8 h-8" />
                </div>
                <h3 className="text-subsection text-navy mb-4">{service.title}</h3>
                <p className="text-slate leading-relaxed text-lg">{service.description}</p>
              </div>
            );
          })}
          <div className="card-modern p-8 bg-gradient-to-br from-gold-light to-gold/10 border-gold/20 group">
            <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <HelpCircle className="text-white w-8 h-8" />
            </div>
            <h3 className="text-subsection text-navy mb-4">Niste prepričani?</h3>
            <p className="text-slate leading-relaxed text-lg">
              Kontaktirajte nas za brezplačno analizo vašega primera. Pomagali bomo ugotoviti, 
              ali imate pravico do odškodnine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
