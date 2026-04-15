import styles from "../SectionContato/SectionContato.module.css";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import validator from "validator";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import ModalFeedback from "../ModalFeedback/ModalFeedback";

function SectionContato() {
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = async (data) => {
    setStatus("loading");
    setErrorMessage(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "";

      // 1. Envia os dados para o Node.js validar, passando o idioma atual no header
      const respostaValidacao = await fetch(`${apiUrl}/api/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": i18n.language, // <-- passa o idioma atual do site
        },
        body: JSON.stringify({
          email: data.email,
          assunto: data.assunto,
          mensagem: data.mensagem,
        }),
      });

      const resultadoBack = await respostaValidacao.json();

      // 2. Se o backend retornou erro, exibe a mensagem personalizada no modal
      if (!respostaValidacao.ok) {
        setErrorMessage(resultadoBack.error); // mensagem já no idioma certo vinda do backend
        setStatus("error");
        return;
      }

      // 3. Backend aprovou — dispara o EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          email: data.email,
          assunto: data.assunto,
          mensagem: data.mensagem,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      reset();
    } catch (error) {
      console.error("Erro no processo:", error);
      setErrorMessage(null); // usa mensagem genérica do modal
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={styles.SectionContato}>
      {/* Passa errorMessage para o ModalFeedback exibir o erro personalizado */}
      <ModalFeedback
        status={status}
        errorMessage={errorMessage}
        onClose={() => {
          setStatus(null);
          setErrorMessage(null);
        }}
      />
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 160"
      >
        <path
          fill="#1c1f251"
          d="M0,64L34.3,66.7C68.6,69.5,137,74.5,206,66.7C274.3,58.5,343,37.5,411,34.7C480,32,549,48,617,50.7C685.7,53.5,754,42.5,823,50.7C891.4,58.5,960,85.5,1029,82.7C1097.1,80,1166,48,1234,40C1302.9,32,1371,48,1406,56L1440,64L1440,160L1405.7,160C1371.4,160,1303,160,1234,160C1165.7,160,1097,160,1029,160C960,160,891,160,823,160C754.3,160,686,160,617,160C548.6,160,480,160,411,160C342.9,160,274,160,206,160C137.1,160,69,160,34,160L0,160Z"
        ></path>
      </svg>
      <div className={styles.container}>
        <div className={styles.conteudo}>
          <h2 className={styles.titulo}>{t("contact.title")}</h2>
          <p className={styles.subtitulo}>{t("contact.subtitle")}</p>

          <form className={styles.formulario}>
            <div className={styles.campoWrapper}>
              <label htmlFor="email" className={styles.label}>
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className={errors?.email ? styles.inputErro : styles.input}
                placeholder={t("contact.email_placeholder")}
                {...register("email", {
                  required: true,
                  validate: (value) => validator.isEmail(value),
                })}
              />
              {errors?.email?.type === "required" && (
                <p id="erro-email" className={styles.erro}>
                  {t("contact.email_error_required")}
                </p>
              )}
              {errors?.email?.type === "validate" && (
                <p id="erro-email" className={styles.erro}>
                  {t("contact.email_error_validate")}
                </p>
              )}
            </div>

            <div className={styles.campoWrapper}>
              <label htmlFor="assunto" className={styles.label}>
                {t("contact.assunto_label")}
              </label>
              <input
                type="text"
                id="assunto"
                className={errors?.assunto ? styles.inputErro : styles.input}
                placeholder={t("contact.assunto_placeholder")}
                {...register("assunto", { required: true })}
              />
              {errors?.assunto?.type === "required" && (
                <p id="erro-assunto" className={styles.erro}>
                  {t("contact.assunto_error_required")}
                </p>
              )}
            </div>

            <div className={styles.campoWrapper}>
              <label htmlFor="mensagem" className={styles.label}>
                {t("contact.menssagem")}
              </label>
              <input
                type="text"
                id="mensagem"
                className={errors?.mensagem ? styles.inputErro : styles.inputMensagem}
                placeholder="Ex: Gostaria de conversar com você!"
                {...register("mensagem", {
                  validate: (value) => value?.trim().length > 0,
                })}
              />
              {errors?.mensagem?.type === "validate" && (
                <p id="erro-mensagem" className={styles.erro}>
                  {t("contact.mensagem_error_required")}
                </p>
              )}
            </div>

            <div className={styles.containerButton}>
              <a
                className={styles.botaoEnviar}
                onClick={() => handleSubmit(onSubmit)()}
              >
                {status === "loading"
                  ? t("contact.loading")
                  : t("contact.button")}
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SectionContato;
