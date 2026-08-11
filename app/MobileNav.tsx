"use client";

import { useEffect, useState } from "react";

const links = [
  ["Programmes", "#programmes"],
  ["Meet Korede", "#coach"],
  ["Events", "#events"],
  ["Gallery", "#gallery"],
  ["Fitness guides", "#resources"],
];

export default function MobileNav({ whatsappBase }: { whatsappBase: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <div className="mobile-navigation">
      <button
        className={`menu-toggle ${open ? "is-open" : ""}`}
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((current) => !current)}
      >
        <span /><span /><span />
      </button>
      <div className={`mobile-menu ${open ? "is-open" : ""}`} id="mobile-menu" aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>
              <small>{String(index + 1).padStart(2, "0")}</small>{label}<span>→</span>
            </a>
          ))}
        </nav>
        <a className="button mobile-booking" href={`${whatsappBase}?text=Hello%20KoredeFitness%2C%20I%20would%20like%20to%20book%20a%20consultation.`} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
          Book a consultation <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
