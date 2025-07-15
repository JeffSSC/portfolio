import styles from '../styles/home.module.css';

function PhotoPage() {

  return (
    <div className={styles.photoPage}>
      <div className={styles.backgroundHome}></div>
      <div className={styles.photos}>
        <h1>Fotografias</h1>
        <p>Esta página não tem a imagem de fundo.</p>
        <p>O conteúdo aqui é exibido normalmente.</p>
      </div>
    </div>
  );
}

export default PhotoPage;