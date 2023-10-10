import { createI18n } from 'vue-i18n';
import { pt_BR } from '@/locales/pt_BR';
import { en_US } from '@/locales/en_US';

const languages = {
  pt_BR,
  en_US,
};

const i18n = createI18n({
  locale: 'pt_BR',
  fallbackLocale: 'pt_BR',
  messages: languages,
});

export default i18n;