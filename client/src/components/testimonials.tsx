import { Star } from "lucide-react";

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
    <section id="mnenja" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Mnenja strank</h2>
          <p className="text-slate text-lg">Kaj pravijo naše stranke o naših storitvah</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg" data-testid={`testimonial-${index}`}>
              <div className="flex items-center mb-4">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
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
