module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-strongly-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', {
      code: 100,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'require-jsdoc': 0,
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'no-case-declarations': 'error',
    'array-bracket-spacing': 'error',
    'no-undef': 'off',
    'import/extensions': 'off',
  },
};
