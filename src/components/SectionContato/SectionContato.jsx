import styles from "../SectionContato/SectionContato.module.css";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";


function SectionContato() {    
    const { t, i18n } = useTranslation();
const valorLight = getComputedStyle(document.documentElement).getPropertyValue(
  "--light",
);
    const [texto, setTexto] = useState("")


    return (
      <section id="contact" className={styles.SectionContato}>
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
