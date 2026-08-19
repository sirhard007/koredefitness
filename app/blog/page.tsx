import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";

export const metadata: Metadata = {
  title: "Fitness Blog | KoredeFitness",
  description: "Practical KoredeFitness articles on training, nutrition, consistency and healthy living.",
};

const articles = [
  { category: "TRAINING", title: "How many days a week should you exercise?", excerpt: "Choose a weekly training schedule that matches your experience, recovery and fitness goal.", time: "5 min read", number: "01", slug: "how-many-days-a-week-should-you-exercise", image: "/images/events/male-festival-grass.webp" },
  { category: "NUTRITION", title: "How to build a Nigerian plate that supports your goals", excerpt: "A practical way to combine familiar Nigerian foods into meals that support energy, recovery and healthy living.", time: "6 min read", number: "02", slug: "build-a-balanced-nigerian-plate", image: "/images/resources/nutrition-balanced-plate.webp" },
  { category: "TRAINING", title: "The beginner’s guide to strength training without fear", excerpt: "Learn the basic movement patterns, session frequency and gradual steps that make strength training easier to start.", time: "5 min read", number: "03", slug: "beginners-guide-to-strength-training", image: "/images/gallery/hero-male-only.webp" },
  { category: "WEIGHT MANAGEMENT", title: "Aerobics or strength training: which is better for weight loss?", excerpt: "Understand how cardio and resistance training can work together in a practical weight-management plan.", time: "6 min read", number: "04", slug: "aerobics-or-strength-training-for-weight-loss", image: "/images/gallery/male-community-grass.webp" },
  { category: "NUTRITION", title: "Seven Nigerian foods that support muscle recovery", excerpt: "Familiar protein and carbohydrate options that can support recovery after exercise.", time: "6 min read", number: "05", slug: "nigerian-foods-for-muscle-recovery", image: "/images/resources/nutrition-balanced-plate.webp" },
  { category: "MOBILITY", title: "Why warming up matters before every workout", excerpt: "Prepare your joints, raise your body temperature and rehearse the movements in your session.", time: "5 min read", number: "06", slug: "why-warming-up-matters", image: "/images/events/male-corporate-grass.webp" },
  { category: "HEALTHY LIVING", title: "How to exercise safely when you have a busy schedule", excerpt: "Use shorter sessions, planned training days and simple home workouts to stay active during demanding weeks.", time: "5 min read", number: "07", slug: "exercise-with-a-busy-schedule", image: "/images/gallery/coach-korede-mobility-05.jpg" },
  { category: "PERSONAL TRAINING", title: "What to expect from your first personal-training session", excerpt: "A simple guide to assessment, goal setting and the first steps in a tailored training plan.", time: "5 min read", number: "08", slug: "first-personal-training-session", image: "/images/gallery/male-personal-coaching.webp" },
  { category: "MINDSET", title: "Consistency beats intensity: the plan you can actually keep", excerpt: "Build a realistic fitness routine that survives busy weeks and helps you return quickly after a missed session.", time: "4 min read", number: "09", slug: "consistency-beats-intensity", image: "/images/gallery/male-training-focus.webp" },
];

export default function BlogPage() {
  const [featuredArticle, ...moreArticles] = articles;

  return (
    <main className="inner-page blog-index">
      <SiteHeader />
      <section className="inner-hero blog-index-hero">
        <div className="page-shell blog-index-copy">
          <p className="eyebrow"><span /> KoredeFitness blog</p>
          <h1>Useful fitness guidance.<br /><em>Written for real life.</em></h1>
          <p>Read practical articles on movement, nutrition and the habits that support steady progress.</p>
        </div>
      </section>

      <section className="section page-shell blog-list-section">
        <div className="blog-list-intro">
          <h2>Latest <em>articles.</em></h2>
          <p>Nine practical articles you can apply to your training and daily routine.</p>
        </div>
        <article className="blog-featured-card">
          <a href={`/blog/${featuredArticle.slug}`} aria-label={`Read ${featuredArticle.title}`}>
            <div className="blog-featured-image"><img src={featuredArticle.image} alt="" decoding="async" /><span>FEATURED ARTICLE</span></div>
            <div className="blog-featured-copy"><p>{featuredArticle.category} · {featuredArticle.time}</p><h2>{featuredArticle.title}</h2><span>{featuredArticle.excerpt}</span><b>Read featured article <i aria-hidden="true">→</i></b></div>
          </a>
        </article>
        <div className="article-grid">
          {moreArticles.map((article) => (
            <article className="article-card" key={article.slug}>
              <a className="article-card-link" href={`/blog/${article.slug}`} aria-label={`Read ${article.title}`}>
                <div className="article-art"><img src={article.image} alt="" loading="lazy" decoding="async" /><span>{article.number}</span><small>{article.category}</small></div>
                <div className="article-body"><p>{article.category} · {article.time}</p><h3>{article.title}</h3><span className="event-summary">{article.excerpt}</span><span className="read-link">Read article <b aria-hidden="true">→</b></span></div>
              </a>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
