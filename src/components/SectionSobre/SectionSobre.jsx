import styles from "./SectionSobre.module.css";
import cristian from "../../assets/images/cristian.png";
import Nuxt from "../../assets/images/NuxtSobre.png";
import { FaReact, FaVuejs } from "react-icons/fa";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import CV from "../../assets/curriculo/Cristian-Lira.pdf";


function SectionSobre() {
  const { t } = useTranslation();
  const mesAtual = new Date().getMonth();
  const anoAtual = new Date().getFullYear();
  const nascimento = 2008;
  let idade = anoAtual - nascimento;
  if (mesAtual === 0 || mesAtual === 1) {
    idade--;
  }

  return (
    <section
      className={styles.sectionSobre}
      id="about"
      aria-label="Seção Sobre Mim"
    >
      <div className={styles.container}>
        <h2 className={styles.title}>{t("about.title")}</h2>

        <div className={styles.content}>
          <div className={styles.textContainer}>
            <p>
              {t("about.description_1")}
              <strong>Cristian Lira</strong>, {t("about.description_1_2")}{" "}
              {idade} {t("about.description_1_3")}
            </p>

            <p>
              {t("about.description_2")} <strong>React.js</strong> {t("about.description_2_2")}{" "}
              <strong>Vue.js (Nuxt.js)</strong>,{" "}{t("about.description_2_3")} {" "}
              <strong>APIs REST</strong>{" "}{t("about.description_2_4")}
            </p>

            <p>
              {t("about.description_3")}
            </p>

            <div className={styles.buttonsContainer}>
              <a
                href={CV}
                className={styles.btnBaixar}
                download
              >
                {(t("about.button"))}
              </a>

              <Button />
            </div>
          </div>

          <figure className={styles.fotoContainer}>
            <img
              src={cristian}
              className={styles.fotoPerfil}
              alt="Foto de perfil de Cristian Lira"
            />

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
