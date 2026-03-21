import styles from "./ModalFeedback.module.css";
import { useTranslation } from "react-i18next";

function ModalFeedback({ status, errorMessage, onClose }) { // <-- Adicione errorMessage aqui
  if (!status || status === "loading") return null;

  const { t } = useTranslation();
  const isSuccess = status === "success";

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.modal} ${isSuccess ? styles.success : styles.error}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`${styles.iconWrapper} ${isSuccess ? styles.iconSuccess : styles.iconError}`}
        >
          {isSuccess ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
        </div>

        <div className={styles.content}>
          <h3 className={styles.titulo}>
            {isSuccess ? t("modal_contato.success_title") : t("modal_contato.error_title")}
          </h3>
          
          <p className={styles.descricao}>
            {isSuccess
              ? t("modal_contato.success_message")
              /* Aqui está a mágica: se tiver erro específico mostra ele, senão mostra o genérico */
              : (errorMessage ? errorMessage : t("modal_contato.error_message"))}
          </p>
        </div>

        <button className={styles.botaoFechar} onClick={onClose}>
          {t("modal_contato.button")}
        </button>

        <div
          className={`${styles.linha} ${isSuccess ? styles.linhaSuccess : styles.linhaError}`}
        />
      </div>
    </div>
  );
}

export default ModalFeedback;