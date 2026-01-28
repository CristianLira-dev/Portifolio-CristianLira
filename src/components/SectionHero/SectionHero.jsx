import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import styles from "./SectionHero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faLinkedin,faWhatsapp,} from "@fortawesome/free-brands-svg-icons";

function SectionHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const spline = new Application(canvasRef.current);

      spline
        .load("https://prod.spline.design/sYtOqJiDD8QnNnMu/scene.splinecode")
        .then(() => {
          // Desabilita todos os controles de câmera
          spline.setZoom(false);
          spline.setOrbit(false);
          spline.setPan(false);

          // Melhora a qualidade aumentando o pixel ratio
          const canvas = canvasRef.current;
          const pixelRatio = Math.min(window.devicePixelRatio, 2); // Limita a 2x para performance
          canvas.width = canvas.clientWidth * pixelRatio;
          canvas.height = canvas.clientHeight * pixelRatio;
        });
    }
  }, []);

  return (
    <section className={styles.sectionHero}>
      <div className={styles.splineWrapper}>
        <canvas ref={canvasRef} id="canvas3d" />
      </div>

      <div className={styles.content}>
        <h1>Welcome to the Hero Section</h1>
        <p>Desenvolvedor Front-End</p>
        <ul>
          <li>
            <a className={styles.iconLink} href="#" aria-label="GitHub">
              <FontAwesomeIcon className={styles.icon} icon={faGithub} />
            </a>
          </li>
          <li>
            <a className={styles.iconLink} href="#" aria-label="LinkedIn">
              <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a className={styles.iconLink} href="#" aria-label="WhatsApp">
              <FontAwesomeIcon className={styles.icon} icon={faWhatsapp} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SectionHero;
