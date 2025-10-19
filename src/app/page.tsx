'use client';

import { useState, useEffect } from 'react';
import './star-auto.css';

export default function Home() {
  const [activePage, setActivePage] = useState<'home' | 'services' | 'about'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showPage = (pageName: 'home' | 'services' | 'about') => {
    setActivePage(pageName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openContactModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeContactModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const sendContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    const subject = encodeURIComponent('New Contact from Website');
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\n` +
      `Email: ${formData.get('email')}\n` +
      `Phone: ${formData.get('phone')}\n` +
      `Message: ${formData.get('message')}`
    );
    
    window.location.href = `mailto:thestarautoservice1@gmail.com?subject=${subject}&body=${body}`;
    
    closeContactModal();
    form.reset();
    
    const successMsg = document.createElement('div');
    successMsg.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #1e3a8a, #fbbf24);
      color: white;
      padding: 30px 50px;
      border-radius: 20px;
      font-size: 1.5rem;
      font-weight: bold;
      z-index: 3000;
      animation: successPop 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    `;
    successMsg.textContent = 'Message Sent Successfully!';
    document.body.appendChild(successMsg);
    
    setTimeout(() => {
      successMsg.remove();
    }, 3000);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const page = (window.location.hash || '#home').slice(1) as 'home' | 'services' | 'about';
      if (['home', 'services', 'about'].includes(page)) {
        setActivePage(page);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>

    <a href="#main" className="skip-link">Skip to main content</a>

    <a href="#main" className="sr-only-focusable">Skip to content</a>

    {/* Navigation */}
    <nav>
        <div className="nav-container">
  <a href="#home" className="logo" aria-label="The Star Auto Service — Home">
    <img src="/assets/logo-star.svg"
         alt="The Star Auto Service logo"
         height="36"
         decoding="async"
         loading="lazy" />
  </a>

  <ul className="nav-links">
    <li><a href="#home" onClick={(e) => { e.preventDefault(); showPage('home'); }}>Home</a></li>
    <li><a href="#services" onClick={(e) => { e.preventDefault(); showPage('services'); }}>Services</a></li>
    <li><a href="#about" onClick={(e) => { e.preventDefault(); showPage('about'); }}>About</a></li>
  </ul>
</div>

    </nav>
    <main id="main">


    {/* Floating Contact Button */}
    <div className="floating-contact" onClick={openContactModal}>
        Contact Us
    </div>

    {/* Contact Modal */}
    <div className={`contact-modal ${isModalOpen ? 'show' : ''}`} id="contactModal">
        <span className="close-modal" onClick={closeContactModal}>×</span>
        <form className="contact-form" onSubmit={sendContact}>
            <h2>Get In Touch</h2>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Your Phone" />
            <textarea name="message" placeholder="How can we help you?" rows={4} required />
            <button type="submit">Send Message</button>
        </form>
    </div>

    {/* Home Page */}
    <div id="home" className={`page ${activePage === 'home' ? 'active' : ''}`}>
        {/* Hero Section with Racing Cars */}
        <section className="hero">
            <div className="racing-container">
                <div className="mountain-road"></div>
                <div className="road"></div>
                
                {/* Racing Cars */}
                <div className="car car1">
                    <div className="car-body"></div>
                </div>

                <div className="car car2">
                    <div className="car-body"></div>
                </div>
                
                {/* Speed Lines */}
                <div className="speed-lines">
                    <div className="speed-line"></div>
                    <div className="speed-line"></div>
                    <div className="speed-line"></div>
                    <div className="speed-line"></div>
                </div>
            </div>
            
            <div className="hero-overlay"></div>
            
            <div className="hero-content">
                <h1 className="hero-title">The Star Auto Service</h1>
                <p className="hero-subtitle">Your Neighborhood Mechanic Shop</p>
                <a href="tel:9722312886" className="phone-number">📞 (972) 231-2886</a>
            </div>
        </section>

{/* Featured Image (between Hero and Our Mission) */}
<section className="feature-image" aria-label="Shop exterior">
  <div className="feature-image__inner">
    <img
      src="/assets/mission-banner-1920.jpg"
      srcSet="/assets/mission-banner-1280.jpg 1280w,
              /assets/mission-banner-1920.jpg 1920w,
              /assets/mission-banner-2560.jpg 2560w"
      sizes="(max-width: 768px) 100vw, 1200px"
      alt="The Star Auto Service exterior and forecourt"
      className="feature-image__img"
      loading="lazy"
      decoding="async"
      width="1920"
      height="1080"
    />
  </div>
</section>


        {/* Mission Section */}
        <section className="mission">
            <div className="mission-container">
                <h2>Our Mission</h2>
                <p className="mission-text">
                    At The Star Auto Service, we are dedicated to providing exceptional automotive care with integrity, expertise, and a commitment to excellence. For years, we&apos;ve been the trusted choice for Richardson families, delivering honest assessments, quality repairs, and outstanding customer service. We treat every vehicle as if it were our own, ensuring your safety and satisfaction on every journey. Our bilingual team brings technical mastery and genuine care to every service, building lasting relationships one repair at a time.
                </p>
            </div>
        </section>

        {/* Reviews Section */}
        <section className="reviews">
            <div className="reviews-container">
                <h2>What Our Customers Say</h2>
                <div className="reviews-grid">
                    <div className="review-card">
                        <div className="review-stars" aria-hidden="true">★★★★★</div>
                        <span className="sr-only">5 out of 5 stars</span>


                        <p className="review-text">
                            Quickly diagnosed and repaired my vehicle for a very reasonable price. Additionally, they aired my tires up without me asking them to do so. That may not be a big deal to some, but it meant a lot to me and demonstrated their concern for details. I will definitely take my vehicle there again.
                        </p>
                        <p className="review-author">- Trish Hammons</p>
                    </div>
                    <div className="review-card">
                        <div className="review-stars" aria-hidden="true">★★★★★</div>
                        <span className="sr-only">5 out of 5 stars</span>


                        <p className="review-text">
                            This company has helped maintain my two different cars for 6 years. Even would take me home while car repairs happened and returned me to the service center to pick up my car! Family values. Honest assessment. Good price. Quality service. Never a complaint re work done. Wonderful people. Thanks!!!!
                        </p>
                        <p className="review-author">- Beth Nystrom</p>
                    </div>
                    <div className="review-card">
                        <div className="review-stars" aria-hidden="true">★★★★★</div>
                        <span className="sr-only">5 out of 5 stars</span>


                        <p className="review-text">
                            I have found my car&apos;s new mechanics. They fixed the mess that another mechanic made. I&apos;m going to go back get the air conditioning worked on. And they&apos;re even going to do a little bit of body work for me. And all with a song in the voice and a smile on their face. See these guys trust these guys. I love these guys!!
                        </p>
                        <p className="review-author">- Laura Dorsett</p>
                        
                    </div>
                </div>
                
            </div>
            
        </section>

        {/* Location Section */}
        <section className="location">
            <div className="location-container">
                <div className="location-info">
                    <h2>Visit Us Today</h2>
                    <div className="address-block">
                        <h3 style={{color: 'var(--primary-blue)', marginBottom: '0.5rem', fontSize: '1.5rem'}}>📍 Address</h3>
                        <p style={{fontSize: '1.2rem', color: 'var(--dark-grey)'}}>900 E Belt Line Rd<br />Richardson, TX 75081</p>
                    </div>
                    <div className="hours-block">
                        <h3 style={{color: 'var(--primary-blue)', marginBottom: '0.5rem', fontSize: '1.5rem'}}>🕐 Hours</h3>
                        <p style={{fontSize: '1.2rem', color: 'var(--dark-grey)'}}>Monday - Friday: 8 AM – 6:30 PM<br />
                        Saturday: 8 AM – 4 PM<br />
                        Sunday: Closed</p>
                    </div>
                </div>
                <div className="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.9282!2d-96.7467!3d32.9274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f4e5e5e5e5e%3A0x1234567890abcdef!2s900%20E%20Belt%20Line%20Rd%2C%20Richardson%2C%20TX%2075081!5e0!3m2!1sen!2sus!4v1234567890123" 
                        allowFullScreen={true}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    </div>

    {/* Services Page */}
    <div id="services" className={`page ${activePage === 'services' ? 'active' : ''}`}>
        <section className="services-section">
            <div className="services-container">
                <h1 className="services-title">Our Services</h1>
                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-image">
                            <div className="service-visual">
                                <div className="battery-visual"></div>
                            </div>
                        </div>
                        <div className="service-content">
                            <h3 className="service-name">Battery Services</h3>
                            <p className="service-description">Professional battery testing, replacement, and maintenance. We ensure your vehicle starts reliably every time with top-quality batteries and expert installation.</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-image">
                            <div className="service-visual">
                                <div className="oil-visual">
                                    <div className="oil-drop"></div>
                                    <div className="oil-container"></div>
                                </div>
                            </div>
                        </div>
                        <div className="service-content">
                            <h3 className="service-name">Oil Changes</h3>
                            <p className="service-description">Full-service oil changes using premium oils and filters. Regular maintenance to keep your engine running smoothly and extend its life.</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-image">
                            <div className="service-visual">
                                <div className="electrical-visual">
                                    <div className="circuit-board">
                                        <div className="circuit-line"></div>
                                        <div className="circuit-line"></div>
                                        <div className="circuit-line"></div>
                                        <div className="circuit-node"></div>
                                        <div className="circuit-node"></div>
                                        <div className="circuit-node"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-content">
                            <h3 className="service-name">Electrical Diagnostics</h3>
                            <p className="service-description">Advanced diagnostic equipment to identify and resolve electrical issues. From simple fixes to complex wiring problems, we&apos;ve got you covered.</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-image">
                            <div className="service-visual">
                                <div className="engine-visual">
                                    <div className="engine-block">
                                        <div className="engine-piston"></div>
                                        <div className="engine-piston"></div>
                                        <div className="engine-piston"></div>
                                        <div className="engine-piston"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-content">
                            <h3 className="service-name">Engine Replacement</h3>
                            <p className="service-description">Complete engine replacement services with warranty-backed parts. Expert installation and testing to get you back on the road safely.</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-image">
                            <div className="service-visual">
                                <div className="tire-visual">
                                    <div className="tire-tread"></div>
                                    <div className="tire-tread"></div>
                                    <div className="tire-tread"></div>
                                    <div className="tire-tread"></div>
                                </div>
                            </div>
                        </div>
                        <div className="service-content">
                            <h3 className="service-name">Tire Rotation</h3>
                            <p className="service-description">Regular tire rotation to ensure even wear and extend tire life. Includes pressure check and visual inspection for optimal safety.</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-image">
                            <div className="service-visual">
                                <div className="hvac-visual">
                                    <div className="temp-gauge">
                                        <div className="temp-needle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-content">
                            <h3 className="service-name">Heating & Cooling</h3>
                            <p className="service-description">Complete HVAC system service including A/C repair, heater maintenance, and refrigerant recharge. Stay comfortable year-round.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    {/* About Page */}
    <div id="about" className={`page ${activePage === 'about' ? 'active' : ''}`}>
        <section className="about-section">
            <div className="services-container">
                <div className="about-hero">
                    <h1>About The Star Auto Service</h1>
                    <p style={{fontSize: '1.5rem', letterSpacing: '2px'}}>Serving Richardson with Pride Since Our Establishment</p>
                </div>
                
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">🤝</div>
                        <h3 className="value-title">Trust & Integrity</h3>
                        <p className="value-description">We believe in honest assessments and transparent pricing. No surprises, no unnecessary repairs - just straight talk about what your vehicle needs.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🌎</div>
                        <h3 className="value-title">Bilingual Service</h3>
                        <p className="value-description">Proudly serving our diverse community with fluent English and Spanish speaking staff. Communication without barriers.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">⭐</div>
                        <h3 className="value-title">Excellence</h3>
                        <p className="value-description">ASE certified technicians with decades of combined experience. We use the latest diagnostic equipment and highest quality parts.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">👨‍👩‍👧‍👦</div>
                        <h3 className="value-title">Family Values</h3>
                        <p className="value-description">We treat our customers like family. From courtesy rides to going the extra mile, we&apos;re here to make your life easier.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">📍</div>
                        <h3 className="value-title">Local Legacy</h3>
                        <p className="value-description">Deep roots in Richardson with a long-standing commitment to our community. Your neighborhood mechanics you can count on.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">💰</div>
                        <h3 className="value-title">Fair Pricing</h3>
                        <p className="value-description">Competitive rates without compromising quality. We believe great service should be accessible to everyone.</p>
                    </div>
                </div>

                <div className="mission-container" style={{marginTop: '4rem'}}>
                    <h2 style={{color: 'var(--accent-yellow)', marginBottom: '2rem'}}>Why Choose Us?</h2>
                    <p className="mission-text">
                        The Star Auto Service has been a cornerstone of automotive excellence in Richardson for years. Our commitment to quality, combined with our genuine care for every customer, sets us apart. We&apos;ve built our reputation one satisfied customer at a time, earning 5-star reviews through consistent delivery of exceptional service. Whether you need routine maintenance or major repairs, our skilled technicians approach every job with the same dedication to excellence. Visit us today and experience the difference that passion and expertise make.
                    </p>
                </div>
            </div>
        </section>
    </div>
</main>

    {/* Footer */}
    <footer>
        <div className="footer-content">
            <div className="footer-logo">★ The Star Auto Service</div>
            <div className="footer-links">
                <a href="#home" onClick={(e) => { e.preventDefault(); showPage('home'); }}>Home</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); showPage('services'); }}>Services</a>
                <a href="#about" onClick={(e) => { e.preventDefault(); showPage('about'); }}>About</a>
                <a href="tel:9722312886">Call Us</a>
            </div>
            <div className="copyright">
                <p>© 2024 The Star Auto Service. All rights reserved.</p>
                <p>900 E Belt Line Rd, Richardson, TX 75081 | (972) 231-2886</p>
                <p>Licensed & Insured | ASE Certified Technicians</p>
            </div>
        </div>
    </footer>

    

    </>
  );
}
