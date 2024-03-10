import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import translations from "@/public/locales/fr_FR";

const i18nInstance = i18n.createInstance();

const { t } = i18nInstance;

(() =>
  void i18nInstance.use(initReactI18next).init({
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
    lng: "fr",
    resources: {
      fr: {
        translation: translations,
      },
    },
  }))();

export { t };
export * from "./useTranslation";

export default i18nInstance;
