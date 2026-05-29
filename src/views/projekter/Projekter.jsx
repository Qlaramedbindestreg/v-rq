import React from "react";
import "./projekter.scss";

import o from "../../assets/o.jpeg";
import d from "../../assets/d.jpeg";
import a from "../../assets/a.jpeg";
import y from "../../assets/y.jpeg";
import s from "../../assets/s.jpeg";

import skab from "../../assets/skab.jpeg";
import boks from "../../assets/boks.jpeg";
import boksgamer from "../../assets/boksgamer.jpeg";
import boksi from "../../assets/boksi.jpeg";
import boksudenfor from "../../assets/boksudenfor.jpeg";
import bts from "../../assets/bts.jpg";
import powerboks from "../../assets/powerboks.jpeg";

const erhverv = [
  { title: "O Days", images: [d, o, a, y, s] },
  {
    title: "Power",
    images: [powerboks, boks, boksgamer, boksi, boksudenfor, bts],
  },
];

const privateProjekter = [
  { title: "Skab", images: [skab] },
];

export default function Projekter() {
  const handleNext = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const scrollWidth = el.scrollWidth;
    const visibleWidth = el.offsetWidth;
    const currentScroll = el.scrollLeft;

    if (currentScroll + visibleWidth >= scrollWidth - 1) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: visibleWidth, behavior: "smooth" });
    }
  };

const renderMasonryItem = (project, i, isCarousel = false) => (
  <div key={i} className="masonryItem">
    {/* Titlen først */}
    {project.title && (
      <h2 className="projectTitle">{project.title}</h2>
    )}

    {/* Billeder/carousel */}
    {isCarousel ? (
      <div className="carouselWrapper">
        <div className="carousel" id={`carousel-${i}`}>
          {project.images.map((img, index) => (
            <div className="carouselItem" key={index}>
              <img src={img} alt={project.title} />
            </div>
          ))}
        </div>
        <button
          className="arrow"
          onClick={() => handleNext(`carousel-${i}`)}
        >
          →
        </button>
      </div>
    ) : (
      <img src={project.images[0]} alt={project.title} />
    )}
  </div>
);


  return (
    <main className="projekterMain">
      {/* ERHVERV */}
      <section className="section">
        <h1 className="sectionTitle">Erhverv</h1>
        <div className="masonryGrid">
          {erhverv.map((project, i) =>
            renderMasonryItem(project, i, project.images.length > 1)
          )}
        </div>
      </section>

      {/* PRIVATE */}
      <section className="section">
        <h1 className="sectionTitle">Private projekter</h1>
        <div className="masonryGrid">
          {privateProjekter.map((project, i) =>
            renderMasonryItem(project, i, false)
          )}
        </div>
      </section>
    </main>
  );
}
