import Image from "next/image";
import Link from "next/link";
import { site, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-split">
        <div className="hero-content">
          <div className="hero-content-inner">
            <div className="hero-panel">
              <div className="hero-panel-top reveal-up">
                <Image
                  src="/images/logo.jpeg"
                  alt=""
                  width={52}
                  height={52}
                  className="hero-panel-logo"
                  priority
                />
                <div className="hero-badge">
                  <span className="hero-badge-dot" />
                  Est. {site.established} · {site.location}
                </div>
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

              <div className="hero-panel-stats reveal-up">
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
        </div>

        <div className="hero-visual" aria-hidden="true">
          <Image
            src={site.heroImage}
            alt=""
            fill
            priority
            quality={92}
            className="hero-visual-img"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="hero-visual-shade" />
          <div className="hero-visual-edge" />
          <div className="hero-visual-caption">
            <span>Precision Engineering</span>
            <span>On Every Project</span>
          </div>
        </div>
      </div>
    </section>
  );
}