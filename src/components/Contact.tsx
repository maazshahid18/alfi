import Link from "next/link";
import { contactSection, site } from "@/lib/data";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag reveal-up">{contactSection.tag}</span>
            <h2 className="section-title reveal-up">
              {contactSection.title}{" "}
              <em>{contactSection.titleEm}</em>
            </h2>
            <p className="contact-lead reveal-up">{contactSection.lead}</p>

            <ul className="contact-list">
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
              <li className="reveal-up">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <span>{site.address}</span>
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