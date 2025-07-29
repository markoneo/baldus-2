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
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">Zakaj izbrati nas?</h2>
          <p className="text-slate text-base sm:text-lg">Zato, ker se za vaše pravice borimo strokovno, učinkovito in z osebnim pristopom</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="text-center p-4 sm:p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow"
                data-testid={`benefit-${index}`}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-semibold text-navy mb-2 text-sm sm:text-base">{benefit.title}</h3>
                <p className="text-slate text-sm sm:text-base">{benefit.description}</p>
              </div>
            );
          })}
          <div className="text-center p-4 sm:p-6 rounded-xl bg-gold-light hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="font-semibold text-navy mb-2 text-sm sm:text-base">Stopite v stik z nami</h3>
            <p className="text-slate text-sm sm:text-base">pomagali smo že številnim strankam do pravične odškodnine</p>
          </div>
        </div>
      </div>
    </section>
  );
}
