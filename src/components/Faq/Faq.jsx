import React, { useState } from 'react';
import styles from './Faq.module.scss';
import { ChevronDown, ChevronRight } from 'lucide-react';

const faqData = [
  {
    question: 'John Doe John Doe John Doe John Doe ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    question: 'John Doe John Doe John Doe John ?',
    answer: 'Réponse fictive à afficher si ouvert.'
  },
  {
    question: 'John Doe John Doe John Doe John ?',
    answer: 'Réponse fictive à afficher si ouvert.'
  },
  {
    question: 'John Doe John Doe John Doe John ?',
    answer: 'Réponse fictive à afficher si ouvert.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <h2>Foire aux questions</h2>

      <div className={styles.list}>
        {faqData.map((item, i) => (
          <div
            key={i}
            className={`${styles.card} ${openIndex === i ? styles.open : ''}`}
            onClick={() => toggle(i)}
          >
            <div className={styles.question}>
              <h3>{item.question}</h3>
              {openIndex === i ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </div>
            {openIndex === i && <p className={styles.answer}>{item.answer}</p>}
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <span>Vous ne trouvez pas votre réponse ?</span>
        <a href="#">contactez-nous</a>
      </div>
    </section>
  );
}
