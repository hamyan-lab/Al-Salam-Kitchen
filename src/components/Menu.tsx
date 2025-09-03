import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';
import { menuData, menuCategories } from '../data/menuData';


const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('mains');
  const { addToCart } = useOrder();

  const getItemsByCategory = (categoryId: string) => {
    return menuData.filter(item => item.category === categoryId);
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our extensive collection of traditional Yemeni dishes, each prepared with authentic spices and time-honored techniques
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`mx-2 mb-2 px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-amber-100 hover:text-amber-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {getItemsByCategory(activeCategory).map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="text-2xl font-bold text-amber-600 ml-6">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;