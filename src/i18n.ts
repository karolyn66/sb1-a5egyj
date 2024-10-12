import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: {
        translation: {
          // Add German translations here
        }
      },
      en: {
        translation: {
          // Add English translations here
        }
      },
      zh: {
        translation: {
          // Add Chinese translations here
        }
      },
      es: {
        translation: {
          // Add Spanish translations here
        }
      },
      it: {
        translation: {
          // Add Italian translations here
        }
      },
      fr: {
        translation: {
          // Add French translations here
        }
      }
    },
    lng: 'de', // Set default language to German
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;