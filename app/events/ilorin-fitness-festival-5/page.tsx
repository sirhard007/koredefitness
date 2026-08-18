import type { Metadata } from "next";
import SiteHeader, { whatsappBase } from "../../SiteHeader";
import SiteFooter from "../../SiteFooter";

export const metadata: Metadata = {
  title: "Ilorin Fitness Festival 5.0 | KoredeFitness",
  description: "Ilorin Fitness Festival 5.0—Beyond the Fitness: A Festival of Wellness, convened by Ambassador Coach Korede.",
};

const highlights = [
  "Community fitness activities",
  "Exercise and wellness experiences",
  "Healthy-living awareness",
  "Connection with fitness enthusiasts",
  "A shared celebration of active living",
  "Official festival vest",
];

export default function FitnessFestivalPage() {
  return (
    <main className="inner-page events-page">
      <SiteHeader />
      <section className="inner-hero event-detail-hero">
        <div className="page-shell event-hero-grid">
          <div>
            <p className="eyebrow"><span /> Flagship wellness festival</p>
            <h1>Ilorin Fitness<br /><em>Festival 5.0.</em></h1>
            <p>Beyond the fitness—a festival of wellness bringing Ilorin together to connect, exercise and stay healthy.</p>
            <div className="event-date-banner"><strong>Saturday, November 22, 2025 • 7:00 AM</strong><span>Kwara State College of Education Indoor Sports Hall</span></div>
          </div>
          <figure><img src="/images/events/ilorin-fitness-festival-5.jpg" alt="Ilorin Fitness Festival 5.0 poster" /></figure>
        </div>
      </section>

      <section className="section page-shell event-overview">
        <div><p className="eyebrow dark"><span /> Event overview</p><h2>Beyond fitness.<br /><em>A festival of wellness.</em></h2></div>
        <div>
          <p>Ilorin Fitness Festival 5.0 was created to bring people together through exercise, connection and a shared commitment to healthy living.</p>
          <div className="event-fact-grid">
            <div><b>Date</b><span>Saturday, November 22, 2025</span></div>
            <div><b>Time</b><span>7:00 AM</span></div>
            <div><b>Venue</b><span>Kwara State College of Education Indoor Sports Hall</span></div>
            <div><b>Convener</b><span>Ambassador Coach Korede</span></div>
          </div>
        </div>
      </section>

      <section className="section page-shell feature-section">
        <div><p className="eyebrow dark"><span /> Festival experience</p><h2>Ilorin moves.<br /><em>Wellness connects.</em></h2><p>The festival celebrates active living and the strength of a community that chooses to move, connect and grow healthier together.</p></div>
        <ul>{highlights.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
      </section>

      <section className="event-join">
        <div className="page-shell"><p className="eyebrow"><span /> Future festival enquiries</p><h2>Connect. Exercise.<br /><em>Stay healthy together.</em></h2><p>Contact KoredeFitness for festival information, partnerships and future editions.</p><a className="button" href={`${whatsappBase}?text=Hello%20KoredeFitness%2C%20I%20would%20like%20information%20about%20the%20Ilorin%20Fitness%20Festival.`} target="_blank" rel="noreferrer">Contact KoredeFitness <span>↗</span></a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
