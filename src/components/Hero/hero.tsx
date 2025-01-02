// Hero.tsx
import React from 'react';
import styles from './hero.module.css'

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage, ctaText, ctaLink }) => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.herocontent}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href={ctaLink} className={styles.ctabutton}>
          {ctaText}
        </a>
      </div>
    </section>
  );
}

export default Hero;
