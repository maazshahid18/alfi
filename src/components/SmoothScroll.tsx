"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

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

    const header = document.getElementById("header");
    const scrollProgress = document.querySelector<HTMLElement>(".scroll-progress");

    const updateUI = () => {
      const scrollY = lenis.scroll;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

      header?.classList.toggle("scrolled", scrollY > 60);
      if (scrollProgress) scrollProgress.style.width = `${progress}%`;
    };

    lenis.on("scroll", updateUI);
    updateUI();

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const navAnchors = document.querySelectorAll<HTMLAnchorElement>("[data-nav]");

    const setActiveNav = () => {
      const scrollY = lenis.scroll;
      let current = "";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (scrollY >= top) current = section.id;
      });

      navAnchors.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
      });
    };

    lenis.on("scroll", setActiveNav);

    window.addEventListener("load", () => ScrollTrigger.refresh());

    return () => {
      lenis.destroy();
      gsap.ticker.remove(ticker);
    };
  }, []);

  return null;
}