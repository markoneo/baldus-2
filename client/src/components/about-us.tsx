import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  const commitments = [
    "Pravno strokovno zastopanje z dokazano uspešnostjo",
    "Ljudem prijazen pristop – razumemo stisko in ukrepamo odgovorno",
    "Poštenost, preglednost in jasna komunikacija"
  ];

  return (
    <section id="o-nas" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">
              ORGANIZIRANO DELOVANJE
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Ostanite organizirani z našo pravno podporo
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Od kalendarja in komunikacije do upravljanja dokumentov in poročanja o primerih, 
              spremljamo vsako podrobnost, da ne zaostanete.
            </p>
            
            <div className="space-y-6 mb-8">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start space-x-4" data-testid={`commitment-${index}`}>
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-white w-4 h-4" />
                  </div>
                  <p className="text-gray-700 text-lg">{commitment}</p>
                </div>
              ))}
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center">
              Več o upravljanju primerov
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div>
            {/* Mobile/Dashboard Mockup */}
            <div className="relative">
              <div className="bg-gray-900 rounded-3xl p-8 relative overflow-hidden">
                <div className="bg-white rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Pregled primerov</h3>
                    <div className="text-sm text-gray-500">Ta teden</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">12</div>
                      <div className="text-sm text-gray-600">Aktivni primeri</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">8</div>
                      <div className="text-sm text-gray-600">Rešeni primeri</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating profile */}
                <div className="absolute top-8 right-8 w-20 h-20 bg-white rounded-full p-1">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                    className="w-full h-full rounded-full object-cover" 
                    alt="Profile"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg border">
                <span className="text-sm font-medium">Zanesljivost</span>
              </div>
              <div className="absolute bottom-4 -left-4 bg-white rounded-full px-4 py-2 shadow-lg border">
                <span className="text-sm font-medium">Profesionalnost</span>
              </div>
              <div className="absolute top-1/2 -right-8 bg-white rounded-full px-4 py-2 shadow-lg border">
                <span className="text-sm font-medium">Hitrost</span>
              </div>
            </div>
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
