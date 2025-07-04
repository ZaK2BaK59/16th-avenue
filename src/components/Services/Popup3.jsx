import React, { useState } from 'react';
import styles from './Popup.module.scss';
import { X } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../../styles/phone-custom.css';

export default function ModalContact({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
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
        subject: 'Projet immobilier',
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: `
Téléphone : ${formData.phone}
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
          Projet immobilier
        </h2>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <img src="/villa-popup.png" alt="villa luxe" />
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Ligne 1 */}
            <div className={styles.row}>
              <div>
                <label htmlFor="firstName">Prénom</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">Nom</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            {/* Ligne 2 */}
            <div className={styles.row}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@16th-avenue.fr"
                  required
                />
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

            {/* Message */}
            <div>
              <label htmlFor="message">Message</label>
              <input
                type="text"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrire mon projet immobilier afin de se faire rappeler"
              />
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
