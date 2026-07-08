"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

type Rect = { left: number; top: number; width: number; height: number };

function measureRects(): { hero: Rect; nav: Rect } | null {
  const heroAnchor = document.getElementById("hero-logo-anchor");
  const navSlot = document.getElementById("nav-logo-slot");
  if (!heroAnchor || !navSlot) return null;

  const hero = heroAnchor.getBoundingClientRect();
  const nav = navSlot.getBoundingClientRect();

  return {
    hero: {
      left: hero.left,
      top: hero.top,
      width: hero.width,
      height: hero.height,
    },
    nav: {
      left: nav.left,
      top: nav.top,
      width: nav.width,
      height: nav.height,
    },
  };
}

function applyMorph(
  el: HTMLElement,
  from: Rect,
  to: Rect,
  progress: number
) {
  const left = gsap.utils.interpolate(from.left, to.left, progress);
  const top = gsap.utils.interpolate(from.top, to.top, progress);
  const width = gsap.utils.interpolate(from.width, to.width, progress);
  const height = gsap.utils.interpolate(from.height, to.height, progress);

  gsap.set(el, {
    position: "fixed",
    left,
    top,
    width,
    height,
    zIndex: 1002,
    pointerEvents: progress > 0.92 ? "none" : "auto",
    opacity: progress > 0.98 ? 0 : 1,
  });
}

export default function BrandLogo() {
  useEffect(() => {
    const morph = document.getElementById("logo-morph");
    const navText = document.querySelector<HTMLElement>(".nav-logo-text");
    const navImg = document.querySelector<HTMLElement>(".nav-logo-img");
    const header = document.getElementById("header");

    if (!morph) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      morph.style.display = "none";
      if (navImg) navImg.style.opacity = "1";
      if (navText) navText.style.opacity = "1";
      return;
    }

    let rects = measureRects();
    let scrollTrigger: ScrollTrigger | null = null;

    const positionAtHero = () => {
      rects = measureRects();
      if (rects) {
        applyMorph(morph, rects.hero, rects.hero, 0);
        morph.classList.add("is-ready");
      }
    };

    const setup = () => {
      positionAtHero();
      scrollTrigger?.kill();

      const mm = gsap.matchMedia();
      mm.add("(max-width: 768px)", () => {
        scrollTrigger = ScrollTrigger.create({
          trigger: "#hero",
          start: "top top",
          end: "38% top",
          scrub: 0.35,
          invalidateOnRefresh: true,
          onRefresh: positionAtHero,
          onUpdate(self) {
            if (self.progress < 0.03) rects = measureRects();
            if (!rects) return;

            const p = self.progress;
            applyMorph(morph, rects.hero, rects.nav, p);

            if (navText) {
              navText.style.opacity = String(Math.min(1, Math.max(0, (p - 0.4) * 2.2)));
            }
            if (navImg) {
              navImg.style.opacity = p > 0.94 ? "1" : "0";
            }
            header?.classList.toggle("logo-collapsed", p > 0.85);
          },
        });
      });

      mm.add("(min-width: 769px)", () => {
        scrollTrigger = ScrollTrigger.create({
          trigger: "#hero",
          start: "top top",
          end: "45% top",
          scrub: 0.4,
          invalidateOnRefresh: true,
          onRefresh: positionAtHero,
          onUpdate(self) {
            if (self.progress < 0.03) rects = measureRects();
            if (!rects) return;

            const p = self.progress;
            applyMorph(morph, rects.hero, rects.nav, p);

            if (navText) {
              navText.style.opacity = String(Math.min(1, Math.max(0, (p - 0.45) * 2.2)));
            }
            if (navImg) {
              navImg.style.opacity = p > 0.94 ? "1" : "0";
            }
            header?.classList.toggle("logo-collapsed", p > 0.85);
          },
        });
      });

      return () => mm.revert();
    };

    let cleanupMm: (() => void) | undefined;
    const raf = requestAnimationFrame(() => {
      cleanupMm = setup();
      ScrollTrigger.refresh();
    });

    const onResize = () => {
      ScrollTrigger.refresh();
      if (window.scrollY < 10) positionAtHero();
    };

    const delayedRefresh = window.setTimeout(() => {
      positionAtHero();
      ScrollTrigger.refresh();
    }, 350);

    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(delayedRefresh);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
      window.removeEventListener("orientationchange", onResize);
      scrollTrigger?.kill();
      cleanupMm?.();
    };
  }, []);

  return (
    <Link
      href="#hero"
      id="logo-morph"
      className="logo-morph"
      aria-label={site.name}
    >
      <Image
        src="/images/logo.png"
        alt=""
        fill
        className="logo-morph-img"
        sizes="280px"
        priority
      />
    </Link>
  );
}