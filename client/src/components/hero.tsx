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
    <section 
      id="domov" 
      className="relative py-12 sm:py-16 lg:py-32 bg-white"
      style={{
        backgroundImage: `url('https://baldus.sirv.com/ChatGPT%20Image%20Jul%2030%2C%202025%2C%2010_07_51%20PM.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/90"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center relative z-10">
          <div>
            <div className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">
              PRAVIČNA OBRAVNAVA
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6 lg:mb-8 min-h-[1.2em]">
              {renderTypedText()}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 lg:mb-12 leading-relaxed">
              Utrpeli ste škodo, pa ne veste, kako uveljaviti svojo pravico? Pri Baldus odškodnine vam 
              pomagamo hitro, strokovno in brez tveganja do odškodnine, ki vam pripada.
            </p>
            
            <p className="text-sm text-gray-600 mb-3">
              Kontaktirajte nas za brezplačno analizo vašega primera.
            </p>
            
            {/* Email Input */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 lg:mb-8">
              <input 
                type="email" 
                placeholder="Vaš email naslov"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
              />
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors sm:w-auto w-full"
                data-testid="button-free-analysis"
                onClick={scrollToContact}
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-6 lg:mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">★</span>
                ))}
              </div>
              <span className="text-gray-600 text-sm sm:text-base">Ocenilo nas je več kot 100 zadovoljnih strank</span>
            </div>
            
            <div>
              <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg w-full sm:w-auto"
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
          <div className="relative mt-8 lg:mt-0">
            <img 
              src="https://baldus.sirv.com/Workers_Compensation_law_marketing_ideas.jpg" 
              alt="Workers compensation law marketing" 
              className="rounded-2xl lg:rounded-3xl shadow-lg w-full object-cover"
              data-testid="img-hero-consultation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}