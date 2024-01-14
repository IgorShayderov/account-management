// https://nuxt.com/docs/api/configuration/nuxt-config
import colors from './colors.json';

const GUEST_PAGES = ['login'];

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/eslint-module', 'nuxt-quasar-ui', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      USE_MOCK_API: process.env.USE_MOCK_API,
      GUEST_PAGES,
    },
  },
  quasar: {
    lang: 'ru',
    plugins: ['Notify'],
    config: {
      notify: {
        //
      },
      brand: {
        ...colors,
      },
    },
  },
});
