import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import { GalleryViewer } from "../InteractiveShowcase";

export const metadata: Metadata = {
  title: "Fitness Gallery | KoredeFitness",
  description: "Explore KoredeFitness personal training, mobility, group fitness and community wellness moments.",
};

export default function GalleryPage() {
  return (
    <main className="inner-page gallery-page">
      <SiteHeader />
      <section className="inner-hero blog-index-hero">
        <div className="page-shell blog-index-copy">
          <p className="eyebrow"><span /> KoredeFitness gallery</p>
          <h1>Movement in focus.<br /><em>Fitness in action.</em></h1>
          <p>Explore coaching, mobility work, personal training and community fitness moments from the KoredeFitness movement.</p>
        </div>
      </section>

      <section className="gallery section">
        <div className="page-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow"><span /> Inside the movement</p>
              <h2>Training moments.<br /><em>Community energy.</em></h2>
            </div>
            <p>Select any photograph to view it in full and move through the complete collection.</p>
          </div>
          <GalleryViewer full />
          <p className="gallery-disclaimer">The collection will continue to grow as more approved KoredeFitness photographs become available.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
