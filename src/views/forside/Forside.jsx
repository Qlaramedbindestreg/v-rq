import React, { useEffect, useState } from "react";
import logo from "../../assets/Q.png";
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

      <div className={`frontpage__logo ${showLogo ? "frontpage__logo--visible" : "frontpage__logo--hidden"}`}>
        <img src={logo} alt="VærQ logo" />
      </div>


      <section className={`frontpage__hero ${showText ? "frontpage__hero--visible" : ""}`}>
        <h1 className="frontpage__wordmark">VÆRQ</h1>
        <p className="frontpage__tagline">
          Scenografi- og identitetsdesign til kunstnere, kulturinstitutioner, events og festivaller.
        </p>

        <div className="frontpage__links">
          <a href="/booking">Book VærQ</a>
          <a href="/om-os">Mød os</a>
          <a href="/kontakt">Kontakt</a>
        </div>
      </section>
    </main>
  );
}
