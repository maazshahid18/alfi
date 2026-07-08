import Link from "next/link";

export default function HeroCta() {
  return (
    <section className="hero-cta" aria-label="Quick links">
      <div className="container">
        <div className="hero-actions reveal-up">
          <Link href="#services" className="btn btn-primary">
            Our Services
          </Link>
          <Link href="#contact" className="btn btn-ghost">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}