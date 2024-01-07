// https://nuxt.com/docs/api/configuration/nuxt-config
const GUEST_PAGES = ['login'];

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/eslint-module', 'nuxt-quasar-ui'],
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
    },
  },
});
