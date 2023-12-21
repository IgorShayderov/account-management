import { defineI18nConfig } from "@nuxtjs/i18n/dist/runtime/composables";

import en from './locales/en';
import ru from './locales/ru';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  messages: {
    en,
    ru,
  }
}))