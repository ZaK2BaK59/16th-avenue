import React, { useState } from 'react';
import styles from './Faq.module.scss';
import { ChevronDown, ChevronRight } from 'lucide-react';

const faqData = [
  {
    question: 'Comment obtenir une estimation gratuite de mon bien ?',
    answer: 'Vous pouvez demander une estimation gratuite via notre formulaire en ligne ou nous contacter directement pour une évaluation personnalisée.'
  },
  {
    question: 'Quels sont les délais moyens pour vendre un bien avec 16th Avenue ?',
    answer: 'Grâce à notre stratégie marketing innovante et à notre réseau puissant, nos biens se vendent en moyenne 30% plus rapidement que la concurrence.'
  },
  {
    question: 'Quels types de biens sont disponibles chez vous ?',
    answer: 'Nous proposons une large gamme de biens : appartements, maisons, villas de luxe, Hôtels,  programmes neufs, biens d’investissement et locaux professionnels.'
  },
  {
    question: 'Comment rejoindre les Acquéreurs Privilégiés ?',
    answer: 'Inscrivez-vous via notre formulaire dédié et indiquez vos critères de recherche. Vous recevrez en avant-première des offres avant leur mise en ligne.'
  },
  {
    question: 'Proposez-vous un accompagnement pour les financements ?',
    answer: 'Oui, nous travaillons avec des experts en financement qui vous aident à obtenir le meilleur prêt adapté à votre projet.'
  },
  {
    question: 'Comment peut-on aider l’association ALISON et les enfants malades ?',
    answer: [
      "Chez 16th Avenue, nous avons à cœur d’apporter notre soutien aux causes qui nous tiennent à cœur, et l’association ALISON en fait partie.",
      "ALISON réalise les rêves d’enfants gravement malades et mobilise des ressources pour leur offrir des moments inoubliables.",
      "✅ En faisant un don directement sur leur site officiel.",
      "✅ En participant aux événements caritatifs que nous organisons en partenariat avec eux.",
      "En tant que marraine de l’association, Marie-Aude s’implique activement dans ces actions pour amplifier leur impact.",
      "Chaque année, nous reversons une partie de nos bénéfices pour financer des projets concrets au profit des enfants.",
      "Vous aussi, rejoignez ce mouvement solidaire et contribuez à offrir un avenir meilleur aux enfants malades !"
    ]
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
