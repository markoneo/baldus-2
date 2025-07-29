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
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">
              100+ ZADOVOLJNIH STRANK
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Besede pohvale o naši prisotnosti
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Vaša predanost postavitvi strank na prvo mesto je očitna v vsakem 
              vidiku vaše spletne prisotnosti. Od uporabniku prijazen spletne strani.
            </p>
            
            {/* Large testimonial */}
            <div className="bg-orange-50 rounded-3xl p-8 relative">
              <div className="text-6xl text-orange-200 mb-4">"</div>
              <p className="text-xl text-gray-700 italic leading-relaxed mb-6">
                BALDUS odškodnine so mi pomagale pridobiti skoraj trikrat več, kot je bila 
                začetna ponudba zavarovalnice. Njihova strokovna pomoč je bila neprecenljiva.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face" 
              alt="Zadovoljna stranka" 
              className="w-full max-w-md rounded-3xl object-cover"
              data-testid="testimonial-image"
            />
          </div>
        </div>
        
        <div className="relative">
        </div>
          </div>
          <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700">
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
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
