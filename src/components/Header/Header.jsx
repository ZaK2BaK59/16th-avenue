// src/components/Header/Header.jsx
import React from 'react';
import styles from './Header.module.scss';

const Header = ({ onOpenPopup }) => {
  return (
    <header className={styles.header}>
      <img src="/header.png" alt="16th Avenue Logo" className={styles.logo} />
      <nav className={styles.nav}>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/histoire">Notre Histoire</a></li>
          <li>
            <button onClick={() => onOpenPopup('vendre')} className={styles.linkButton}>
              Vendre Avec Nous
            </button>
          </li>
          <li><a href="#vendre">Propriétés</a></li>
          <li><button onClick={() => onOpenPopup('contact')} className={styles.linkButton}>
              Contact
            </button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
