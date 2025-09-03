import React, { useState } from 'react';

const menuCategories = [
  {
    id: 'mains',
    name: 'Main Dishes',
    items: [
      { name: 'Mandi Lamb', description: 'Aromatic rice with tender lamb, traditional spices', price: '$18.99' },
      { name: 'Mandi Chicken', description: 'Fragrant basmati rice with perfectly spiced chicken', price: '$16.99' },
      { name: 'Saltah', description: 'Yemen\'s national stew with meat and vegetables', price: '$15.99' },
      { name: 'Fahsa', description: 'Slow-cooked lamb stew with traditional spices', price: '$19.99' },
      { name: 'Kabsa', description: 'Spiced rice dish with your choice of meat', price: '$17.99' },
      { name: 'Zurbian', description: 'Festive rice dish with lamb and aromatic spices', price: '$20.99' }
    ]
  },
  {
    id: 'appetizers',
    name: 'Appetizers',
    items: [
      { name: 'Sambusa', description: 'Crispy pastries filled with spiced meat or vegetables', price: '$6.99' },
      { name: 'Mutabbaq', description: 'Stuffed pancake with meat, eggs, and herbs', price: '$8.99' },
      { name: 'Fattayir', description: 'Traditional flatbread with various toppings', price: '$5.99' },
      { name: 'Yemeni Soup', description: 'Hearty soup with lentils and traditional spices', price: '$7.99' }
    ]
  },
  {
    id: 'beverages',
    name: 'Beverages',
    items: [
      { name: 'Adeni Tea', description: 'Traditional black tea with cardamom and milk', price: '$3.99' },
      { name: 'Arabic Coffee', description: 'Rich coffee with cardamom and saffron', price: '$4.99' },
      { name: 'Fresh Mint Lemonade', description: 'Refreshing blend of mint, lemon, and sparkling water', price: '$4.49' },
      { name: 'Tamarind Juice', description: 'Sweet and tangy traditional drink', price: '$4.99' }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      { name: 'Honey Sesame Balls', description: 'Sweet sesame balls drizzled with honey', price: '$5.99' },
      { name: 'Date Ma\'amoul', description: 'Traditional cookies filled with dates and nuts', price: '$6.99' },
      { name: 'Rosewater Pudding', description: 'Creamy pudding infused with rosewater', price: '$5.49' },
      { name: 'Baklava', description: 'Flaky pastry layered with nuts and honey', price: '$6.49' }
    ]
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('mains');

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
          {menuCategories
            .filter((category) => category.id === activeCategory)
            .map((category) => (
              <div key={category.id} className="space-y-6">
                {category.items.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                      <div className="text-2xl font-bold text-amber-600 ml-6">
                        {item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;