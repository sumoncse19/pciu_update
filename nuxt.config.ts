// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/css/tailwind.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  tailwindcss: {
    exposeConfig: false,
  },
  app: {
    head: {
      title: 'Project with NUXT',
      meta: [
        {
          name: 'description',
          content: 'Everything about learn Nuxt 3'
        }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },

})
