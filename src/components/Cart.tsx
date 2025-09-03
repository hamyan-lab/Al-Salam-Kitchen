import React, { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useOrder } from '../context/OrderContext';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, updateQuantity, removeFromCart, getTotalPrice, getTotalItems, clearCart } = useOrder();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    alert(`Order placed successfully! Total: $${getTotalPrice().toFixed(2)}\n\nThank you for choosing Al-Salam Kitchen!`);
    clearCart();
    setIsOpen(false);
  };

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40"
      >
        <ShoppingCart className="h-6 w-6" />
        {getTotalItems() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
            {getTotalItems()}
          </span>
        )}
      </button>

      {/* Cart Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Your Order</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                  <p className="text-gray-400 text-sm">Add some delicious dishes to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-amber-600 font-bold">${item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded-full transition-colors duration-300"
                        >
                          <Minus className="h-4 w-4 text-gray-600" />
                        </button>
                        
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded-full transition-colors duration-300"
                        >
                          <Plus className="h-4 w-4 text-gray-600" />
                        </button>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 hover:bg-red-100 rounded-full transition-colors duration-300 ml-2"
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-amber-600">${getTotalPrice().toFixed(2)}</span>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={clearCart}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Clear Cart
                  </button>
                  <button
                    onClick={handleCheckout}
                    className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;