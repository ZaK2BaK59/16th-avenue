
import styles from './Popup.module.scss';
import { X } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // ou style-custom.css si tu veux personnaliser
import '../../styles/phone-custom.css'; // Assurez-vous que le chemin est correct



export default function ModalContact({ onClose }) {






  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem', color: 'black !important' }}>
  Projet immobilier
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

            

            {/* Message */}
            <div>
              <label>Message</label>
              <input type="text" placeholder="Décrire mon projet immobilier afin de se faire rappeler" />
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
