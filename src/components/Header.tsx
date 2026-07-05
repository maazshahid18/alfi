"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { externalLinks, navLinks, site } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  const toggle = () => {
    const next = !open;
    setOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link href="#hero" className="nav-logo" onClick={close}>
          <Image
            src="/images/logo.jpeg"
            alt={site.name}
            width={48}
            height={48}
            priority
          />
          <span className="nav-logo-text">
            <strong>{site.shortName}</strong>
            <small>Builders &amp; Developers</small>
          </span>
        </Link>

        <ul className={`nav-links${open ? " open" : ""}`} id="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                data-nav
                className={link.label === "Contact" ? "nav-cta" : undefined}
                onClick={close}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {externalLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="nav-external"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
              >
                {link.label} ↗
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`nav-toggle${open ? " open" : ""}`}
          id="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={toggle}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}