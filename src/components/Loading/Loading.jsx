import { useState, useEffect } from "react";
import styles from "../Loading/Loading.module.css";

function Loading({ onComplete }) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Animação completa em ~3.5 segundos
    const timer = setTimeout(() => {
      setIsAnimating(false);
      if (onComplete) onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isAnimating) return null;

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.nameWrapper}>
        <h1 className={styles.letter} style={{ "--delay": "0s" }}>
          C
        </h1>
        <h1 className={styles.letter} style={{ "--delay": "0.1s" }}>
          R
        </h1>
        <h1 className={styles.letter} style={{ "--delay": "0.2s" }}>
          I
        </h1>
        <h1 className={styles.letter} style={{ "--delay": "0.3s" }}>
          S
        </h1>
        <h1 className={styles.letter} style={{ "--delay": "0.4s" }}>
          T
        </h1>
        <h1 className={styles.letter} style={{ "--delay": "0.5s" }}>
          I
        </h1>
        <h1 className={styles.letter} style={{ "--delay": "0.6s" }}>
          A
        </h1>
        <h1 className={styles.letter} style={{ "--delay": "0.7s" }}>
          N
        </h1>

        <div style={{ width: "20px" }}></div>

        <h1 className={styles.letter} style={{ "--delay": "0.9s" }}>
          L
        </h1>
        <h1 className={styles.letter} style={{ "--delay": "1s" }}>
          I
        </h1>
        <h1 className={styles.letter} style={{ "--delay": "1.1s" }}>
          R
        </h1>
        <h1 className={styles.letter} style={{ "--delay": "1.2s" }}>
          A
        </h1>
      </div>
    </div>
  );
}

export default Loading;
