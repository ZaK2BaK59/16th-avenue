import React from 'react';
import styles from './Footer.module.scss';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h4>Product</h4>
          <ul>
            <li>Acheter</li>
            <li>Vendre</li>
            <li>Estimer</li>
            <li>Devenir acquéreur privilégié</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Information</h4>
          <ul>
            <li>FAQ</li>
            <li>RGPD</li>
            <li>Support</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Company</h4>
          <ul>
            <li>A propos de nous</li>
            <li>Carrière</li>
            <li>Nous contacter</li>
          </ul>
        </div>

        <div className={styles.newsletter}>
          <h4>NewsLetter</h4>
          <div className={styles.inputWrapper}>
            <input type="email" placeholder="Adresse Mail" />
            <button>&rarr;</button>
          </div>
          <ul>
            <li>Les offres immobilières les plus attractives</li>
            <li>Des conseils d’experts pour réussir vos projets</li>
            <li>Les dernières actualités du marché</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.logo}>
          <img src="/footer.png" alt="logo 16 avenue" />
        </div>

        <div className={styles.legal}>
          <span>Conditions générales d’utilisation</span>
          <span>Gestion des cookies</span>
          <span>Politique de confidentialité</span>
        </div>

        <div className={styles.socials}>
          <Linkedin size={18} />
          <Facebook size={18} />
          <Twitter size={18} />
        </div>
      </div>
    </footer>
  );
}
