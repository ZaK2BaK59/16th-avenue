import React, { useState } from 'react';
import styles from './Popup.module.scss';
import { X } from 'lucide-react';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import '../../styles/phone-custom.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function ModalContact({ onClose }) {
  const [radius, setRadius] = useState(5);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyType: '',
    bedrooms: '',
    location: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3001/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: 'Projet achat',
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: `
Téléphone : ${formData.phone}
Type de bien : ${formData.propertyType}
Chambres : ${formData.bedrooms}
Localisation : ${formData.location}
Budget : ${formData.budget}
Rayon : ${radius} km
Message : ${formData.message}
        `,
      }),
    });

    if (response.ok) {
      alert('✅ Email envoyé !');
      onClose();
    } else {
      alert('❌ Erreur lors de l’envoi');
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem' }}>
          Projet d'achat
        </h2>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <img src="/Calif-Vue2.png" alt="villa luxe" />
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Ligne 1 */}
            <div className={styles.row}>
              <div>
                <label>Prénom</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" required />
              </div>
              <div>
                <label>Nom</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" required />
              </div>
            </div>

            {/* Ligne 2 */}
            <div className={styles.row}>
              <div>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@..." required />
              </div>
              <div>
                <label>Numéro de téléphone</label>
                <PhoneInput
                  country={'fr'}
                  value={formData.phone}
                  onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))}
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
                <select name="propertyType" value={formData.propertyType} onChange={handleChange} required>
                  <option value="">--Choisir--</option>
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
                <select name="bedrooms" value={formData.bedrooms} onChange={handleChange} required>
                  <option value="">--Choisir--</option>
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
                <label>Localisation</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Cannes" />
              </div>
              <div>
                <label>Budget</label>
                <input type="text" name="budget" value={formData.budget} onChange={handleChange} placeholder="500.000" />
              </div>
            </div>

            {/* Rayon */}
            <div>
              <label>Rayon : {radius} km</label>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    value={radius}
                    onChange={(e, newValue) => setRadius(newValue)}
                    aria-labelledby="input-slider"
                    min={1}
                    max={100}
                    sx={{
                      color: '#bfa567',
                      width: '100%',
                      minWidth: '500px',
                    }}
                  />
                </Grid>
              </Grid>
            </div>

            {/* Message */}
            <div>
              <label>Message</label>
              <input type="text" name="message" value={formData.message} onChange={handleChange} placeholder="Je souhaite acheter une villa moderne..." />
            </div>

            <button type="submit" className={styles.submit}>Confirmer</button>

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
