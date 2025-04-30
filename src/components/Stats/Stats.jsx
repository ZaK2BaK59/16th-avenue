import React, { useEffect, useState, useRef } from 'react';
import styles from './Stats.module.scss';

const stats = [
  { label: 'ANNÉES D’EXPÉRIENCES', value: 13, suffix: '+' },
  { label: 'PROJETS REALISÉS', value: 1600, suffix: '+' },
  { label: 'VOLUME DE VENTE RÉALISÉ', value: 350, suffix: 'M+' },
  { label: 'DE SATISFACTION CLIENT', value: 95, suffix: '%' },
];

const StatBlock = ({ value, suffix, label, animate }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const duration = 2000;
    const frameRate = 60;
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
  }, [value, animate]);

  return (
    <div className={styles.stat}>
      <div className={styles.number}>{count}{suffix}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

const Stats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.5, // visible à 50%
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }


  }, [hasAnimated]);

  return (
    <section className={styles.stats} ref={sectionRef}>
      <div className={styles.lineTop}></div>
      <div className={styles.container}>
        {stats.map((s, i) => (
          <StatBlock key={i} {...s} animate={hasAnimated} />
        ))}
      </div>
      <div className={styles.lineBottom}></div>
    </section>
  );
};

export default Stats;
