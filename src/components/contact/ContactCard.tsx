import React from 'react';
import styles from './ContactCard.module.css';

interface CardProps {
  imageUrl: string;
  title: string;
  link: string;
  altText?: string; // O '?' torna a prop opcional
}

const ContactCard: React.FC<CardProps> = ({ imageUrl, title, link, altText }) => {
  return (
    <div className={styles.card}>
      <a href={link} target="_blank" rel="noopener noreferrer"><img 
        src={imageUrl} 
        alt={altText || title}
        className={styles.cardImage} 
      /> 
        <h3 className={styles.cardTitle}>{title}</h3>
        </a>
    </div>
  );
};

export default ContactCard;