"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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
      {!open && <button
        className="menu-toggle"
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        <span /><span /><span />
      </button>}
      {open && createPortal(
        <div className="mobile-menu is-open" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button
            className="menu-toggle menu-close"
            type="button"
            aria-label="Close navigation menu"
            aria-expanded="true"
            aria-controls="mobile-menu"
            onClick={() => setOpen(false)}
          >
            <span /><span /><span />
          </button>
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
        </div>,
        document.body,
      )}
    </div>
  );
}
