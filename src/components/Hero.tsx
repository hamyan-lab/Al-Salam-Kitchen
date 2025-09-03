import React from 'react';
import { ChefHat } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
          alt="Traditional Middle Eastern cuisine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <ChefHat className="h-16 w-16 text-amber-400 mr-4" />
          <h1 className="text-5xl lg:text-7xl font-bold">
            Al-Salam Kitchen
          </h1>
        </div>
        
        <p className="text-xl lg:text-2xl mb-8 font-light leading-relaxed">
          Authentic Yemeni Flavors from the Heart of Arabia
        </p>
        
        <p className="text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
          Experience the rich traditions of Yemeni cuisine through our carefully crafted dishes, 
          passed down through generations and prepared with love and authentic spices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => {
              const menuSection = document.getElementById('menu');
              if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Our Menu
          </button>
          <button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Our Story
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;