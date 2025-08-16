import React, { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "El mejor corte que he tenido en años. Ambiente relajado y trato excelente.",
      author: "Carlos M.",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "El afeitado clásico cambió mi rutina. Me siento como un rey cada vez.",
      author: "Andrés R.",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Servicio impecable y atención al detalle. No voy a ningún otro lugar.",
      author: "Miguel T.",
      rating: 4,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Testimonios</h2>
        <p className={styles.sectionSubtitle}>Lo que nuestros clientes dicen</p>

        <div className={styles.testimonialContainer}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === currentTestimonial}
            />
          ))}
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentTestimonial ? styles.activeDot : ""
              }`}
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`Mostrar testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
