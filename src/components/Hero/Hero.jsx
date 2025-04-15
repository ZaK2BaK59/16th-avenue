// src/components/Hero/Hero.jsx
import React from 'react';
import styles from './Hero.module.scss';
import villa1 from '/1.png'; // à remplacer par tes vraies images
import villa2 from '/2.png';
import villa3 from '/3.png';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Trouvez le bien de vos rêves en toute confiance</h1>
        <p>
        Chez 16th Avenue, nous vous offrons un accompagnement immobilier sur-mesure, alliant vision stratégique et approche humaine. Forts de notre expertise et d’une parfaite connaissance du marché, nous mettons tout en œuvre pour vous guider dans vos projets avec transparence, efficacité et engagement.
Que vous soyez à la recherche d’un bien, d’un investissement ou d’un accompagnement personnalisé, nous vous apportons des solutions adaptées à vos besoins et à vos ambitions.
Découvrez 16th Avenue et concrétisez vos projets immobiliers en toute confiance.
        </p>
        <button className={styles.button}>Qui sommes nous</button>
      </div>
      <div className={styles.images}>
        <img src={villa3} alt="villa 3" className={styles.back} />
        <img src={villa2} alt="villa 2" className={styles.middle} />
        <img src={villa1} alt="villa 1" className={styles.front} />
      </div>
    </section>
  );
};

export default Hero;
