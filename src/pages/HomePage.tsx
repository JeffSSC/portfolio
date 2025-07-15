import Card from '../components/card/Card';
import ContactCard from '../components/contact/ContactCard';
import styles from '../styles/home.module.css';
import codeconImage from '../assets/codecon.jpg';
import mikaelImage from '../assets/mikael.jpg';
import portfolioImage from '../assets/portfolio.jpg';
import me from '../assets/me.jpg';

function HomePage() {

  const places = [
    {
      imageUrl: portfolioImage,
      title: 'Portfólio',
      description: 'Este é o meu portfólio, onde você pode conhecer mais sobre mim e meus projetos.',
      altText: 'Portfólio do Jefferson',
      githubUrl: 'https://github.com/JeffSSC/portfolio'
    },
    {
      imageUrl: codeconImage,
      title: 'Beastify - Codecon Universe',
      description: 'Uma aplicação web que transforma sua selfie, trocando seu rosto por um personagem do universo Codecon.',
      altText: 'Beastify - Codecon Universe, um evento de tecnologia e inovação',
      githubUrl: 'https://github.com/JeffSSC/Codecon-PandaCon'
    },
    {
      imageUrl: mikaelImage,
      title: 'Mikael - LeRobot',
      description: 'Uma mão robótica que joga UNO, desenvolvida com Python, Yolo e OpenCV.',
      altText: 'Mikael - LeRobot jogando UNO',
      githubUrl: 'https://github.com/LuanPonick/Mikael'
    },
  ];

  const contactLinks = [
    {
      imageUrl: 'https://img.icons8.com/?size=512&id=8808&format=png&color=000000',
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jefferson-silva-2b0a1b1b6/',
      altText: 'LinkedIn'
    },
    {
      imageUrl: 'https://img.icons8.com/?size=512&id=106562&format=png&color=000000',
      title: 'GitHub',
      link: 'https://github.com/JeffSSC',
      altText: 'GitHub'
    },
    {
      imageUrl: 'https://img.icons8.com/?size=512&id=38158&format=png&color=000000',
      title: 'Gmail',
      link: 'mailto:jeff.silva.caires@gmail.com',
      altText: 'Gmail'
    }
  ];

  return (
    <div>
      <div className={styles.backgroundHome}>
        <h1>Olá, sou Jefferson!</h1>
        <p>Bem vindo ao meu portfólio!</p>
      </div>
      <div className={styles.aboutContainer}>
        <h1>Quem sou eu?</h1>
        <div className={styles.aboutContent}>
          <div className={styles.profileImage}>
            <img src={me} alt="Jefferson" />
          </div>
          <div className={styles.aboutText}>
            <p>Sou Jefferson, estudante de Ciências da Computação (Unisociesc) e desenvolvedor em formação. 
              Busco ativamente aplicar meu conhecimento acadêmico em desafios práticos do mercado.
</p>
            <p>Tenho experiência profissional com Python, API Rest, Docker, Nginx, AWS e NodeJS.
Além dessas tecnologias tenho estudado ReactJS, PostgreSQL, Machine Learning e estou em busca da certificação AWS Cloud Practitioner. </p>
          </div>
        </div>
      </div>
      <div className="appContainer">
        <h1>Projetos</h1>
        <div className="cardsContainer">
          {places.map((place) => (
            <Card
              imageUrl={place.imageUrl}
              title={place.title}
              description={place.description}
              altText={place.altText}
              githubUrl={place.githubUrl}
            />
          ))}
        </div>
      </div>
      <div className="contactContainer">
        <h1>Entre em contato comigo</h1>
        <div className="contactContent">
          {contactLinks.map((contactLinks) => (
            <ContactCard
              imageUrl={contactLinks.imageUrl}
              title={contactLinks.title}
              link={contactLinks.link}
              altText={contactLinks.altText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;