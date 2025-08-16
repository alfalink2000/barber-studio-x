import React from "react";
import styles from "./Testimonials.module.css";

const TestimonialCard = ({ testimonial, isActive }) => {
  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span
          key={i}
          className={
            i < testimonial.rating ? styles.starFilled : styles.starEmpty
          }
        >
          ★
        </span>
      ));
  };

  return (
    <div
      className={`${styles.testimonialCard} ${isActive ? styles.active : ""}`}
    >
      <div className={styles.quote}>"{testimonial.quote}"</div>
      <div className={styles.rating}>{renderStars()}</div>
      <div className={styles.author}>— {testimonial.author}</div>
    </div>
  );
};

export default TestimonialCard;
