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
    <section id="mnenja" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div>
            <div className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">
              100+ ZADOVOLJNIH STRANK
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Besede pohvale o naši prisotnosti
            </h2>
            
            {/* Large testimonial */}
            <div className="bg-orange-50 rounded-3xl p-8 relative">
              <div className="text-6xl text-orange-200 mb-4">"</div>
              <p className="text-xl text-gray-700 italic leading-relaxed mb-6">
                BALDUS odškodnine so mi pomagale pridobiti skoraj trikrat več, kot je bila 
                začetna ponudba zavarovalnice. Njihova strokovna pomoč je bila neprecenljiva.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-slate mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
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