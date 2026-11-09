import NavbarComponent from './components/navbar';
import HeroSection from './components/herosection';
import PropertyCard from './components/propertycard';

const properties = [
  { number: '01', title: 'Maison Eleanor', location: 'South Jakarta · Indonesia', price: 'Rp 4,8 M', image: '/images/banner_01.jpg', tag: 'For Sale' },
  { number: '02', title: 'Maison Elena', location: 'Bali · Indonesia', price: 'Rp 7,2 M', image: '/images/banner_02.jpg', tag: 'Featured' },
  { number: '03', title: 'Maison Elise', location: 'West Jakarta · Indonesia', price: 'Rp 3,6 M', image: '/images/banner_03.jpg', tag: 'New Listing' },
];

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <main>
        <HeroSection />

        <section id="about" className="about-section section-pad">
          <div className="container editorial-grid">
            <div className="section-kicker">01 / OUR PHILOSOPHY</div>
            <div className="about-copy">
              <h2>More than a property.<br /><em>A feeling of belonging.</em></h2>
              <p>MAISON is a thoughtful real estate studio connecting people with places that reflect their way of living. We believe the right home is found in the details—in its light, its spaces, and the memories waiting to happen.</p>
              <a className="text-link" href="#contact">Discover our approach <span>↗</span></a>
            </div>
          </div>
        </section>

        <section id="properties" className="properties-section section-pad">
          <div className="container">
            <div className="section-heading">
              <div><span className="section-kicker">02 / THE COLLECTION</span><h2>Selected residences</h2></div>
              <a className="text-link" href="#contact">View all properties <span>↗</span></a>
            </div>
            <div className="property-grid">{properties.map((property) => <PropertyCard key={property.number} property={property} />)}</div>
          </div>
        </section>

        <section id="services" className="services-section section-pad">
          <div className="container">
            <span className="section-kicker">03 / WHAT WE DO</span>
            <h2 className="services-title">Considered guidance.<br /><em>Exceptional outcomes.</em></h2>
            <div className="services-grid">
              <article><span>01</span><h3>Property Advisory</h3><p>Personalized guidance to find a residence aligned with your needs and aspirations.</p></article>
              <article><span>02</span><h3>Buying & Selling</h3><p>A considered, transparent process from the first conversation to the final key.</p></article>
              <article><span>03</span><h3>Investment</h3><p>Insightful property perspectives to help you make confident decisions.</p></article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-inner">
            <span className="section-kicker">04 / BEGIN HERE</span>
            <h2>Let’s find your<br /><em>next chapter.</em></h2>
            <p>Tell us what home means to you. We’ll help you find it.</p>
            <a className="button button-light" href="mailto:hello@maison.example">Start a conversation ↗</a>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="container"><span className="footer-brand">MAISON<span>.</span></span><p>Thoughtful spaces. Meaningful living.</p><small>© 2026 MAISON REAL ESTATE · DESIGNED WITH CARE</small></div></footer>
    </>
  );
}
