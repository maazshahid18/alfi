import Image from "next/image";
import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" aria-hidden="true">
        <Image
          src="/images/hero.jpeg"
          alt=""
          fill
          priority
          quality={100}
          className="hero-bg-img"
          sizes="100vw"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-inner container">
        <div className="hero-brand">
          <div className="hero-logo-anchor" id="hero-logo-anchor">
            <div className="hero-logo-spacer" aria-hidden="true" />
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="line">
              <span>WE BUILD MORE THAN STRUCTURES,</span>
            </span>
            <span className="line">
              <span>WE BUILD </span>
              <span className="hero-title-accent">TRUST.</span>
            </span>
          </h1>
        </div>

        <p className="hero-sub hero-sub--banner">
          {site.descriptionLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </div>
    </section>
  );
}