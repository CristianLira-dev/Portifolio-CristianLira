import styles from './Header.module.css';
import imgEN from "../../assets/images/eua.png";
import imgPT from "../../assets/images/brasil.png";
import imgES from "../../assets/images/espanha.png";
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import logoCristian from "../../assets/images/logo.png";


function Header() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

const languages = [
  { code: "pt-BR", name: "Português", flag: imgPT },
  { code: "en-US", name: "English", flag: imgEN },
  { code: "es", name: "Español", flag: imgES },
];

    const currentLanguage =
        languages.find((l) => l.code === i18n.language) || languages[1];
    
    library.add(fas);

    return (
      <header className={styles.SectionHeader}>
        <div className={styles.Logo}>
          <img src={logoCristian} alt="Logo de Cristian Lira" />
          <strong>Cristian</strong><p>Lira</p>
        </div>
        <nav className={styles.Nav}>
          <ul>
            <li>
              <a href="#home">{t("header.home")}</a>
            </li>
            <li>
              <a href="#about">{t("header.about")}</a>
            </li>
            <li>
              <a href="#skills">{t("header.skills")}</a>
            </li>
            <li>
              <a href="#projects">{t("header.projects")}</a>
            </li>
            <li>
              <a href="#contact">{t("header.contact")}</a>
            </li>
          </ul>
        </nav>
        <div className={styles.LanguageContainer}>
          <button className={styles.SelectBtn} onClick={() => setIsOpen(!isOpen)}>
            <img src={currentLanguage.flag} alt="" width="20" />

            <span>{currentLanguage.name}</span>

            <i className={`${styles.Arrow} ${isOpen ? styles.Open : ""}`}>
              <FontAwesomeIcon icon={["fas", "angle-down"]} />
            </i>
          </button>

          {isOpen && (
            <ul className={styles.Dropdown}>
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    className={
                      lang.code === i18n.language
                        ? styles.Selected
                        : styles.NotSelected
                    }
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setIsOpen(false);
                    }}
                  >
                    <img src={lang.flag} alt="" width="20" />
                    {lang.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
    );
}

export default Header;