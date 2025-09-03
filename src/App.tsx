import React from 'react';
import { OrderProvider } from './context/OrderContext';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedDishes from './components/FeaturedDishes';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <OrderProvider>
      <div className="min-h-screen bg-amber-50">
        <Header />
        <Hero />
        <FeaturedDishes />
        <About />
        <Menu />
        <Contact />
        <Footer />
        <Cart />
      </div>
    </OrderProvider>
  );
}

export default App;