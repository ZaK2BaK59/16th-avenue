// src/components/Stats/Stats.jsx
import React, { useEffect, useState } from 'react';
import styles from './Stats.module.scss';

const stats = [
  { label: 'ANNÉES D’EXPÉRIENCES', value: 13, suffix: '+' },
  { label: 'PROJETS REALISÉS', value: 1600, suffix: '+' },
  { label: 'VOLUME DE VENTE RÉALISÉ', value: 350, suffix: 'M+' },
  { label: 'DE SATISFACTION CLIENT', value: 95, suffix: '%' },
];

const StatBlock = ({ value, suffix, label }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let start = 0;
      const duration = 2000; // ms
      const frameRate = 60; // 60 FPS
      const totalFrames = Math.round((duration / 1000) * frameRate);
      const increment = value / totalFrames;
  
      let currentFrame = 0;
  
      const interval = setInterval(() => {
        currentFrame++;
        const newValue = Math.round(increment * currentFrame);
  
        if (currentFrame >= totalFrames) {
          clearInterval(interval);
          setCount(value);
        } else {
          setCount(newValue);
        }
      }, 1000 / frameRate);
  
      return () => clearInterval(interval);
    }, [value]);
  
    return (
      <div className={styles.stat}>
        <div className={styles.number}>{count}{suffix}</div>
        <div className={styles.label}>{label}</div>
      </div>
    );
  };
  

const Stats = () => {
  return (
    <section className={styles.stats}>
      <div className={styles.lineTop}></div>
      <div className={styles.container}>
        {stats.map((s, i) => (
          <StatBlock key={i} {...s} />
        ))}
      </div>
      <div className={styles.lineBottom}></div>
    </section>
  );
};

export default Stats;
