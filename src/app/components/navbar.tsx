'use client';

import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'properties', label: 'Properties' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export default function NavbarComponent() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = menuItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <Navbar expand="lg" sticky="top" className="estate-navbar">
      <Container>
        <Navbar.Brand href="#home" className="estate-brand">
          MAISON<span>.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="estate-navigation" />
        <Navbar.Collapse id="estate-navigation">
          <Nav className="ms-auto align-items-lg-center">
            {menuItems.map((item) => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                className={`estate-link ${active === item.id ? 'active' : ''}`}
                onClick={() => setActive(item.id)}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
