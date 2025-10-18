"use client";

import { useEffect, useRef } from "react";

/** Brand palette pulled to match thestarautoservice.com */
const BRAND_BLUE = "#0b5ed7";          // primary accents
const BRAND_BLUE_DARK = "#094db4";
const SERVICE_GREEN = "#28a745";       // secondary accents
const SERVICE_GREEN_DARK = "#218838";
const STRIPE_BG = "linear-gradient(90deg,#f8f9fa 0%,#ffffff 50%,#f8f9fa 100%)";
const STRIPE_BORDER = BRAND_BLUE;      // thin top/bottom stripe
const CONTAINER_MAX = "1200px";        // align with main content width

type Item = { text: string; href?: string; rel?: string };
type LoopProps = { title: string; items: Item[]; fast?: boolean; className?: string };

function Loop({ title, items, fast, className }: LoopProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onVis = () => {
      const state = document.hidden ? "paused" : "running";
      el.style.animationPlayState = state;
      const sib = el.nextElementSibling as HTMLElement | null;
      if (sib) sib.style.animationPlayState = state;
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const speedClass = fast ? "auto_loop_track fast" : "auto_loop_track";

  return (
    <section className={`auto_loop_outer ${className || ""}`} aria-label={title} aria-live="off">
      <div className="auto_container">
        <div className="auto_bar_title">{title}</div>
        <div className="auto_loop_mask">
          <div className={speedClass} ref={trackRef}>
            <ul className="auto_loop_group">
              {items.map((it, i) =>
                it.href ? (
                  <li key={i}>
                    <a className="auto_chip" href={it.href} target="_blank" rel={it.rel || "noopener noreferrer"}>
                      {it.text}
                    </a>
                  </li>
                ) : (
                  <li key={i}><span className="auto_chip" tabIndex={0}>{it.text}</span></li>
                )
              )}
            </ul>
          </div>
          {/* duplicate track for seamless loop */}
          <div className={speedClass} aria-hidden="true">
            <ul className="auto_loop_group">
              {items.map((it, i) =>
                it.href ? (
                  <li key={i}>
                    <a className="auto_chip" href={it.href} target="_blank" rel={it.rel || "noopener noreferrer"}>
                      {it.text}
                    </a>
                  </li>
                ) : (
                  <li key={i}><span className="auto_chip">{it.text}</span></li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .auto_loop_outer {
          position: relative;
          overflow: hidden;
          background: ${STRIPE_BG};
          padding: 18px 0;
          margin: 28px 0;
          border-top: 1.5px solid ${STRIPE_BORDER};
          border-bottom: 1.5px solid ${STRIPE_BORDER};
        }
        .auto_loop_outer::before,
        .auto_loop_outer::after {
          content: "";
          position: absolute; top: 0; bottom: 0; width: 70px;
          pointer-events: none; z-index: 2;
        }
        .auto_loop_outer::before { left: 0;  background: linear-gradient(90deg,#ffffff 0%,rgba(255,255,255,0) 100%); }
        .auto_loop_outer::after  { right: 0; background: linear-gradient(90deg,rgba(255,255,255,0) 0%,#ffffff 100%); }

        .auto_container { width: 100%; max-width: ${CONTAINER_MAX}; margin: 0 auto; padding: 0 16px; }
        .auto_bar_title {
          text-align: center; font-size: 13px; text-transform: uppercase;
          letter-spacing: 1.5px; color: #5a6772; margin-bottom: 12px; font-weight: 600;
        }
        .auto_loop_mask { overflow: hidden; position: relative; }
        .auto_loop_track { display: inline-flex; will-change: transform; animation: auto_scroll 44s linear infinite; }
        .auto_loop_track.fast { animation-duration: 34s; }
        .auto_loop_mask:hover .auto_loop_track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .auto_loop_track, .auto_loop_track.fast { animation: none; } }
        @keyframes auto_scroll { 0% { transform: translate3d(0,0,0);} 100% { transform: translate3d(-50%,0,0);} }

        .auto_loop_group { display: inline-flex; list-style: none; margin: 0; padding: 0 28px 0 0; white-space: nowrap; }

        .auto_chip {
          display: inline-block; padding: 9px 18px; margin: 0 7px;
          background: linear-gradient(135deg, ${BRAND_BLUE} 0%, ${BRAND_BLUE_DARK} 100%);
          color: #fff; text-decoration: none; border-radius: 999px; font-size: 14px; font-weight: 500;
          transition: transform .2s ease, box-shadow .2s ease, filter .2s ease;
          box-shadow: 0 2px 8px rgba(11,94,215,.18); outline: none;
        }
        .auto_chip:hover, .auto_chip:focus-visible { transform: translateY(-1.5px); box-shadow: 0 6px 18px rgba(11,94,215,.25); filter: brightness(.96); }

        /* makes row uses the green accent */
        :global(.makes) .auto_chip {
          background: linear-gradient(135deg, ${SERVICE_GREEN} 0%, ${SERVICE_GREEN_DARK} 100%);
          box-shadow: 0 2px 8px rgba(40,167,69,.18);
        }
        :global(.makes) .auto_chip:hover,
        :global(.makes) .auto_chip:focus-visible { box-shadow: 0 6px 18px rgba(40,167,69,.25); }
      `}</style>
    </section>
  );
}

export default function AutoLoops() {
  const makes: Item[] = [
    { text: "Toyota", href: "https://www.toyota.com" }, { text: "Honda", href: "https://www.honda.com" },
    { text: "Ford", href: "https://www.ford.com" }, { text: "Chevrolet", href: "https://www.chevrolet.com" },
    { text: "Nissan", href: "https://www.nissanusa.com" }, { text: "BMW", href: "https://www.bmwusa.com" },
    { text: "Mercedes-Benz", href: "https://www.mbusa.com" }, { text: "Audi", href: "https://www.audiusa.com" },
    { text: "Volkswagen", href: "https://www.vw.com" }, { text: "Subaru", href: "https://www.subaru.com" },
    { text: "Hyundai", href: "https://www.hyundaiusa.com" }, { text: "Kia", href: "https://www.kia.com" },
    { text: "Lexus", href: "https://www.lexus.com" }, { text: "Acura", href: "https://www.acura.com" },
    { text: "Infiniti", href: "https://www.infinitiusa.com" }, { text: "Mazda", href: "https://www.mazdausa.com" },
    { text: "Volvo", href: "https://www.volvocars.com/us" }, { text: "Porsche", href: "https://www.porsche.com/usa/" },
    { text: "Land Rover", href: "https://www.landroverusa.com" }, { text: "Jaguar", href: "https://www.jaguarusa.com" },
    { text: "Mini", href: "https://www.miniusa.com" }, { text: "Buick", href: "https://www.buick.com" },
    { text: "GMC", href: "https://www.gmc.com" }, { text: "Cadillac", href: "https://www.cadillac.com" },
    { text: "Chrysler", href: "https://www.chrysler.com" }, { text: "Dodge", href: "https://www.dodge.com" },
    { text: "Jeep", href: "https://www.jeep.com" }, { text: "Ram", href: "https://www.ramtrucks.com" },
    { text: "Tesla", href: "https://www.tesla.com" }, { text: "Mitsubishi", href: "https://www.mitsubishicars.com" }
  ];

  const services: Item[] = [
    { text: "Brake Repair Guide", href: "https://www.carcare.org/car-care-guide/brake-system/" },
    { text: "Oil Change Guide", href: "https://www.aaa.com/autorepair/articles/oil-change-everything-you-need-to-know" },
    { text: "Check Engine Light Info", href: "https://www.carcare.org/car-care-guide/check-engine-light/" },
    { text: "AC System Guide", href: "https://www.carcare.org/car-care-guide/heating-air-conditioning/" },
    { text: "Battery Replacement", href: "https://www.aaa.com/autorepair/articles/car-battery" },
    { text: "Wheel Alignment Info", href: "https://www.bridgestonetire.com/learn/maintenance/wheel-alignment/" },
    { text: "Tire Safety and Rotation", href: "https://www.nhtsa.gov/equipment/tires" },
    { text: "Suspension Systems", href: "https://www.moogparts.com/parts-matter/what-is-car-suspension.html" },
    { text: "Steering Repair Guide", href: "https://www.carcare.org/car-care-guide/steering-system/" },
    { text: "Engine Repair Info", href: "https://www.carcare.org/car-care-guide/engine/" },
    { text: "Transmission Service", href: "https://www.atra.com/consumer/transmission-information" },
    { text: "Spark Plugs Guide", href: "https://www.ngk.com/learning/ignition/spark-plugs-101" },
    { text: "Timing Belt Info", href: "https://www.gates.com/us/en/knowledge/timing-belt-replacement" },
    { text: "Cooling System Guide", href: "https://www.carcare.org/car-care-guide/cooling-system/" },
    { text: "Fuel System Guide", href: "https://www.carcare.org/car-care-guide/fuel-system/" },
    { text: "Texas State Inspection", href: "https://www.txdps.state.tx.us/rsd/vi/" },
    { text: "Pre Purchase Inspection", href: "https://www.aaa.com/autorepair/articles/pre-purchase-inspection" },
    { text: "Headlight Restoration", href: "https://www.aaa.com/autorepair/articles/headlight-restoration" },
    { text: "Wiper System Guide", href: "https://www.carcare.org/car-care-guide/wiper-blades/" },
    { text: "Visit Us in Richardson", href: "https://www.google.com/maps/dir/?api=1&destination=900+E+Belt+Line+Rd,+Richardson,+TX+75081", rel: "nofollow noopener" }
  ];

  return (
    <>
      <Loop title="We Service All Major Vehicle Brands" items={makes} className="makes" />
      <Loop title="Comprehensive Auto Services" items={services} fast />
    </>
  );
}
