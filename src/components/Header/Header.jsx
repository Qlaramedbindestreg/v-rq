import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const getNavClass = ({ isActive }) =>
    isActive
      ? "header__nav-link header__nav-link--active"
      : "header__nav-link";

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <NavLink
          to="/"
          className="header__brand"
          onClick={() => setMenuOpen(false)}
        >

          <span className="header__wordmark">VÆRQ</span>
        </NavLink>

    
        <button
          className={`header__toggle ${menuOpen ? "header__toggle--open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Åbn/luk menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`header__nav ${menuOpen ? "header__nav--open" : ""
            }`}
          aria-label="Primær navigation"
        >
          <ul className="header__nav-list">
            <li>
              <NavLink to="/" className={getNavClass} end onClick={handleNavClick}>
                Forside
              </NavLink>
            </li>
            <li>
              <NavLink to="/om-os" className={getNavClass} onClick={handleNavClick}>
                Om os
              </NavLink>
            </li>
               <li>
              <NavLink to="/projekter" className={getNavClass} onClick={handleNavClick}>
                Projekter
              </NavLink>
            </li>
            <li>
              <NavLink to="/booking" className={getNavClass} onClick={handleNavClick}>
                Booking
              </NavLink>
            </li>
            <li>
              <NavLink to="/kontakt" className={getNavClass} onClick={handleNavClick}>
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
