import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email no válido";
    }

    if (!formData.service.trim()) {
      newErrors.service = "Servicio es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);

      // Simular envío a API
      setTimeout(() => {
        console.log("Formulario enviado:", formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        // Resetear mensaje de éxito después de 5 segundos
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Reserva tu Cita</h2>
        <p className={styles.sectionSubtitle}>
          Completa el formulario y nos pondremos en contacto
        </p>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre completo"
              value={formData.name}
              onChange={handleChange}
              className={`${styles.formInput} ${
                errors.name ? styles.inputError : ""
              }`}
            />
            {errors.name && (
              <span className={styles.errorMessage}>{errors.name}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.formInput} ${
                errors.email ? styles.inputError : ""
              }`}
            />
            {errors.email && (
              <span className={styles.errorMessage}>{errors.email}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <input
              type="tel"
              name="phone"
              placeholder="Tu teléfono (opcional)"
              value={formData.phone}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`${styles.formInput} ${
                errors.service ? styles.inputError : ""
              }`}
            >
              <option value="">Selecciona un servicio</option>
              <option value="Corte de Cabello">Corte de Cabello</option>
              <option value="Afeitado Clásico">Afeitado Clásico</option>
              <option value="Diseño de Barba">Diseño de Barba</option>
              <option value="Tratamiento Capilar">Tratamiento Capilar</option>
              <option value="Paquete Completo">Paquete Completo</option>
            </select>
            {errors.service && (
              <span className={styles.errorMessage}>{errors.service}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="¿Algún requerimiento especial?"
              value={formData.message}
              onChange={handleChange}
              className={styles.formTextarea}
              rows="5"
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Reservar Cita"}
          </button>

          {submitSuccess && (
            <div className={styles.successMessage}>
              ¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto
              contigo pronto.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
