import Image from "next/image";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header section-header--light">
          <span className="section-tag reveal-up">What We Do</span>
          <h2 className="section-title reveal-up">
            Our <em>Services</em>
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.num}>
              <div className="service-card-img">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="service-card-body">
                <span className="service-num">{service.num}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}