import React from "react";
import styles from "./Services.module.css";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Corte de Cabello",
      description:
        "Estilos modernos y clásicos con precisión y estilo personalizado.",
      price: "Desde $25",
      icon: "✂️",
    },
    {
      id: 2,
      title: "Afeitado Clásico",
      description:
        "Siente la suavidad con navaja caliente, toallas calientes y productos premium.",
      price: "Desde $30",
      icon: "🪒",
    },
    {
      id: 3,
      title: "Diseño de Barba",
      description:
        "Diseñamos tu barba para realzar tu rostro con estilo y simetría.",
      price: "Desde $20",
      icon: "🧔",
    },
    {
      id: 4,
      title: "Tratamiento Capilar",
      description:
        "Revitaliza tu cabello con nuestros tratamientos profesionales.",
      price: "Desde $15",
      icon: "💆",
    },
  ];

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Nuestros Servicios</h2>
        <p className={styles.sectionSubtitle}>
          Experiencia premium en cada detalle
        </p>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
