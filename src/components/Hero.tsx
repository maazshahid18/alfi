import Image from "next/image";
import Link from "next/link";
import { site, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" aria-hidden="true">
        <Image
          src={site.heroImage}
          alt=""
          fill
          priority
          quality={92}
          className="hero-bg-img"
          sizes="100vw"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-inner container">
        <div className="hero-content">
          <div className="hero-badge reveal-up">
            <span className="hero-badge-dot" />
            Est. {site.established} · {site.location}
          </div>

          <h1 className="hero-title">
            <span className="line">
              <span>Building</span>
            </span>
            <span className="line">
              <span className="hero-title-accent">Trust.</span>
            </span>
            <span className="line">
              <span>Crafting Classics.</span>
            </span>
          </h1>

          <p className="hero-sub reveal-up">{site.description}</p>

          <div className="hero-actions reveal-up">
            <Link href="#projects" className="btn btn-primary">
              View Our Work
            </Link>
            <Link href="#contact" className="btn btn-ghost">
              Get in Touch
            </Link>
          </div>

          <div className="hero-stats reveal-up">
            {stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span className="hero-stat-num" data-count={stat.value}>
                  0
                </span>
                {stat.suffix && (
                  <span className="hero-stat-suffix">{stat.suffix}</span>
                )}
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}