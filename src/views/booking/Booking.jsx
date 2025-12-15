import React from "react";
import "./booking.scss";

const OFFER_ITEMS = [
  "Mobile installationer med fokus på fleksible og ansvarlige materialevalg",
  "Websites og visuelle identiteter, der spiller sammen med den fysiske scenografi",
  "Rådgivning i materialebevidste designprocesser og mulige genbrugsløsninger",
];

export default function Booking() {
  return (
    <main className="booking">
      <section className="booking__layout">
        <div className="booking__intro">
          <h1 className="booking__title">Book VÆRQ</h1>

          <p className="booking__text">
            VÆRQ er en designvirksomhed, der arbejder med scenografi- og
            identitetsdesign til kunstnere, kulturinstitutioner, events og
            festivaller. Vi skaber visuelle helhedsløsninger – fra fysisk
            setdesign til digital tilstedeværelse – udviklet som ét samlet
            æstetisk og funktionelt univers.
          </p>

          <p className="booking__text">
            Vi arbejder målrettet med ansvarlige og gennemtænkte designvalg.
            Det gælder både i forhold til materialer, produktion og muligheden
            for genbrug, men også i måden vi samarbejder på. For os er et
            bæredygtigt arbejdsmiljø lige så vigtigt som det fysiske design —
            et miljø hvor processer er sunde, og hvor man passer på hinanden.
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
          Ønsker du at høre mere eller booke VÆRQ til et projekt?
        </p>
        <a href="/kontakt" className="booking__cta-link">
          Kontakt os her →
        </a>
      </section>
    </main>
  );
}
