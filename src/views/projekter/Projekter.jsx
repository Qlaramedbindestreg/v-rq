import React, { useState, useEffect } from "react";
import "./projekter.scss";

// O Days 2025
import o from "../../assets/o.jpeg";
import d from "../../assets/d.jpeg";
import a from "../../assets/a.jpeg";
import y from "../../assets/y.jpeg";
import s from "../../assets/s.jpeg";

// O Days 2026
import kasse from "../../assets/kasse.jpg";
import plante from "../../assets/plante.jpg";
import plantvid from "../../assets/plantvid.jpg";
import plantekassevid from "../../assets/plantekassevid.mp4";
import plantebts from "../../assets/plantebts.jpg";

// Power
import skab from "../../assets/skab.jpeg";
import boks from "../../assets/boks.JPEG";
import boksgamer from "../../assets/boksgamer.jpeg";
import boksi from "../../assets/boksi.jpeg";
import boksudenfor from "../../assets/boksudenfor.jpeg";
import bts from "../../assets/bts.JPG";
import powerboks from "../../assets/powerboks.jpeg";

// Tuborg Sunsæt
import sun1 from "../../assets/sun1.JPG";
import sun2 from "../../assets/sun2.JPG";
import sun3 from "../../assets/sun3.JPG";
import sun4 from "../../assets/sun4.JPG";
import sun5 from "../../assets/sun5.JPG";
import sun6 from "../../assets/sun6.JPG";
import sun7 from "../../assets/sun7.JPG";
import sun8 from "../../assets/sun8.JPG";
import sun9 from "../../assets/sun9.jpg";
import sun10 from "../../assets/sun10.jpg";
import sun11 from "../../assets/sun11.jpg";
import sun12 from "../../assets/sun12.jpg";
import sun13 from "../../assets/sun13.JPG";
import sun14 from "../../assets/sun14.JPG";

const projects = [
  {
    title: "Tuborg Sunsæt",
    category: "Festival Installation",
    year: "2025",
    collaborators: "Distortion × Tuborg",
    description:
      "Installation skabt til Distortion i samarbejde med Tuborg Sunsæt.",
    media: [
      { type: "image", src: sun10 },
      { type: "image", src: sun2 },
      { type: "image", src: sun1 },
      { type: "image", src: sun3 },
      { type: "image", src: sun4 },
      { type: "image", src: sun5 },
      { type: "image", src: sun6 },
      { type: "image", src: sun7 },
      { type: "image", src: sun8 },
      { type: "image", src: sun9 },
      { type: "image", src: sun11 },
      { type: "image", src: sun12 },
      { type: "image", src: sun13 },
      { type: "image", src: sun14 },
    ],
  },

  {
    title: "O Days 2025",
    category: "Festival",
    year: "2025",
    collaborators: "O Days Festival",
    description:
      "Indgangsparti designet og udviklet til O Days festivalen med fokus på rumlig branding og atmosfære.",
    media: [
      { type: "image", src: d },
      { type: "image", src: o },
      { type: "image", src: a },
      { type: "image", src: y },
      { type: "image", src: s },
    ],
  },

  {
    title: "O Days 2026",
    category: "Festival",
    year: "2026",
    collaborators: "O Days Festival",
    description:
      "Plantekasser designet og udviklet til O Days festivalen med fokus på funktionalitet og rumlig identitet.",
    media: [
      { type: "image", src: kasse },
      { type: "image", src: plante },
      { type: "image", src: plantvid },
      { type: "video", src: plantekassevid },
      { type: "image", src: plantebts },
    ],
  },

  {
    title: "Power",
    category: "Brand Activation",
    year: "2025",
    collaborators: "Kesi × Power",
    description:
      "Fysisk installation udviklet til musikeren Kesi i samarbejde med Power.",
    media: [
      { type: "image", src: powerboks },
      { type: "image", src: boks },
      { type: "image", src: boksgamer },
      { type: "image", src: boksi },
      { type: "image", src: boksudenfor },
      { type: "image", src: bts },
    ],
  },

  {
    title: "Skab",
    category: "Privat kunde",
    year: "2025",
    collaborators: null,
    description:
      "Egetræs skab designet og specielbygget til opbevaring af vaskemaskine og tørretumbler.",
    media: [{ type: "image", src: skab }],
  },
];

