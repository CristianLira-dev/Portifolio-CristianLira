import { useState } from "react";
import styles from "./SectionHabilidades.module.css";
import hardSkillsData from "../../assets/data/hardSkills.json";
import softSkillsData from "../../assets/data/softSkills.json";
import figma from "../../assets/images/figma.png";
import nuxt from "../../assets/images/nuxt.png";
import pinia from "../../assets/images/pinia.png";
import vite from "../../assets/images/vite.png";
import docker from "../../assets/images/docker.png";
import vercel from "../../assets/images/vercel.png";

// Importar ícones do react-icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaReact,
  FaVuejs,
  FaSass,
  FaGitAlt,
  FaTools,
  FaComments,
  FaLightbulb,
  FaBrain,
  FaUsers,
  FaRocket,
  FaClock,
  FaEye,
  FaBook,
  FaPaintBrush,
  FaTasks,
  FaCode,
  FaGlobe,
  FaMedal,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiThreedotjs,
  SiGreensock,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

function SectionHabilidades() {
  const [activeTab, setActiveTab] = useState("hard");

  // Mapeamento de ícones para Hard Skills
  const hardSkillIcons = {
    HTML5: { icon: <FaHtml5 />, class: "html5" },
    CSS3: { icon: <FaCss3Alt />, class: "css3" },
    "JavaScript": { icon: <FaJsSquare />, class: "javascript" },
    PHP: { icon: <FaPhp />, class: "php" },
    "React.js": { icon: <FaReact />, class: "react" },
    "Vue.js": { icon: <FaVuejs />, class: "vue" },
    "Nuxt.js": { icon: <img src={nuxt} alt="Nuxt.js" />, class: "nuxt" },
    TailwindCSS: { icon: <SiTailwindcss />, class: "tailwind" },
    Bootstrap: { icon: <SiBootstrap />, class: "bootstrap" },
    SASS: { icon: <FaSass />, class: "sass" },
    "Figma": { icon: <img src={figma} alt="Figma" />, class: "figma" },
    "Pinia (Vue/Nuxt)": { icon: <img src={pinia} alt="Pinia" />, class: "pinia" },
    "Context API (React)": { icon: <FaReact />, class: "context" },
    "Three.js (3D)": { icon: <SiThreedotjs />, class: "threejs" },
    "GSAP": { icon: <SiGreensock />, class: "gsap" },
    MySQL: { icon: <SiMysql />, class: "mysql" },
    "API REST": { icon: <TbApi />, class: "api" },
    "Axios": { icon: <TbApi />, class: "axios" },
    "Git (Versionamento)": { icon: <FaGitAlt />, class: "git" },
    "Vite (Build Tool)": { icon: <img src={vite} alt="Vite" />, class: "vite" },
    "Vercel (Deploy)": { icon: <img src={vercel} alt="Vercel" />, class: "vercel" },
    "Docker": { icon: <img src={docker} alt="Docker" />, class: "docker" },
  };

  // Mapeamento de ícones para Soft Skills
  const softSkillIcons = {
    "communication": <FaComments />,
    "problem-solving": <FaLightbulb />,
    "critical-thinking": <FaBrain />,
    "collaboration": <FaUsers />,
    "adaptability": <FaRocket />,
    "organization": <FaTasks />,
    "attention-detail": <FaEye />,
    "continuous-learning": <FaBook />,
    "creativity": <FaPaintBrush />,
    "time-management": <FaClock />,
  };

  // Mapeamento de ícones para Hard Skills
  const hardSkillIconsCard = {
    "base": <FaCode />,
    "brain": <FaBrain />,
    "design": <FaPaintBrush />,
    "hook": <FaTools />,
    "animation": <FaMedal />,
    "code": <FaLayerGroup />,
    "DevOps": <FaGlobe />,
  };

  return (
    <section id="skills" className={styles.habilidades}>
      <div className={styles.titulo}>
        <h2>Minhas Habilidades & Competências</h2>
        <p>
          Stack técnica completa e soft skills essenciais para entregar
          <span className={styles.destaque}> soluções de alta qualidade</span>
        </p>
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === "hard" ? styles.tabActive : ""}`}
          onClick={() => setActiveTab("hard")}
        >
          Hard Skills
        </button>
        <button
          className={`${styles.tab} ${activeTab === "soft" ? styles.tabActive : ""}`}
          onClick={() => setActiveTab("soft")}
        >
          Soft Skills
        </button>
      </div>

      {activeTab === "hard" && (
        <div className={styles.bentoGrid}>
          {hardSkillsData.categories.map((category) => (
            <div
              key={category.id}
              className={`${styles.card} ${styles[category.size]}`}
              style={{ background: category.gradient }}
            >
              <div
                className={styles.cardIcon}
                style={{ color: category.iconColor }}
              >
                {hardSkillIconsCard[category.icon] || <FaTools />}
              </div>
              <div className={styles.cardContent}>
                <h3>{category.title}</h3>
                <p className={styles.cardDescription}>{category.description}</p>
                <div className={styles.skillsList}>
                  {category.skills.map((skill, index) => {
                    const skillData = hardSkillIcons[skill.name];
                    return (
                      <div key={index} className={styles.skillItem}>
                        <div className={styles.skillHeader}>
                          <span
                            className={`${styles.skillIcon} ${skillData ? styles[skillData.class] : ""}`}
                          >
                            {skillData ? skillData.icon : "💻"}
                          </span>
                          <span className={styles.skillName}>{skill.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "soft" && (
        <div className={styles.bentoGrid}>
          {softSkillsData.skills.map((skill) => (
            <div
              key={skill.id}
              className={`${styles.card} ${styles.softSkillCard}`}
              style={{ background: skill.gradient }}
            >
              <div
                className={styles.cardIcon}
                style={{ color: skill.iconColor }}
              >
                {softSkillIcons[skill.id]}
              </div>
              <div className={styles.cardContent}>
                <h3>{skill.title}</h3>
                <p className={styles.cardDescription}>{skill.description}</p>
                <span className={styles.skillLevel}>{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.divisor}></div>
    </section>
  );
}

export default SectionHabilidades;
