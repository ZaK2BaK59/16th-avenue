import React from 'react';
import styles from './Commitment2.module.scss';

export default function Commitment2() {
  return (
    <section className={styles.commitment}>
      <div className={styles.block}>
        <div className={styles.imageWrapper}>
          <div className={styles.shape} />
          <img src="/commitment2.png" alt="famille marchant vers maison" />
        </div>

        <div className={styles.text}>
          <div className={styles.item}>
            <h3>Réseau International Puissant</h3>
            <p>
              Grâce à notre réseau et à notre connaissance du marché, nous vous
              offrons un accès privilégié aux meilleures opportunités.
            </p>
          </div>
          <div className={styles.item}>
            <h3>Valorisation Et Stratégie Performante</h3>
            <p>
              Nous mettons en valeur votre bien avec des techniques éprouvées :
              storytelling immobilier, photographie professionnelle et diffusion
              stratégique optimisée.
            </p>
          </div>
          <div className={styles.item}>
            <h3>Sécurité Et Accompagnement Juridique</h3>
            <p>
              Un accompagnement juridique et pour sécuriser chaque étape de votre projet immobilier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
