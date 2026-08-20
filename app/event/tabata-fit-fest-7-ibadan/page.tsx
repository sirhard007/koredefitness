import type { Metadata } from "next";
import SiteHeader from "../../SiteHeader";
import SiteFooter from "../../SiteFooter";

const registrationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdkOvkTLVC00ClGdV3JGPYOxyxJK5jSk9IqveHmPH2lu3_TZw/viewform?usp=publish-editor";

export const metadata: Metadata = {
  title: "Tabata Fit Fest 7.0 Ibadan | KoredeFitness",
  description: "Join Coach Korede at Tabata Fit Fest 7.0, Ibadan Edition, on September 12, 2026 at the International Conference Centre, Ibadan.",
};

const highlights = [
  "High-energy Tabata fitness session",
  "KoredeFitness on the trainer line-up",
  "Community exercise and active living",
  "Move More, Live Well theme",
  "Open fitness experience in Ibadan",
  "Free admission with registration",
];

export default function TabataFitFestIbadanPage() {
  return (
    <main className="inner-page events-page">
      <SiteHeader />
      <section className="inner-hero event-detail-hero">
        <div className="page-shell event-hero-grid">
          <div>
            <p className="eyebrow"><span /> Upcoming trainer appearance</p>
            <h1>Tabata Fit Fest 7.0.<br /><em>Ibadan Edition.</em></h1>
            <p>Move More, Live Well with Coach Korede and the Tabata Fit Fest trainer community.</p>
            <div className="event-hero-actions">
              <div className="event-date-banner"><strong>Saturday, September 12, 2026 · 7:00 AM–12:00 PM</strong><span>International Conference Centre, Ibadan</span></div>
              <a className="button event-register-button" href={registrationUrl} target="_blank" rel="noreferrer">Register for event <span>↗</span></a>
            </div>
          </div>
          <figure><img src="/images/events/tabata-fit-fest-7-ibadan.jpg" alt="Tabata Fit Fest 7.0 Ibadan Edition poster" /></figure>
        </div>
      </section>

      <section className="section page-shell event-overview">
        <div><p className="eyebrow dark"><span /> Event overview</p><h2>Move more.<br /><em>Live well.</em></h2></div>
        <div>
          <p>Tabata Fit Fest 7.0 brings a major community fitness experience to Ibadan. Ambassador Coach Korede is featured among the trainers for the Ibadan edition.</p>
          <div className="event-fact-grid">
            <div><b>Date</b><span>Saturday, September 12, 2026</span></div>
            <div><b>Time</b><span>7:00 AM–12:00 PM</span></div>
            <div><b>Venue</b><span>International Conference Centre, beside the University of Ibadan</span></div>
            <div><b>Admission</b><span>Free — registration required</span></div>
          </div>
        </div>
      </section>

      <section className="section page-shell feature-section">
        <div><p className="eyebrow dark"><span /> What to expect</p><h2>Fitness, energy<br /><em>and community.</em></h2><p>Come prepared to move, connect and take part in a large public fitness experience led by an active trainer line-up.</p></div>
        <ul>{highlights.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
      </section>

      <section className="event-join">
        <div className="page-shell"><p className="eyebrow"><span /> Free registration</p><h2>Reserve your place.<br /><em>Join the movement.</em></h2><p>Complete the official Ibadan registration form before attending.</p><a className="button" href={registrationUrl} target="_blank" rel="noreferrer">Register for event <span>↗</span></a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
