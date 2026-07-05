import Image from "next/image";
import { capacityItems } from "@/lib/data";

export default function Capacity() {
  return (
    <section className="capacity section" id="capacity">
      <div className="container capacity-inner">
        <div className="capacity-img reveal-scale">
          <Image
            src="/images/capacity.jpeg"
            alt="Heavy construction equipment and machinery fleet"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="capacity-content">
          <span className="section-tag reveal-up">Our Fleet</span>
          <h2 className="section-title reveal-up">
            Built for <em>Scale</em>
          </h2>
          <p className="capacity-text reveal-up">
            Our capacity consists of top-of-the-range equipment and machinery —
            earth movers and transport equipment, reinforced concrete equipment,
            and lightweight machinery — enabling us to tackle projects of any
            magnitude.
          </p>
          <ul className="capacity-list reveal-up">
            {capacityItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}