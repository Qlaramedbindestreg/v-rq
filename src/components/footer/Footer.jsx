import React from "react";
import { FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa";
import "./footer.scss";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__inner">


        <div className="footer__social">
          <a
            href="https://www.instagram.com/vaerq_design/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/company/v%C3%A6rq/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon"
          >
            <FaLinkedin />
          </a>
        </div>


        <button onClick={scrollToTop} className="footer__scroll">
          <FaArrowUp />
        </button>

      </div>
    </footer>
  );
