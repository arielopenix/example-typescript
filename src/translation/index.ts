import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./lang/en_US.json";
import esTranslation from "./lang/es_ES.json";
import poTranslation from "./lang/pt_BR.json";

const resources = {
  en_US: {
    translation: enTranslation,
  },
  es_ES: {
    translation: esTranslation,
  },
  pt_BR: {
    translation: poTranslation,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en_US",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;