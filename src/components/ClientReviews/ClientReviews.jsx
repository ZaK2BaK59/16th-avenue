import React from 'react';
import styles from './ClientReviews.module.scss';

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <h2>Les avis clients</h2>
      <div className={styles.images}>
        <img src="/avis1.png" alt="Avis client 1" className={styles.left} />
        <img src="/avis2.png" alt="Avis client 2" className={styles.center} />
        <img src="/avis3.png" alt="Avis client 3" className={styles.right} />
      </div>
    </section>
  );
}

