import { Star, ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marko",
      location: "Domžale",
      initial: "M",
      text: "Zahvaljujoč ekipi Baldus odškodnine sem po prometni nesreči prejel skoraj trikrat več, kot je bila začetna ponudba zavarovalnice."
    },
    {
      name: "Tatjana",
      location: "Ljubljana",
      initial: "T",
      text: "Imela sem zapleten primer z zdravniško napako. Zelo spoštljiv odnos in vrhunska pravna pomoč."
    },
    {
      name: "Ivan",
      location: "Koper",
      initial: "I",
      text: "Nisem verjel, da mi pripada odškodnina, a so mi dokazali nasprotno. Priporočam vsem, ki ne vedo, kako začeti."
    }
  ];

  return (
    <section id="mnenja" className="py-12 sm:py-16 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div>
            <div className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">
              100+ ZADOVOLJNIH STRANK
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 lg:mb-8">
              Zaupanje, potrjeno z izkušnjami
            </h2>
            
            {/* Large testimonial */}
            <div className="bg-orange-50 rounded-2xl lg:rounded-3xl p-6 sm:p-8 relative">
              <div className="text-6xl text-orange-200 mb-4">"</div>
              <p className="text-lg sm:text-xl text-gray-700 italic leading-relaxed mb-6">
                BALDUS odškodnine so mi pomagale pridobiti skoraj trikrat več, kot je bila 
                začetna ponudba zavarovalnice. Njihova strokovna pomoč je bila neprecenljiva.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 lg:mt-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-slate mb-6 italic text-sm sm:text-base">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-semibold">{testimonial.initial}</span>
                </div>
                <div>
                  <div className="font-semibold text-navy">{testimonial.name}</div>
                  <div className="text-sm text-slate">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}