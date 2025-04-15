// src/components/Header/Header.jsx
import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>16th Avenue</div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#" className={styles.active}>Accueil</a></li>
          <li><a href="#">Notre Histoire</a></li>
          <li><a href="#">Vendre Avec Nous</a></li>
          <li><a href="#">Propriétés</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
