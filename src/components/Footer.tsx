import React from 'react';
import { Utensils, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Utensils className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">Al-Salam Kitchen</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Authentic Yemeni cuisine served with traditional hospitality and modern elegance.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-300 hover:text-amber-400 cursor-pointer transition-colors duration-300" />
              <Instagram className="h-6 w-6 text-gray-300 hover:text-amber-400 cursor-pointer transition-colors duration-300" />
              <Twitter className="h-6 w-6 text-gray-300 hover:text-amber-400 cursor-pointer transition-colors duration-300" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Menu', id: 'menu' },
                { name: 'Dishes', id: 'dishes' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => {
                      const section = document.getElementById(link.id);
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Services</h3>
            <ul className="space-y-2">
              {['Dine In', 'Take Out', 'Delivery', 'Catering', 'Private Events'].map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <p>123 Heritage Street<br />Cultural District<br />New York, NY 10001</p>
              <p>(555) 123-4567</p>
              <p>info@alsalamkitchen.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Al-Salam Kitchen. All rights reserved. Made with ❤️ for authentic Yemeni cuisine.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;