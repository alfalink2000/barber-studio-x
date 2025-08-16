import React, { useState } from "react";
import styles from "./Gallery.module.css";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1580618672577-61d38c906701?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Corte 1",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Corte 2",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1567581935880-94a21cf7a6eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Corte 3",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Corte 4",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Corte 5",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Corte 6",
    },
  ];

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Nuestro Trabajo</h2>
        <p className={styles.sectionSubtitle}>
          Transformaciones que hablan por sí solas
        </p>
        <div className={styles.galleryGrid}>
          {images.map((image) => (
            <div
              key={image.id}
              className={styles.galleryItem}
              onClick={() => setSelectedImg(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={styles.galleryImg}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <span className={styles.zoomIcon}>🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImg && (
        <div className={styles.lightbox} onClick={() => setSelectedImg(null)}>
          <img
            src={selectedImg}
            alt="Ampliada"
            className={styles.lightboxImg}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
