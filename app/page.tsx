import { EventCards, GalleryViewer } from "./InteractiveShowcase";
import SiteHeader, { whatsappBase } from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const plans = [
  {
    tag: "ONE-TO-ONE",
    name: "Personal Training",
    href: "/services#personal-training",
    description: "Focused coaching built around your current ability, routine and fitness goals.",
    features: ["Individual fitness assessment", "Personalised training guidance", "Progress and technique support"],
  },
  {
    tag: "TRAIN TOGETHER",
    name: "Group Fitness",
    href: "/services#group-fitness",
    description: "Coach-led sessions that combine purposeful movement, energy and community.",
    features: ["Structured group workouts", "Supportive training environment", "Sessions for varied fitness levels"],
    featured: true,
  },
  {
    tag: "TRAIN ANYWHERE",
    name: "Online Coaching",
    href: "/services#online-coaching",
    description: "Practical remote coaching for people who want structure wherever they train.",
    features: ["Guided workout planning", "Regular accountability check-ins", "Practical fitness support"],
  },
];

const articles = [
  { category: "NUTRITION", title: "How to build a Nigerian plate that supports your goals", time: "6 min read", number: "01", slug: "build-a-balanced-nigerian-plate", image: "/images/resources/nutrition-balanced-plate.webp" },
  { category: "TRAINING", title: "The beginner’s guide to strength training without fear", time: "5 min read", number: "02", slug: "beginners-guide-to-strength-training", image: "/images/gallery/male-personal-coaching.webp" },
  { category: "MINDSET", title: "Consistency beats intensity: the plan you can actually keep", time: "4 min read", number: "03", slug: "consistency-beats-intensity", image: "/images/gallery/male-training-focus.webp" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="hero-content page-shell">
          <p className="hero-mantra"><span aria-hidden="true">✦</span> Exercise is medicine</p>
          <h1>Build strength.<br /><em>Own your life.</em></h1>
          <p className="hero-copy">Training that meets you where you are—and builds the discipline, confidence and body you’re proud to live in.</p>
          <div className="hero-actions">
            <a className="button" href="#programmes">Find your programme <span aria-hidden="true">→</span></a>
            <a className="text-link" href="/profile"><span className="play">▶</span> Meet your coach</a>
          </div>
        </div>
        <div className="hero-proof">
          <div><strong>1<span>:</span>1</strong><small>personal coaching</small></div>
          <div><strong>IL<span>R</span></strong><small>home base</small></div>
          <div><strong>360<span>°</span></strong><small>fitness support</small></div>
        </div>
        <a className="scroll-cue" href="#programmes" aria-label="Scroll to programmes">SCROLL <span>↓</span></a>
      </section>

      <section className="ticker" aria-label="KoredeFitness values">
        <div className="ticker-track">
          <p>LIVE STRONGER <span>✦</span> TRAIN SMARTER <span>✦</span> LIVE STRONGER <span>✦</span> TRAIN SMARTER <span>✦</span></p>
          <p aria-hidden="true">LIVE STRONGER <span>✦</span> TRAIN SMARTER <span>✦</span> LIVE STRONGER <span>✦</span> TRAIN SMARTER <span>✦</span></p>
        </div>
      </section>

      <section className="programmes section page-shell" id="programmes">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow dark"><span /> Choose your path</p>
            <h2>Built for real people.<br /><em>Designed for real results.</em></h2>
          </div>
          <p>Choose from flexible training options designed to support different goals, experience levels and routines.</p>
        </div>
        <div className="plan-grid">
          {plans.map((plan) => (
            <article className={`plan-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
              <p className="plan-tag">{plan.tag}</p>
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <ul>
                {plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}
              </ul>
              <a className={plan.featured ? "button" : "outline-button"} href={plan.href}>
                View {plan.name} services <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="coach section" id="coach">
        <div className="page-shell coach-grid">
          <div className="coach-visual">
            <div className="coach-photo coach-real"><img src="/images/gallery/coach-korede-profile.jpg" alt="Ambassador Coach Korede" loading="eager" decoding="async" /><small>AMB. COACH KOREDE</small></div>
            <div className="experience-badge"><strong>EIM</strong><span>EXERCISE IS<br />MEDICINE</span></div>
          </div>
          <div className="coach-copy">
            <p className="eyebrow"><span /> Meet your coach</p>
            <h2>Movement with<br /><em>meaning.</em></h2>
            <p className="lead">Ambassador Coach Korede is a fitness professional, wellness advocate and the founder of KoredeFitness.</p>
            <p>A Human Kinetics Education graduate of the University of Ilorin, he is CEO of Exercise Is Medicine, a professional fitness trainer, NLO League Coordinator, Master Trainer and Convener of Kwara Fitness Festival.</p>
            <div className="coach-focus" aria-label="Coach Korede's areas of focus">
              <span>Personal coaching</span>
              <span>Gym training</span>
              <span>Community wellness</span>
              <span>Fitness events</span>
            </div>
            <div className="coach-method">
              <div><b>01</b><p><strong>Meet you where you are</strong><span>Training begins with your current ability, routine and goals.</span></p></div>
              <div><b>02</b><p><strong>Build a practical plan</strong><span>Simple steps make progress easier to understand and sustain.</span></p></div>
              <div><b>03</b><p><strong>Grow through consistency</strong><span>Good form, accountability and steady action come first.</span></p></div>
            </div>
            <a className="text-link lime" href="/profile">Read full profile <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="events section page-shell" id="events">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow dark"><span /> Upcoming event</p>
            <h2>Ten years of impact.<br /><em>One powerful movement.</em></h2>
          </div>
          <p>Join Exercise Is Medicine @10 for a month-long anniversary fitness tour across Kwara State, culminating in a grand finale in Ilorin.</p>
        </div>
        <EventCards />
        <div className="event-action">
          <p>Planning a wellness event or looking for a fitness partner?</p>
          <a className="button" href={`${whatsappBase}?text=Hello%20KoredeFitness%2C%20I%20would%20like%20to%20discuss%20an%20event%2C%20partnership%20or%20guest%20fitness%20appearance.`} target="_blank" rel="noreferrer">Invite KoredeFitness <span>↗</span></a>
        </div>
      </section>

      <section className="gallery section" id="gallery">
        <div className="page-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow"><span /> Inside the movement</p>
              <h2>See the energy.<br /><em>Join the community.</em></h2>
            </div>
            <p>Training-focused visual previews for gym coaching, community aerobics, festivals and fitness tours.</p>
          </div>
          <GalleryViewer />
          <p className="gallery-disclaimer">Coach Korede’s supplied training photos are featured alongside supporting presentation visuals.</p>
        </div>
      </section>

      <section className="resources section page-shell" id="resources">
        <div className="section-heading split-heading compact">
          <div>
            <p className="eyebrow dark"><span /> Fitness guides</p>
            <h2>Simple guidance.<br /><em>Made useful.</em></h2>
          </div>
          <p className="guide-intro">No busy blog. Just practical guides for eating well, training safely and building a mindset that lasts.</p>
        </div>
        <div className="article-grid" id="articles">
          {articles.map((article) => (
            <article className="article-card" key={article.number}>
              <a className="article-card-link" href={`/resources/${article.slug}`} aria-label={`Read ${article.title}`}>
                <div className="article-art"><img src={article.image} alt="" loading="lazy" decoding="async" /><span>{article.number}</span><small>{article.category}</small></div>
                <div className="article-body"><p>{article.category} · {article.time}</p><h3>{article.title}</h3><span className="read-link">Read article <b aria-hidden="true">→</b></span></div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial section">
        <div className="page-shell quote-wrap">
          <span className="quote-mark">“</span>
          <blockquote>Korede didn’t just hand me a workout plan. He helped me understand what I was capable of—and held me to it.</blockquote>
          <p><strong>SAMPLE TESTIMONIAL</strong> · Replace with verified client feedback</p>
        </div>
      </section>

      <section className="faq section page-shell">
        <div>
          <p className="eyebrow dark"><span /> Before you start</p>
          <h2>Questions? <em>Answered.</em></h2>
        </div>
        <div className="faq-list">
          <details><summary>Do I need gym experience?<span>+</span></summary><p>Not at all. Your programme starts at your current level and progresses safely from there.</p></details>
          <details><summary>Can I train completely online?<span>+</span></summary><p>Yes. Online coaching includes your training plan, nutrition guidance and regular accountability check-ins.</p></details>
          <details><summary>Will I receive a meal plan?<span>+</span></summary><p>You’ll receive practical nutrition guidance designed around accessible foods, your preferences and your goals.</p></details>
          <details><summary>How quickly will I see results?<span>+</span></summary><p>Every body responds differently. We focus on sustainable progress in strength, fitness, habits and body composition.</p></details>
        </div>
      </section>

      <section className="final-cta" id="newsletter">
        <div className="page-shell">
          <p className="eyebrow"><span /> Your next chapter</p>
          <h2>Ready to become<br /><em>your strongest self?</em></h2>
          <p>Tell us your goal. We’ll help you choose the right place to start.</p>
          <a className="button" href={`${whatsappBase}?text=Hello%20KoredeFitness%2C%20I%20am%20ready%20to%20start%20my%20fitness%20journey.`} target="_blank" rel="noreferrer">Start on WhatsApp <span>↗</span></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
