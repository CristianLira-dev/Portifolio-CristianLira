import styles from "./Footer.module.css";
import Logo from "../../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import CV from "../../assets/curriculo/Cristian-Lira.pdf";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { SiReact, SiVuedotjs, SiNuxtdotjs, SiJavascript } from "react-icons/si";

function Footer() {
  const anoAtual = new Date().getFullYear();

  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      {/* Wave decorativo no topo */}
      <div className={styles.waveTop}>
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          {/* Coluna 1: Sobre */}
          <div className={styles.footerColumn}>
            <div className={styles.brandSection}>
              <div className={styles.logoContainer}>
                <div className={styles.logoIcon}>
                  <img src={Logo} alt="Logo de Cristian Lira" />
                </div>
                <h3 className={styles.brandName}>Cristian Lira</h3>
              </div>
              <p className={styles.brandDescription}>{t("footer.title")}</p>
              <p className={styles.brandTagline}>
                {t("footer.subtitle")}{" "}
                <span className={styles.highlight}>
                  {t("footer.style_text")}
                </span>
              </p>
              <div className={styles.techStack}>
                <div className={styles.techItem}>
                  <SiReact className={styles.techIcon} />
                  <span>React</span>
                </div>
                <div className={styles.techItem}>
                  <SiVuedotjs className={styles.techIcon} />
                  <span>Vue</span>
                </div>
                <div className={styles.techItem}>
                  <SiNuxtdotjs className={styles.techIcon} />
                  <span>Nuxt</span>
                </div>
                <div className={styles.techItem}>
                  <SiJavascript className={styles.techIcon} />
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>{t("footer.title_nav_0")}</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#home" className={styles.footerLink}>
                  {t("footer.subtitle_nav_0_0")}
                </a>
              </li>
              <li>
                <a href="#about" className={styles.footerLink}>
                  {t("footer.subtitle_nav_0_1")}
                </a>
              </li>
              <li>
                <a href="#skills" className={styles.footerLink}>
                  {t("footer.subtitle_nav_0_2")}
                </a>
              </li>
              <li>
                <a href="#projects" className={styles.footerLink}>
                  {t("footer.subtitle_nav_0_3")}
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.footerLink}>
                  {t("footer.subtitle_nav_0_4")}
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>{t("footer.title_nav_1")}</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <a
                  href="mailto:cristianfilho2008@outlook.com"
                  target="_blank"
                  className={styles.contactLink}
                  rel="noreferrer"
                >
                  cristianfilho2008@outlook.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <a
                  href="https://wa.me/+5513996873783"
                  target="_blank"
                  className={styles.contactLink}
                  rel="noreferrer"
                >
                  +55 (13) 99687-3783
                </a>
              </li>
              <li className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span className={styles.contactText}>
                  Praia Grande - SP, {t("footer.brasil")}
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>{t("footer.title_nav_2")}</h4>
            <p className={styles.socialDescription}>
              {t("footer.subtitle_nav_2_0")}
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/CristianLira-dev"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/cristian-albertino-de-lira-filho-280b52385/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/+5513996873783"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>

            <div className={styles.downloadCV}>
              <a href={CV} download className={styles.cvButton}>
                <span>{t("footer.button")}</span>
                <svg
                  className={styles.cvIcon}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15L12 3M12 15L16 11M12 15L8 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 15L3 18C3 19.6569 4.34315 21 6 21L18 21C19.6569 21 21 19.6569 21 18V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerLine}></div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© {anoAtual} Cristian Lira</p>
        </div>
      </div>

      <div className={styles.backgroundEffect}></div>
      <div className={styles.backgroundGlow}></div>
    </footer>
  );
}

export default Footer;
