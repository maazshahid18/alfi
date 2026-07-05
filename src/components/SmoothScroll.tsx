"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function shouldUseLenis() {
  if (typeof window === "undefined") return false;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const narrow = window.matchMedia("(max-width: 1024px)").matches;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  return !reduced && !narrow && !coarse;
}

export default function SmoothScroll() {
  useEffect(() => {
    const header = document.getElementById("header");
    const scrollProgress = document.querySelector<HTMLElement>(".scroll-progress");
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const navAnchors = document.querySelectorAll<HTMLAnchorElement>("[data-nav]");

    const updateUI = (scrollY: number) => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

      header?.classList.toggle("scrolled", scrollY > 60);
      if (scrollProgress) scrollProgress.style.width = `${progress}%`;

      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        if (scrollY >= top) current = section.id;
      });
      navAnchors.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
      });
    };

    if (!shouldUseLenis()) {
      const onScroll = () => updateUI(window.scrollY);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    lenis.on("scroll", () => updateUI(lenis.scroll));
    updateUI(lenis.scroll);

    window.addEventListener("load", () => ScrollTrigger.refresh());

    return () => {
      lenis.destroy();
      gsap.ticker.remove(ticker);
    };
  }, []);

  return null;
}