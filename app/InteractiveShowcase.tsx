"use client";

import { useEffect, useState } from "react";

type EventItem = {
  image: string;
  alt: string;
  href: string;
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
  home?: boolean;
};

const events: EventItem[] = [
  {
    image: "/images/events/exercise-is-medicine-10-tour.jpg",
    alt: "Poster for the Exercise Is Medicine at 10 Fitness Tour 2026",
    href: "/event/eim-at-10",
    category: "UPCOMING EVENT · HAPPENING SOON",
    title: "Exercise Is Medicine @ 10",
    summary: "Celebrating a decade of impactful healthy living through a 10-location fitness tour, public lecture, community rallies, sporting activities and a spectacular grand finale.",
    availability: "September 16 – October 17, 2026 · Kwara State, Nigeria",
  },
];

const gallery: GalleryItem[] = [
  {
    image: "/images/gallery/stadium-aerobics-session.jpg",
    alt: "Coach Korede leading a large outdoor aerobics session at a stadium",
    label: "STADIUM AEROBICS",
    caption: "A community moving together",
    home: true,
  },
  {
    image: "/images/gallery/coach-korede-leading-session.jpg",
    alt: "Coach Korede leading a fitness session with a microphone",
    label: "COACH-LED SESSION",
    caption: "Clear instruction and active participation",
    home: true,
  },
  {
    image: "/images/gallery/olympic-day-team.jpg",
    alt: "Coach Korede with participants at an Olympic Day event",
    label: "OLYMPIC DAY",
    caption: "Sport, partnership and community",
    home: true,
  },
  {
    image: "/images/gallery/community-courtyard-aerobics-wide.jpg",
    alt: "A large community aerobics session in an open courtyard",
    label: "COMMUNITY OUTREACH",
    caption: "Fitness brought closer to the people",
    home: true,
  },
  {
    image: "/images/gallery/coach-korede-eim-portrait.jpg",
    alt: "Coach Korede wearing an Exercise Is Medicine shirt",
    label: "EXERCISE IS MEDICINE",
    caption: "A visible commitment to healthy living",
    home: true,
  },
  {
    image: "/images/gallery/community-stadium-stretch.jpg",
    alt: "Participants performing side stretches during a stadium fitness session",
    label: "MASS STRETCHING",
    caption: "Mobility and movement at scale",
  },
  {
    image: "/images/gallery/stadium-mass-fitness.jpg",
    alt: "A wide view of participants exercising on a stadium field",
    label: "MASS FITNESS",
    caption: "Healthy living across the community",
  },
  {
    image: "/images/gallery/olympic-day-team-wide.jpg",
    alt: "Coach Korede and fitness stakeholders at an Olympic Day programme",
    label: "SPORTS PARTNERSHIP",
    caption: "Working together for active living",
  },
  {
    image: "/images/gallery/coach-korede-community-instruction.jpg",
    alt: "Coach Korede addressing participants during a community fitness programme",
    label: "COMMUNITY INSTRUCTION",
    caption: "Guidance that keeps everyone involved",
  },
  {
    image: "/images/gallery/community-courtyard-stretch.jpg",
    alt: "Community participants performing forward stretches outdoors",
    label: "ACTIVE COMMUNITY",
    caption: "Movement made accessible to everyone",
  },
  {
    image: "/images/gallery/community-courtyard-session.jpg",
    alt: "Participants gathered for an outdoor community fitness session",
    label: "FITNESS OUTREACH",
    caption: "A shared commitment to wellbeing",
  },
  {
    image: "/images/gallery/coach-korede-mobility-01.jpg",
    alt: "Coach Korede demonstrating a seated mobility stretch",
    label: "MOBILITY TRAINING",
    caption: "Controlled movement and flexibility",
  },
  {
    image: "/images/gallery/coach-korede-mobility-02.jpg",
    alt: "Coach Korede seated during a guided wellness session",
    label: "WELLNESS IN ACTION",
    caption: "Breathing, balance and body awareness",
  },
  {
    image: "/images/gallery/coach-korede-mobility-03.jpg",
    alt: "Coach Korede demonstrating a wide lateral fitness stance",
    label: "FUNCTIONAL FITNESS",
    caption: "Movement built for everyday strength",
  },
  {
    image: "/images/gallery/coach-korede-mobility-04.jpg",
    alt: "Coach Korede leading a lower-body mobility exercise",
    label: "ACTIVE MOBILITY",
    caption: "Strong foundations and confident movement",
  },
  {
    image: "/images/gallery/coach-korede-mobility-05.jpg",
    alt: "Coach Korede demonstrating an energetic training stance",
    label: "COACH-LED TRAINING",
    caption: "Clear guidance in every session",
  },
  {
    image: "/images/gallery/coach-korede-mobility-06.jpg",
    alt: "Coach Korede demonstrating a fitness movement indoors",
    label: "MOVE WITH PURPOSE",
    caption: "Consistency, control and progress",
  },
  {
    image: "/images/gallery/coach-korede-mobility-07.jpg",
    alt: "Coach Korede in an Exercise Is Medicine training session",
    label: "EXERCISE IS MEDICINE",
    caption: "Healthy living through purposeful movement",
  },
];

