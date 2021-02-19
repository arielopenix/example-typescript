import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./lang/en_US.json";
import esTranslation from "./lang/es_ES.json";
import poTranslation from "./lang/pt_BR.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
  po: {
    translation: poTranslation,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;