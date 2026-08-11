import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

const whatsappBase = "https://wa.me/2348069724058";

const resources = {
  "build-a-balanced-nigerian-plate": {
    category: "Nutrition",
    time: "6 min read",
    title: "How to build a Nigerian plate that supports your goals",
    intro: "Healthy eating does not require abandoning familiar Nigerian food. The goal is to build a plate that gives your body enough protein, energy, fibre and variety in portions that suit your activity level.",
    image: "/images/resources/nutrition-balanced-plate.webp",
    imageAlt: "A balanced Nigerian meal with protein, vegetables and a measured carbohydrate portion",
    sections: [
      { heading: "Start with protein", body: "Give protein a clear place on the plate. Fish, chicken, eggs, beans, moi moi, lean meat and unsweetened dairy can support recovery and help meals feel satisfying. Choose a portion that fits comfortably in your palm as a practical starting point." },
      { heading: "Make vegetables visible", body: "Add vegetables rather than treating them as decoration. Ugu, okra, ewedu, cabbage, carrots, garden eggs and other local produce bring fibre, colour and useful micronutrients. Aim for variety across the week." },
      { heading: "Choose your energy portion", body: "Rice, yam, plantain, garri, swallow and other carbohydrates fuel activity. Your portion should reflect how active you are, your health needs and your goal. You do not need to fear carbohydrates; you need an amount that works for you." },
      { heading: "Watch the extras", body: "Cooking oil, sugary drinks, large sauces and constant snacking can quietly add more energy than expected. Water is the easiest everyday drink, and simple cooking methods make portions easier to understand." },
    ],
    takeaway: "A useful plate is not perfect—it is balanced, enjoyable and repeatable. Build most meals around protein, vegetables, an appropriate energy source and water.",
  },
  "beginners-guide-to-strength-training": {
    category: "Training",
    time: "5 min read",
    title: "The beginner’s guide to strength training without fear",
    intro: "Strength training is not reserved for experienced athletes. A good beginner programme teaches movement first, uses manageable resistance and gives the body time to adapt.",
    image: "/images/resources/beginner-strength-training.webp",
    imageAlt: "A beginner learning safe strength-training form with a coach",
    sections: [
      { heading: "Learn the movement before chasing weight", body: "Practise basic patterns such as squatting, pushing, pulling, hinging and carrying. Control each repetition and use a range of motion you can manage without pain. Good technique gives you a foundation for progress." },
      { heading: "Begin with two or three sessions", body: "Two or three full-body sessions each week are enough for many beginners. Leave recovery time between harder sessions and keep the plan simple enough to follow consistently." },
      { heading: "Progress in small steps", body: "When your repetitions feel controlled, increase one variable at a time: a little more resistance, one or two extra repetitions, or another set. Small improvements are easier to sustain than sudden jumps." },
      { heading: "Know the difference between effort and pain", body: "Working muscles may feel challenged, but sharp, sudden or worsening pain is a reason to stop. Ask a qualified coach to check your technique, and seek medical guidance when an injury or health condition may affect exercise." },
    ],
    takeaway: "Your first goal is confidence and control. Build a repeatable routine, record your sessions and let progress accumulate gradually.",
  },
  "consistency-beats-intensity": {
    category: "Mindset",
    time: "4 min read",
    title: "Consistency beats intensity: the plan you can actually keep",
    intro: "One exhausting week rarely changes a life. Progress usually comes from ordinary sessions repeated long enough to become part of who you are.",
    image: "/images/resources/fitness-mindset-consistency.webp",
    imageAlt: "An athlete calmly preparing and planning for a consistent workout routine",
    sections: [
      { heading: "Set a minimum you can keep", body: "Decide what counts on a difficult week. It might be two planned workouts, a twenty-minute walk or preparing tomorrow’s training clothes. A realistic minimum protects momentum when life becomes busy." },
      { heading: "Attach training to a routine", body: "Choose a repeatable cue: after work, after school drop-off or at a fixed weekend time. Reducing the number of daily decisions makes action easier." },
      { heading: "Track attendance before outcomes", body: "Weight, measurements and performance can change slowly. Record the behaviours you control—sessions completed, steps taken, sleep and meal preparation—so you can see evidence that the process is working." },
      { heading: "Recover quickly from a missed day", body: "Missing one session is not failure. Avoid the all-or-nothing response and return at the next planned opportunity. Consistency includes learning how to restart without punishment." },
    ],
    takeaway: "Choose a plan that can survive real life. The best programme is not the hardest one—it is the useful one you can return to week after week.",
  },
} as const;

type ResourceSlug = keyof typeof resources;

export function generateStaticParams() {
  return Object.keys(resources).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const resource = resources[slug as ResourceSlug];
  return resource ? { title: `${resource.title} | KoredeFitness`, description: resource.intro } : {};
}

export default async function ResourceArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = resources[slug as ResourceSlug];
  if (!resource) notFound();

  return (
    <main className="resource-page">
      <header className="site-header article-header">
        <Link className="brand" href="/" aria-label="KoredeFitness home"><span className="brand-mark">K<span>/</span></span><span>KOREDE<span>FITNESS</span></span></Link>
        <Link className="article-back" href="/#resources">← Back to fitness guides</Link>
        <a className="button button-small" href={`${whatsappBase}?text=${encodeURIComponent("Hello KoredeFitness, I would like help choosing a fitness programme.")}`} target="_blank" rel="noreferrer">Talk to a coach <span aria-hidden="true">↗</span></a>
      </header>

      <article className="resource-article">
        <div className="resource-hero page-shell">
          <div className="resource-title">
            <p className="eyebrow dark"><span /> {resource.category} · {resource.time}</p>
            <h1>{resource.title}</h1>
            <p>{resource.intro}</p>
          </div>
          <figure><img src={resource.image} alt={resource.imageAlt} decoding="async" /></figure>
        </div>

        <div className="resource-content page-shell">
          <div className="resource-steps">
            {resource.sections.map((section, index) => (
              <section key={section.heading}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h2>{section.heading}</h2><p>{section.body}</p></div>
              </section>
            ))}
          </div>
          <aside>
            <p>THE SIMPLE TAKEAWAY</p>
            <h2>{resource.takeaway}</h2>
            <a className="button" href={`${whatsappBase}?text=${encodeURIComponent(`Hello KoredeFitness, I read your ${resource.category.toLowerCase()} article and would like personal guidance.`)}`} target="_blank" rel="noreferrer">Get personal guidance <span aria-hidden="true">↗</span></a>
            <small>General educational information only. Personal health needs differ; consult an appropriate healthcare professional when needed.</small>
          </aside>
        </div>
      </article>

      <footer className="article-footer"><div className="page-shell"><span>© 2026 KOREDEFITNESS</span><Link href="/#resources">Explore another guide →</Link></div></footer>
    </main>
  );
}
