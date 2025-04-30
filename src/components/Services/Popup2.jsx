import React from 'react';
import styles from './Popup.module.scss';
import { X } from 'lucide-react';

import '../../styles/phone-custom.css'; // Assurez-vous que le chemin est correct
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // ou style-custom.css si tu veux personnaliser


export default function ModalContact({ onClose }) {






  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem' }}>
  Estimer mon bien
</h2>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <img src="/villa-popup.png" alt="villa luxe" />
          </div>

          <form className={styles.form}>
            {/* Ligne 1 */}
            <div className={styles.row}>
              <div>
                <label>Prénom</label>
                <input type="text" placeholder="John" />
              </div>
              <div>
                <label>Nom</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>

            {/* Ligne 2 */}
            <div className={styles.row}>
              <div>
                <label>Email</label>
                <input type="email" placeholder="john@16thavenue.com" />
              </div>
              <div>
                <label>Numéro de téléphone</label>
                <PhoneInput
  country={'fr'}
  value={''}
  onChange={() => {}}
  inputStyle={{
    width: '100%',
    border: 'none',
    borderBottom: '1px solid #ccc',
    borderRadius: 0,
    fontFamily: 'Athena, serif',
    background: 'transparent',
  }}
  buttonStyle={{
    border: 'none',
    background: 'transparent',
  }}
  dropdownStyle={{
    fontFamily: 'Athena, serif',
  }}
/>
              </div>
            </div>

            {/* Ligne 3 */}
            <div className={styles.row}>
            <div>
            <label>Type de bien</label>
<select>
  <option>Appartement</option>
  <option>Garage/Parking</option>
  <option>Hôtel</option>
  <option>Immeuble de Rapport</option>
  <option>Maison/villa</option>
  <option>Mur / Fond de commerce</option>
  <option>Terrain</option>
</select>

              </div>
              <div>
                <label>Nombre de chambres</label>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </div>
            </div>


             {/* Rayon */}
             <div className={styles.row}>
              <div>
                <label>Surface</label>
                <input type="text" placeholder="200m²" />
              </div>
             
            </div>

            {/* Ligne 4 */}
            <div className={styles.row}>
              <div>
                <label>Adresse du bien</label>
                <input type="text" placeholder="Mon adresse" />
              </div>
             
            </div>

          



            {/* Message */}
            <div>
              <label>Message</label>
              <input type="text" placeholder="Je suis disponible pour une première approche le..." />
            </div>

            <button className={styles.submit}>Confirmer</button>
            <p className={styles.help}>
  <span style={{ color: '#000' }}>Besoin d’aide ? - </span>
  <a href="#">contactez nous</a>
</p>
          </form>
        </div>
      </div>
    </div>
  );
}
