import React, { useState } from 'react';
import styles from './Services.module.scss';
import ServiceCard from './ServiceCard';
import Popup from './Popup'; // à créer juste après

import icon1 from '/s1.png';
import icon2 from '/s2.png';
import icon3 from '/s3.png';

const services = [
  {
    title: 'SECURISEZ SON INVESTISSEMENT',
    image: icon1,
    description: `Acheter un bien est une étape clé de votre vie. Grâce à notre expertise, nous vous accompagnons pour faire les meilleurs choix financiers et vous assurer une acquisition sereine et sécurisée.`,
    button: 'Mon projet d’achat',
    color: '#bfa567',
  },
  {
    title: 'TRANSMETTRE SON BEIN',
    image: icon2,
    description: `Vous souhaitez vendre ou transmettre votre bien ?<br/>Nous mettons en place une stratégie sur-mesure pour maximiser votre transaction et vous accompagner dans chaque étape du processus.`,
    button: 'Estimer mon bien',
    color: '#d4b97b',
  },
  {
    title: 'TROUVER DES SOLUTIONS SUR-MESURES',
    image: icon3,
    description: `Que vous recherchiez un bien spécifique ou une solution sur-mesure, nous vous guidons pour répondre à vos attentes et vous offrir une flexibilité optimale dans votre projet immobilier.`,
    button: 'Mon projet immobilier',
    color: '#c9b678',
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className={styles.services}>
      <div className={styles.grid}>
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} onClick={() => setSelectedService(s)} />
        ))}
      </div>

      {selectedService && (
        <Popup data={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </section>
  );
};

export default Services;
