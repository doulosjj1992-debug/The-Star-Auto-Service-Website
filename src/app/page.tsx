'use client';

import dynamic from 'next/dynamic';

// Dynamically import AutoLoops to reduce initial bundle size
const AutoLoops = dynamic(() => import('../components/AutoLoops'), {
  ssr: false,
  loading: () => (
    <div className="h-16 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900 animate-pulse" />
  ),
});

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 shadow-lg shadow-yellow-500/20" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="flex items-center gap-3" aria-label="The Star Auto Service Home">
              <span className="text-yellow-400 text-xl md:text-2xl font-black tracking-wider hover:scale-105 transition-transform">
                ★ THE STAR AUTO SERVICE
              </span>
            </a>
            <ul className="hidden md:flex gap-8" role="menubar">
              <li role="none"><a href="#home" className="text-white hover:text-yellow-400 font-bold transition-colors" role="menuitem">Home</a></li>
              <li role="none"><a href="#services" className="text-white hover:text-yellow-400 font-bold transition-colors" role="menuitem">Services</a></li>
              <li role="none"><a href="#about" className="text-white hover:text-yellow-400 font-bold transition-colors" role="menuitem">About</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* AutoLoops Component - Scrolling Brands/Services */}
      <div className="mt-20">
        <AutoLoops />
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-black" aria-hidden="true" />
        
        <div className="relative z-10 text-center px-4">
          <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-yellow-400 drop-shadow-[0_0_30px_rgba(251,191,36,0.8)]">
            THE STAR AUTO SERVICE
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-white font-light tracking-wide">
            Your Neighborhood Mechanic Shop
          </p>
          <a 
            href="tel:9722312886"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-black hover:scale-110 transition-transform shadow-lg shadow-yellow-500/50"
            aria-label="Call us at (972) 231-2886"
          >
            📞 (972) 231-2886
          </a>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-16 md:py-20 px-4 bg-gradient-to-b from-black via-blue-900 to-black" aria-labelledby="mission-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="mission-heading" className="text-3xl md:text-4xl lg:text-5xl font-black text-yellow-400 mb-8">Our Mission</h2>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300">
            At The Star Auto Service, we are dedicated to providing exceptional automotive care with integrity, 
            expertise, and a commitment to excellence. For years, we&apos;ve been the trusted choice for Richardson 
            families, delivering honest assessments, quality repairs, and outstanding customer service. We treat 
            every vehicle as if it were our own, ensuring your safety and satisfaction on every journey.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 px-4 bg-black" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-black text-yellow-400 mb-12 text-center">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: '🔋', title: 'Battery Services', desc: 'Professional battery testing, replacement, and maintenance.' },
              { icon: '🛢️', title: 'Oil Changes', desc: 'Full-service oil changes using premium oils and filters.' },
              { icon: '⚡', title: 'Electrical Diagnostics', desc: 'Advanced diagnostic equipment to identify electrical issues.' },
              { icon: '🔩', title: 'Engine Replacement', desc: 'Complete engine replacement services with warranty-backed parts.' },
              { icon: '🚗', title: 'Tire Rotation', desc: 'Regular tire rotation to ensure even wear and extend tire life.' },
              { icon: '❄️', title: 'Heating & Cooling', desc: 'Complete HVAC system service including A/C repair.' },
            ].map((service, index) => (
              <article 
                key={index}
                className="bg-gradient-to-br from-blue-900 to-blue-950 p-6 rounded-2xl hover:scale-105 transition-transform shadow-lg border border-yellow-400/20"
              >
                <div className="text-4xl md:text-5xl mb-4" aria-hidden="true">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-yellow-400 mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-300">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black via-blue-900 to-black" aria-labelledby="reviews-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="reviews-heading" className="text-3xl md:text-4xl lg:text-5xl font-black text-yellow-400 mb-12 text-center">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                text: 'Quickly diagnosed and repaired my vehicle for a very reasonable price. Additionally, they aired my tires up without me asking them to do so. That may not be a big deal to some, but it meant a lot to me and demonstrated their concern for details.',
                author: 'Trish Hammons'
              },
              {
                text: 'This company has helped maintain my two different cars for 6 years. Even would take me home while car repairs happened and returned me to the service center to pick up my car! Family values. Honest assessment. Good price. Quality service.',
                author: 'Beth Nystrom'
              },
              {
                text: 'I have found my car\'s new mechanics. They fixed the mess that another mechanic made. I\'m going to go back get the air conditioning worked on. And they\'re even going to do a little bit of body work for me.',
                author: 'Laura Dorsett'
              }
            ].map((review, index) => (
              <article 
                key={index}
                className="bg-white/95 text-gray-800 p-6 md:p-8 rounded-2xl shadow-xl"
              >
                <div className="text-yellow-400 text-xl md:text-2xl mb-4" role="img" aria-label="Rated 5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="italic mb-4 text-sm md:text-base text-gray-700">&ldquo;{review.text}&rdquo;</p>
                <p className="font-bold text-blue-900">- {review.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-20 px-4 bg-gray-100 text-gray-900" aria-labelledby="location-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="location-heading" className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-900 mb-12 text-center">Visit Us Today</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">📍 Address</h3>
                <address className="not-italic text-base md:text-lg">
                  900 E Belt Line Rd<br />
                  Richardson, TX 75081
                </address>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">🕐 Hours</h3>
                <p className="text-base md:text-lg">
                  Monday - Friday: 8 AM – 6:30 PM<br />
                  Saturday: 8 AM – 4 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            
            <div className="h-80 md:h-96 bg-gray-300 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.9282!2d-96.7467!3d32.9274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f4e5e5e5e5e%3A0x1234567890abcdef!2s900%20E%20Belt%20Line%20Rd%2C%20Richardson%2C%20TX%2075081!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Star Auto Service Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4" role="contentinfo">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl md:text-3xl font-black text-yellow-400 mb-6">★ THE STAR AUTO SERVICE</div>
          
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8" aria-label="Footer navigation">
            <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#services" className="hover:text-yellow-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="tel:9722312886" className="hover:text-yellow-400 transition-colors">Call Us</a>
          </nav>
          
          <div className="text-gray-400 text-xs md:text-sm space-y-1">
            <p>© 2024 The Star Auto Service. All rights reserved.</p>
            <p>900 E Belt Line Rd, Richardson, TX 75081 | (972) 231-2886</p>
            <p>Licensed & Insured | ASE Certified Technicians</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <a
        href="tel:9722312886"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-3 md:px-6 md:py-4 rounded-full font-black shadow-lg shadow-yellow-500/50 hover:scale-110 transition-transform z-50 text-sm md:text-base"
        aria-label="Contact us by phone"
      >
        Contact Us
      </a>
    </div>
  );
}
