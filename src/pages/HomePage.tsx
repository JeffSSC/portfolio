import Card from '../components/card/Card';
import ContactCard from '../components/contact/ContactCard';
import TechCard from '../components/techCard/TechCard';
import styles from '../styles/home.module.css';
import codeconImage from '../assets/codecon.jpg';
import mikaelImage from '../assets/mikael.jpg';
import portfolioImage from '../assets/portfolio.jpg';
import me from '../assets/me.jpg';

function HomePage() {


  // list of projects
  const projects = [
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


  // Contact links
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

  // List of technologies
  const techs = [
    {
      imageUrl: 'https://img.icons8.com/?size=512&id=l75OEUJkPAk4&format=png&color=000000',
      title: 'Python',
      altText: 'Python'
    },
    {
      imageUrl: 'https://img.icons8.com/?size=512&id=54087&format=png&color=000000',
      title: 'Node.js',
      altText: 'Node.js'
    },
    {
      imageUrl: 'https://img.icons8.com/?size=512&id=bzf0DqjXFHIW&format=png&color=000000',
      title: 'React.js',
      altText: 'React.js'
    },
    {
      imageUrl: 'https://img.icons8.com/?size=512&id=22813&format=png&color=000000',
      title: 'Docker',
      altText: 'Docker'
    },
    {
      imageUrl: 'https://img.icons8.com/?size=512&id=wU62u24brJ44&format=png&color=000000',
      title: 'AWS',
      altText: 'AWS'
    },
    {
      imageUrl: 'https://img.icons8.com/?size=512&id=JRnxU7ZWP4mi&format=png&color=000000',
      title: 'PostgreSQL',
      altText: 'PostgreSQL'
    }
  ]


  return (
    <div>
      {/* Background Section */}
      <div className={styles.backgroundHome}>
        <h1>Olá, sou Jefferson!</h1>
        <p>Bem vindo ao meu portfólio!</p>
      </div>
      {/* About Section */}
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
              Além dessas tecnologias tenho estudado ReactJS, PostgreSQL, Machine Learning e estou em busca da certificação AWS Cloud Practitioner. 
            </p>
          </div>
        </div>
      </div>
      {/* Technology Section */}
      <div className="techContainer">
        <h1>Tecnologias</h1>
        <div className="techContent">
          {techs.map((tech) => (
            <TechCard
              imageUrl={tech.imageUrl}
              title={tech.title}
              altText={tech.altText}
            />
          ))}
        </div>
      </div>
      {/* Project Section */}
      <div className="cardsContainer">
        <h1>Projetos</h1>
        <div className="cardsContent">
          {projects.map((project) => (
            <Card
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              altText={project.altText}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
      {/* Contact Section */}
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