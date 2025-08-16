import React from "react";
import styles from "./Services.module.css";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      className={styles.serviceCard}
      whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.serviceIcon}>{service.icon}</div>
      <h3 className={styles.serviceTitle}>{service.title}</h3>
      <p className={styles.serviceDescription}>{service.description}</p>
      <p className={styles.price}>{service.price}</p>
    </motion.div>
  );
};

export default ServiceCard;
