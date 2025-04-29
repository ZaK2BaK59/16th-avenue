import React from 'react';
import styles from './Commitment.module.scss';

export default function Commitment() {
  return (
    <section className={styles.commitment}>
      <h2>Engagé pour votre sérénité</h2>

      <div className={styles.block}>
        <div className={styles.text}>
          <div className={styles.item}>
            <h3>Transparence Et Éthique</h3>
            <p>
              "Nous nous engageons à une totale transparence dans nos transactions
              et à respecter une éthique irréprochable."
            </p>
          </div>
          <div className={styles.item}>
            <h3>Excellence Du Service</h3>
            <p>
              "Un accompagnement immobilier sur-mesure avec une vision stratégique et humaine.
              Découvrez 16th Avenue."
            </p>
          </div>
          <div className={styles.item}>
            <h3>Innovation Et Digitalisation</h3>
            <p>
              "Des outils modernes comme les visites virtuelles et une stratégie digitale avancée
              pour maximiser les résultats."
            </p>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.shape} />
          <img src="/commitment1.png" alt="famille au coucher de soleil" />
        </div>
      </div>
    </section>
  );
}
