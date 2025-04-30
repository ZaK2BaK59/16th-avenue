import React, { useState } from 'react';
import styles from './FeaturedProperties.module.scss';

const images = [
    '/Maison_2.jpg',
    '/Maisonk.png',
    '/Villa Piscine.png',
    '/Calif-Vue.png',
    '/Calif-Vue.png'
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
    <img key={i} src={src} alt={`maison-${i}`} className={className} />
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
