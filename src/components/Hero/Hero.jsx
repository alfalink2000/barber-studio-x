import React from "react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className={styles.heroTitle}
        >
          Transforma tu look
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className={styles.heroText}
        >
          Profesionales barberos con más de 10 años de experiencia. Corte,
          afeitado clásico, diseño de barba y más.
        </motion.p>
        <motion.a
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
          href="#contact"
          className={styles.btn}
        >
          Reserva tu cita
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
