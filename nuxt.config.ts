// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/eslint-module', 'nuxt-quasar-ui'],
  runtimeConfig: {
    public: {
      USE_MOCK_API: process.env.USE_MOCK_API,
    },
  },
});
