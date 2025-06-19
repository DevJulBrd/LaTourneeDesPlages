import "./FormInfos.css";

import { useState } from "react";

function FormInfos() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
    <form onSubmit={handleSubmit} className="form-container-infos">
      <div className="form-relative-infos">
        <input
          type="text"
          name="firstName"
          pattern="[A-Za-z]{2,32}"
          placeholder="Prénom"
          value={formData.firstName}
          onChange={handleChange}
          required
          className={`form-input-infos ${
            touched.firstName
              ? formData.firstName.match(/^[A-Za-z]{2,32}$/)
                ? "valid-infos"
                : "invalid-infos"
              : ""
          }`}
        />
        <label htmlFor="firstName" className="form-label-infos">
          Prénom
        </label>
      </div>
      <div className="form-relative-infos">
        <input
          type="text"
          name="lastName"
          pattern="[A-Za-z]{2,32}"
          placeholder="Nom"
          value={formData.lastName}
          onChange={handleChange}
          required
          className={`form-input-infos ${
            touched.lastName
              ? formData.lastName.match(/^[A-Za-z]{2,32}$/)
                ? "valid-infos"
                : "invalid-infos"
              : ""
          }`}
        />
        <label htmlFor="lastName" className="form-label-infos">
          Nom
        </label>
      </div>
      <div className="form-relative-infos">
        <input
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          placeholder="Adresse e-mail"
          value={formData.email}
          onChange={handleChange}
          required
          className={`form-input-infos ${
            touched.email
              ? formData.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
                ? "valid-infos"
                : "invalid-infos"
              : ""
          }`}
        />
        <label htmlFor="email" className="form-label-infos">
          Email
        </label>
      </div>
      <div className="form-relative-infos">
        <input
          type="tel"
          name="phone"
          pattern="(0|\\+33|0033)[1-9][0-9]{8}"
          placeholder="Numéro de téléphone (optionnel)"
          value={formData.phone}
          onChange={handleChange}
          required
          className={`form-input-infos ${
            touched.phone
              ? formData.phone.match(/^(0|\\+33|0033)[1-9][0-9]{8}$/)
                ? "valid-infos"
                : "invalid-infos"
              : ""
          }`}
        />
        <label htmlFor="phone" className="form-label-infos">
          Téléphone
        </label>
      </div>
      <div className="form-relative-infos">
        <input
          type="text"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="form-input-infos"
        />
        <label htmlFor="message" className="form-label-infos">
          Message
        </label>
      </div>
      <button type="submit" className="form-button-infos">
        Envoyer
      </button>
    </form>
  );
}

export default FormInfos;
