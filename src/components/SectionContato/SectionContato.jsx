import styles from "../SectionContato/SectionContato.module.css";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";


function SectionContato() {    
    const { t } = useTranslation();
    const [texto, setTexto] = useState("")


    return (
      <section id="contact" className={styles.SectionContato}>
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
                  className={styles.input}
                  placeholder={t("contact.email_placeholder")}
                />
              </div>

              <div className={styles.campoWrapper}>
                <label htmlFor="assunto" className={styles.label}>
                  {t("contact.assunto_label")}
                </label>
                <input
                  type="text"
                  id="assunto"
                  className={styles.input}
                  placeholder={t("contact.assunto_placeholder")}
                />
              </div>

              <div className={styles.campoWrapper}>
                <label htmlFor="mensagem" className={styles.label}>
                  {t("contact.menssagem")}
                </label>
                <div className={styles.editorWrapper}>
                  <Editor
                    key={t("contact.language")}
                    apiKey="h8krho8x5gu4wxlvavexdy4hb45bm5oq457o94fm0k4o6l07"
                    onEditorChange={(novoTexo) => {
                      setTexto(novoTexo);
                    }}
                    initialValue=""
                    init={{
                      height: 300,
                      menubar: false,
                      branding: false,
                      statusbar: false,

                      // Tema do editor (skin)
                      skin: "oxide-dark", // Tema escuro nativo do TinyMCE
                      content_css: "dark", // CSS escuro para o conteúdo
                      language: t("contact.language"), // O código do idioma
                      language_url: t("contact.language_URL"), // O caminho onde você colou o arquivo (dentro da public)
                      // Estilização do conteúdo interno
                      content_style: `
        body {
          color: #fafafa;
          background-color: #131519;
          line-height: 1.5;
        }
      `,

                      plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                      toolbar:
                        "undo redo | bold italic underline  | align lineheight | numlist bullist emoticons  image link",
                    }}
                  />
                </div>
              </div>

              <div className={styles.containerButton}>
                <button type="submit" className={styles.botaoEnviar}>
                  {t("contact.button")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
}

export default SectionContato;
