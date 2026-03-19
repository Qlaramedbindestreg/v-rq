import React from "react";
import "./projekter.scss";

import o from "../../assets/o.jpeg";
import d from "../../assets/d.jpeg";
import a from "../../assets/a.jpeg";
import y from "../../assets/y.jpeg";
import s from "../../assets/s.jpeg";

import generator from "../../assets/generator.png";

import gen from "../../assets/newgenerous.png";
import gen2 from "../../assets/newgenerous2.png";
import gen3 from "../../assets/newgenerous3.png";

import gestuz from "../../assets/gestuz.png";

import skab from "../../assets/skab.jpeg";
import bank from "../../assets/baenk.png";
import hons from "../../assets/honsehus.png";

const erhverv = [
  { title: "O Days", images: [d, o, a, y, s] },
  { title: "Generator", images: [generator] },
  { title: "New Generous", images: [gen, gen2, gen3] },
  { title: "Gestuz", images: [gestuz] },
];

const privateProjekter = [skab, bank, hons];

export default function Projekter() {
  const handleNext = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const scrollWidth = el.scrollWidth;
    const visibleWidth = el.offsetWidth;
    const currentScroll = el.scrollLeft;

    if (currentScroll + visibleWidth >= scrollWidth - 1) {
      // nåede sidste billede → tilbage til start
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      // gå til næste billede
      el.scrollBy({ left: visibleWidth, behavior: "smooth" });
    }
  };

  return (
    <main className="projekterMain">

      <section className="section">
        <h1 className="sectionTitle">Erhverv</h1>

        <div className="projectGrid">
          {erhverv.map((project, i) => (
            <div key={i} className="projectCard">

              

              <div className="imageWrapper">
                {project.images.length > 1 ? (
                  <div className="carouselWrapper">
                    <div className="carousel" id={`carousel-${i}`}>
                      {project.images.map((img, index) => (
                        <img key={index} src={img} alt={project.title} />
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
                  <img
  src={project.images[0]}
  alt={project.title}
  className={project.title === "Gestuz" ? "gestuzImage" : ""}
/>
                )}
              </div>

              <h2 className="projectTitle">{project.title}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h1 className="sectionTitle">Private projekter</h1>

        <div className="privateGrid">
          {privateProjekter.map((img, i) => (
            <div key={i} className="privateItem">
              <img src={img} alt="Privat projekt" />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}