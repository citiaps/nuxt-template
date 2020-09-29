require("dotenv").config();
export default {
  env: {
    version: process.env.VERSION
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/assets/style/style.scss"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/axios", ssr: false },
    { src: '~plugins/configFile.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.BASE_URL_BACKEND
  },
  pwa: {
    meta:{
      nativeUI:true,
      mobileAppIOS:false,
      favicon:true,
      viewport:"width=device-width,initial-scale=1.0,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover",
      charset: "utf-8"
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  manifest: {
    "name": "nuxt-tmp",
    "icons": [
      {
        "src": "/favicon.png",
        "type": "image/png",
        "sizes": "512x512"
      }
    ],
    "display": "standalone",
    "background_color": "#ffffff",
  }
}
