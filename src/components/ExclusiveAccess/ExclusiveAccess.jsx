// src/components/ExclusiveAccess/ExclusiveAccess.jsx
import React, { useState } from 'react';
import styles from './ExclusiveAccess.module.scss';
import { FaCheck } from 'react-icons/fa';
import Popup4 from '../Services/Popup4'; // ✅ ajout
import villa from '/M1.png'; // image utilisée dans la section

const points = [
  "Accès exclusif aux nouvelles annonces",
  "Sélection personnalisée selon vos critères",
  "Visites privées réservées avant tout le monde"
];

const ExclusiveAccess = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className={styles.exclusive}>
      <div className={styles.content}>
        <h2>
          Accédez en primeur aux biens<br />
          immobiliers exclusifs.
        </h2>
        <p>
          Inscrivez-vous sur notre liste d’acheteurs privilégiés et recevez nos meilleures
          opportunités immobilières avant leur diffusion publique. Bénéficiez d’un accès
          exclusif à des biens rares et stratégiquement sélectionnés, ainsi que d’un
          accompagnement personnalisé pour concrétiser votre projet immobilier dans
          les meilleures conditions.
        </p>
        <ul>
          {points.map((text, i) => (
            <li key={i}>
              <span className={styles.icon}><FaCheck /></span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <button onClick={() => setShowPopup(true)}>
          Rejoindre les Acquéreurs Privilégiés
        </button>
      </div>

      <div className={styles.image}>
        <img src={villa} alt="Villa premium" />
      </div>

      {showPopup && <Popup4 onClose={() => setShowPopup(false)} />}
    </section>
  );
};

export default ExclusiveAccess;
