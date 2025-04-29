import React from 'react';
import styles from './ClientReviews.module.scss';

import avis1 from '/avis1.png';
import avis2 from '/avis2.png';
import avis3 from '/avis3.png';

const ClientReviews = () => {
  return (
    <section className={styles.reviews}>
      <h2>Les avis clients</h2>
      <div className={styles.cards}>
        <img src={avis1} alt="Avis client gauche" className={styles.left} />
        <img src={avis2} alt="Avis client centre" className={styles.center} />
        <img src={avis3} alt="Avis client droite" className={styles.right} />
      </div>
    </section>
  );
};

export default ClientReviews;
