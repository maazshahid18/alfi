import Link from "next/link";
import { site } from "@/lib/data";

export default function BageechaBanner() {
  return (
    <section className="bageecha-banner">
      <div className="container bageecha-inner">
        <div className="bageecha-content reveal-up">
          <span className="section-tag" style={{ color: "var(--gold)" }}>
            Our Venue
          </span>
          <h3>{site.bageecha.name}</h3>
          <p>{site.bageecha.description}</p>
        </div>
        <Link
          href={site.bageecha.url}
          className="bageecha-link reveal-up"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit bageecha.alfibuilders.com →
        </Link>
      </div>
    </section>
  );
}