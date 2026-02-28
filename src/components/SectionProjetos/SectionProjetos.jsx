import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import styles from "./SectionProjetos.module.css";
import {
  FaGlobe,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaReact,
  FaVuejs,
  FaSass,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiThreedotjs,
  SiGreensock,
  SiMysql,
} from "react-icons/si";
import nuxt from "../../assets/images/nuxt.png";
import projectsPt from "../../assets/data/projects.json";
import projectsEn from "../../assets/data/projects.en.json";
import projectsEs from "../../assets/data/projects.es.json";
import pinia from "../../assets/images/pinia.png";  

function SectionProjetos() {
  const { t, i18n } = useTranslation();

  const iconMap = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JavaScript: <FaJsSquare />,
    PHP: <FaPhp />,
    "React.js": <FaReact />,
    "Vue": <FaVuejs />,
    TailwindCSS: <SiTailwindcss />,
    Bootstrap: <SiBootstrap />,
    SASS: <FaSass />,
    "Three.js": <SiThreedotjs />,
    GSAP: <SiGreensock />,
    MySQL: <SiMysql />,
    Git: <FaGitAlt />,
    "Nuxt": <img src={nuxt} alt="Nuxt.js" />,
    "Pinia": <img src={pinia} alt="Pinia" />,
  };

  const languageCode = i18n.resolvedLanguage?.split("-")[0] || "en";

  const projectsData = useMemo(() => {
    if (languageCode === "pt") return projectsPt;
    if (languageCode === "es") return projectsEs;
    return projectsEn;
  }, [languageCode]);

  return (
    <section className={styles.projetos} id="projects">
      <h2>{t("projects.title")}</h2>
      {projectsData.projects.map((project) => (
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
              <h3>{t("projects.technologies")}:</h3>
              <div className={styles.techtags}>
                {project.tecnologias.map((tech, index) => (
                  <span key={index} className={`${styles.tecnologia} ${styles[tech]}`}>
                    {iconMap[tech]}
                    <p>{tech}</p>
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.buttons}>
              <div className={styles.view}>
                <a target="_blank" rel="noreferrer" href={project.view}>
                  <FaGlobe />
                  {t("projects.view_project")}
                </a>
              </div>
              <div className={styles.code}>
                <a target="_blank" rel="noreferrer" href={project.code}>
                  <FaCode />
                  {t("projects.code")}
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
