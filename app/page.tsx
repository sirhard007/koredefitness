import TrainingVideo from "./TrainingVideo";
import { EventCards, GalleryViewer } from "./InteractiveShowcase";
import MobileNav from "./MobileNav";

const whatsappBase = "https://wa.me/2348069724058";

const plans = [
  {
    tag: "START STRONG",
    name: "Foundation",
    price: "₦25,000",
    period: "/ 4 weeks",
    description: "A guided reset for beginners ready to build consistency and confidence.",
    features: ["3 workouts weekly", "Simple Nigerian meal guide", "Weekly progress check-in"],
  },
  {
    tag: "MOST POPULAR",
    name: "Total Transformation",
    price: "₦45,000",
    period: "/ 8 weeks",
    description: "Personalised training and nutrition support built around your real life.",
    features: ["Custom training plan", "Personalised nutrition guide", "Direct coach accountability"],
    featured: true,
  },
  {
    tag: "TRAIN IN PERSON",
    name: "1-on-1 Coaching",
    price: "Let’s talk",
    period: "",
    description: "Focused gym sessions, expert technique coaching and measurable progress.",
    features: ["Private coaching sessions", "Body composition tracking", "Priority support"],
  },
];

const articles = [
  { category: "NUTRITION", title: "How to build a Nigerian plate that supports your goals", time: "6 min read", number: "01", slug: "build-a-balanced-nigerian-plate", image: "/images/resources/nutrition-balanced-plate.webp" },
  { category: "TRAINING", title: "The beginner’s guide to strength training without fear", time: "5 min read", number: "02", slug: "beginners-guide-to-strength-training", image: "/images/resources/beginner-strength-training.webp" },
  { category: "MINDSET", title: "Consistency beats intensity: the plan you can actually keep", time: "4 min read", number: "03", slug: "consistency-beats-intensity", image: "/images/resources/fitness-mindset-consistency.webp" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="KoredeFitness home">
          <span className="brand-mark">K<span>/</span></span>
          <span>KOREDE<span>FITNESS</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#programmes">Programmes</a>
          <a href="#coach">Meet Korede</a>
          <a href="#events">Events</a>
          <a href="#gallery">Gallery</a>
        </nav>
        <a className="button button-small" href={`${whatsappBase}?text=Hello%20KoredeFitness%2C%20I%20would%20like%20to%20book%20a%20consultation.`} target="_blank" rel="noreferrer">
          Book a consultation <span aria-hidden="true">↗</span>
        </a>
        <MobileNav whatsappBase={whatsappBase} />
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="hero-content page-shell">
          <p className="hero-mantra"><span aria-hidden="true">✦</span> Exercise is medicine</p>
          <h1>Build strength.<br /><em>Own your life.</em></h1>
          <p className="hero-copy">Training that meets you where you are—and builds the discipline, confidence and body you’re proud to live in.</p>
          <div className="hero-actions">
            <a className="button" href="#programmes">Find your programme <span aria-hidden="true">→</span></a>
            <a className="text-link" href="#coach"><span className="play">▶</span> Meet your coach</a>
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
          <p>Whether you’re starting fresh, chasing a breakthrough or ready for dedicated coaching, there is a clear next step for you.</p>
        </div>
        <div className="plan-grid">
          {plans.map((plan) => (
            <article className={`plan-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
              <p className="plan-tag">{plan.tag}</p>
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="price"><strong>{plan.price}</strong> <span>{plan.period}</span></div>
              <ul>
                {plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}
              </ul>
              <a className={plan.featured ? "button" : "outline-button"} href={`${whatsappBase}?text=${encodeURIComponent(`Hello KoredeFitness, I am interested in the ${plan.name} programme.`)}`} target="_blank" rel="noreferrer">
                Choose {plan.name} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
        <p className="payment-note">Programme buttons currently open a WhatsApp enquiry. Connect Paystack or Flutterwave when the merchant account is ready.</p>
      </section>

      <section className="coach section" id="coach">
        <div className="page-shell coach-grid">
          <div className="coach-visual">
            <div className="coach-photo coach-real"><img src="/images/gallery/coach-korede-sharp.jpg" alt="Ambassador Coach Korede" loading="lazy" decoding="async" /><small>AMB. COACH KOREDE</small></div>
            <div className="experience-badge"><strong>EIM</strong><span>EXERCISE IS<br />MEDICINE</span></div>
          </div>
          <div className="coach-copy">
            <p className="eyebrow"><span /> Meet your coach</p>
            <h2>Movement with<br /><em>meaning.</em></h2>
            <p className="lead">Amb. Coach Korede is the coach behind KoredeFitness—an Ilorin-based gym owner, personal trainer and community fitness leader.</p>
            <p>His approach is built on one clear belief: exercise is medicine. Training should improve how you move, feel and live—not simply exhaust you. He supports beginners and active clients through personal coaching, group sessions and practical fitness guidance.</p>
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
            <p className="profile-note">Qualifications, career history and recognised achievements will be added after the official coach profile is received.</p>
            <a className="text-link lime" href={`${whatsappBase}?text=Hello%20KoredeFitness%2C%20I%20want%20to%20know%20more%20about%20personal%20coaching.`} target="_blank" rel="noreferrer">Talk to Korede <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="events section page-shell" id="events">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow dark"><span /> Fitness beyond four walls</p>
            <h2>Ilorin based.<br /><em>Built to move.</em></h2>
          </div>
          <p>KoredeFitness owns and operates from its Ilorin gym, while also organising and featuring at fitness experiences wherever the community gathers. Every event carries its own announced date and venue.</p>
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
          <div className="video-gallery">
            <div className="video-intro"><p className="eyebrow"><span /> Video gallery</p><h3>Fitness in motion</h3><p>Short motion previews now show the energy of a session. Replace them with KoredeFitness footage at final handover.</p></div>
            <figure className="video-card">
              <TrainingVideo src="/images/gallery/circuit-motion.webm" poster="/images/gallery/group-aerobics.jpg" label="Looping group circuit training preview" />
              <figcaption><span className="live-dot" /> <b>GYM CIRCUIT</b><small>Train with purpose</small></figcaption>
            </figure>
            <figure className="video-card">
              <TrainingVideo src="/images/gallery/aerobics-motion.webm" poster="/images/gallery/outdoor-session.jpg" label="Looping outdoor aerobics preview" />
              <figcaption><span className="live-dot" /> <b>OUTDOOR ENERGY</b><small>Move with the community</small></figcaption>
            </figure>
          </div>
          <p className="gallery-disclaimer">Temporary AI-generated training visuals are used for presentation. Replace them with approved KoredeFitness photography and video before the public campaign launch.</p>
        </div>
      </section>

      <section className="gym section">
        <div className="page-shell gym-grid">
          <div>
            <p className="eyebrow"><span /> Train with us</p>
            <h2>Your strongest hour<br /><em>starts here.</em></h2>
            <p>The KoredeFitness gym is the permanent home base in Ilorin—built for personal coaching, purposeful training and a community that wants to see you win.</p>
            <div className="gym-details">
              <div><span>⌖</span><p><b>HOME BASE</b>Ilorin, Kwara State</p></div>
              <div><span>◷</span><p><b>VISITS &amp; SESSIONS</b>Confirm availability on WhatsApp</p></div>
            </div>
            <a className="button" href={`${whatsappBase}?text=Hello%20KoredeFitness%2C%20I%20would%20like%20to%20book%20a%20gym%20visit.`} target="_blank" rel="noreferrer">Book a gym visit <span>→</span></a>
          </div>
          <div className="gym-panel"><span>PREMIUM TRAINING SPACE</span><strong>MOVE.<br />SWEAT.<br /><em>GROW.</em></strong></div>
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

      <footer>
        <div className="page-shell footer-main">
          <div><a className="brand footer-brand" href="#top"><span className="brand-mark">K<span>/</span></span><span>KOREDE<span>FITNESS</span></span></a><p>Build strength. Own your life.</p></div>
          <div><b>EXPLORE</b><a href="#programmes">Programmes</a><a href="#coach">Meet Korede</a><a href="#events">Events</a><a href="#gallery">Gallery</a></div>
          <div><b>CONNECT</b><a href="#resources">Fitness guides</a><a href={`${whatsappBase}`} target="_blank" rel="noreferrer">WhatsApp</a><a href="#top">Instagram</a></div>
          <div><b>HOME BASE</b><p>KoredeFitness Gym<br />Ilorin, Kwara State</p><p>Event venues<br />announced separately</p></div>
        </div>
        <div className="page-shell footer-bottom"><span>© 2026 KOREDEFITNESS</span><span>MOVE WITH PURPOSE.</span></div>
      </footer>

      <a className="floating-whatsapp" href={`${whatsappBase}?text=Hello%20KoredeFitness%2C%20I%20would%20like%20to%20get%20started.`} target="_blank" rel="noreferrer" aria-label="Chat with KoredeFitness on WhatsApp">WA</a>
    </main>
  );
}
