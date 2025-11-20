import React from "react";
import "./booking.scss";

const OFFER_ITEMS = [
  "Modulopbyggede scener og udstillinger",
  "Mobile installationer med lav CO₂-udledning",
  "Websites og visuelle identiteter, der matcher den fysiske scenografi",
  "Rådgivning i cirkulært design og genbrugspotentiale",
];

export default function Booking() {
  return (
    <main className="booking">
      <section className="booking__layout">
        <div className="booking__intro">
          <h1 className="booking__title">Book VærQ</h1>

          <p className="booking__text">
            VærQ er en designvirksomhed, der tilbyder scenografi- og
            identitetsdesign til kunstnere, kulturinstitutioner, events og
            festivaller. Vores kerneydelse er skræddersyede visuelle
            helhedsløsninger – fra fysisk setdesign til digital tilstedeværelse,
            hvor fx scenografi og hjemmeside udvikles som ét samlet æstetisk og
            funktionelt koncept.
          </p>

          <p className="booking__text">
            Vi oplever et stigende behov i kulturbranchen for visuelle koncepter,
            der er både æstetisk stærke, klimabevidste og digitale. VærQ tilbyder
            derfor fleksible designpakker, der kan rumme:
          </p>
        </div>

        <section
          className="booking__packages"
          aria-labelledby="booking-packages-heading"
        >
          <h2 id="booking-packages-heading" className="booking__subtitle">
            Hvad vi kan hjælpe med
          </h2>
          <ul className="booking__offer-list">
            {OFFER_ITEMS.map((item) => (
              <li key={item} className="booking__offer-item">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </section>

      <section className="booking__cta">
        <p className="booking__cta-text">
          Ønsker du at høre mere eller booke VærQ til et projekt?
        </p>
        <a href="/kontakt" className="booking__cta-link">
          Kontakt os her →
        </a>
      </section>
    </main>
  );
}
