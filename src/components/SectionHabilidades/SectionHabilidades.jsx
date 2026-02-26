import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./SectionHabilidades.module.css";
import hardSkillsPt from "../../assets/data/hardSkills.json";
import hardSkillsEn from "../../assets/data/hardSkills.en.json";
import hardSkillsEs from "../../assets/data/hardSkills.es.json";
import softSkillsPt from "../../assets/data/softSkills.json";
import softSkillsEn from "../../assets/data/softSkills.en.json";
import softSkillsEs from "../../assets/data/softSkills.es.json";
import figma from "../../assets/images/figma.png";
import nuxt from "../../assets/images/nuxt.png";
import pinia from "../../assets/images/pinia.png";
import vite from "../../assets/images/vite.png";
import vercel from "../../assets/images/vercel.png";

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
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("hard");

  const hardSkillIcons = {
    HTML5: { icon: <FaHtml5 />, class: "html5" },
    CSS3: { icon: <FaCss3Alt />, class: "css3" },
    JavaScript: { icon: <FaJsSquare />, class: "javascript" },
    PHP: { icon: <FaPhp />, class: "php" },
    "React.js": { icon: <FaReact />, class: "react" },
    "Vue.js": { icon: <FaVuejs />, class: "vue" },
    "Nuxt.js": { icon: <img src={nuxt} alt="Nuxt.js" />, class: "nuxt" },
    TailwindCSS: { icon: <SiTailwindcss />, class: "tailwind" },
    Bootstrap: { icon: <SiBootstrap />, class: "bootstrap" },
    SASS: { icon: <FaSass />, class: "sass" },
    Figma: { icon: <img src={figma} alt="Figma" />, class: "figma" },
    "Pinia (Vue/Nuxt)": { icon: <img src={pinia} alt="Pinia" />, class: "pinia" },
    "Context API (React)": { icon: <FaReact />, class: "context" },
    "Three.js (3D)": { icon: <SiThreedotjs />, class: "threejs" },
    GSAP: { icon: <SiGreensock />, class: "gsap" },
    MySQL: { icon: <SiMysql />, class: "mysql" },
    "API REST": { icon: <TbApi />, class: "api" },
    Axios: { icon: <TbApi />, class: "axios" },
    Git: { icon: <FaGitAlt />, class: "git" },
    Vite: { icon: <img src={vite} alt="Vite" />, class: "vite" },
    "Vercel (Deploy)": { icon: <img src={vercel} alt="Vercel" />, class: "vercel" },
  };

  const softSkillIcons = {
    communication: <FaComments />,
    "problem-solving": <FaLightbulb />,
    "critical-thinking": <FaBrain />,
    collaboration: <FaUsers />,
    adaptability: <FaRocket />,
    organization: <FaTasks />,
    "attention-detail": <FaEye />,
    "continuous-learning": <FaBook />,
    creativity: <FaPaintBrush />,
    "time-management": <FaClock />,
  };

  const hardSkillIconsCard = {
    base: <FaCode />,
    brain: <FaBrain />,
    design: <FaPaintBrush />,
    hook: <FaTools />,
    animation: <FaMedal />,
    code: <FaLayerGroup />,
    DevOps: <FaGlobe />,
  };

  const languageCode = i18n.resolvedLanguage?.split("-")[0] || "en";

  const hardSkillsData = useMemo(() => {
    if (languageCode === "pt") return hardSkillsPt;
    if (languageCode === "es") return hardSkillsEs;
    return hardSkillsEn;
  }, [languageCode]);

  const softSkillsData = useMemo(() => {
    if (languageCode === "pt") return softSkillsPt;
    if (languageCode === "es") return softSkillsEs;
    return softSkillsEn;
  }, [languageCode]);

  return (
    <section id="skills" className={styles.habilidades}>
      <div className={styles.titulo}>
        <h2>{t("skills.title")}</h2>
        <p>
          {t("skills.subtitle")}
          <span className={styles.destaque}>{t("skills.subtitle_highlight")}</span>
        </p>
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === "hard" ? styles.tabActive : ""}`}
          onClick={() => setActiveTab("hard")}
        >
          {t("skills.tab_hard")}
        </button>
        <button
          className={`${styles.tab} ${activeTab === "soft" ? styles.tabActive : ""}`}
          onClick={() => setActiveTab("soft")}
        >
          {t("skills.tab_soft")}
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
              <div className={styles.cardIcon} style={{ color: category.iconColor }}>
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
              <div className={styles.cardIcon} style={{ color: skill.iconColor }}>
                {softSkillIcons[skill.id]}
              </div>
              <div className={styles.cardContent}>
                <h3>{skill.title}</h3>
                <p className={styles.cardDescription}>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 160"
      >
        <path
          fill="#1c1f251"
          d="M0,64L34.3,66.7C68.6,69.5,137,74.5,206,66.7C274.3,58.5,343,37.5,411,34.7C480,32,549,48,617,50.7C685.7,53.5,754,42.5,823,50.7C891.4,58.5,960,85.5,1029,82.7C1097.1,80,1166,48,1234,40C1302.9,32,1371,48,1406,56L1440,64L1440,160L1405.7,160C1371.4,160,1303,160,1234,160C1165.7,160,1097,160,1029,160C960,160,891,160,823,160C754.3,160,686,160,617,160C548.6,160,480,160,411,160C342.9,160,274,160,206,160C137.1,160,69,160,34,160L0,160Z"
        ></path>
      </svg>
    </section>
  );
}

export default SectionHabilidades;
