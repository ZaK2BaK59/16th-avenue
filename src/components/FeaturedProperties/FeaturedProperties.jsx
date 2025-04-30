import React, { useState } from 'react';
import styles from './FeaturedProperties.module.scss';

const images = [
    '/Maison_2.jpg',
    '/Maisonk.png',
    '/Villa Piscine.png',
    '/vendu.png',
    '/vendu2.png'
  ];
  

const FeaturedProperties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className={styles.featured}>
    <h2>Nos biens du moment</h2>
  
    <div className={styles.carousel}>
      <div className={styles.wrapper}>
      {images.map((src, i) => {
  const indexDiff = i - currentIndex;
  const isActive = indexDiff === 0;
  const isPrev = indexDiff === -1 || (currentIndex === 0 && i === images.length - 1);
  const isNext = indexDiff === 1 || (currentIndex === images.length - 1 && i === 0);
  const isPrev2 = indexDiff === -2 || (currentIndex <= 1 && i === images.length - (2 - currentIndex));
  const isNext2 = indexDiff === 2 || (currentIndex >= images.length - 2 && i === (currentIndex + 2) % images.length);

  let className = styles.card;
  if (isActive) className += ` ${styles.active}`;
  else if (isPrev) className += ` ${styles.prev}`;
  else if (isNext) className += ` ${styles.next}`;
  else if (isPrev2) className += ` ${styles.prev2}`;
  else if (isNext2) className += ` ${styles.next2}`;
  else className += ` ${styles.hidden}`;

  return (
    <div key={i} className={className}>
      <img src={src} alt={`maison-${i}`} />
      {isActive && (
        <div className={styles.overlayInfos}>
        <div className={styles.info}>
          <img src="/carre.png" alt="surface" />
          <span>200m²</span>
        </div>
        <div className={styles.info}>
          <img src="/terrain.png" alt="terrain" />
          <span>500m²</span>
        </div>
        <div className={styles.info}>
          <img src="/chambre.png" alt="chambres" />
          <span>4</span>
        </div>
        <div className={styles.info}>
          <img src="/sdb.png" alt="salle de bain" />
          <span>2</span>
        </div>
      </div>
      
      )}
    </div>
  );
})}
      </div>
    </div>
  
    {/* ✅ Flèches + dots en bas */}
    <div className={styles.pagination}>
      <button onClick={prev} className={styles.arrow}>&larr;</button>
  
      <div className={styles.dots}>
        {images.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
  
      <button onClick={next} className={styles.arrow}>&rarr;</button>
    </div>
  </section>
  
  );
};

export default FeaturedProperties;
