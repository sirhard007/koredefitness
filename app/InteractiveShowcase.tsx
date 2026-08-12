"use client";

import { useEffect, useState } from "react";

type EventItem = {
  image: string;
  alt: string;
  category: string;
  title: string;
  summary: string;
  availability: string;
};

type GalleryItem = {
  image: string;
  alt: string;
  label: string;
  caption: string;
};

const events: EventItem[] = [
  {
    image: "/images/events/ilorin-weekly-aerobics-show.jpg",
    alt: "Poster for the Ilorin Weekly Aerobics Show led by Coach Korede",
    category: "WEEKLY COMMUNITY FITNESS",
    title: "Ilorin Weekly Aerobics Show",
    summary: "A healthy-lifestyle session combining fitness, fun and wellness for young people, adults and the elderly.",
    availability: "Every Saturday · 7:00–9:00 AM · Maracana Stadium, Adewole · ₦2,000 weekly",
  },
  {
    image: "/images/events/ilorin-fitness-festival-5.jpg",
    alt: "Poster for Ilorin Fitness Festival 5.0 convened by Coach Korede",
    category: "FLAGSHIP WELLNESS FESTIVAL",
    title: "Ilorin Fitness Festival 5.0",
    summary: "Ilorin moves through exercise, connection and shared wellness at KoredeFitness’s flagship community festival.",
    availability: "22 November 2025 · 7:00 AM · Kwara State College of Education Indoor Sports Hall",
  },
  {
    image: "/images/events/exercise-is-medicine-10-tour.jpg",
    alt: "Poster for the Exercise Is Medicine at 10 Fitness Tour 2026",
    category: "2026 FITNESS TOUR",
    title: "Exercise Is Medicine @ 10",
    summary: "Celebrating a decade of impactful healthy living with fitness visits to institutions, ministries, workplaces and public spaces.",
    availability: "2026 tour · Sponsorship and partnership opportunities available",
  },
];

const gallery: GalleryItem[] = [
  {
    image: "/images/gallery/male-community-grass.webp",
    alt: "All-male group circuit training session on grass in varied sportswear",
    label: "GROUP TRAINING",
    caption: "Strength, energy and accountability",
  },
  {
    image: "/images/gallery/male-personal-coaching.webp",
    alt: "Male personal strength coaching session visual",
    label: "PERSONAL COACHING",
    caption: "Technique, safety and steady progress",
  },
  {
    image: "/images/gallery/male-training-focus.webp",
    alt: "Focused male athlete preparing for a training session",
    label: "TRAINING MINDSET",
    caption: "Consistency starts before the first rep",
  },
];

function useModalControls(open: boolean, onClose: () => void, onPrevious?: () => void, onNext?: () => void) {
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious?.();
      if (event.key === "ArrowRight") onNext?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, onPrevious, onNext]);
}

export function EventCards() {
  const [active, setActive] = useState<number | null>(null);
  const close = () => setActive(null);
  useModalControls(active !== null, close);

  return (
    <>
      <div className="event-grid">
        {events.map((event, index) => (
          <article className="event-card event-card-clickable" key={event.title}>
            <button type="button" className="event-card-button" onClick={() => setActive(index)} aria-label={`View full details for ${event.title}`}>
              <span className="event-image-wrap">
                <img src={event.image} alt={event.alt} loading="lazy" decoding="async" />
                <span className="event-view-cue">View full poster <b aria-hidden="true">↗</b></span>
              </span>
              <span className="event-card-copy">
                <span className="event-category">{event.category}</span>
                <strong>{event.title}</strong>
                <span className="event-summary">{event.summary}</span>
                <b className="event-availability">{event.availability}</b>
                <span className="event-read">View full details <b aria-hidden="true">→</b></span>
              </span>
            </button>
          </article>
        ))}
      </div>

      {active !== null && (
        <div className="media-modal event-modal" role="dialog" aria-modal="true" aria-label={`${events[active].title} details`} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
          <button className="modal-close" type="button" onClick={close} aria-label="Close event details">×</button>
          <div className="event-modal-panel">
            <div className="event-modal-image"><img src={events[active].image} alt={events[active].alt} /></div>
            <div className="event-modal-copy">
              <p>{events[active].category}</p>
              <h3>{events[active].title}</h3>
              <span>{events[active].summary}</span>
              <b>{events[active].availability}</b>
              <small>Use the close button or press Escape to return to the website.</small>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function GalleryViewer() {
  const [active, setActive] = useState<number | null>(null);
  const close = () => setActive(null);
  const previous = () => setActive((current) => current === null ? 0 : (current - 1 + gallery.length) % gallery.length);
  const next = () => setActive((current) => current === null ? 0 : (current + 1) % gallery.length);
  useModalControls(active !== null, close, previous, next);

  return (
    <>
      <div className="gallery-grid gallery-photos">
        {gallery.map((item, index) => (
          <figure className={`gallery-item ${index === 0 ? "gallery-featured" : ""}`} key={item.label}>
            <button type="button" className="gallery-open" onClick={() => setActive(index)} aria-label={`View ${item.label.toLowerCase()} image`}>
              <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
              <span className="gallery-view-cue">View image <b aria-hidden="true">↗</b></span>
              <figcaption><b>{item.label}</b><span>{item.caption}</span></figcaption>
            </button>
          </figure>
        ))}
      </div>

      {active !== null && (
        <div className="media-modal gallery-modal" role="dialog" aria-modal="true" aria-label={`${gallery[active].label} image viewer`} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
          <button className="modal-close" type="button" onClick={close} aria-label="Close image viewer">×</button>
          <button className="modal-arrow modal-previous" type="button" onClick={previous} aria-label="View previous image">←</button>
          <figure className="gallery-modal-figure">
            <img src={gallery[active].image} alt={gallery[active].alt} />
            <figcaption><b>{gallery[active].label}</b><span>{gallery[active].caption}</span><small>{active + 1} / {gallery.length}</small></figcaption>
          </figure>
          <button className="modal-arrow modal-next" type="button" onClick={next} aria-label="View next image">→</button>
        </div>
      )}
    </>
  );
}
