import Link from "next/link";
import { site } from "@/lib/data";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag reveal-up">Contact Us</span>
            <h2 className="section-title reveal-up">
              Let&apos;s Build <em>Together</em>
            </h2>
            <p className="contact-lead reveal-up">
              Please get in touch with us for enquiries about your next project.
            </p>

            <ul className="contact-list">
              <li className="reveal-up">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <span>{site.address}</span>
                  <Link
                    href={site.bageecha.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "block", marginTop: "0.35rem", color: "var(--red)" }}
                  >
                    Visit {site.bageecha.name} →
                  </Link>
                </div>
              </li>
              <li className="reveal-up">
                <span className="contact-icon">🌐</span>
                <div>
                  <strong>Website</strong>
                  <Link href={site.url} target="_blank" rel="noopener noreferrer">
                    alfibuilders.com
                  </Link>
                </div>
              </li>
              <li className="reveal-up">
                <span className="contact-icon">📮</span>
                <div>
                  <strong>Postal</strong>
                  <span>{site.postal}</span>
                </div>
              </li>
              <li className="reveal-up">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <Link href={site.phoneHref}>{site.phone}</Link>
                </div>
              </li>
              <li className="reveal-up">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <Link href={`mailto:${site.email}`}>{site.email}</Link>
                </div>
              </li>
            </ul>

            <div className="contact-social reveal-up">
              <span>Find us on social media</span>
              <div className="social-links">
                <Link href={site.social.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </Link>
                <Link href={site.social.twitter} target="_blank" rel="noopener noreferrer">
                  Twitter
                </Link>
                <Link href={site.social.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </Link>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}