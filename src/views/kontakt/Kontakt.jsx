import React, { useState } from "react";
import "./kontakt.scss";

const FORM_ENDPOINT = "https://formspree.io/f/mblwwrvq";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          navn: formData.name,
          email: formData.email,
          besked: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact">
      <div className="contact__card">
        <h1 className="contact__title">Kontakt VÆRQ</h1>

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

          <button
            type="submit"
            className="contact__submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sender..." : "Send besked"}
          </button>

          {status === "success" && (
            <p className="contact__status contact__status--success">
              Tak for din besked! Vi vender tilbage hurtigst muligt.
            </p>
          )}

          {status === "error" && (
            <p className="contact__status contact__status--error">
              Noget gik galt. Prøv igen, eller skriv direkte til{" "}
              <a href="mailto:clara@vaerq.dk">clara@vaerq.dk</a>.
            </p>
          )}

          <p className="contact__meta">
            Du kan også skrive direkte til{" "}
            <a href="mailto:clara@vaerq.dk">clara@vaerq.dk</a>
          </p>
        </form>
      </div>
    </main>
  );
}
