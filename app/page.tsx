import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote: "Glyen repaired my computer quickly and professionally. Highly recommend their service!",
      name: "Chinedu A.",
    },
    {
      quote: "The coding journal I bought helped me stay organized with my projects. Excellent quality!",
      name: "Adaobi K.",
    },
    {
      quote: "They built my business website exactly as I envisioned. Very reliable and skilled team.",
      name: "Emeka O.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNextTestimonial = () => {
    setTestimonialIndex((testimonialIndex + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex(
      testimonialIndex === 0 ? testimonials.length - 1 : testimonialIndex - 1
    );
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-600">
            Welcome to <span className="text-orange-500">Glyen</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-700">
            Your one-stop tech brand for computer repair, website development, and digital & physical products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/services"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Our Services
            </Link>
            <Link
              href="/shop"
              className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Shop Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600">Why Choose Glyen</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Reliable Services</h3>
            <p className="text-gray-600">Fast and professional computer repair and website development services you can trust.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
            <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1M5 19h14a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Digital & Physical Products</h3>
            <p className="text-gray-600">Get coding journals, templates, and planners as PDFs or printed editions delivered to you.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Expert Team</h3>
            <p className="text-gray-600">Skilled in frontend, backend, and hardware solutions, ready to handle any tech challenge.</p>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600">Recent Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2 text-blue-600">Website for Local Business</h3>
              <p className="text-gray-600">Responsive and professional site built for a local company to showcase their services online.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2 text-orange-500">E-commerce Store Setup</h3>
              <p className="text-gray-600">Created an online store with payment integration for selling physical and digital products.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2 text-blue-600">Computer Repair Portfolio</h3>
              <p className="text-gray-600">Showcased completed repair jobs with before and after details for clients to see quality work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">What Our Clients Say</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
              <p className="text-xl mb-6">"{testimonials[testimonialIndex].quote}"</p>
              <h3 className="font-semibold text-lg">– {testimonials[testimonialIndex].name}</h3>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={handlePrevTestimonial}
                className="w-12 h-12 bg-white text-blue-600 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNextTestimonial}
                className="w-12 h-12 bg-white text-blue-600 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">Stay Updated</h2>
        <p className="mb-10 text-gray-700 max-w-2xl mx-auto">Subscribe to our newsletter for tech tips, product updates, and special offers.</p>
        <form className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-4 rounded-lg flex-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
            Subscribe
          </button>
        </form>
      </section>

      {/* Call-to-Actions */}
      <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">Ready to Get Started?</h2>
          <p className="mb-10 text-gray-700 max-w-2xl mx-auto">Explore our services or browse our products to find the perfect solution for your needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/services"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Book a Service
            </Link>
            <Link
              href="/shop"
              className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
      }
