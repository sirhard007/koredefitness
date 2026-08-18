import type { Metadata } from "next";
import SiteHeader, { whatsappBase } from "../SiteHeader";
import SiteFooter from "../SiteFooter";

export const metadata: Metadata = {
  title: "Ambassador Coach Korede | Fitness Professional & Wellness Advocate",
  description: "Meet Ambassador Coach Korede, founder of KoredeFitness, CEO of Exercise Is Medicine, Master Trainer and community wellness advocate.",
};

const roles = [
  "Founder, KoredeFitness",
  "CEO, Exercise Is Medicine",
  "Professional Fitness Trainer",
  "NLO League Coordinator",
  "Master Trainer",
  "Convener, Kwara Fitness Festival",
];

export default function ProfilePage() {
  return (
    <main className="inner-page">
      <SiteHeader />
      <section className="inner-hero profile-hero">
        <div className="page-shell inner-hero-grid">
          <div>
            <p className="eyebrow"><span /> Ambassador Coach Korede</p>
            <h1>Fitness professional.<br /><em>Wellness advocate.</em></h1>
            <p>Helping people and communities train with purpose, live healthier and thrive through practical fitness.</p>
            <div className="hero-actions">
              <a className="button" href={`${whatsappBase}?text=Hello%20Coach%20Korede%2C%20I%20would%20like%20to%20invite%20you%20for%20a%20fitness%20session%20or%20outreach.`} target="_blank" rel="noreferrer">Invite Coach Korede <span>↗</span></a>
              <a className="text-link" href="/services">View services <span>→</span></a>
            </div>
          </div>
          <figure className="inner-profile-image"><img src="/images/gallery/coach-korede-profile.jpg" alt="Ambassador Coach Korede" /></figure>
        </div>
      </section>

      <section className="section page-shell profile-story">
        <div className="profile-lead">
          <p className="eyebrow dark"><span /> Professional profile</p>
          <h2>Movement that creates<br /><em>lasting impact.</em></h2>
        </div>
        <div className="profile-copy">
          <p className="lead-copy">Ambassador Coach Korede is a fitness professional and wellness advocate committed to transforming lives through exercise, education and community engagement.</p>
          <p>He is a Human Kinetics Education graduate from the University of Ilorin, CEO of Exercise Is Medicine, a professional fitness trainer, and a certified fitness professional recognised by the National Institute for Sports and the National and International Olympic Committee system.</p>
          <p>As Founder of KoredeFitness, NLO League Coordinator, Master Trainer and Convener of Kwara Fitness Festival, he combines professional coaching with broad community fitness outreach.</p>
          <p>His work covers Aerobics, TABATA, Circuit Training, Strength and Conditioning, online fitness classes, wellness education and impactful community fitness programmes.</p>
        </div>
      </section>

      <section className="role-band">
        <div className="page-shell role-grid">
          {roles.map((role, index) => <div key={role}><span>{String(index + 1).padStart(2, "0")}</span><strong>{role}</strong></div>)}
        </div>
      </section>

      <section className="section availability-section">
        <div className="page-shell availability-grid">
          <div>
            <p className="eyebrow"><span /> Local • National • International</p>
            <h2>Based in Ilorin.<br /><em>Available worldwide.</em></h2>
          </div>
          <div>
            <p>Coach Korede is based in Ilorin, Kwara State, and is available for fitness sessions, corporate wellness programmes, community outreach and special appearances across Nigeria and internationally.</p>
            <p>He can be invited to any state or country to promote fitness, wellness and healthy living.</p>
            <a className="button" href={`${whatsappBase}?text=Hello%20Coach%20Korede%2C%20I%20would%20like%20to%20discuss%20an%20invitation%20or%20fitness%20outreach.`} target="_blank" rel="noreferrer">Discuss an invitation <span>↗</span></a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
