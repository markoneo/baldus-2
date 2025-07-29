import BaldusLogo from "./baldus-logo";
import { Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <BaldusLogo className="text-white mb-6" />
            <p className="text-gray-300 mb-4 leading-relaxed">
              Strokovno uveljavljanje odškodnin za prometne nesreče, poškodbe pri delu, 
              zdravniške napake in druge škodne dogodke.
            </p>
            <p className="text-gray-300">
              Vaša pravica, naša skrb – z nami zanesljivo do pravične odškodnine.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Storitve</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('storitve')} 
                  className="hover:text-gold transition-colors text-left"
                  data-testid="footer-services-traffic"
                >
                  Prometne nesreče
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('storitve')} 
                  className="hover:text-gold transition-colors text-left"
                  data-testid="footer-services-work"
                >
                  Poškodbe pri delu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('storitve')} 
                  className="hover:text-gold transition-colors text-left"
                  data-testid="footer-services-medical"
                >
                  Zdravniške napake
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('storitve')} 
                  className="hover:text-gold transition-colors text-left"
                  data-testid="footer-services-public"
                >
                  Javne površine
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('storitve')} 
                  className="hover:text-gold transition-colors text-left"
                  data-testid="footer-services-moral"
                >
                  Moralna škoda
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Phone className="text-gold w-4 h-4" />
                <a 
                  href="tel:+38641288455" 
                  className="hover:text-gold transition-colors"
                  data-testid="footer-phone"
                >
                  +386 41 288 455
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="text-gold w-4 h-4" />
                <a 
                  href="mailto:info@baldus.si" 
                  className="hover:text-gold transition-colors"
                  data-testid="footer-email"
                >
                  info@baldus.si
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="text-gold w-4 h-4" />
                <span>pon–pet: 8.00–17.00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BALDUS Odškodnine. Vse pravice pridržane.</p>
        </div>
      </div>
    </footer>
  );
}
