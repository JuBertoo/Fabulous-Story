// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@formkit/nuxt', '@nuxtjs/i18n', '@nuxtjs/supabase'],

  nitro: {
    preset: 'vercel-edge',
  },

  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    openaiApiKey: process.env.OPENAI_API_KEY,
    public: {
      stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
      supabaseJWT: process.env.SUPABASE_JWT,
    },
  },

  // i18n
  i18n: {
    locales: ['en', 'fr'], // used in URL path prefix
    defaultLocale: 'fr',
    vueI18n: {
      legacy: false,
      locale: 'fr',
      fallbackLocale: 'en',
      messages: {
        fr: require('./locales/fr.json'),
        en: require('./locales/en.json'),
      },
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Doohan Aditya Saputro | Ingénieur Frontend',
      meta: [
        {
          name: 'description',
          content: 'Frontend Engineer based in Indonesia.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Doohan Aditya Saputro | Frontend Engineer',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Frontend Engineer based in Indonesia.',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://doohanadityas.netlify.app/',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name ',
          content: 'doohanas',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/profile-picture.png',
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: 'image/png',
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '490',
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '509',
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Pria kemeja biru menyilangkan tangan',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: 'Doohan Aditya Saputro | Frontend Engineer',
        },
        {
          name: 'twitter:description',
          content: 'Frontend Engineer based in Indonesia.',
        },
        {
          name: 'twitter:image',
          content: '/profile-picture.png',
        },
        {
          name: 'twitter:url',
          content: 'https://doohanadityas.netlify.app/',
        },
        {
          name: 'twitter:creator',
          content: '@doohanas',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // Style
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['gsap'],
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
