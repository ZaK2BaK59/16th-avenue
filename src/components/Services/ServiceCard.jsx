import React from 'react';
import styles from './ServiceCard.module.scss';

const ServiceCard = ({ title, image, description, button, color, onClick }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.icon} />
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <button style={{ backgroundColor: color }} onClick={onClick}>
        {button}
      </button>
    </div>
  );
};

export default ServiceCard;
