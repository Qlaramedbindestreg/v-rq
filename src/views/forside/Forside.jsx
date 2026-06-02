import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./forside.scss";

import o from "../../assets/odays-logo.png";
import power from "../../assets/Power_logo.svg.png";
import tuborg from "../../assets/Tuborg-Logo.png";
import distortion from "../../assets/distortion.png";

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
      
      <div className="frontpage__clients">
<div className="frontpage__clients-marquee">
  {/* First set */}
  <img src={o} alt="Ødays" />
  <img src={power} alt="Power" />
  <img src={tuborg} alt="Tuborg" />
  <img src={distortion} alt="Distortion" />
  
  {/* Second set - only one duplicate needed */}
  <img src={o} alt="Ødays" />
  <img src={power} alt="Power" />
  <img src={tuborg} alt="Tuborg" />
  <img src={distortion} alt="Distortion" />
</div>
      </div>
    </main>
  );
}