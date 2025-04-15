// src/components/Story/Story.jsx
import React from 'react';
import styles from './Story.module.scss';

const Story = () => {
  return (
    <section className={styles.story}>
      <div className={styles.content}>
        <h2>Notre histoire</h2>
        <p>
          L’immobilier n’a jamais été, pour nous, une simple affaire de transactions.<br />
          C’est une aventure humaine, faite de rencontres, d’opportunités et d’engagements.<br /><br />
          Depuis plus de 10 ans, nous avons accompagné plus de 1 600 projets immobiliers et cumulé plus de 350 millions d’euros de volume de ventes.<br />
          Mais derrière ces chiffres, il y a une vision : celle d’un immobilier plus humain, plus juste et plus stratégique, où chaque projet mérite une approche unique et sur-mesure.
        </p>
        <button className={styles.button}>En savoir plus</button>
      </div>


    </section>
  );
};

export default Story;
