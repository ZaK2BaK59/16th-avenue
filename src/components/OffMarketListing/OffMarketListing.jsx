import React from 'react';
import styles from './OffMarketListing.module.scss';
import { FaCheck } from 'react-icons/fa';
import villa from '/1.png'; // remplace par ton image

const points = [
  "Accès exclusif aux nouvelles annonces",
  "Sélection personnalisée selon vos critères",
  "Opportunités sur-mesure"
];

const OffMarketListing = () => {
  return (
    <section className={styles.listing}>
      <div className={styles.image}>
        <img src={villa} alt="Off Market Villa" />
      </div>
      <div className={styles.content}>
        <h2>
          Faire parti du listing Off-Market<br />de 16th avenue
        </h2>
        <p>
          Inscrivez-vous sur notre listing Off-Market et accédez en avant-première aux meilleures opportunités immobilières, en toute confidentialité. Profitez d’un accès exclusif à des biens rares et stratégiquement sélectionnés, sans la concurrence du marché public. Grâce à notre réseau privilégié, nous vous offrons des transactions plus rapides et efficaces, ainsi qu’un accompagnement sur-mesure pour sécuriser et optimiser votre investissement.
        </p>
        <ul>
  {points.map((point, i) => (
    <li key={i}>
      <span>{point}</span>
      <span className={styles.icon}><FaCheck /></span> {/* icône à droite */}
    </li>
  ))}
</ul>

        <button>Rejoindre le listing off market</button>
      </div>
    </section>
  );
};

export default OffMarketListing;
