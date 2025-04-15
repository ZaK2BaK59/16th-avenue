// src/components/Services/ServiceCard.jsx
import React from 'react';
import styles from './ServiceCard.module.scss';

const ServiceCard = ({ title, description, image, button, color }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <button style={{ backgroundColor: color }}>{button}</button>
    </div>
  );
};

export default ServiceCard;
