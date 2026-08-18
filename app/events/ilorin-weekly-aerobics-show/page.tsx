import type { Metadata } from "next";
import SiteHeader, { whatsappBase } from "../../SiteHeader";
import SiteFooter from "../../SiteFooter";

export const metadata: Metadata = {
  title: "Ilorin Weekly Aerobics Show | KoredeFitness",
  description: "Join the Ilorin Weekly Aerobics Show every Saturday at Maracana Stadium, Adewole, Ilorin.",
};

const highlights = [
  "Coach-led group aerobics",
  "Fitness, fun and wellness",
  "Open to male and female participants",
  "Suitable for young people, adults and the elderly",
  "A welcoming community fitness experience",
  "Weekly motivation for healthy living",
];

export default function WeeklyAerobicsPage() {
  return (
    <main className="inner-page events-page">
      <SiteHeader />
      <section className="inner-hero event-detail-hero">
        <div className="page-shell event-hero-grid">
          <div>
            <p className="eyebrow"><span /> Weekly community fitness</p>
            <h1>Ilorin Weekly<br /><em>Aerobics Show.</em></h1>
            <p>A healthy-lifestyle session combining exercise, fun and wellness for the Ilorin community.</p>
            <div className="event-date-banner"><strong>Every Saturday • 7:00–9:00 AM</strong><span>Maracana Stadium, Adewole, Ilorin</span></div>
          </div>
          <figure><img src="/images/events/ilorin-weekly-aerobics-show.jpg" alt="Ilorin Weekly Aerobics Show poster" /></figure>
        </div>
      </section>

      <section className="section page-shell event-overview">
        <div><p className="eyebrow dark"><span /> Event overview</p><h2>Move your body.<br /><em>Boost your health.</em></h2></div>
        <div>
          <p>The Ilorin Weekly Aerobics Show brings people together every Saturday morning for structured exercise, community energy and practical healthy living.</p>
          <div className="event-fact-grid">
            <div><b>Schedule</b><span>Every Saturday</span></div>
            <div><b>Time</b><span>7:00–9:00 AM</span></div>
            <div><b>Venue</b><span>Maracana Stadium, Adewole, beside NNPC Filling Station</span></div>
            <div><b>Weekly fee</b><span>₦2,000</span></div>
          </div>
        </div>
      </section>

      <section className="section page-shell feature-section">
        <div><p className="eyebrow dark"><span /> What to expect</p><h2>Fitness for<br /><em>the community.</em></h2><p>Led by Ambassador Coach Korede, the session is designed to help participants stay active, build consistency and enjoy movement together.</p></div>
        <ul>{highlights.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
      </section>

      <section className="event-join">
        <div className="page-shell"><p className="eyebrow"><span /> Join the next session</p><h2>Come move.<br /><em>Feel the energy.</em></h2><p>Ask about the next Ilorin Weekly Aerobics Show on WhatsApp.</p><a className="button" href={`${whatsappBase}?text=Hello%20KoredeFitness%2C%20I%20would%20like%20to%20join%20the%20Ilorin%20Weekly%20Aerobics%20Show.`} target="_blank" rel="noreferrer">Enquire on WhatsApp <span>↗</span></a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
