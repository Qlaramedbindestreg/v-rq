import React from "react";
import "./projekter.scss";
import o from "../../assets/o.jpeg";
import d from "../../assets/d.jpeg";
import a from "../../assets/a.jpeg";
import y from "../../assets/y.jpeg";
import s from "../../assets/s.jpeg";

const images = [o, d, a, y, s];

export default function Projekter() {
  return (
    <main className="projekterMain">
      <section className="introSection">
        <div className="textContainer">
          <h1 className="title">Projekter</h1>

          <p className="description">
            Arbejdet på musikfestivalen O Days handlede om at skabe en
            genkendelig og imødekommende entré, der inviterer publikum ind i
            festivalens stemning. Projektet var vores første større opgave som
            kollektiv og viste, hvordan enkelt, gennemarbejdet design kan løfte
            publikums oplevelse.
          </p>
        </div>

        <div className="groupImageContainer">
          <img
            src={o}
            alt="Detalje fra O Days indgangsparti"
            className="groupImage"
            loading="eager"
          />
        </div>
      </section>

      <section className="projectDetails">
        <h2 className="sectionTitle">O Days — indgangsparti</h2>

        <p className="projectText">
          Opgaven omfattede konceptudvikling, konstruktionstegninger,
          materialevalg og byggeansvar. Vi designede elementer, så de kunne
          sættes op og tages ned effektivt, med fokus på holdbarhed og
          funktionalitet. Projektet blev gennemført i tæt dialog med festivalens
          tekniske team og frivillige.
        </p>

        <ul className="projectFacts">
          <li>
            <span className="factLabel">Rolle:</span> Koncept, scenografi og
            byggeansvar
          </li>
          <li>
            <span className="factLabel">Fokus:</span> Materialeeffektivitet,
            modularitet og sikkerhed
          </li>
          <li>
            <span className="factLabel">Samarbejde:</span> Festivalteam, lokale
            håndværkere og frivillige
          </li>
        </ul>
      </section>

      <section
        className="gallerySection"
        aria-label="Billeder fra O Days projektet"
      >
        <h3 className="galleryTitle">Billedserie fra projektet</h3>

        <div className="galleryGrid" role="list">
          {images.map((src, i) => (
            <figure key={i} className="projectCard" role="listitem">
              <img
                src={src}
                alt={`O Days – foto ${i + 1}`}
                className="projectImage"
                loading="lazy"
                width="600"
                height="400"
              />
              <figcaption className="caption">O Days — detalje {i + 1}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="ctaSection">
        <p className="ctaText">
          Vil du høre mere om projektet eller samarbejde med os om scenografi og
          identitet?
        </p>
        <a href="/kontakt" className="ctaLink">
          Kontakt os
        </a>
      </section>
    </main>
  );
}
