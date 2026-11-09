'use client';

import Carousel from 'react-bootstrap/Carousel';

const slides = [
  {
    eyebrow: 'A NEW STANDARD OF LIVING',
    title: 'Find a Place\nThat Feels Like Home.',
    subtitle: 'Thoughtfully selected residences for the life you aspire to.',
    imageUrl: '/images/banner_01.jpg',
  },
  {
    eyebrow: 'TIMELESS ARCHITECTURE',
    title: 'Space to Live\nBeautifully.',
    subtitle: 'Discover homes where refined design meets everyday comfort.',
    imageUrl: '/images/banner_02.jpg',
  },
  {
    eyebrow: 'YOUR NEXT CHAPTER',
    title: 'Come Home\n to Something Special.',
    subtitle: 'Let us help you find a property worth falling in love with.',
    imageUrl: '/images/banner_03.jpg',
  },
];

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <Carousel fade interval={5500} pause="hover">
        {slides.map((slide) => (
          <Carousel.Item key={slide.title}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url("${slide.imageUrl}")` }}
              role="img"
              aria-label="Featured real estate property"
            />
            <Carousel.Caption className="hero-caption">
              <span className="eyebrow">{slide.eyebrow}</span>
              <h1>{slide.title.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</h1>
              <p>{slide.subtitle}</p>
              <a className="button button-gold" href="#properties">Explore Properties <span>↗</span></a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="hero-note"><span>01 — 03</span><span>CURATED LIVING · EST. 2026</span></div>
    </section>
  );
}
