// src/components/Testimonials.jsx
import React from 'react';
import './styles/testimonials.css';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote:
      "I finally have a place where I can focus, meet clients, and not feel like I’m in someone else’s space.",
    name: "Amit Sharma",
    title: "Founder, LineDash Ventures",
  },
  {
    quote:
      "The setup is clean, professional, and everything works. I’ve stopped wasting hours managing basic stuff.",
    name: "Shruti Mehra",
    title: "Legal Consultant",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-quote">
                <FaQuoteLeft className="testimonial-quote-icon" />
                {t.quote}
              </div>
              <p className="testimonial-author">
                — {t.name}, <span>{t.title}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
