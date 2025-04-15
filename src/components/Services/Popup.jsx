import React, { useState, useEffect, useRef } from 'react';
import styles from './Popup.module.scss';
import { X } from 'lucide-react';

export default function ModalContact({ onClose }) {
  const [radius, setRadius] = useState(5);

  const handleSlider = (e) => {
    const value = parseInt(e.target.value);
    setRadius(value);
    const percent = (value / 100) * 100;
    e.target.style.background = `linear-gradient(to right, #bfa567 0%, #bfa567 ${percent}%, #ccc ${percent}%, #ccc 100%)`;
  };
  const inputRef = useRef();

useEffect(() => {
  if (inputRef.current) {
    const percent = (radius / 100) * 100;
    inputRef.current.style.background = `linear-gradient(to right, #bfa567 0%, #bfa567 ${percent}%, #ccc ${percent}%, #ccc 100%)`;
  }
}, [radius]);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>

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
                <input type="tel" placeholder="+33..." />
              </div>
            </div>

            {/* Ligne 3 */}
            <div className={styles.row}>
              <div>
                <label>Type de bien</label>
                <input type="text" placeholder="Maison" />
              </div>
              <div>
                <label>Nombre de chambres</label>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>

            {/* Ligne 4 */}
            <div className={styles.row}>
              <div>
                <label>Localisation</label>
                <input type="text" placeholder="Cannes" />
              </div>
              <div>
                <label>Budget</label>
                <select>
                  <option>300.000</option>
                  <option>500.000</option>
                  <option>1.000.000+</option>
                </select>
              </div>
            </div>

            {/* Rayon */}
            <div>
              <label>Rayon : {radius} km</label>
              <input
  type="range"
  min="1"
  max="100"
  value={radius}
  ref={inputRef}
  onChange={handleSlider}

  style={{
    background: `linear-gradient(to right, #bfa567 0%, #bfa567 ${radius}%, #ccc ${radius}%, #ccc 100%)`
  }}
/>

            </div>

            {/* Message */}
            <div>
              <label>Message</label>
              <input type="text" placeholder="Exemple…" />
            </div>

            <button className={styles.submit}>Confirmer</button>
            <p className={styles.help}>
              Besoin d’aide ? <a href="#">contactez nous</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
