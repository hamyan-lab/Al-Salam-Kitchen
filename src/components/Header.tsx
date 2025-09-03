import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils, ShoppingCart } from 'lucide-react';
import { useOrder } from '../context/OrderContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useOrder();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-2">
            <Utensils className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled ? 'text-amber-600' : 'text-white'
            }`} />
            <span className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Al-Salam Kitchen
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Dishes', id: 'dishes' },
              { name: 'About', id: 'about' },
              { name: 'Menu', id: 'menu' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 hover:text-amber-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Cart Icon for Desktop */}
            <div className="relative">
              <ShoppingCart className={`h-6 w-6 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Dishes', id: 'dishes' },
                { name: 'About', id: 'about' },
                { name: 'Menu', id: 'menu' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Cart Info for Mobile */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">Cart Items:</span>
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full font-semibold">
                    {getTotalItems()}
                  </span>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;