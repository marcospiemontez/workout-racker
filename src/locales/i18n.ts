import { createI18n } from 'vue-i18n';
import { pt_BR } from '@/locales/pt_BR';
import { en_US } from '@/locales/en_US';

const userLanguage = window.navigator.language.replace('-', '_');

function getLanguageFromNavigatorCode(code: string) {
  if (code.startsWith('en')) {
    return 'en_US';
  } else if (code.startsWith('pt')) {
    return 'pt_BR';
  }

  return 'en_US';
}

const language = getLanguageFromNavigatorCode(userLanguage);

const languages = {
  pt_BR,
  en_US,
};

const i18n = createI18n({
  locale: language,
  fallbackLocale: language,
  messages: languages,
  legacy: false,
});

export default i18n;
