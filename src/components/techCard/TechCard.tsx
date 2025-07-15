import React from 'react';
import styles from './TechCard.module.css';

interface CardProps {
  imageUrl: string;
  title: string;
  altText?: string;
}

const TechCard: React.FC<CardProps> = ({ imageUrl, title, altText }) => {
  return (
    <div className={styles.card}>
      <img 
        src={imageUrl} 
        alt={altText || title}
        className={styles.cardImage} 
      /> 
        <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  );
};

export default TechCard;