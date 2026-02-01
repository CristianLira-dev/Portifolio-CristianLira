import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import styles from "./SectionHero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

function SectionHero() {
  const canvasRef = useRef(null);
  const splineInstance = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (canvasRef.current) {
      const spline = new Application(canvasRef.current);
      splineInstance.current = spline;

      const sceneUrl =
        "https://draft.spline.design/pPIUxkU1Oox4XAya/scene.splinecode";

      spline
        .load(sceneUrl)
        .then(() => {
          // Desabilita interações desnecessárias
          spline.setZoom(false);
          spline.setPan(false);

          // Otimizações de performance
          const pixelRatio = Math.min(window.devicePixelRatio, 1.5); // Reduzi de 2 para 1.5
          spline.setPixelRatio(pixelRatio);

          // Configurações adicionais de performance
          const canvas = canvasRef.current;
          if (canvas) {
            // Otimiza renderização
            canvas.style.imageRendering = "auto";
            canvas.style.willChange = "transform";

            // Força aceleração por hardware
            canvas.style.transform = "translateZ(0)";
          }

          // Se tiver acesso ao renderer (pode variar por versão)
          if (spline._scene) {
            // Reduz qualidade de sombras para melhor performance
            spline._scene.shadowEnabled = false;
          }
        })
        .catch((err) => console.error("Erro ao carregar Spline:", err));
    }

    return () => {
      if (splineInstance.current) {
        // Dispose mais completo
        if (splineInstance.current.dispose) {
          splineInstance.current.dispose();
        }
        splineInstance.current = null;
      }
    };
  }, []);

  return (
    <section id="home" className={styles.sectionHero}>
      <div className={styles.splineWrapper}>
        <canvas ref={canvasRef} id="canvas3d" />
      </div>

      <div className={styles.content}>
        <h1>Cristian Lira</h1>
        <p>
          {t("hero.title")}{" "}
          <span className={styles.gradientText}>{t("hero.style_text")}</span>
        </p>
        <h2>
        {t("hero.subtitle")}
        </h2>
        <nav aria-label="Redes Sociais">
          <ul className={styles.iconList}>
            <li>
              <a
                className={styles.iconLink}
                href="https://github.com/CristianLira-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon className={styles.icon} icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                className={styles.iconLink}
                href="https://linkedin.com/in/cristian-albertino-de-lira-filho-280b52385"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                className={styles.iconLink}
                href="https://wa.me/+5513996873783"
                target="_blank"
                rel="noopener noreferrer" aria-label="WhatsApp" >
                <FontAwesomeIcon className={styles.icon} icon={faWhatsapp} />
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.buttonWrapper}>
          <a
            href="#projetos"
            className={styles.button}
            aria-label="Explorar Projetos"
            rel="noopener noreferrer"
          >
           {t("hero.button_projects")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
