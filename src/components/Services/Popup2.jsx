import React, { useState } from 'react';
import styles from './Popup.module.scss';
import { X } from 'lucide-react';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';
import Grid from '@mui/material/Grid';


export default function ModalContact({ onClose }) {
  const [radius, setRadius] = useState(5);





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
                <select>
                  <option>Maison</option>
                  <option>Appartement</option>
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

            {/* Ligne 4 */}
            <div className={styles.row}>
              <div>
                <label>Adresse</label>
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
  <label>Surface : {radius} m²</label>
  <Grid container spacing={2} alignItems="center">
    <Grid item xs>
      <Slider
        value={typeof radius === 'number' ? radius : 0}
        onChange={(e, newValue) => setRadius(newValue)}
        aria-labelledby="input-slider"
        min={1}
        max={5000}
        sx={{
          color: '#bfa567',
          width: '100%',         // ✅ occupe tout l’espace dispo
      minWidth: '500px' 
        }}
      />
    </Grid>
   
  </Grid>
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
