export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    fr: require('./locales/fr.json'),
    en: require('./locales/en.json'),
  },
}))
