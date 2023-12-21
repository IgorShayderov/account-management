import en from './locales/en';
import ru from './locales/ru';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  messages: {
    en,
    ru,
  },
}));
