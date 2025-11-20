import React, { useState } from "react";
import "./kontakt.scss";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Kontakt fra ${formData.name || "VærQ hjemmeside"}`;
    const body = `
Navn: ${formData.name}
Email: ${formData.email}

Besked:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:clara@vaerq.dk?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <main className="contact">
      <div className="contact__card">
        <h1 className="contact__title">Kontakt VærQ</h1>

        <p className="contact__intro">
          Vi vil altid gerne høre fra dig - uanset om du har et projekt i
          tankerne, spørgsmål til vores arbejde, eller blot vil sige hej.
          Udfyld formularen herunder, så vender vi tilbage hurtigst muligt.
        </p>

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__field">
            <label htmlFor="name" className="contact__label">
              Navn
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="contact__input"
              autoComplete="name"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email" className="contact__label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact__input"
              autoComplete="email"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message" className="contact__label">
              Din besked
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="contact__textarea"
              rows={5}
            />
          </div>

          <button type="submit" className="contact__submit">
            Send besked
          </button>

          <p className="contact__meta">
            Eller skriv direkte til{" "}
            <a href="mailto:clara@vaerq.dk.com">
              clara@vaerq.dk
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}
