import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";

export const metadata: Metadata = {
  title: "Fitness Events | KoredeFitness",
  description: "Explore upcoming KoredeFitness events, fitness tours and community wellness programmes.",
};

const upcomingEvent = {
  status: "EVENT 01 · UPCOMING · HAPPENING SOON",
  title: "Exercise Is Medicine @10",
  summary: "Celebrate a decade of impactful healthy living through a 10-location fitness tour, public lecture, community rallies, sporting activities and a grand finale.",
  date: "September 16 – October 17, 2026",
  location: "Kwara State, Nigeria",
  href: "/event/eim-at-10",
  image: "/images/events/exercise-is-medicine-10-tour.jpg",
  imageAlt: "Exercise Is Medicine at 10 Anniversary Fitness Tour poster",
};

const moreUpcomingEvents = [
  {
    title: "Tabata Fit Fest 7.0 — Ibadan Edition",
    summary: "Coach Korede joins the trainer line-up for a free high-energy community fitness experience themed Move More, Live Well.",
    date: "September 12, 2026 · 7:00 AM–12:00 PM",
    location: "International Conference Centre, Ibadan",
    href: "/event/tabata-fit-fest-7-ibadan",
    image: "/images/events/tabata-fit-fest-7-ibadan.jpg",
    imageAlt: "Tabata Fit Fest 7.0 Ibadan Edition poster featuring KoredeFitness",
  },
];

const pastEvents = [
  {
    title: "Ilorin Fitness Festival 5.0",
    summary: "A flagship community festival that brought Ilorin together through exercise, connection and shared wellness.",
    date: "November 22, 2025",
    location: "Ilorin, Kwara State",
    href: "/events/ilorin-fitness-festival-5",
    image: "/images/events/ilorin-fitness-festival-5.jpg",
    imageAlt: "Ilorin Fitness Festival 5.0 poster",
  },
  {
    title: "Ilorin Weekly Aerobics Show",
    summary: "A community fitness experience built around structured aerobics, healthy living and shared energy.",
    date: "Previous community programme",
    location: "Maracana Stadium, Ilorin",
    href: "/events/ilorin-weekly-aerobics-show",
    image: "/images/events/ilorin-weekly-aerobics-show.jpg",
    imageAlt: "Ilorin Weekly Aerobics Show poster",
  },
];

export default function EventsPage() {
  return (
    <main className="inner-page blog-index event-index">
      <SiteHeader />
      <section className="inner-hero blog-index-hero">
        <div className="page-shell blog-index-copy">
          <p className="eyebrow"><span /> KoredeFitness events</p>
          <h1>Fitness in the community.<br /><em>Events that create impact.</em></h1>
          <p>Explore upcoming fitness tours, wellness programmes and public events led by KoredeFitness.</p>
        </div>
      </section>

      <section className="section page-shell blog-list-section">
        <div className="blog-list-intro">
          <h2>Upcoming <em>events.</em></h2>
          <p>Select an event to see its full information, programme and registration details.</p>
        </div>

        <article className="blog-featured-card event-index-featured">
            <Link href={upcomingEvent.href} aria-label={`View ${upcomingEvent.title}`}>
              <div className="blog-featured-image">
                <img src={upcomingEvent.image} alt={upcomingEvent.imageAlt} decoding="async" />
                <span>{upcomingEvent.status}</span>
              </div>
              <div className="blog-featured-copy">
                <p>{upcomingEvent.date} · {upcomingEvent.location}</p>
                <h2>{upcomingEvent.title}</h2>
                <span>{upcomingEvent.summary}</span>
                <b>View event details <i aria-hidden="true">→</i></b>
              </div>
            </Link>
        </article>

        <div className="event-history-grid upcoming-event-grid">
          {moreUpcomingEvents.map((event) => (
            <article className="article-card past-event-card" key={event.href}>
              <Link className="article-card-link" href={event.href} aria-label={`View ${event.title}`}>
                <div className="article-art">
                  <img src={event.image} alt={event.imageAlt} loading="lazy" decoding="async" />
                  <span>02</span>
                  <small>UPCOMING EVENT</small>
                </div>
                <div className="article-body">
                  <p>{event.date} · {event.location}</p>
                  <h3>{event.title}</h3>
                  <span className="event-summary">{event.summary}</span>
                  <span className="read-link">View event details <b aria-hidden="true">→</b></span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="blog-list-intro event-history-intro">
          <h2>Past <em>events.</em></h2>
          <p>Explore previous KoredeFitness festivals and community fitness programmes.</p>
        </div>
        <div className="event-history-grid">
          {pastEvents.map((event, index) => (
            <article className="article-card past-event-card" key={event.href}>
              <Link className="article-card-link" href={event.href} aria-label={`View ${event.title}`}>
                <div className="article-art">
                  <img src={event.image} alt={event.imageAlt} loading="lazy" decoding="async" />
                  <span>{String(index + 3).padStart(2, "0")}</span>
                  <small>PAST EVENT</small>
                </div>
                <div className="article-body">
                  <p>{event.date} · {event.location}</p>
                  <h3>{event.title}</h3>
                  <span className="event-summary">{event.summary}</span>
                  <span className="read-link">View event details <b aria-hidden="true">→</b></span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
