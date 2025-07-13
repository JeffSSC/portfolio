import Card from '../components/card/Card';
import styles from '../styles/background.module.css';
import codeconImage from '../assets/codecon.jpg';
import mikaelImage from '../assets/mikael.jpg';
import portfolioImage from '../assets/portfolio.jpg';

function HomePage() {

  const places = [
    {
      id: 1,
      imageUrl: portfolioImage,
      title: 'Portfólio',
      description: 'Este é o meu portfólio, onde você pode conhecer mais sobre mim e meus projetos.',
      altText: 'Portfólio do Jefferson',
      githubUrl: 'https://github.com/JeffSSC/portfolio'
    },
    {
      id: 2,
      imageUrl: codeconImage,
      title: 'Beastify - Codecon Universe',
      description: 'Uma aplicação web que transforma sua selfie, trocando seu rosto por um personagem do universo Codecon.',
      altText: 'Beastify - Codecon Universe, um evento de tecnologia e inovação',
      githubUrl: 'https://github.com/JeffSSC/Codecon-PandaCon'
    },
    {
      id: 3,
      imageUrl: mikaelImage,
      title: 'Mikael - LeRobot',
      description: 'Uma mão robótica que joga UNO, desenvolvida com Python, Yolo e OpenCV.',
      altText: 'Mikael - LeRobot jogando UNO',
      githubUrl: 'https://github.com/LuanPonick/Mikael'
    },
  ];

  return (
    <div>
      <div className={styles.backgroundHome}>
        <h1>Olá, sou Jefferson!</h1>
        <p>Bem vindo ao meu portfólio!</p>
      </div>
      <div className="appContainer">
        <h1>Projetos</h1>
        <div className="cardsContainer">
          {places.map((place) => (
            <Card
              key={place.id}
              imageUrl={place.imageUrl}
              title={place.title}
              description={place.description}
              altText={place.altText}
              githubUrl={place.githubUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;