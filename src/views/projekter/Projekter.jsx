import React, { useState } from "react";
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
    description:
      "Installation skabt til Distortion i samarbejde med Tuborg Sunsæt.",
    images: [sun10, sun1, sun2, sun3, sun4, sun5, sun6, sun7, sun8, sun9, sun11, sun12, sun13, sun14],
    featured: true,
  },
  {
    title: "O Days",
    category: "Festival",
    description:
      "Indgangsparti designet og udviklet til O Days festivalen med fokus på rumlig branding og atmosfære.",
    images: [d, o, a, y, s],
    featured: true,
  },
  {
    title: "Power",
    category: "Brand Activation",
    description:
      "Fysisk installation udviklet til musikeren Kesi i samarbejde med Power.",
    images: [powerboks, boks, boksgamer, boksi, boksudenfor, bts],
    featured: false,
  },
  {
    title: "Skab",
    category: "Privat kunde",
    description: "Egetræs skab designet og specielbygget til opbevaring af vaskemaskine og tørretumbler.",
    images: [skab],
    featured: false,
  },
];

export default function Projekter() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (project, imageIndex) => {
    setSelectedProject(project);
    setSelectedImage(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setSelectedImage(null);
  };

  return (
    <main className="projects">
      <section className="projects__section">


        <div className="projects__grid">
          {projects.map((project, i) => (
            <article
              key={i}
              className={`projectCard ${project.featured ? "isFeatured" : ""}`}
            >
              <div className="projectCard__content">
                <span className="projectCard__category">
                  {project.category}
                </span>
                <h2 className="projectCard__title">{project.title}</h2>
                <p className="projectCard__description">
                  {project.description}
                </p>
              </div>

              <div className="projectCard__gallery">
                {project.images.length === 1 ? (
                  <div 
                    className="projectCard__singleImage"
                    onClick={() => openLightbox(project, 0)}
                  >
                    <img src={project.images[0]} alt={project.title} />
                  </div>
                ) : (
                  <div className="projectCard__galleryGrid">
                    {/* Hero image - first image large */}
                    <div 
                      className="projectCard__galleryItem projectCard__heroImage"
                      onClick={() => openLightbox(project, 0)}
                    >
                      <img src={project.images[0]} alt={`${project.title} - main`} />
                    </div>
                    
                    {/* Grid of remaining images */}
                    <div className="projectCard__thumbnailGrid">
                      {project.images.slice(1, 5).map((img, imgIndex) => (
                        <div 
                          key={imgIndex} 
                          className="projectCard__galleryItem"
                          onClick={() => openLightbox(project, imgIndex + 1)}
                        >
                          <img src={img} alt={`${project.title} - ${imgIndex + 2}`} />
                          {imgIndex === 3 && project.images.length > 5 && (
                            <div className="projectCard__moreOverlay">
                              <span>+{project.images.length - 5}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && selectedImage !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox}>×</button>
          <button 
            className="lightbox__prev" 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => 
                prev === 0 ? selectedProject.images.length - 1 : prev - 1
              );
            }}
          >
            ‹
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedProject.images[selectedImage]}  
              alt={`${selectedProject.title} - ${selectedImage + 1}`}
            />
            <div className="lightbox__info">
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <span>{selectedImage + 1} / {selectedProject.images.length}</span>
            </div>
          </div>
          <button 
            className="lightbox__next" 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => 
                prev === selectedProject.images.length - 1 ? 0 : prev + 1
              );
            }}
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}