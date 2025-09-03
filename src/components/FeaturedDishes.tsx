import React from 'react';
import { Star } from 'lucide-react';
import { useOrder } from '../context/OrderContext';
import { menuData } from '../data/menuData';

const featuredDishes = menuData.filter(dish => 
  ['mandi-lamb', 'saltah', 'fahsa'].includes(dish.id)
);

const FeaturedDishes = () => {
  const { addToCart } = useOrder();

  return (
    <section id="dishes" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Signature Dishes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the authentic taste of Yemen through our most beloved traditional recipes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <div 
              key={dish.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full font-semibold">
                  ${dish.price.toFixed(2)}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{dish.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {dish.description}
                </p>
                
                <button 
                  onClick={() => addToCart(dish)}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;