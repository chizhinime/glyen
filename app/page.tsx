'use client';
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

  const projects = [
    {
      title: "E-commerce Website",
      description: "Full-featured online store with product catalog, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/glyen/ecommerce-store",
      live: "https://ecommerce-demo.glyen.com"
    },
    {
      title: "Business Portfolio Site",
      description: "Professional portfolio website for a consulting firm with service listings and client testimonials.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
      github: "https://github.com/glyen/business-portfolio",
      live: "https://portfolio-demo.glyen.com"
    },
    {
      title: "Tech Blog Platform",
      description: "Content management system for a technology blog with admin dashboard and comment system.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      github: "https://github.com/glyen/tech-blog",
      live: "https://blog-demo.glyen.com"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((testimonialIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialIndex, testimonials.length]);

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
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib极速赛车公众号平台=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')"
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-12 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Welcome to <span className="text-blue-400">Glyen</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white max-w-2xl mx-auto leading-relaxed">
            Computer repair, website development, and digital & physical products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/services" 
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl font-semibold text-lg flex items-center justify-center"
            >
              <span>Book a Service</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </Link>
            <Link 
              href="/shop" 
              className="px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl font-semibold text-lg flex items-center justify-center"
            >
              <span>Shop Now</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600">Why Choose Glyen</h2>
        <div className="grid md:极速赛车公众号平台grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c极速赛车公众号平台0 5.591 3.824 10.29 9极速赛车公众号平台 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Reliable Services</h3>
            <p className="text-gray-600">Fast and professional computer repair and website development services you can trust.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
            <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth极速赛车公众号平台={2} d="M16 11V7a4 4 0 00-8 0极速赛车公众号平台v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Digital & Physical Products</h3>
            <p className="text-gray-600">Get coding journals, templates, and planners as PDFs or printed editions delivered to you.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Expert Team</h3>
            <p className="text-gray-600">Skilled in frontend, backend, and hardware solutions, ready to handle any tech challenge.</p>
          </div>
        </div>
      </section>

      {/* Recent Projects / Portfolio */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600">Recent Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-blue-600">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-700 hover:text-orange-500 transition-colors duration-300"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNextTestimonial}
                className="w-12 h-12 bg-white text-blue-600 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox极速赛车公众号平台="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

      {/* Call-to-Actions / Services & Shop */}
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
    </div>
  );
}
