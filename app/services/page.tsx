import type { Metadata } from "next";
import SiteHeader, { whatsappBase } from "../SiteHeader";
import SiteFooter from "../SiteFooter";

export const metadata: Metadata = {
  title: "Fitness Services | KoredeFitness",
  description: "Personal training, group aerobics, TABATA, weight loss, strength, cardio, mobility, nutrition guidance and tailored workout programmes.",
};

const serviceGroups = [
  {
    number: "01",
    id: "personal-training",
    title: "Personal Training",
    intro: "Focused support built around your body, routine and goals.",
    services: ["Personal training and one-on-one fitness coaching", "Customised workout programmes", "Weight-loss and fat-loss programmes", "Strength and muscle-building training", "Cardio and endurance training", "Fitness assessments and progress tracking", "Home- and gym-based training sessions"],
  },
  {
    number: "02",
    id: "group-fitness",
    title: "Group Fitness",
    intro: "High-energy sessions that make movement purposeful and enjoyable.",
    services: ["Group Aerobic and TABATA fitness sessions", "Group fitness classes", "Functional fitness and mobility exercises"],
  },
  {
    number: "03",
    id: "online-coaching",
    title: "Online Coaching",
    intro: "Flexible guidance, accountability and support wherever you train.",
    services: ["Nutrition and healthy-lifestyle guidance", "Workout plans tailored to individual goals", "Motivation, accountability and ongoing support"],
  },
];

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <SiteHeader />
      <section className="inner-hero services-hero">
        <div className="page-shell narrow-hero">
          <p className="eyebrow"><span /> KoredeFitness services</p>
          <h1>Training built around<br /><em>your real goals.</em></h1>
          <p>From personal coaching to community sessions, every service is designed to help you move better, grow stronger and stay consistent.</p>
          <a className="button" href={`${whatsappBase}?text=Hello%20KoredeFitness%2C%20I%20would%20like%20help%20choosing%20the%20right%20fitness%20service.`} target="_blank" rel="noreferrer">Find the right service <span>→</span></a>
        </div>
      </section>

      <section className="section page-shell">
        <div className="service-list">
          {serviceGroups.map((group) => (
            <article className="service-group" id={group.id} key={group.number}>
              <div className="service-heading"><span>{group.number}</span><div><h2>{group.title}</h2><p>{group.intro}</p></div></div>
              <ul>{group.services.map((service) => <li key={service}><span>✓</span>{service}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="service-process">
        <div className="page-shell">
          <p className="eyebrow"><span /> How it starts</p>
          <div className="process-grid">
            <div><b>01</b><h3>Share your goal</h3><p>Tell us what you want to achieve and where you prefer to train.</p></div>
            <div><b>02</b><h3>Get assessed</h3><p>Your current fitness, routine and needs guide the right starting point.</p></div>
            <div><b>03</b><h3>Start your plan</h3><p>Train with structure, clear guidance, accountability and progress tracking.</p></div>
          </div>
          <a className="button" href={`${whatsappBase}?text=Hello%20KoredeFitness%2C%20I%20am%20ready%20to%20discuss%20my%20fitness%20goal.`} target="_blank" rel="noreferrer">Start on WhatsApp <span>↗</span></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
