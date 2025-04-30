import React, { useState } from 'react';
import styles from './Services.module.scss';
import ServiceCard from './ServiceCard';
import Popup from './Popup'; // à créer juste après
import Popup2 from './Popup2';
import Popup3 from './Popup3';

import icon1 from '/s1.png';
import icon2 from '/s2.png';
import icon3 from '/s3.png';

const services = [
  {
    title: 'SECURISEZ SON INVESTISSEMENT',
    image: icon1,
    description: `Acheter un bien est une étape clé de votre vie. Grâce à notre expertise, nous vous accompagnons pour faire les meilleurs choix financiers et vous assurer une acquisition sereine et sécurisée.`,
    button: 'Mon projet d’achat',
    color: '#c4ae71',
    popup: 'popup1', // 👈
  },
  {
    title: 'TRANSMETTRE SON BIEN',
    image: icon2,
    description: `Vous souhaitez vendre ou transmettre votre bien ? Nous mettons en place une stratégie sur-mesure pour maximiser votre transaction et vous accompagner dans chaque étape du processus.`,
    button: 'Estimer mon bien',
    color: '#c4ae71',
    popup: 'popup2', // 👈
  },
  {
    title: 'TROUVER DES SOLUTIONS SUR-MESURES',
    image: icon3,
    description: `Que vous recherchiez un bien spécifique ou une solution sur-mesure, nous vous guidons pour répondre à vos attentes et vous offrir une flexibilité optimale dans votre projet immobilier.`,
    button: 'Mon projet immobilier',
    color: '#c4ae71',
    popup: 'popup3', // 👈
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

      {selectedService?.popup === 'popup1' && (
  <Popup onClose={() => setSelectedService(null)} />
)}
{selectedService?.popup === 'popup2' && (
  <Popup2 onClose={() => setSelectedService(null)} />
)}
{selectedService?.popup === 'popup3' && (
  <Popup3 onClose={() => setSelectedService(null)} />
)}

    </section>
  );
};

export default Services;
