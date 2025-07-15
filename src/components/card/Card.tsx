import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  altText?: string; 
  githubUrl?: string; 
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, altText, githubUrl }) => {
  return (
    <div className={styles.card}>
      <img 
        src={imageUrl} 
        alt={altText || title}
        className={styles.cardImage} 
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        {githubUrl && (
          <a href={githubUrl} className={styles.githubLink} target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;