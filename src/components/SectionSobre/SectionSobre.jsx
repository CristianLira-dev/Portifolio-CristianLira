import styles from "./SectionSobre.module.css";
import cristian from "../../assets/images/cristian.png";

function SectionSobre() {
  return (
    <section className={styles.sectionSobre} id="about" aria-label="Seção Sobre Mim">
      {/* Container para centralizar e limitar a largura */}
      <div className={styles.container}>
        <h2 className={styles.title}>Sobre Mim</h2>

        <div className={styles.content}>
          <div className={styles.textContainer}>
            <p>
              Olá! Meu nome é <strong>Cristian Lira</strong>, tenho 21 anos e
              sou um desenvolvedor Front-End apaixonado por criar interfaces
              modernas e funcionais. Minha jornada no desenvolvimento web
              começou com o objetivo de transformar ideias em experiências
              digitais envolventes.
            </p>
            {/* Dica: Adicione um botão ou link aqui futuramente se quiser */}
          </div>

          <figure className={styles.fotoContainer}>
            <img src={cristian} alt="Foto de perfil de Cristian Lira" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default SectionSobre;
