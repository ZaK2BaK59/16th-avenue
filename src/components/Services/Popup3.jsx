
import styles from './Popup.module.scss';
import { X } from 'lucide-react';



export default function ModalContact({ onClose }) {






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
