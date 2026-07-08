"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services, servicesSection } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const textSlides = gsap.utils.toArray<HTMLElement>(".services-slide", section);
    const imageSlides = gsap.utils.toArray<HTMLElement>(".services-image-slide", section);
    const pinTarget = section.querySelector<HTMLElement>(".services-scroll-pin");

    if (!textSlides.length || !imageSlides.length || !pinTarget) {
      return;
    }

    const setActiveSlide = (index: number) => {
      textSlides.forEach((slide, i) => {
        slide.setAttribute("aria-hidden", i === index ? "false" : "true");
      });
      imageSlides.forEach((slide, i) => {
        slide.setAttribute("aria-hidden", i === index ? "false" : "true");
      });
    };

    if (reduced) {
      gsap.set([...textSlides, ...imageSlides], { clearProps: "all" });
      [...textSlides, ...imageSlides].forEach((slide) => {
        slide.style.opacity = "1";
        slide.style.visibility = "visible";
        slide.style.transform = "none";
        slide.style.position = "relative";
      });
      setActiveSlide(0);
      return;
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      gsap.set(textSlides, { autoAlpha: 0, y: 40 });
      gsap.set(imageSlides, { autoAlpha: 0, scale: 1.05 });
      gsap.set(textSlides[0], { autoAlpha: 1, y: 0 });
      gsap.set(imageSlides[0], { autoAlpha: 1, scale: 1 });
      setActiveSlide(0);

      const scrollPerSlide = () => window.innerHeight * 0.7;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinTarget,
          start: "center center",
          end: () => `+=${scrollPerSlide() * (textSlides.length - 1)}`,
          pin: pinTarget,
          scrub: 0.65,
          anticipatePin: 0,
          invalidateOnRefresh: true,
          onUpdate(self) {
            const index = Math.min(
              textSlides.length - 1,
              Math.round(self.progress * (textSlides.length - 1))
            );
            setActiveSlide(index);
          },
        },
      });

      textSlides.forEach((slide, index) => {
        if (index === 0) return;

        const prevText = textSlides[index - 1];
        const prevImage = imageSlides[index - 1];
        const nextText = slide;
        const nextImage = imageSlides[index];

        tl.to(
          prevText,
          { autoAlpha: 0, y: -28, duration: 1, ease: "power2.inOut" },
          index - 1
        )
          .to(
            prevImage,
            { autoAlpha: 0, scale: 1.04, duration: 1.1, ease: "power2.inOut" },
            index - 1
          )
          .fromTo(
            nextText,
            { autoAlpha: 0, y: 36 },
            { autoAlpha: 1, y: 0, duration: 1, ease: "power2.inOut" },
            index - 1
          )
          .fromTo(
            nextImage,
            { autoAlpha: 0, scale: 1.06 },
            { autoAlpha: 1, scale: 1, duration: 1.15, ease: "power2.inOut" },
            index - 1
          );
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
        gsap.set([...textSlides, ...imageSlides], { clearProps: "all" });
      };
    });

    mm.add("(max-width: 768px)", () => {
      gsap.set([...textSlides, ...imageSlides], {
        clearProps: "all",
        autoAlpha: 1,
        y: 0,
        scale: 1,
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger && section.contains(trigger.trigger as Node)) {
            trigger.kill();
          }
        });
      };
    });

    const onRefresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onRefresh);
    window.addEventListener("load", onRefresh);

    return () => {
      window.removeEventListener("resize", onRefresh);
      window.removeEventListener("load", onRefresh);
      mm.revert();
    };
  }, []);

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="services-scroll-wrap">
        <div className="services-scroll-pin">
          <div className="container services-scroll-inner">
            <header className="services-header section-header">
              <h2 className="section-title">
                Complete <em>Construction Solutions</em>
              </h2>
              <p className="section-lead">{servicesSection.subtitle}</p>
            </header>

            <div className="services-showcase" aria-live="polite">
              <div className="services-copy">
                {services.map((item, index) => (
                  <article
                    className={`services-slide${index === 0 ? " is-first" : ""}`}
                    key={item.title}
                    aria-hidden={index !== 0}
                  >
                    <div className="services-slide-mobile-visual">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="100vw"
                        className="services-slide-img"
                      />
                    </div>
                    <h3 className="services-slide-title">{item.title}</h3>
                    <ul className="services-slide-list">
                      {item.items.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="services-visual">
                {services.map((item, index) => (
                  <div
                    className={`services-image-slide${index === 0 ? " is-first" : ""}`}
                    key={item.title}
                    aria-hidden={index !== 0}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="services-slide-img"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}