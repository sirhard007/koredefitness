import { whatsappBase } from "./SiteHeader";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <>
      <footer>
        <div className="page-shell footer-main">
          <div><Link className="brand footer-brand" href="/"><span className="brand-mark"><img src="/images/brand-logo.webp" alt="" /></span><span>KOREDE<span>FITNESS</span></span></Link><p>Train. Transform. Thrive.</p></div>
          <div><b>EXPLORE</b><Link href="/profile">Coach profile</Link><Link href="/services">Services</Link><Link href="/event/eim-at-10">Upcoming event</Link><Link href="/#gallery">Gallery</Link></div>
          <div><b>CONNECT</b><Link href="/blog">Fitness blog</Link><a href={whatsappBase} target="_blank" rel="noreferrer">WhatsApp</a></div>
          <div><b>AVAILABLE</b><p>Ilorin, Kwara State</p><p>Across Nigeria<br />and internationally</p></div>
        </div>
        <div className="page-shell footer-bottom"><span>© 2026 KOREDEFITNESS</span><span>LOCAL • NATIONAL • INTERNATIONAL</span></div>
      </footer>
      <a className="floating-whatsapp" href={`${whatsappBase}?text=Hello%20KoredeFitness%2C%20I%20would%20like%20to%20get%20started.`} target="_blank" rel="noreferrer" aria-label="Chat with KoredeFitness on WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.05 4a11.85 11.85 0 0 0-10.2 17.88L4 28l6.28-1.8A11.94 11.94 0 1 0 16.05 4Zm0 21.72c-1.8 0-3.55-.5-5.08-1.43l-.36-.22-3.72 1.06 1.1-3.62-.24-.38a9.46 9.46 0 1 1 8.3 4.59Zm5.2-7.08c-.29-.14-1.7-.84-1.96-.94-.26-.09-.45-.14-.64.14-.19.29-.74.94-.91 1.13-.17.19-.33.22-.62.07-.29-.14-1.21-.45-2.3-1.42a8.64 8.64 0 0 1-1.6-1.99c-.17-.29-.02-.44.13-.58.13-.13.29-.33.43-.5.14-.16.19-.28.29-.47.09-.19.05-.36-.03-.5-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.43s1.03 2.81 1.17 3c.14.19 2.04 3.11 4.93 4.36.69.3 1.23.47 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33Z"/></svg>
      </a>
    </>
  );
}
