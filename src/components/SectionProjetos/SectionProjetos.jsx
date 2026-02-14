import styles from './SectionProjetos.module.css';
import { FaGlobe, FaCode } from "react-icons/fa";
import ProjectsData from "../../assets/data/projects.json"

function SectionProjetos() {
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
                <div className="tech-tags">
                  {project.tecnologias.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.buttons}>
                <div className={styles.view}>
                  <a href={project.view}>
                    <FaGlobe />
                    Ver Projeto
                  </a>
                </div>
                <div className={styles.code}>
                  <a href={project.code}>
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