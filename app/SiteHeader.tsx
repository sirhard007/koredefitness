import MobileNav from "./MobileNav";
import Link from "next/link";

export const whatsappBase = "https://wa.me/2348069724058";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="KoredeFitness home">
        <span className="brand-mark"><img src="/images/brand-logo.webp" alt="" /></span>
        <span>KOREDE<span>FITNESS</span></span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/services">Services</Link>
        <Link href="/events">Events</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/gallery">Gallery</Link>
      </nav>
      <a className="button button-small" href={`${whatsappBase}?text=Hello%20KoredeFitness%2C%20I%20would%20like%20to%20book%20a%20consultation.`} target="_blank" rel="noreferrer">
        Book a consultation <span aria-hidden="true">↗</span>
      </a>
      <MobileNav whatsappBase={whatsappBase} />
    </header>
  );
}
