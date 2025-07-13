import styles from '../styles/background.module.css';

function HomePage() {
  return (
    <div>
      <div className={styles.backgroundHome}>
        <h1>Olá, sou Jefferson!</h1>
        <p>Bem vindo ao meu portfólio!</p>
      </div>
    </div>
  );
}

export default HomePage;