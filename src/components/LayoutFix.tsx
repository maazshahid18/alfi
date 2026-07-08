"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default function LayoutFix() {
  useEffect(() => {
    const fix = () => {
      const isNarrow = window.matchMedia("(max-width: 1024px)").matches;
      const track = document.getElementById("projects-track");

      if (isNarrow && track) {
        gsap.set(track, { x: 0, clearProps: "transform" });
      }

      document.documentElement.style.overflowX = "hidden";
      document.body.style.overflowX = "hidden";
      document.body.style.width = "100%";
    };

    fix();

    const mq = window.matchMedia("(max-width: 1024px)");
    mq.addEventListener("change", fix);
    window.addEventListener("orientationchange", fix);
    window.addEventListener("resize", fix);

    return () => {
      mq.removeEventListener("change", fix);
      window.removeEventListener("orientationchange", fix);
      window.removeEventListener("resize", fix);
    };
  }, []);

  return null;
}