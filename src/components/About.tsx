import React from 'react';
import { Heart, Globe, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Heritage
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Al-Salam Kitchen brings you the authentic tastes of Yemen, a land where ancient trade routes 
              converged and culinary traditions were born. Our recipes have been passed down through 
              generations, preserving the genuine flavors that make Yemeni cuisine truly unique.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              From the aromatic spices of our highland markets to the coastal influences of the Red Sea, 
              every dish tells a story of Yemen's rich cultural heritage and the warmth of its people.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Traditional Recipes</h3>
                <p className="text-sm text-gray-600">Authentic family recipes passed down for generations</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Globe className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Cultural Bridge</h3>
                <p className="text-sm text-gray-600">Connecting cultures through the universal language of food</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Family Tradition</h3>
                <p className="text-sm text-gray-600">Every meal prepared with love and family values</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg"
              alt="Traditional Middle Eastern cooking"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-xl shadow-lg">
              <p className="text-lg font-semibold mb-1">Est. 1995</p>
              <p className="text-sm opacity-90">Three decades of authentic flavors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;