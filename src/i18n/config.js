import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en/translation.json';
import hiTranslations from './locales/hi/translation.json';
import teTranslations from './locales/te/translation.json';

const resources = {
  en: { translation: enTranslations },
  hi: { translation: hiTranslations },
  te: { translation: teTranslations },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
