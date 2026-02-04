import styles from "./SectionSobre.module.css";
import cristian from "../../assets/images/cristian.png";
import Nuxt from "../../assets/images/NuxtSobre.png";
import { FaReact, FaVuejs } from "react-icons/fa";

function SectionSobre() {
  const anoAtual = new Date().getFullYear();
  const nascimento = 2008;
  const idade = anoAtual - nascimento;
  return (
    <section className={styles.sectionSobre} id="about" aria-label="Seção Sobre Mim">
      {/* Container para centralizar e limitar a largura */}
      <div className={styles.container}>
        <h2 className={styles.title}>Sobre Mim</h2>

        <div className={styles.content}>
          <div className={styles.textContainer}>
            <p>
              Olá! Meu nome é <strong>Cristian Lira</strong>, tenho {idade} anos e
              sou um Desenvolvedor Front-End apaixonado por construir a web moderna. Meu foco
              está em criar interfaces performáticas, acessíveis e responsivas que resolvam
              problemas reais.
            </p>
            <p>
              Domino a construção de Single Page Applications (SPA) utilizando <strong>React.js</strong> (Vite)
              e <strong>Vue.js (Nuxt)</strong>, sempre aplicando boas práticas de arquitetura, SEO, SSR e Clean Code.
              Mais do que dominar a sintaxe, entendo como conectar o Front-End ao mundo real,
              consumindo <strong>APIs REST</strong> e integrando sistemas complexos tendo experiência com PHP e MySQL.
            </p>
            <p>
              Estou sempre em busca do próximo nível, seja otimizando o tempo de carregamento
              de uma página ou implementando uma nova feature desafiadora.
            </p>
          </div>

          <figure className={styles.fotoContainer}>
            <img src={cristian} alt="Foto de perfil de Cristian Lira" />
            
            {/* Ícones de frameworks flutuantes */}
            <div className={styles.iconReact}>
              <FaReact />
            </div>
            <div className={styles.iconVue}>
              <FaVuejs />
            </div>
            <div className={styles.iconNuxt}>
              <img src={Nuxt} alt="Nuxt.js" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default SectionSobre;