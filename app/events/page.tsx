import type { Metadata } from "next";
import SiteHeader, { whatsappBase } from "../SiteHeader";
import SiteFooter from "../SiteFooter";

export const metadata: Metadata = {
  title: "Exercise Is Medicine @10 Anniversary Fitness Tour | KoredeFitness",
  description: "The full 10-location Exercise Is Medicine @10 Anniversary Fitness Tour schedule across Kwara State from 16 September to 17 October 2026.",
};

const schedule = [
  { day: "Day One", date: "Wednesday, September 16, 2026", title: "Kwara Civil Servants", venue: "Government Offices, GRA, Ilorin", time: "4:00 PM", text: "The anniversary tour kicks off with a fitness and wellness session for Kwara State Civil Servants." },
  { day: "Day Two", date: "Saturday, September 19, 2026", title: "Flow FM & Community", venue: "Flow FM Garden, Tanke, GRA, Ilorin", time: "7:00 AM", text: "A community-focused fitness experience featuring Flow FM and members of the surrounding community." },
  { day: "Day Three", date: "Wednesday, September 23, 2026", title: "School of Nursing & Midwifery", venue: "General Hospital, Ilorin", time: "8:00 AM", text: "A dedicated fitness and wellness programme for students and members of the School of Nursing and Midwifery community." },
  { day: "Day Four", date: "Saturday, September 26, 2026", title: "Federal Government College", venue: "FGC Field, Ogidi, Ilorin", time: "4:00 PM", text: "A special fitness engagement for staff and students, featuring physical activity and wellness programmes." },
  { day: "Public Lecture", date: "Tuesday, September 29, 2026", title: "Anniversary Public Lecture", venue: "Al-Hikmah University Auditorium", time: "Time to be announced", text: "Health, fitness, education and community stakeholders discuss exercise, preventive health and healthy living." },
  { day: "Day Five", date: "Wednesday, September 30, 2026", title: "Kwara State Sports Commission", venue: "Kwara Stadium, Ilorin", time: "8:00 AM", text: "A major fitness engagement with the Kwara State Sports Commission and the wider sporting community." },
  { day: "Day Six", date: "Saturday, October 3, 2026", title: "Ganmo Community", venue: "Ganmo Secondary School Field, Ganmo", time: "8:00 AM", text: "A community-wide fitness and wellness programme for the Ganmo community." },
  { day: "Day Seven", date: "Wednesday, October 7, 2026", title: "Inter-Gym Football Competition", venue: "Maracana Stadium, Ilorin", time: "10:00 AM", text: "Fitness centres and gym communities come together through sport and healthy competition." },
  { day: "Day Eight", date: "Saturday, October 10, 2026", title: "Oro Kingdom Community", venue: "Oloro of Oro Palace", time: "8:00 AM", text: "A community fitness and wellness engagement in Oro Kingdom." },
  { day: "Mini Rally", date: "Sunday, October 11, 2026", title: "Exercise Is Medicine @10 Mini Rally", venue: "Kwara State Stadium, Ilorin", time: "8:00 AM", text: "A high-energy rally for fitness enthusiasts, families, communities, organisations and the public." },
  { day: "Day Nine", date: "Wednesday, October 14, 2026", title: "NUT Kwara State Branch", venue: "NUT Office, Asa Dam, Ilorin", time: "8:00 AM", text: "A special fitness and wellness programme with the Nigeria Union of Teachers, Kwara State Branch." },
  { day: "Mega Rally", date: "Wednesday, October 14, 2026", title: "Exercise Is Medicine @10 Mega Rally", venue: "Ilorin, Kwara State", time: "3:00 PM", text: "Participants from across the tour locations come together for a major fitness celebration." },
  { day: "Day Ten • Grand Finale", date: "Saturday, October 17, 2026", title: "Exercise Is Medicine @10 Grand Finale", venue: "Banquet Hall, Opposite Government House, Ilorin", time: "7:00 AM", text: "The tour concludes with participants, professionals, partners, community leaders, athletes, clubs and the public celebrating 10 years of Exercise Is Medicine." },
];

const features = ["Mass fitness exercises", "Aerobics and dance fitness", "Health and wellness education", "Public lecture", "Community fitness engagements", "Mini and Mega Rallies", "Inter-Gym football competition", "Fitness challenges and demonstrations", "Sports and recreational activities", "Community walks and active-living sessions", "Professional networking", "Recognition and anniversary celebrations"];

export default function EventsPage() {
  return (
    <main className="inner-page events-page">
      <SiteHeader />
      <section className="inner-hero event-detail-hero">
        <div className="page-shell event-hero-grid">
          <div>
            <p className="eyebrow"><span /> 10 years • 10 locations • One movement</p>
            <h1>Exercise Is Medicine<br /><em>@10 Anniversary Tour.</em></h1>
            <p>Celebrating a decade of impactful healthy living across Kwara State and its environs.</p>
            <div className="event-date-banner"><strong>September 16 – October 17, 2026</strong><span>Kwara State, Nigeria</span></div>
          </div>
          <figure><img src="/images/events/exercise-is-medicine-10-tour.jpg" alt="Exercise Is Medicine at 10 Anniversary Fitness Tour poster" /></figure>
        </div>
      </section>

      <section className="section page-shell event-overview">
        <div><p className="eyebrow dark"><span /> Event overview</p><h2>A decade of<br /><em>healthy living.</em></h2></div>
        <div><p>Exercise Is Medicine @10 marks a decade of promoting physical activity, healthy living, community engagement and fitness across Kwara State.</p><p>The anniversary tour brings fitness, wellness education, community activities and sporting events closer to the people across 10 locations. It begins on Wednesday, September 16, 2026 and culminates in a spectacular Grand Finale on Saturday, October 17, 2026.</p></div>
      </section>

      <section className="tour-section">
        <div className="page-shell">
          <div className="section-heading"><p className="eyebrow"><span /> Full tour schedule</p><h2>Follow the<br /><em>movement.</em></h2></div>
          <div className="tour-timeline">
            {schedule.map((item, index) => (
              <article className="tour-stop" key={`${item.date}-${item.title}`}>
                <div className="tour-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="tour-day"><span>{item.day}</span><strong>{item.date}</strong></div>
                <div className="tour-main"><h3>{item.title}</h3><p>{item.text}</p></div>
                <div className="tour-meta"><p><b>Venue</b>{item.venue}</p><p><b>Time</b>{item.time}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-shell feature-section">
        <div><p className="eyebrow dark"><span /> Features & activities</p><h2>Something for<br /><em>everyone.</em></h2><p>The celebration welcomes fitness enthusiasts, health professionals, students, civil servants, athletes, teachers, community members, gym owners and everyone interested in a healthier, more active life.</p></div>
        <ul>{features.map(feature => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
      </section>

      <section className="event-join">
        <div className="page-shell"><p className="eyebrow"><span /> Join the celebration</p><h2>10 years. 10 locations.<br /><em>One movement.</em></h2><p>Be part of this historic 10th-anniversary celebration.</p><a className="button" href={`${whatsappBase}?text=Hello%20KoredeFitness%2C%20I%20would%20like%20to%20join%20or%20support%20the%20Exercise%20Is%20Medicine%20%4010%20Anniversary%20Fitness%20Tour.`} target="_blank" rel="noreferrer">Join or partner with us <span>↗</span></a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
