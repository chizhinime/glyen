'use client';

import { useState } from 'react';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState('computer');

  const handleBookService = (serviceName: string) => {
    alert(`Thank you for booking our ${serviceName}! We will contact you shortly.`);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4 animate-fade-in-down">Our IT Services</h1>
          <p className="text-xl text-gray-700">Professional solutions for your technology needs</p>
        </header>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button 
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeService === 'computer' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
            }`}
            onClick={() => setActiveService('computer')}
          >
            Computer Repair & Maintenance
          </button>
          <button 
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeService === 'website' 
                ? 'bg-orange-500 text-white shadow-lg' 
                : 'bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50'
            }`}
            onClick={() => setActiveService('website')}
          >
            Website Development
          </button>
        </div>
        
        {/* Computer Services */}
        <div className={`service-content ${activeService === 'computer' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up">
              <div className="bg-blue-600 text-white py-5 px-6 text-center">
                <h2 className="text-xl font-bold">Hardware Services</h2>
              </div>
              <div className="p-6">
                <ul className="mb-6">
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Component replacement</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Hardware upgrades</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Diagnostic testing</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Cleaning & maintenance</span>
                  </li>
                  <li className="flex items-center py-2">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Peripheral setup</span>
                  </li>
                </ul>
                <div className="text-blue-600 text-2xl font-bold text-center mb-4">From ₦25,000</div>
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleBookService("Hardware Services")}
                >
                  Book This Service
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-blue-600 text-white py-5 px-6 text-center">
                <h2 className="text-xl font-bold">Software Services</h2>
              </div>
              <div className="p-6">
                <ul className="mb-6">
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>OS installation</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Virus removal</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Software troubleshooting</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Driver updates</span>
                  </li>
                  <li className="flex items-center py-2">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>System optimization</span>
                  </li>
                </ul>
                <div className="text-blue-600 text-2xl font-bold text-center mb-4">From ₦20,000</div>
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleBookService("Software Services")}
                >
                  Book This Service
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-blue-600 text-white py-5 px-6 text-center">
                <h2 className="text-xl font-bold">Networking Services</h2>
              </div>
              <div className="p-6">
                <ul className="mb-6">
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Wi-Fi setup</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Network troubleshooting</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Router configuration</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Internet connectivity</span>
                  </li>
                  <li className="flex items-center py-2">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Security setup</span>
                  </li>
                </ul>
                <div className="text-blue-600 text-2xl font-bold text-center mb-4">From ₦30,000</div>
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleBookService("Networking Services")}
                >
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Website Services */}
        <div className={`service-content ${activeService === 'website' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up">
              <div className="bg-orange-500 text-white py-5 px-6 text-center">
                <h2 className="text-xl font-bold">Starter Website</h2>
              </div>
              <div className="p-6">
                <ul className="mb-6">
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Up to 5 pages</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Basic SEO</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Contact form</span>
                  </li>
                  <li className="flex items-center py-2">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>1 month support</span>
                  </li>
                </ul>
                <div className="text-orange-500 text-2xl font-bold text-center mb-4">From ₦250,000</div>
                <button 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleBookService("Starter Website")}
                >
                  Book This Service
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-orange-500 text-white py-5 px-6 text-center">
                <h2 className="text-xl font-bold">Business Website</h2>
              </div>
              <div className="p-6">
                <ul className="mb-6">
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Up to 15 pages</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Custom design</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>CMS integration</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Advanced SEO</span>
                  </li>
                  <li className="flex items-center py-2">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>3 months support</span>
                  </li>
                </ul>
                <div className="text-orange-500 text-2xl font-bold text-center mb-4">From ₦500,000</div>
                <button 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleBookService("Business Website")}
                >
                  Book This Service
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-orange-500 text-white py-5 px-6 text-center">
                <h2 className="text-xl font-bold">E-commerce Website</h2>
              </div>
              <div className="p-6">
                <ul className="mb-6">
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Product catalog</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Shopping cart</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Payment integration</span>
                  </li>
                  <li className="flex items-center py-2 border-b border-gray-100">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Inventory management</span>
                  </li>
                  <li className="flex items-center py-2">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>6 months support</span>
                  </li>
                </ul>
                <div className="text-orange-500 text-2xl font-bold text-center mb-4">From ₦1,000,000</div>
                <button 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleBookService("E-commerce Website")}
                >
                  Book This Service
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