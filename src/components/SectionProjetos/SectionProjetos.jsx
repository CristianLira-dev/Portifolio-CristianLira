import styles from './SectionProjetos.module.css';
import { FaGlobe, FaCode, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaReact, FaVuejs, FaSass, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiThreedotjs, SiGreensock, SiMysql } from "react-icons/si";
import nuxt from "../../assets/images/nuxt.png";
import ProjectsData from "../../assets/data/projects.json"

function SectionProjetos() {

    const iconMap = {
      "HTML": <FaHtml5 />,
      "CSS": <FaCss3Alt />,
      "JavaScript": <FaJsSquare />,
      "PHP": <FaPhp />,
      "React.js": <FaReact />,
      "Vue.js": <FaVuejs />,
      "TailwindCSS": <SiTailwindcss />,
      "Bootstrap": <SiBootstrap />,
      "SASS": <FaSass />,
      "Three.js": <SiThreedotjs />,
      "GSAP": <SiGreensock />,
      "MySQL": <SiMysql />,
      "Git": <FaGitAlt />,
      "Nuxt.js": <img src={nuxt} alt="Nuxt.js" />
    };

    return (
      <section className={styles.projetos} id="projects">
        <h2>Meus Projetos</h2>
        {ProjectsData.projects.map((project) => (
          <div key={project.id} className={styles.layout}>
            <div className={styles.image}>
              <img src={project.img} alt={project.title} />
            </div>
            <div className={styles.info}>
              <div className={styles.infoTitle}>
                <h4 className={styles.title}>{project.title}</h4>
                <p>{project.tipo}</p>
              </div>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tecnologias}>
                <h3>Tecnologias</h3>
                <div className={styles.techtags}>
                  {project.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className={`${styles.tecnologia} ${styles[tech]}`}
                    >
                      {iconMap[tech]}
                      <p>{tech}</p>
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.buttons}>
                <div className={styles.view}>
                  <a target="_blank" href={project.view}>
                    <FaGlobe />
                    Ver Projeto
                  </a>
                </div>
                <div className={styles.code}>
                  <a target="_blank" href={project.code}>
                    <FaCode />
                    Código
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
}

export default SectionProjetos;