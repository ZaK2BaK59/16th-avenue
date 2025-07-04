import React from 'react';
import styles from './Footer.module.scss';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        {/* Services */}
        <div className={styles.column}>
          <h4>Services</h4>
          <ul>
            <li><a href="#acheter">Acheter</a></li>
            <li><a href="#acheter">Vendre</a></li>
            <li><a href="#acheter">Estimer</a></li>
            <li><a href="#listing">Listing</a></li>
            <li><a href="#offmarket">Off-Market</a></li>
          </ul>
        </div>

        {/* Informations */}
        <div className={styles.column}>
          <h4>Informations</h4>
          <ul>
  <li><a href="/honoraires.html">Honoraires</a></li>
  <li><a href="#faq">FAQ</a></li>
  <li><a href="/cookies.html">Cookies</a></li>
</ul>


        </div>


        {/* Newsletter */}
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

      {/* Bas du footer */}
      <div className={styles.bottom}>
        <div className={styles.logo}>
          <img src="/footer.png" alt="logo 16 avenue" />
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
