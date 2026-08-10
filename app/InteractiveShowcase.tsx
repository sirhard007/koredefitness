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
    image: "/images/events/weekly-aerobics.jpg",
    alt: "KoredeFitness Ilorin Weekly Aerobics Show poster",
    category: "COMMUNITY FITNESS",
    title: "Weekly Aerobics",
    summary: "Inclusive outdoor movement for men and women across age groups.",
    availability: "Venue announced for each session",
  },
  {
    image: "/images/events/ilorin-fitness-festival.jpg",
    alt: "Ilorin Fitness Festival 5.0 poster",
    category: "FLAGSHIP EXPERIENCE",
    title: "Ilorin Fitness Festival",
    summary: "A major gathering for exercise, connection, fun and whole-person wellness.",
    availability: "Date and venue announced per edition",
  },
  {
    image: "/images/events/fitness-tour.jpg",
    alt: "Exercise is Medicine Fitness Tour 2026 poster",
    category: "TOURS & FEATURES",
    title: "Fitness on the Move",
    summary: "Programmes for institutions, ministries, workplaces, public spaces and partner events.",
    availability: "Available for invitations and partnerships",
  },
];

const gallery: GalleryItem[] = [
  {
    image: "/images/gallery/ai-circuit-training.png",
    alt: "Group circuit training session visual",
    label: "GROUP TRAINING",
    caption: "Strength, energy and accountability",
  },
  {
    image: "/images/gallery/ai-personal-coaching.png",
    alt: "Personal strength coaching session visual",
    label: "PERSONAL COACHING",
    caption: "Technique, safety and steady progress",
  },
  {
    image: "/images/gallery/ai-outdoor-aerobics.png",
    alt: "Outdoor community aerobics session visual",
    label: "COMMUNITY AEROBICS",
    caption: "Moving together, growing stronger",
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
                <img src={event.image} alt={event.alt} />
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
              <img src={item.image} alt={item.alt} />
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
