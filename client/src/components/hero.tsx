import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Vaša pravica, naša skrb – z nami do pravične odškodnine";
  const highlightStartIndex = fullText.indexOf("pravične odškodnine");

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // 50ms delay between each character

    return () => clearInterval(typingInterval);
  }, []);

  const renderTypedText = () => {
    const beforeHighlight = displayText.slice(0, highlightStartIndex);
    const highlightText = displayText.slice(highlightStartIndex);
    
    return (
      <>
        {beforeHighlight}
        {highlightText && (
          <span className="text-gray-700">{highlightText}</span>
        )}
        <span className="animate-pulse">|</span>
      </>
    );
  };

  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="domov" className="bg-white py-20 lg:py-32">
      <div className="container-modern">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">
              PRAVIČNA OBRAVNAVA
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8 min-h-[1.2em]">
              {renderTypedText()}
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg">
              Utrpeli ste škodo, pa ne veste, kako uveljaviti svojo pravico? Pri Baldus odškodnine vam 
              pomagamo hitro, strokovno in brez tveganja do odškodnine, ki vam pripada.
            </p>
            
            {/* Email Input */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-md">
              <input 
                type="email" 
                placeholder="Vaš email naslov"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors"
                data-testid="button-free-analysis"
                onClick={scrollToContact}
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">★</span>
                ))}
              </div>
              <span className="text-gray-600">Ocenilo nas je več kot 100 zadovoljnih strank</span>
            </div>
            
            <div className="mt-8">
              <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg"
                asChild
                data-testid="button-call-hero"
              >
                <a href="tel:+38641288455">
                  <Phone className="mr-2 h-4 w-4" />
                  Pokličite nas
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://baldus.sirv.com/Workers_Compensation_law_marketing_ideas.jpg" 
              alt="Workers compensation law marketing" 
              className="rounded-3xl shadow-lg w-full object-cover"
              data-testid="img-hero-consultation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}