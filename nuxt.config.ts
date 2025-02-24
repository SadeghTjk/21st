// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      // script:[{src: '@/ScrollSmoother.min.js', type: 'module'}]
    },
  },
  modules: [/*'@hypernym/nuxt-gsap',*/ "@nuxtjs/tailwindcss", "@nuxt/icon", "motion-v/nuxt"],
  gsap: {
    extraPlugins: {
      flip: true,
      scrollTrigger: true,
      scrollTo: true,
    },
    clubPlugins: {
      scrollSmoother: false,
    },
  },
});