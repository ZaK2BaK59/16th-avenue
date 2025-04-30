import React from 'react';
import styles from './Footer.module.scss';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h4>Services</h4>
          <ul>
            <li>Acheter</li>
            <li>Vendre</li>
            <li>Estimer</li>
            <li>Listing</li>
            <li>Off-Market</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Informations</h4>
          <ul>
            <li>Honoraires</li>
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
            <input type="email" placeholder="john@16th-avenue.fr" />
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
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook size={18} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={18} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
