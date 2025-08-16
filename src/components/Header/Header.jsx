import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Barber Studio X</h1>
        <p className={styles.subtitle}>
          Donde el estilo se encuentra con la tradición
        </p>
      </div>
    </header>
  );
};

export default Header;
