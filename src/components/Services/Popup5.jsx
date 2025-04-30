import React, { useState } from 'react';
import styles from './Popup.module.scss';
import { X } from 'lucide-react';
import Slider from '@mui/material/Slider';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // ou style-custom.css si tu veux personnaliser
import Grid from '@mui/material/Grid';
import '../../styles/phone-custom.css'; // Assurez-vous que le chemin est correct


export default function ModalContact({ onClose }) {
  const [radius, setRadius] = useState(5);





  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>

        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem' }}>
        Vous souhaitez vendre votre propriété via notre listing Off-Market
</h2>


        <div className={styles.content}>
          <div className={styles.imageSection}>
            <img src="/Entreeoff.png" alt="villa luxe" />
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
                <input type="email" placeholder="john@16th-avenue.fr" />
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

            {/* Ligne 4 */}
            <div className={styles.row}>
              <div>
                <label>Adresse du bien</label>
                <input type="text" placeholder="Mon adresse" />
              </div>
              <div>
                <label>Prix demandé</label>
                <input type="text" placeholder="500.000" />
              </div>
            </div>

            {/* Rayon */}
            <div>
  <label>Rayon : {radius} km</label>
  <Grid container spacing={2} alignItems="center">
    <Grid item xs>
      <Slider
        value={typeof radius === 'number' ? radius : 0}
        onChange={(e, newValue) => setRadius(newValue)}
        aria-labelledby="input-slider"
        min={1}
        max={100}
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
              <label>Message - Critères spécifiques</label>
              <input type="text" placeholder="Exemple…" />
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
