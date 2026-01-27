import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import styles from "./SectionHero.module.css";

function SectionHero() {
  const canvasRef = useRef(null);

useEffect(() => {
  if (canvasRef.current) {
    const spline = new Application(canvasRef.current);

    spline
      .load("https://prod.spline.design/sYtOqJiDD8QnNnMu/scene.splinecode")
      .then(() => {
        // Desativa o zoom da roda do mouse (Scroll Zoom)
        spline.setZoom(false);

        // Desativa a rotação/interação de clique e arraste (Orbit)
        // Se você quiser que o objeto seja estático, use:
        // spline.setVariable('orbit', false); // Depende de como foi nomeado no Spline

        console.log("Cena carregada e interações ajustadas.");
      });
  }
}, []);

  return (
    <section className={styles.sectionHero}>
      <div className={styles.splineWrapper}>
        {/* Renderizamos o Canvas manualmente */}
        <canvas ref={canvasRef} id="canvas3d" />
      </div>

      <div className={styles.content}>
        <h1>Welcome to the Hero Section</h1>
        <p>Inovação e Design 3D</p>
      </div>
    </section>
  );
}

export default SectionHero;
