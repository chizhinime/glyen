'use client';

import { useState } from 'react';

export default function ShopPage() {
  const [activeProduct, setActiveProduct] = useState('digital');

  const handleBuyProduct = (productName: string, productPrice: string) => {
    alert(`Added to cart: ${productName} - ${productPrice}`);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Our Products</h1>
          <p className="text-xl text-gray-700">Quality digital and physical products for all your needs</p>
        </header>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button 
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeProduct === 'digital' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
            }`}
            onClick={() => setActiveProduct('digital')}
          >
            Digital Products
          </button>
          <button 
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeProduct === 'physical' 
                ? 'bg-orange-500 text-white shadow-lg' 
                : 'bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50'
            }`}
            onClick={() => setActiveProduct('physical')}
          >
            Physical Products
          </button>
        </div>
        
        {/* Digital Products */}
        <div className={`${activeProduct === 'digital' ? 'block' : 'hidden'} animate-fade-in-up`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-blue-100 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Professional E-Book" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Professional E-Book</h3>
                <p className="text-gray-600 mb-4 flex-grow">Comprehensive guide to digital marketing strategies with practical examples and case studies.</p>
                <div className="text-blue-600 text-2xl font-bold mb-4">₦5,000</div>
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleBuyProduct("Professional E-Book", "₦5,000")}
                >
                  Buy Now
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{animationDelay: '0.1s'}}>
              <div className="h-48 bg-blue-100 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" 
                  alt="Premium UI Kit" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Premium UI Kit</h3>
                <p className="text-gray-600 mb-4 flex-grow">Collection of customizable UI components, templates, and icons for web and mobile applications.</p>
                <div className="text-blue-600 text-2xl font-bold mb-4">₦12,500</div>
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleBuyProduct("Premium UI Kit", "₦12,500")}
                >
                  Buy Now
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{animationDelay: '0.2s'}}>
              <div className="h-48 bg-blue-100 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Online Course Bundle" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Online Course Bundle</h3>
                <p className="text-gray-600 mb-4 flex-grow">Complete package with 10+ hours of video content, exercises, and certificates upon completion.</p>
                <div className="text-blue-600 text-2xl font-bold mb-4">₦18,000</div>
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleBuyProduct("Online Course Bundle", "₦18,000")}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Physical Products */}
        <div className={`${activeProduct === 'physical' ? 'block' : 'hidden'} animate-fade-in-up`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-orange-100 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80" 
                  alt="Wireless Keyboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Wireless Keyboard</h3>
                <p className="text-gray-600 mb-4 flex-grow">Ergonomic wireless keyboard with backlit keys, long battery life, and comfortable typing experience.</p>
                <div className="text-orange-500 text-2xl font-bold mb-4">₦15,000</div>
                <button 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleBuyProduct("Wireless Keyboard", "₦15,000")}
                >
                  Buy Now
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{animationDelay: '0.1s'}}>
              <div className="h-48 bg-orange-100 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1142&q=80" 
                  alt="Laptop Sleeve" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Laptop Sleeve</h3>
                <p className="text-gray-600 mb-4 flex-grow">Water-resistant laptop sleeve with padding protection, available in multiple sizes and colors.</p>
                <div className="text-orange-500 text-2xl font-bold mb-4">₦8,500</div>
                <button 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleBuyProduct("Laptop Sleeve", "₦8,500")}
                >
                  Buy Now
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{animationDelay: '0.2s'}}>
              <div className="h-48 bg-orange-100 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80" 
                  alt="Smart Watch" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Smart Watch</h3>
                <p className="text-gray-600 mb-4 flex-grow">Feature-rich smartwatch with health monitoring, notifications, and 7-day battery life.</p>
                <div className="text-orange-500 text-2xl font-bold mb-4">₦32,000</div>
                <button 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleBuyProduct("Smart Watch", "₦32,000")}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}