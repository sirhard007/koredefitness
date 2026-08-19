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
    image: "/images/gallery/hero-male-only.webp",
    imageAlt: "Men practising several beginner-friendly strength-training movements in a gym",
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
    image: "/images/gallery/male-training-focus.webp",
    imageAlt: "A male athlete calmly preparing for a consistent workout routine",
    sections: [
      { heading: "Set a minimum you can keep", body: "Decide what counts on a difficult week. It might be two planned workouts, a twenty-minute walk or preparing tomorrow’s training clothes. A realistic minimum protects momentum when life becomes busy." },
      { heading: "Attach training to a routine", body: "Choose a repeatable cue: after work, after school drop-off or at a fixed weekend time. Reducing the number of daily decisions makes action easier." },
      { heading: "Track attendance before outcomes", body: "Weight, measurements and performance can change slowly. Record the behaviours you control—sessions completed, steps taken, sleep and meal preparation—so you can see evidence that the process is working." },
      { heading: "Recover quickly from a missed day", body: "Missing one session is not failure. Avoid the all-or-nothing response and return at the next planned opportunity. Consistency includes learning how to restart without punishment." },
    ],
    takeaway: "Choose a plan that can survive real life. The best programme is not the hardest one—it is the useful one you can return to week after week.",
  },
  "how-many-days-a-week-should-you-exercise": {
    category: "Training",
    time: "5 min read",
    title: "How many days a week should you exercise?",
    intro: "The right number of training days depends on your experience, schedule, recovery and goal. A plan that fits your week is more useful than an ambitious routine you cannot maintain.",
    image: "/images/events/male-festival-grass.webp",
    imageAlt: "A coach leading a large outdoor group fitness session",
    sections: [
      { heading: "Begin with a realistic weekly target", body: "Two or three planned sessions each week can give a beginner enough practice while leaving time for recovery. Someone with more experience may train more often, provided the sessions are arranged sensibly." },
      { heading: "Match frequency to your goal", body: "General fitness can include strength work, cardio and mobility across the week. A specific goal may need a different balance, so the content of each session matters as much as the number of days." },
      { heading: "Leave room for recovery", body: "Hard sessions place demands on muscles, joints and energy levels. Sleep, food and easier days help the body adapt. Persistent fatigue or worsening performance may mean the schedule needs adjustment." },
      { heading: "Count everyday movement too", body: "Walking, active commuting and short mobility sessions also contribute to an active life. Every day does not need to be a hard gym day for your week to be productive." },
    ],
    takeaway: "Start with two or three structured sessions, stay active between them and add more only when your recovery and routine can support it.",
  },
  "aerobics-or-strength-training-for-weight-loss": {
    category: "Weight Management",
    time: "6 min read",
    title: "Aerobics or strength training: which is better for weight loss?",
    intro: "Aerobic exercise and strength training support weight management in different ways. Most people benefit from combining them with eating habits that match their health needs and goals.",
    image: "/images/gallery/male-community-grass.webp",
    imageAlt: "A group fitness session combining movement, strength and cardio",
    sections: [
      { heading: "Aerobics increases active energy use", body: "Brisk walking, dance fitness, cycling and similar activities raise the heart rate and can increase the energy used during a session. Choose an intensity you can manage safely and repeat regularly." },
      { heading: "Strength training protects useful muscle", body: "Resistance exercises challenge the muscles and help maintain or develop strength. This matters during weight loss because the goal should include preserving physical function, not only changing the number on a scale." },
      { heading: "Use both across the week", body: "A balanced routine may include two or three strength sessions and separate aerobic activity. The exact mix depends on your fitness level, available time and any medical or joint concerns." },
      { heading: "Food intake still matters", body: "Exercise supports weight management, but eating patterns influence the overall result. Regular meals, measured portions and enough protein can make the plan easier to sustain." },
    ],
    takeaway: "Combine aerobic exercise with strength training. Choose a weekly routine and eating pattern you can maintain long enough to measure real progress.",
  },
  "nigerian-foods-for-muscle-recovery": {
    category: "Nutrition",
    time: "6 min read",
    title: "Seven Nigerian foods that support muscle recovery",
    intro: "Recovery meals do not need imported products. Familiar Nigerian foods can provide protein, carbohydrate, fluid and micronutrients after exercise when portions are suited to the individual.",
    image: "/images/resources/nutrition-balanced-plate.webp",
    imageAlt: "A balanced meal with familiar Nigerian protein and carbohydrate foods",
    sections: [
      { heading: "Eggs, fish and chicken", body: "These foods provide protein that supports muscle repair. Grill, boil or prepare them with moderate oil, then combine them with vegetables and an appropriate carbohydrate portion." },
      { heading: "Beans and moi moi", body: "Beans provide plant protein, carbohydrate and fibre. Moi moi can be a practical option after training, especially when it is paired with another balanced part of the meal." },
      { heading: "Milk or unsweetened yoghurt", body: "Dairy foods provide protein and fluid. Choose a portion that suits your digestion and health needs, and check added sugar when buying packaged yoghurt." },
      { heading: "Rice, yam and plantain", body: "Carbohydrate foods help replace energy used during exercise. Pair them with a clear protein source rather than allowing the carbohydrate portion to fill the entire plate." },
    ],
    takeaway: "Build recovery meals from a protein source, a suitable energy portion, vegetables and water. Seven useful options include eggs, fish, chicken, beans, moi moi, dairy and familiar carbohydrate foods.",
  },
  "why-warming-up-matters": {
    category: "Mobility",
    time: "5 min read",
    title: "Why warming up matters before every workout",
    intro: "A warm-up prepares the body and mind for the work ahead. It should raise your temperature gradually and practise the movement patterns required in the main session.",
    image: "/images/events/male-corporate-grass.webp",
    imageAlt: "A group performing controlled lunges during an outdoor warm-up",
    sections: [
      { heading: "Raise the temperature gradually", body: "Begin with easy walking, marching or another light activity. The aim is to feel warmer and ready, not tired before the main workout starts." },
      { heading: "Move the joints you will use", body: "Use controlled movements for the hips, shoulders, ankles and upper back as needed. Select exercises that relate to the session instead of completing a long routine with no clear purpose." },
      { heading: "Practise the main exercise", body: "Before heavier strength work, perform the same movement with body weight or a lighter load. Before faster cardio, increase the pace in stages so the body can adjust." },
      { heading: "Keep the warm-up focused", body: "Many sessions need only several purposeful minutes. Longer preparation may be useful when the workout is demanding or when an individual needs extra mobility work." },
    ],
    takeaway: "Warm up by raising your temperature, moving the relevant joints and rehearsing the main exercises at an easier level.",
  },
  "exercise-with-a-busy-schedule": {
    category: "Healthy Living",
    time: "5 min read",
    title: "How to exercise safely when you have a busy schedule",
    intro: "A demanding week does not always allow long gym sessions. Short, planned workouts can still support fitness when the exercises are suitable and the routine is followed consistently.",
    image: "/images/gallery/coach-korede-mobility-05.jpg",
    imageAlt: "Coach Korede demonstrating a short functional training movement",
    sections: [
      { heading: "Schedule the session before the week begins", body: "Choose specific days and realistic times. A short appointment in your calendar is easier to protect than a vague intention to exercise whenever you become free." },
      { heading: "Use full-body movements", body: "Squats, presses, rows, hinges, carries and brisk walking can cover major movement patterns efficiently. Exercise choice should still reflect your experience, available equipment and health status." },
      { heading: "Keep a shorter backup plan", body: "Prepare a fifteen- or twenty-minute option for difficult days. Completing a smaller safe session can protect the routine without forcing an exhausting workout into an already demanding schedule." },
      { heading: "Avoid rushing technique", body: "Limited time is not a reason to use poor form or skip a sensible warm-up. Reduce the number of exercises while keeping each repetition controlled." },
    ],
    takeaway: "Plan two or three realistic sessions, keep a shorter backup workout and protect good technique even when time is limited.",
  },
  "first-personal-training-session": {
    category: "Personal Training",
    time: "5 min read",
    title: "What to expect from your first personal-training session",
    intro: "A first personal-training session should help the coach understand your goals, current ability and preferred training environment before a suitable programme is developed.",
    image: "/images/gallery/male-personal-coaching.webp",
    imageAlt: "A coach guiding a client through a personal strength-training session",
    sections: [
      { heading: "A discussion about your goals", body: "Expect questions about what you want to achieve, your routine and previous exercise experience. Share relevant injuries, health conditions and concerns so the coach can plan responsibly." },
      { heading: "A basic fitness assessment", body: "The coach may observe posture, mobility, balance and simple movement patterns. The assessment should suit your starting level and help identify an appropriate point of entry." },
      { heading: "Introduction to key exercises", body: "You may practise a small number of movements with close guidance. The coach should explain technique, breathing and how the exercise connects to your goal." },
      { heading: "A plan for the next steps", body: "The session should end with a clear recommendation on training frequency, programme structure and progress tracking. You should also know how questions and accountability will be handled." },
    ],
    takeaway: "Your first session should produce a clear starting point, a practical plan and an understanding of how progress will be measured.",
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
        <Link className="brand" href="/" aria-label="KoredeFitness home"><span className="brand-mark"><img src="/images/brand-logo.webp" alt="" /></span><span>KOREDE<span>FITNESS</span></span></Link>
        <Link className="article-back" href="/blog">← Back to the blog</Link>
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

      <footer className="article-footer"><div className="page-shell"><span>© 2026 KOREDEFITNESS</span><Link href="/blog">Explore another article →</Link></div></footer>
    </main>
  );
}
