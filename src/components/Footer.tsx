import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Image
            src="/images/logo.jpeg"
            alt={site.name}
            width={56}
            height={56}
          />
          <div>
            <strong>{site.shortName}</strong>
            <span>Builders &amp; Developers</span>
            <small>{site.tagline}</small>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href={site.bageecha.url} target="_blank" rel="noopener noreferrer">
            Bageecha
          </Link>
          <Link href={site.url} target="_blank" rel="noopener noreferrer">
            alfibuilders.com
          </Link>
        </nav>

        <p className="footer-copy">
          &copy; {site.established}–{year} {site.name}. All rights reserved.
        </p>
        <p className="footer-tagline">Safety First · Progress Must</p>
      </div>
    </footer>
  );
}