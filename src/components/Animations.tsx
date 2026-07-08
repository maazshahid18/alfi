"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function isMobile() {
  return window.matchMedia("(max-width: 1024px)").matches;
}

function showAllAnimated() {
  document
    .querySelectorAll(".reveal-up, .reveal-scale, .service-card")
    .forEach((el) => {
      const node = el as HTMLElement;
      node.style.opacity = "1";
      node.style.transform = "none";
    });
}

export default function Animations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || isMobile()) {
      showAllAnimated();
      gsap.set(".hero-title .line span", { y: 0 });
      gsap.set(".hero-sub--banner", { y: 0, opacity: 1 });
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((counter) => {
        counter.textContent = counter.dataset.count || "0";
      });
      return;
    }

    gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
      if (el.closest(".hero") || el.closest(".services-scroll-pin")) return;
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      });
    });

    gsap.utils.toArray<HTMLElement>(".reveal-scale").forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });
    });

    gsap.set(".hero-title .line span", { y: "110%" });
    gsap.set(".hero-sub--banner", { y: 28, opacity: 0 });

    const heroTl = gsap.timeline({ delay: 0.3 });
    heroTl
      .to(".hero-title .line span", {
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      })
      .to(
        ".hero-content .reveal-up, .hero-title",
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        "-=0.6"
      )
      .to(
        ".hero-sub--banner",
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.45"
      );

    const heroMm = gsap.matchMedia();
    heroMm.add("(min-width: 1025px)", () => {
      gsap.to(".hero-bg-img", {
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: "10%",
        ease: "none",
      });
    });

    document.querySelectorAll<HTMLElement>("[data-count]").forEach((counter) => {
      const target = parseInt(counter.dataset.count || "0", 10);
      ScrollTrigger.create({
        trigger: counter.closest(".hero-stats"),
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate() {
              counter.textContent = String(
                Math.round(Number(gsap.getProperty(counter, "textContent")))
              );
            },
          });
        },
      });
    });

    const projectsSection = document.querySelector(".projects");
    const projectsTrack = document.getElementById("projects-track");
    const progressBar = document.getElementById("projects-progress");

    let projectsMm: ReturnType<typeof gsap.matchMedia> | null = null;

    if (projectsTrack && projectsSection) {
      projectsMm = gsap.matchMedia();
      projectsMm.add("(min-width: 1025px)", () => {
        const getScrollAmount = () => {
          const trackWidth = projectsTrack.scrollWidth;
          return -(trackWidth - window.innerWidth + 80);
        };

        gsap.to(projectsTrack, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: projectsSection,
            start: "top 15%",
            end: () => `+=${Math.abs(getScrollAmount())}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate(self) {
              if (progressBar) {
                const pct = self.progress * 100;
                let style = document.getElementById("progress-dynamic");
                if (!style) {
                  style = document.createElement("style");
                  style.id = "progress-dynamic";
                  document.head.appendChild(style);
                }
                style.textContent = `.projects-progress-bar::after { width: ${pct}% !important; }`;
              }
            },
          },
        });
      });
    }

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    window.addEventListener("load", () => ScrollTrigger.refresh());

    return () => {
      window.removeEventListener("resize", onResize);
      heroMm.revert();
      projectsMm?.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}