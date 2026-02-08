import { useRef } from "react";
import style from "./Divisor.module.css";
import ListaTecnologias from "../../assets/data/tecnologias.json";

// Importar ícones
import {
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
  SiMysql,
  SiThreedotjs,
  SiGreensock,
} from "react-icons/si";

// Importar imagens
import figma from "../../assets/images/figma-cinza.png";
import nuxt from "../../assets/images/nuxt-cinza.png";
import vercel from "../../assets/images/vercel-cinza.png";

function Divisor() {
  const carrosselRef = useRef(null);

  // Mapeamento de ícones
  const iconMap = {
    HTML5: <FaHtml5 />,
    CSS3: <FaCss3Alt />,
    JavaScript: <FaJsSquare />,
    PHP: <FaPhp />,
    "React.js": <FaReact />,
    "Vue.js": <FaVuejs />,
    TailwindCSS: <SiTailwindcss />,
    Bootstrap: <SiBootstrap />,
    SASS: <FaSass />,
    "Three.js": <SiThreedotjs />,
    GSAP: <SiGreensock />,
    MySQL: <SiMysql />,
    "Git": <FaGitAlt />,
  };

  // Mapeamento de imagens
  const imageMap = {
    "Figma": figma,
    "Nuxt.js": nuxt,
    "Vercel": vercel,
  };

  // Duplicar a lista para criar o efeito infinito
  const tecnologiasDuplicadas = [
    ...ListaTecnologias.tecnologias,
    ...ListaTecnologias.tecnologias,
    ...ListaTecnologias.tecnologias,
  ];

  return (
    <div className={style.divisor}>
      <div className={style.carrosselContainer}>
        <div className={style.carrossel} ref={carrosselRef}>
          {tecnologiasDuplicadas.map((tech, index) => (
            <div
              key={`${tech.id}-${index}`}
              className={style.techItem}
              title={tech.nome}
            >
              {tech.tipo === "icon" ? (
                <span className={style.techIcon}>{iconMap[tech.nome]}</span>
              ) : (
                <img
                  src={imageMap[tech.nome]}
                  alt={tech.nome}
                  className={style.techImage}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Divisor;
