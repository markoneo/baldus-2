import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import BaldusLogo from "./baldus-logo";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <BaldusLogo size="lg" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('domov')}
              className="text-navy hover:text-gold transition-colors font-medium"
              data-testid="nav-home"
            >
              Domov
            </button>
            <button
              onClick={() => scrollToSection('o-nas')}
              className="text-slate hover:text-gold transition-colors"
              data-testid="nav-about"
            >
              O nas
            </button>
            <button
              onClick={() => scrollToSection('storitve')}
              className="text-slate hover:text-gold transition-colors"
              data-testid="nav-services"
            >
              Storitve
            </button>
            <button
              onClick={() => scrollToSection('postopek')}
              className="text-slate hover:text-gold transition-colors"
              data-testid="nav-process"
            >
              Kako delujemo
            </button>
            <button
              onClick={() => scrollToSection('mnenja')}
              className="text-slate hover:text-gold transition-colors"
              data-testid="nav-testimonials"
            >
              Mnenja
            </button>
            <button
              onClick={() => scrollToSection('vprasanja')}
              className="text-slate hover:text-gold transition-colors"
              data-testid="nav-faq"
            >
              Vprašanja
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="text-slate hover:text-gold transition-colors"
              data-testid="nav-contact"
            >
              Kontakt
            </button>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-gold hover:bg-gold-light text-white font-medium"
              data-testid="button-call"
            >
              <a href="tel:+38641288455">
                <Phone className="mr-2 h-4 w-4" />
                041 288 455
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleMobileMenu}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-navy" />
            ) : (
              <Menu className="h-6 w-6 text-navy" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('domov')}
              className="block w-full text-left text-navy font-medium"
              data-testid="mobile-nav-home"
            >
              Domov
            </button>
            <button
              onClick={() => scrollToSection('o-nas')}
              className="block w-full text-left text-slate"
              data-testid="mobile-nav-about"
            >
              O nas
            </button>
            <button
              onClick={() => scrollToSection('storitve')}
              className="block w-full text-left text-slate"
              data-testid="mobile-nav-services"
            >
              Storitve
            </button>
            <button
              onClick={() => scrollToSection('postopek')}
              className="block w-full text-left text-slate"
              data-testid="mobile-nav-process"
            >
              Kako delujemo
            </button>
            <button
              onClick={() => scrollToSection('mnenja')}
              className="block w-full text-left text-slate"
              data-testid="mobile-nav-testimonials"
            >
              Mnenja
            </button>
            <button
              onClick={() => scrollToSection('vprasanja')}
              className="block w-full text-left text-slate"
              data-testid="mobile-nav-faq"
            >
              Vprašanja
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="block w-full text-left text-slate"
              data-testid="mobile-nav-contact"
            >
              Kontakt
            </button>
            <div className="pt-3">
              <Button
                asChild
                className="bg-gold text-white"
                data-testid="mobile-button-call"
              >
                <a href="tel:+38641288455">
                  <Phone className="mr-2 h-4 w-4" />
                  041 288 455
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
