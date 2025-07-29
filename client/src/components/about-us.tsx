import { CheckCircle } from "lucide-react";

export default function AboutUs() {
  const commitments = [
    "Pravno strokovno zastopanje z dokazano uspešnostjo",
    "Ljudem prijazen pristop – razumemo stisko in ukrepamo odgovorno",
    "Poštenost, preglednost in jasna komunikacija"
  ];

  return (
    <section id="o-nas" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional legal team consultation" 
              className="rounded-xl shadow-lg w-full"
              data-testid="img-about"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">Kdo smo?</h2>
            <p className="text-slate mb-6 leading-relaxed">
              Ekipa Baldus odškodnine je neodvisna ekipa pravnih strokovnjakov, ki si prizadeva za 
              pošteno obravnavo vseh, ki so utrpeli telesno, psihično ali materialno škodo.
            </p>
            <p className="text-slate mb-8 leading-relaxed">
              Vemo, da je pot do odškodnine lahko stresna, zato poskrbimo, da vas strokovno in 
              zanesljivo vodimo skozi celoten postopek.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-navy mb-4">Naša zaveza:</h3>
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start space-x-3" data-testid={`commitment-${index}`}>
                  <CheckCircle className="text-gold w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="text-slate">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
