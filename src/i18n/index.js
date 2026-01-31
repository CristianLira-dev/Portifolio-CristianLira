import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptTranslation from "./locales/pt/translation.json";
import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador
  .use(initReactI18next) // Passa o i18n para o react-i18next
  .init({
    resources: {
      pt: { translation: ptTranslation },
      en: { translation: enTranslation },
      es: { translation: esTranslation },
    },
    fallbackLng: "en", // Se não detectar nada, usa inglês
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
