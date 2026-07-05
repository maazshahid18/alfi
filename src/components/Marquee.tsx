import { Fragment } from "react";
import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="marquee-section" aria-hidden="true">
      <div className="marquee">
        <div className="marquee-track">
          {items.map((item, i) => (
            <Fragment key={`${item}-${i}`}>
              <span>{item}</span>
              <span className="marquee-dot">◆</span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}