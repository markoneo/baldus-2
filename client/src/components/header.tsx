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
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <BaldusLogo size="sm" className="flex-shrink-0" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('domov')}
              className="text-gray-600 hover:text-navy transition-colors font-medium text-sm"
              data-testid="nav-home"
            >
              Domov
            </button>
            <button
              onClick={() => scrollToSection('o-nas')}
              className="text-gray-600 hover:text-navy transition-colors font-medium text-sm"
              data-testid="nav-about"
            >
              O nas
            </button>
            <button
              onClick={() => scrollToSection('storitve')}
              className="text-gray-600 hover:text-navy transition-colors font-medium text-sm"
              data-testid="nav-services"
            >
              Storitve
            </button>
            <button
              onClick={() => scrollToSection('postopek')}
              className="text-gray-600 hover:text-navy transition-colors font-medium text-sm"
              data-testid="nav-process"
            >
              Postopek
            </button>
            <button
              onClick={() => scrollToSection('mnenja')}
              className="text-gray-600 hover:text-navy transition-colors font-medium text-sm"
              data-testid="nav-testimonials"
            >
              Mnenja
            </button>
            <button
              onClick={() => scrollToSection('vprasanja')}
              className="text-gray-600 hover:text-navy transition-colors font-medium text-sm"
              data-testid="nav-faq"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="text-gray-600 hover:text-navy transition-colors font-medium text-sm"
              data-testid="nav-contact"
            >
              Kontakt
            </button>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors text-sm"
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
            className="md:hidden"
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
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('domov')}
              className="block w-full text-left text-gray-700 font-medium py-2 text-lg"
              data-testid="mobile-nav-home"
            >
              Domov
            </button>
            <button
              onClick={() => scrollToSection('o-nas')}
              className="block w-full text-left text-gray-600 py-2 text-lg"
              data-testid="mobile-nav-about"
            >
              O nas
            </button>
            <button
              onClick={() => scrollToSection('storitve')}
              className="block w-full text-left text-gray-600 py-2 text-lg"
              data-testid="mobile-nav-services"
            >
              Storitve
            </button>
            <button
              onClick={() => scrollToSection('postopek')}
              className="block w-full text-left text-gray-600 py-2 text-lg"
              data-testid="mobile-nav-process"
            >
              Kako delujemo
            </button>
            <button
              onClick={() => scrollToSection('mnenja')}
              className="block w-full text-left text-gray-600 py-2 text-lg"
              data-testid="mobile-nav-testimonials"
            >
              Mnenja
            </button>
            <button
              onClick={() => scrollToSection('vprasanja')}
              className="block w-full text-left text-gray-600 py-2 text-lg"
              data-testid="mobile-nav-faq"
            >
              Vprašanja
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="block w-full text-left text-gray-600 py-2 text-lg"
              data-testid="mobile-nav-contact"
            >
              Kontakt
            </button>
            <div className="pt-4">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-full text-lg"
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
