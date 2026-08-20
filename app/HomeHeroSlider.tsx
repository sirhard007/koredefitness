"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    type: "coach",
    eyebrow: "Exercise is medicine",
    title: <>Build strength.<br /><em>Own your life.</em></>,
    copy: "Training that meets you where you are—and builds the discipline, confidence and body you are proud to live in.",
    primary: { label: "Find your programme", href: "#programmes" },
    secondary: { label: "Meet your coach", href: "/profile" },
    image: "/images/gallery/hero-male-only.webp",
  },
  {
    type: "tabata",
    eyebrow: "Upcoming event · September 12, 2026",
    title: <>Tabata Fit Fest 7.0.<br /><em>Ibadan Edition.</em></>,
    copy: "Meet Coach Korede at the International Conference Centre, Ibadan, for a free public fitness experience built around the theme Move More, Live Well.",
    primary: { label: "View event", href: "/event/tabata-fit-fest-7-ibadan" },
    secondary: { label: "See all events", href: "/events" },
    image: "/images/events/tabata-fit-fest-7-ibadan.jpg",
  },
  {
    type: "eim",
    eyebrow: "Anniversary fitness tour · September 16–October 17, 2026",
    title: <>Exercise Is Medicine.<br /><em>Celebrating 10 years.</em></>,
    copy: "Join the 10-location anniversary fitness tour across Kwara State and its environs, followed by the Grand Finale at Banquet Hall, Ilorin.",
    primary: { label: "View anniversary event", href: "/event/eim-at-10" },
    secondary: { label: "See all events", href: "/events" },
    image: "/images/events/exercise-is-medicine-10-tour.jpg",
  },
];

export default function HomeHeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  const selectSlide = (index: number) => setActive(index);
  const previous = () => setActive((current) => (current - 1 + slides.length) % slides.length);
  const next = () => setActive((current) => (current + 1) % slides.length);

  return (
    <section className="hero hero-slider" id="top" aria-roledescription="carousel" aria-label="KoredeFitness highlights">
      {slides.map((slide, index) => (
        <article
          className={`hero-slide hero-slide-${slide.type} ${index === active ? "is-active" : ""}`}
          aria-hidden={index !== active}
          key={slide.type}
        >
          <div className="hero-image" style={{ backgroundImage: `url('${slide.image}')` }} aria-hidden="true" />
          <div className="hero-overlay" />
          <div className="hero-content page-shell">
            <p className="hero-mantra"><span aria-hidden="true">✦</span> {slide.eyebrow}</p>
            <h1>{slide.title}</h1>
            <p className="hero-copy">{slide.copy}</p>
            <div className="hero-actions">
              <a className="button" href={slide.primary.href}>{slide.primary.label} <span aria-hidden="true">→</span></a>
              <a className="text-link" href={slide.secondary.href}>{slide.secondary.label} <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </article>
      ))}

      <div className="hero-controls" aria-label="Choose a slide">
        <button type="button" onClick={previous} aria-label="Previous slide">←</button>
        <div className="hero-dots">
          {slides.map((slide, index) => (
            <button
              type="button"
              className={index === active ? "is-active" : ""}
              onClick={() => selectSlide(index)}
              aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
              aria-current={index === active ? "true" : undefined}
              key={slide.type}
            ><span /></button>
          ))}
        </div>
        <button type="button" onClick={next} aria-label="Next slide">→</button>
      </div>

      <div className="hero-proof">
        <div><strong>1<span>:</span>1</strong><small>personal coaching</small></div>
        <div><strong>IL<span>R</span></strong><small>home base</small></div>
        <div><strong>360<span>°</span></strong><small>fitness support</small></div>
      </div>
      <a className="scroll-cue" href="#programmes" aria-label="Scroll to programmes">SCROLL <span>↓</span></a>
    </section>
  );
}
