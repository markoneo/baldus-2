import BaldusLogo from "./baldus-logo";
import { Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <BaldusLogo className="text-white mb-6" size="sm" />
            <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
              Strokovno uveljavljanje odškodnin za prometne nesreče, poškodbe pri delu, 
              zdravniške napake in druge škodne dogodke.
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              Vaša pravica, naša skrb – z nami zanesljivo do pravične odškodnine.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Storitve</h4>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
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
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Kontakt</h4>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
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
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Sledite nam</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/baldusodskodnine/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-gold-light transition-colors"
                data-testid="footer-instagram"
              >
                <Instagram className="text-white w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61578402737662" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-gold-light transition-colors"
                data-testid="footer-facebook"
              >
                <Facebook className="text-white w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 lg:mt-8 pt-6 lg:pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 BALDUS Odškodnine. Vse pravice pridržane.</p>
        </div>
      </div>
    </footer>
  );
}
