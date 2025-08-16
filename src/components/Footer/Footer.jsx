import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Barber Studio X</h3>
            <p className={styles.footerText}>
              Donde el estilo se encuentra con la tradición
            </p>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Horario</h3>
            <p className={styles.footerText}>Lunes - Viernes: 9am - 8pm</p>
            <p className={styles.footerText}>Sábado: 10am - 6pm</p>
            <p className={styles.footerText}>Domingo: Cerrado</p>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contacto</h3>
            <p className={styles.footerText}>📍 Calle Principal 123, Ciudad</p>
            <p className={styles.footerText}>☎️ (123) 456-7890</p>
            <p className={styles.footerText}>✉️ info@barberstudiox.com</p>
          </div>
        </div>

        <div className={styles.social}>
          <a href="#" className={styles.socialLink} aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className={styles.socialLink} aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className={styles.socialLink} aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <div className={styles.footerBottom}>
          <p>
            &copy; {currentYear} Barber Studio X. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
