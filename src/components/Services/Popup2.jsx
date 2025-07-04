import React, { useState } from 'react';
import styles from './Popup.module.scss';
import { X } from 'lucide-react';

import '../../styles/phone-custom.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function ModalContact({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyType: '',
    bedrooms: '',
    surface: '',
    address: '',
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
        subject: 'Estimer mon bien',
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: `
Téléphone : ${formData.phone}
Type de bien : ${formData.propertyType}
Chambres : ${formData.bedrooms}
Surface : ${formData.surface}
Adresse : ${formData.address}
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
          Estimer mon bien
        </h2>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <img src="/MaisonTheoule.png" alt="villa luxe" />
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Ligne 1 */}
            <div className={styles.row}>
              <div>
                <label htmlFor="firstName">Prénom</label>
                <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" required />
              </div>
              <div>
                <label htmlFor="lastName">Nom</label>
                <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" required />
              </div>
            </div>

            {/* Ligne 2 */}
            <div className={styles.row}>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="john@16th-avenue.fr" required />
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
                <label htmlFor="propertyType">Type de bien</label>
                <select name="propertyType" id="propertyType" value={formData.propertyType} onChange={handleChange} required>
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
                <label htmlFor="bedrooms">Nombre de chambres</label>
                <select name="bedrooms" id="bedrooms" value={formData.bedrooms} onChange={handleChange} required>
                  <option value="">--Choisir--</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </div>
            </div>

            {/* Surface */}
            <div className={styles.row}>
              <div>
                <label htmlFor="surface">Surface</label>
                <input type="text" name="surface" id="surface" value={formData.surface} onChange={handleChange} placeholder="200m²" />
              </div>
            </div>

            {/* Adresse */}
            <div className={styles.row}>
              <div>
                <label htmlFor="address">Adresse du bien</label>
                <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} placeholder="Mon adresse" />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message">Message</label>
              <input type="text" name="message" id="message" value={formData.message} onChange={handleChange} placeholder="Je suis disponible pour une première approche le..." />
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