export default function Projekter() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (project, index) => {
    setLightbox({ project, index });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const prev = (e) => {
    e.stopPropagation();

    setLightbox((lb) => ({
      ...lb,
      index:
        lb.index === 0
          ? lb.project.media.length - 1
          : lb.index - 1,
    }));
  };

  const next = (e) => {
    e.stopPropagation();

    setLightbox((lb) => ({
      ...lb,
      index:
        lb.index === lb.project.media.length - 1
          ? 0
          : lb.index + 1,
    }));
  };

  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox) return;

      if (e.key === "Escape") {
        closeLightbox();
      }

      if (e.key === "ArrowLeft") {
        setLightbox((lb) => ({
          ...lb,
          index:
            lb.index === 0
              ? lb.project.media.length - 1
              : lb.index - 1,
        }));
      }

      if (e.key === "ArrowRight") {
        setLightbox((lb) => ({
          ...lb,
          index:
            lb.index === lb.project.media.length - 1
              ? 0
              : lb.index + 1,
        }));
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  const renderMedia = (media, className = "") => {
    if (media.type === "video") {
      return (
        <video
          className={className}
          src={media.src}
          controls
          playsInline
          preload="metadata"
        />
      );
    }

    return (
      <img
        className={className}
        src={media.src}
        alt=""
      />
    );
  };

  return (
    <main className="projects">
      <div className="projects__list">

        {projects.map((project, i) => (
          <article key={i} className="case">

            {/* Cover */}
            <div
              className="case__cover"
              onClick={() => openLightbox(project, 0)}
            >
              {renderMedia(project.media[0])}

              <div className="case__coverOverlay">
                <span className="case__category">
                  {project.category}
                </span>

                <h2 className="case__title">
                  {project.title}
                </h2>

                {project.collaborators && (
                  <span className="case__collaborators">
                    {project.collaborators}
                  </span>
                )}
              </div>
            </div>

            {/* Body */}
            <div className="case__body">

              <p className="case__description">
                {project.description}
              </p>

              {project.media.length > 1 && (
                <div className="case__strip">

                  {project.media
                    .slice(1)
                    .map((media, j) => (
                      <button
                        key={j}
                        className="case__thumb"
                        onClick={() =>
                          openLightbox(project, j + 1)
                        }
                      >
                        {media.type === "video" ? (
                          <>
                            <video
                              src={media.src}
                              muted
                              playsInline
                              preload="metadata"
                            />

                            <span className="case__videoIcon">
                              ▶
                            </span>
                          </>
                        ) : (
                          <img
                            src={media.src}
                            alt={`${project.title} ${j + 2}`}
                          />
                        )}

                        {j === 5 &&
                          project.media.length > 7 && (
                            <div className="case__thumbMore">
                              +{project.media.length - 7}
                            </div>
                          )}
                      </button>
                    ))
                    .slice(0, 6)}

                </div>
              )}

            </div>
          </article>
        ))}

      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox"
          onClick={closeLightbox}
        >
          <button
            className="lightbox__close"
            onClick={closeLightbox}
            aria-label="Luk"
          >
            ×
          </button>

          <button
            className="lightbox__prev"
            onClick={prev}
            aria-label="Forrige"
          >
            ‹
          </button>

          <div
            className="lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            {renderMedia(
              lightbox.project.media[lightbox.index]
            )}

            <div className="lightbox__meta">
              <span className="lightbox__counter">
                {lightbox.index + 1} /{" "}
                {lightbox.project.media.length}
              </span>

              <span className="lightbox__name">
                {lightbox.project.title}
              </span>
            </div>
          </div>

          <button
            className="lightbox__next"
            onClick={next}
            aria-label="Næste"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}