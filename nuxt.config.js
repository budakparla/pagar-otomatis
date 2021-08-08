import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Pagar Otomatis',
    title: 'Pagar IoT',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAMhURl4BpCfolzy53BaIfqBYE999An6Ls",
          authDomain: "pagar-otomatis-fc5f1.firebaseapp.com",
          databaseURL: "https://pagar-otomatis-fc5f1-default-rtdb.asia-southeast1.firebasedatabase.app/",
          projectId: "pagar-otomatis-fc5f1",
          storageBucket: "pagar-otomatis-fc5f1.appspot.com",
          messagingSenderId: "184441940047",
          appId: "1:184441940047:web:b7538329e7ec90f06ca23a"
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          database: true
        },
        database: {
          emulatorPort: 9000,
          emulatorHost: 'localhost',
        },
      },
    ],
    ['nuxt-twa-module', {
      /* module options */
      defaultUrl: 'https://your-url.com',
      hostName: 'your-url.com',
      applicationId: 'com.example.example',
      launcherName: 'Your app name',
      versionCode: 1,
      versionName: '1.0',
      statusBarColor: '#1976d2',
      // The sha256Fingerprints by is an array with one SHA-256 key string.
      // But if you have multiple you can add them to the array. More information about the website asociation:
      // https://developer.android.com/training/app-links/verify-site-associations#web-assoc
      sha256Fingerprints: ['/* your SHA-256 keys */'],
      /* optional */
      /* overwrite default location for icon */
      iconPath: '/static/icon.png',
      /* Overwrite folder where to put .wellknown */
      distFolder: '.nuxt/dist/client',
    }
    ],
    [
      '@nuxtjs/pwa',
      '@nuxtjs/imagemin',
    ],
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  pwa: {
    manifest: {
      name: 'Pagar Otomatis',
      short_name: 'Pagar Otomatis',
      description: 'Aplikasi untuk membuka pagar berbasis Internet of Things',
      lang: 'en-US',
      display: 'standalone',
      start_url: '/static',
      theme_color: '#1976d2',
      background_color: '#FFFFFF',
    }
  },

  imagemin: {
    enableInDev: true,
    minimizerOptions: {
      plugins: [
        'mozjpeg', { quality: 50, progressive: true }
      ],
    },
  }
}
