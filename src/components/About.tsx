import Image from "next/image";
import { pillars } from "@/lib/data";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag reveal-up">About Us</span>
          <h2 className="section-title reveal-up">
            Who Is <em>Alfi</em> Builder?
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-images">
            <div className="about-img-main reveal-scale">
              <Image
                src="/images/about-survey.jpeg"
                alt="Construction survey work on site"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="about-img-secondary reveal-scale">
              <Image
                src="/images/about-team.jpeg"
                alt="Alfi construction team on site"
                fill
                sizes="30vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="about-floating-card reveal-up">
              <Image
                src="/images/logo.jpeg"
                alt=""
                width={40}
                height={40}
              />
              <div>
                <strong>Locally Owned</strong>
                <span>Incorporated &amp; trusted since 2009</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <p className="about-lead reveal-up">
              Alfi Builder is an incorporated, locally owned company offering
              engineering construction and construction project management across
              India.
            </p>
            <p className="reveal-up">
              We are dedicated to organizations and individuals seeking
              construction services — from power distribution and transmission
              companies to municipalities, parastatals, and commercial &amp;
              residential real estate developers.
            </p>
            <p className="reveal-up">
              Our expertise spans building technology, civil and structural
              engineering, with a commitment to cost-effective, successful
              projects delivered on schedule and within budget.
            </p>
            <div className="about-pillars">
              {pillars.map((pillar) => (
                <div className="pillar reveal-up" key={pillar.title}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}