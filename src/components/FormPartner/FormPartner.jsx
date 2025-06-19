import "./FormPartner.css";

import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Formulaire envoyé avec succès !");
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
        setTouched({});
      } else {
        alert("Erreur lors de l'envoi du formulaire.");
        console.error(result.error);
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      alert("Une erreur réseau est survenue.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-relative">
        <input
          type="text"
          name="firstName"
          pattern="[A-Za-z]{2,32}"
          placeholder="Prénom"
          value={formData.firstName}
          onChange={handleChange}
          required
          className={`form-input ${
            touched.firstName
              ? formData.firstName.match(/^[A-Za-z]{2,32}$/)
                ? "valid"
                : "invalid"
              : ""
          }`}
        />
        <label htmlFor="firstName" className="form-label">
          Prénom
        </label>
      </div>
      <div className="form-relative">
        <input
          type="text"
          name="lastName"
          pattern="[A-Za-z]{2,32}"
          placeholder="Nom"
          value={formData.lastName}
          onChange={handleChange}
          required
          className={`form-input ${
            touched.lastName
              ? formData.lastName.match(/^[A-Za-z]{2,32}$/)
                ? "valid"
                : "invalid"
              : ""
          }`}
        />
        <label htmlFor="lastName" className="form-label">
          Nom
        </label>
      </div>
      <div className="form-relative">
        <input
          type="text"
          name="company"
          placeholder="Nom d'entreprise"
          value={formData.company}
          onChange={handleChange}
          required
          className="form-input"
        />
        <label htmlFor="company" className="form-label">
          Nom de votre entreprise
        </label>
      </div>
      <div className="form-relative">
        <input
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          placeholder="Adresse e-mail"
          value={formData.email}
          onChange={handleChange}
          required
          className={`form-input ${
            touched.email
              ? formData.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
                ? "valid"
                : "invalid"
              : ""
          }`}
        />
        <label htmlFor="email" className="form-label">
          Email
        </label>
      </div>
      <div className="form-relative">
        <input
          type="tel"
          name="phone"
          pattern="(0|\\+33|0033)[1-9][0-9]{8}"
          placeholder="Numéro de téléphone (optionnel)"
          value={formData.phone}
          onChange={handleChange}
          required
          className={`form-input ${
            touched.phone
              ? formData.phone.match(/^(0|\\+33|0033)[1-9][0-9]{8}$/)
                ? "valid"
                : "invalid"
              : ""
          }`}
        />
        <label htmlFor="phone" className="form-label">
          Téléphone
        </label>
      </div>
      <div className="form-relative">
        <input
          type="text"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="form-input"
        />
        <label htmlFor="message" className="form-label">
          Message
        </label>
      </div>
      <button type="submit" className="form-button">
        Envoyer
      </button>
    </form>
  );
}

export default Form;
