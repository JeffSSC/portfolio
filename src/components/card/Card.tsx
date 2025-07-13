import React from 'react';
import styles from './Card.module.css';

// 1. Definimos a "forma" dos dados que nosso card espera receber.
//    Isso é feito com uma interface do TypeScript.
interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  altText?: string; // O '?' torna a prop opcional
  githubUrl?: string; // Opcional, caso queira adicionar um link para o GitHub
}

// 2. Criamos o componente, recebendo as props
const Card: React.FC<CardProps> = ({ imageUrl, title, description, altText, githubUrl }) => {
  return (
    // 3. Usamos as classes do nosso arquivo .module.css
    <div className={styles.card}>
      <img 
        src={imageUrl} 
        alt={altText || title} // Boa prática: usar um alt text descritivo ou o título
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