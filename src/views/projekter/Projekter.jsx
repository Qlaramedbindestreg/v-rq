import React, { useState, useEffect } from "react";
import "./projekter.scss";

import o from "../../assets/o.jpeg";
import d from "../../assets/d.jpeg";
import a from "../../assets/a.jpeg";
import y from "../../assets/y.jpeg";
import s from "../../assets/s.jpeg";

import skab from "../../assets/skab.jpeg";
import boks from "../../assets/boks.JPEG";
import boksgamer from "../../assets/boksgamer.jpeg";
import boksi from "../../assets/boksi.jpeg";
import boksudenfor from "../../assets/boksudenfor.jpeg";
import bts from "../../assets/bts.JPG";
import powerboks from "../../assets/powerboks.jpeg";

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
    year: "2024",
    collaborators: "Distortion × Tuborg",
    description:
      "Installation skabt til Distortion i samarbejde med Tuborg Sunsæt.",
    images: [sun10, sun2, sun1, sun3, sun4, sun5, sun6, sun7, sun8, sun9, sun11, sun12, sun13, sun14],
  },
  {
    title: "O Days",
    category: "Festival",
    year: "2024",
    collaborators: "O Days Festival",
    description:
      "Indgangsparti designet og udviklet til O Days festivalen med fokus på rumlig branding og atmosfære.",
    images: [d, o, a, y, s],
  },
  {
    title: "Power",
    category: "Brand Activation",
    year: "2023",
    collaborators: "Kesi × Power",
    description:
      "Fysisk installation udviklet til musikeren Kesi i samarbejde med Power.",
    images: [powerboks, boks, boksgamer, boksi, boksudenfor, bts],
  },
  {
    title: "Skab",
    category: "Privat kunde",
    year: "2023",
    collaborators: null,
    description:
      "Egetræs skab designet og specielbygget til opbevaring af vaskemaskine og tørretumbler.",
    images: [skab],
  },
];

export default function Projekter() {
  const [lightbox, setLightbox] = useState(null); // { project, index }

  const openLightbox = (project, index) => setLightbox({ project, index });
  const closeLightbox = () => setLightbox(null);

  const prev = (e) => {
    e.stopPropagation();
    setLightbox((lb) => ({
      ...lb,
      index: lb.index === 0 ? lb.project.images.length - 1 : lb.index - 1,
    }));
  };

  const next = (e) => {
    e.stopPropagation();
    setLightbox((lb) => ({
      ...lb,
      index: lb.index === lb.project.images.length - 1 ? 0 : lb.index + 1,
    }));
  };

  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setLightbox((lb) => ({ ...lb, index: lb.index === 0 ? lb.project.images.length - 1 : lb.index - 1 }));
      if (e.key === "ArrowRight") setLightbox((lb) => ({ ...lb, index: lb.index === lb.project.images.length - 1 ? 0 : lb.index + 1 }));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <main className="projects">
      <div className="projects__list">
        {projects.map((project, i) => (
          <article key={i} className="case">
            <div className="case__cover" onClick={() => openLightbox(project, 0)}>
              <img src={project.images[0]} alt={project.title} />
              <div className="case__coverOverlay">
                <span className="case__category">{project.category}</span>
                <h2 className="case__title">{project.title}</h2>
                {project.collaborators && (
                  <span className="case__collaborators">{project.collaborators}</span>
                )}
              </div>
            </div>

            <div className="case__body">
              <p className="case__description">{project.description}</p>

              {project.images.length > 1 && (
                <div className="case__strip">
                  {project.images.slice(1).map((img, j) => (
                    <button
                      key={j}
                      className="case__thumb"
                      onClick={() => openLightbox(project, j + 1)}
                    >
                      <img src={img} alt={`${project.title} ${j + 2}`} />
                      {j === 5 && project.images.length > 7 && (
                        <div className="case__thumbMore">
                          +{project.images.length - 7}
                        </div>
                      )}
                    </button>
                  )).slice(0, 6)}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox}>×</button>
          <button className="lightbox__prev" onClick={prev}>‹</button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.project.images[lightbox.index]}
              alt={`${lightbox.project.title} ${lightbox.index + 1}`}
            />
            <div className="lightbox__meta">
              <span className="lightbox__counter">
                {lightbox.index + 1} / {lightbox.project.images.length}
              </span>
              <span className="lightbox__name">{lightbox.project.title}</span>
            </div>
          </div>
          <button className="lightbox__next" onClick={next}>›</button>
        </div>
      )}
    </main>
  );
}
