import styles from "./Button.module.css";
import { useTranslation } from "react-i18next";

function Button() {
      const { t, i18n } = useTranslation();
    return ( 
                  <a
                    href="#projects"
                    className={styles.button}
                    aria-label="Explorar Projetos"
                    rel="noopener noreferrer"
                  >
                   {t("hero.button_projects")}
                  </a>
    );
}

export default Button;