import { MenuItem } from '../types';

export const menuData: MenuItem[] = [
  // Main Dishes
  {
    id: 'mandi-lamb',
    name: 'Mandi Lamb',
    description: 'Aromatic rice with tender lamb, traditional spices',
    price: 18.99,
    category: 'mains',
    image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg'
  },
  {
    id: 'mandi-chicken',
    name: 'Mandi Chicken',
    description: 'Fragrant basmati rice with perfectly spiced chicken',
    price: 16.99,
    category: 'mains'
  },
  {
    id: 'saltah',
    name: 'Saltah',
    description: 'Yemen\'s national stew with meat and vegetables',
    price: 15.99,
    category: 'mains',
    image: 'https://images.pexels.com/photos/6544197/pexels-photo-6544197.jpeg'
  },
  {
    id: 'fahsa',
    name: 'Fahsa',
    description: 'Slow-cooked lamb stew with traditional spices',
    price: 19.99,
    category: 'mains',
    image: 'https://images.pexels.com/photos/6659765/pexels-photo-6659765.jpeg'
  },
  {
    id: 'kabsa',
    name: 'Kabsa',
    description: 'Spiced rice dish with your choice of meat',
    price: 17.99,
    category: 'mains'
  },
  {
    id: 'zurbian',
    name: 'Zurbian',
    description: 'Festive rice dish with lamb and aromatic spices',
    price: 20.99,
    category: 'mains'
  },

  // Appetizers
  {
    id: 'sambusa',
    name: 'Sambusa',
    description: 'Crispy pastries filled with spiced meat or vegetables',
    price: 6.99,
    category: 'appetizers'
  },
  {
    id: 'mutabbaq',
    name: 'Mutabbaq',
    description: 'Stuffed pancake with meat, eggs, and herbs',
    price: 8.99,
    category: 'appetizers'
  },
  {
    id: 'fattayir',
    name: 'Fattayir',
    description: 'Traditional flatbread with various toppings',
    price: 5.99,
    category: 'appetizers'
  },
  {
    id: 'yemeni-soup',
    name: 'Yemeni Soup',
    description: 'Hearty soup with lentils and traditional spices',
    price: 7.99,
    category: 'appetizers'
  },

  // Beverages
  {
    id: 'adeni-tea',
    name: 'Adeni Tea',
    description: 'Traditional black tea with cardamom and milk',
    price: 3.99,
    category: 'beverages'
  },
  {
    id: 'arabic-coffee',
    name: 'Arabic Coffee',
    description: 'Rich coffee with cardamom and saffron',
    price: 4.99,
    category: 'beverages'
  },
  {
    id: 'mint-lemonade',
    name: 'Fresh Mint Lemonade',
    description: 'Refreshing blend of mint, lemon, and sparkling water',
    price: 4.49,
    category: 'beverages'
  },
  {
    id: 'tamarind-juice',
    name: 'Tamarind Juice',
    description: 'Sweet and tangy traditional drink',
    price: 4.99,
    category: 'beverages'
  },

  // Desserts
  {
    id: 'honey-sesame',
    name: 'Honey Sesame Balls',
    description: 'Sweet sesame balls drizzled with honey',
    price: 5.99,
    category: 'desserts'
  },
  {
    id: 'date-maamoul',
    name: 'Date Ma\'amoul',
    description: 'Traditional cookies filled with dates and nuts',
    price: 6.99,
    category: 'desserts'
  },
  {
    id: 'rosewater-pudding',
    name: 'Rosewater Pudding',
    description: 'Creamy pudding infused with rosewater',
    price: 5.49,
    category: 'desserts'
  },
  {
    id: 'baklava',
    name: 'Baklava',
    description: 'Flaky pastry layered with nuts and honey',
    price: 6.49,
    category: 'desserts'
  }
];

export const menuCategories = [
  { id: 'mains', name: 'Main Dishes' },
  { id: 'appetizers', name: 'Appetizers' },
  { id: 'beverages', name: 'Beverages' },
  { id: 'desserts', name: 'Desserts' }
];