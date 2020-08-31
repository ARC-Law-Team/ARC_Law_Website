import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { tr, en } from './translations';

const options = {
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  debug: false,

  // lng: 'en',

  resources: {
    tr: {
      common: tr['tr-TR'],
    },
    en: {
      common: en.en,
    },
  },

  fallbackLng: 'en',

  ns: ['common'],

  defaultNS: 'common',

  returnObjects: true,

  react: {
    useSuspense: false,
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(options);
export default i18n;
