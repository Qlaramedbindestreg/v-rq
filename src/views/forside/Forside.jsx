import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./forside.scss";

export default function Forside() {
  const [showLogo, setShowLogo] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(false); 
    }, 1800);

    const textTimer = setTimeout(() => {
      setShowText(true); 
    }, 2300);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <main className="frontpage">
      <div
        className={`frontpage__logo ${
          showLogo ? "frontpage__logo--visible" : "frontpage__logo--hidden"
        }`}
        aria-hidden={!showLogo}
      >
        <h1 className="frontpage__logo-wordmark">VÆRQ</h1>
      </div>

      <section
        className={`frontpage__hero ${
          showText ? "frontpage__hero--visible" : ""
        }`}
        aria-hidden={!showText}
      >
        <h1 className="frontpage__wordmark">VÆRQ</h1>
        <p className="frontpage__tagline">
          Scenografi- og identitetsdesign til kunstnere, kulturinstitutioner,
          events og festivaller.
        </p>

        <div className="frontpage__links">
          <Link to="/booking">Book VÆRQ</Link>
          <Link to="/om-os">Mød os</Link>
          <Link to="/kontakt">Kontakt</Link>
        </div>
      </section>
    </main>
  );
}
