import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          banner: {
            title: "Web3 For Billions Of Consumers",
            description:
              "The flat fee, lightning fast chain, made for mainstream mass adoption.",
          },
        },
      },
      ko: {
        translation: {
          banner: {
            title: "수십억 인먼트 소비자를 위한 Web3",
            description:
              "주류 대중화를 위해 만들어진 정액 요금제, 초고속 체인.",
          },
        },
      },
      ar: {
        translation: {
          banner: {
            title: "ويب٣ لمليارات مستهلكي",
            description:
              "الشبكة السريعة والخالية من الرسوم، التي تضمن التبني الشامل.",
          },
        },
      },
    },
  });

export default i18n;
