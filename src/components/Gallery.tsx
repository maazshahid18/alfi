"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  galleryFilters,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/data";

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory>("all");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const filtered =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const photoCount = galleryItems.filter((i) => i.type === "photo").length;
  const videoCount = galleryItems.filter((i) => i.type === "video").length;

  useEffect(() => {
    if (!active) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <section className="gallery section" id="gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-tag reveal-up">On Site</span>
            <h2 className="section-title reveal-up">
              Project <em>Gallery</em>
            </h2>
            <p className="projects-desc reveal-up">
              Photos and videos from our construction sites and completed works.
            </p>
          </div>

          <div className="gallery-filters reveal-up">
            {galleryFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`gallery-filter${filter === f.id ? " active" : ""}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((item) => (
              <button
                type="button"
                className="gallery-item reveal-up"
                key={item.id}
                onClick={() => setActive(item)}
                aria-label={`View ${item.title}`}
              >
                <div className="gallery-item-media">
                  {item.type === "photo" ? (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <>
                      <Image
                        src={item.poster || item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                      <span className="gallery-play" aria-hidden="true">
                        ▶
                      </span>
                    </>
                  )}
                </div>
                <div className="gallery-item-info">
                  <h3>{item.title}</h3>
                  <div className="gallery-item-meta">
                    <span>{item.category}</span>
                    {item.location && <span>{item.location}</span>}
                    <span>{item.type}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="gallery-note">No items in this category yet.</p>
          )}

          <p className="gallery-note reveal-up">
            {photoCount} photos{videoCount > 0 ? ` · ${videoCount} videos` : ""} from
            our project sites. Share your residential, commercial, and institutional
            photos &amp; videos — we&apos;ll keep expanding this gallery.
          </p>
        </div>
      </section>

      {active && (
        <div
          className="modal-overlay gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
          onClick={() => setActive(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              ×
            </button>
            <div className="modal-body">
              <span className="project-num">{active.category}</span>
              <h3 id="gallery-modal-title">{active.title}</h3>
              {active.location && (
                <div className="modal-meta">
                  <span>{active.location}</span>
                </div>
              )}
              {active.type === "photo" ? (
                <div className="modal-image" style={{ marginTop: "1rem" }}>
                  <Image
                    src={active.src}
                    alt={active.title}
                    fill
                    sizes="720px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ) : (
                <video
                  src={active.src}
                  controls
                  autoPlay
                  playsInline
                  poster={active.poster}
                  style={{ marginTop: "1rem", width: "100%" }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}