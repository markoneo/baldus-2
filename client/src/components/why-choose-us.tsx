import { Award, MessageCircle, DollarSign, Shield, Users, Phone } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Award,
      title: "Več let izkušenj",
      description: "s področja odškodnin"
    },
    {
      icon: MessageCircle,
      title: "Brezplačni prvi posvet",
      description: "in analiza primera"
    },
    {
      icon: DollarSign,
      title: "Brez plačila vnaprej",
      description: "provizijo zaračunamo le ob uspehu"
    },
    {
      icon: Shield,
      title: "Popolno zastopanje",
      description: "pred zavarovalnicami in vodimo celoten postopek"
    },
    {
      icon: Users,
      title: "Osebna obravnava",
      description: "vsakega posameznika"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Zakaj izbrati nas?</h2>
          <p className="text-slate text-lg">Zato, ker se za vaše pravice borimo strokovno, učinkovito in z osebnim pristopom</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow"
                data-testid={`benefit-${index}`}
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-white w-8 h-8" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{benefit.title}</h3>
                <p className="text-slate">{benefit.description}</p>
              </div>
            );
          })}
          <div className="text-center p-6 rounded-xl bg-gold-light hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-white w-8 h-8" />
            </div>
            <h3 className="font-semibold text-navy mb-2">Stopite v stik z nami</h3>
            <p className="text-slate">pomagali smo že številnim strankam do pravične odškodnine</p>
          </div>
        </div>
      </div>
    </section>
  );
}