const mixedGalleryOrder = [0, 11, 2, 1, 13, 3, 4, 5, 15, 7, 8, 12, 6, 16, 9, 14, 10, 17];

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
  return (
    <div className="event-grid">
        {events.map((event) => (
          <article className="event-card event-card-featured event-card-clickable" key={event.title}>
            <a className="event-card-button" href={event.href} aria-label={`Open the ${event.title} event page`}>
              <span className="event-image-wrap">
                <img src={event.image} alt={event.alt} loading="lazy" decoding="async" />
                <span className="event-view-cue">Upcoming · Happening soon</span>
              </span>
              <span className="event-card-copy">
                <span className="event-category">{event.category}</span>
                <strong>{event.title}</strong>
                <span className="event-summary">{event.summary}</span>
                <span className="event-movement">10 Years <b>•</b> 10 Locations <b>•</b> One Movement</span>
                <b className="event-availability">{event.availability}</b>
                <span className="event-read">View event details &amp; tour schedule <b aria-hidden="true">→</b></span>
              </span>
            </a>
          </article>
        ))}
      </div>
  );
}

export function GalleryViewer({ full = false }: { full?: boolean }) {
  const displayedGallery = full ? mixedGalleryOrder.map((index) => gallery[index]) : gallery.filter((item) => item.home);
  const [active, setActive] = useState<number | null>(null);
  const close = () => setActive(null);
  const previous = () => setActive((current) => current === null ? 0 : (current - 1 + displayedGallery.length) % displayedGallery.length);
  const next = () => setActive((current) => current === null ? 0 : (current + 1) % displayedGallery.length);
  useModalControls(active !== null, close, previous, next);

  return (
    <>
      <div className="gallery-grid gallery-photos">
        {displayedGallery.map((item, index) => (
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
        <div className="media-modal gallery-modal" role="dialog" aria-modal="true" aria-label={`${displayedGallery[active].label} image viewer`} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
          <button className="modal-close" type="button" onClick={close} aria-label="Close image viewer">×</button>
          <button className="modal-arrow modal-previous" type="button" onClick={previous} aria-label="View previous image">←</button>
          <figure className="gallery-modal-figure">
            <img src={displayedGallery[active].image} alt={displayedGallery[active].alt} />
            <figcaption><b>{displayedGallery[active].label}</b><span>{displayedGallery[active].caption}</span><small>{active + 1} / {displayedGallery.length}</small></figcaption>
          </figure>
          <button className="modal-arrow modal-next" type="button" onClick={next} aria-label="View next image">→</button>
        </div>
      )}
    </>
  );
}
