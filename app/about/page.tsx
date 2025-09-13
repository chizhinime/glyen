export default function AboutPage() {
  return (
    <section className="container mx-auto px-6 py-12 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">About <span className="text-orange-500">Glyen</span></h1>
        <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Glyen is your one-stop tech and productivity brand. We specialize in computer repair, website development, and delivering both digital and physical products that empower individuals and businesses to thrive.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 flex items-center">
            <span className="bg-blue-600 text-white p-2 rounded-lg mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            Our Mission
          </h2>
          <p className="text-gray-700">
            Our mission is to make technology accessible, reliable, and efficient for everyone. We aim to provide top-notch tech solutions and quality products that simplify life and boost productivity.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-orange-500 flex items-center">
            <span className="bg-orange-500 text-white p-2 rounded-lg mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </span>
            Our Values
          </h2>
          <p className="text-gray-700">
            At Glyen, we believe in quality, reliability, and innovation. We prioritize customer satisfaction, continuous learning, and delivering solutions that genuinely make a difference.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105">
            <div className="bg-blue-600 text-white p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-blue-600 mb-2">Computer Repair</h3>
            <p className="text-sm text-gray-600">Professional hardware and software solutions for all types of devices.</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105">
            <div className="bg-blue-600 text-white p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="font-semibold text-blue-600 mb-2">Website Development</h3>
            <p className="text-sm text-gray-600">Build modern, responsive, and user-friendly websites tailored to your needs.</p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105">
            <div className="bg-orange-500 text-white p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-orange-500 mb-2">Digital Products</h3>
            <p className="text-sm text-gray-600">Curated resources to help you stay organized, creative, and productive.</p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105">
            <div className="bg-orange-500 text-white p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="font-semibold text-orange-500 mb-2">Physical Products</h3>
            <p className="text-sm text-gray-600">Journals, planners, and other tools designed to enhance your workflow.</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-8 rounded-2xl text-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Whether you need technical support, a professional website, or a productivity tool, Glyen is here to help. Explore our products and services, and take the first step toward a smarter, more efficient workflow.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
          Explore Our Services
        </button>
      </div>

      <div className="text-center py-8">
        <div className="inline-flex space-x-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>
        <p className="mt-4 text-gray-600">Join hundreds of satisfied customers who trust Glyen for their tech and productivity needs.</p>
      </div>
    </section>
  );
}