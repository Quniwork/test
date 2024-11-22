export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-swiper', 'nuxt-marquee'],
  app: {
    rootId: 'page-wrap',
    head: {
      title: process.env.NUXT_APP_TITLE
    },
    baseURL: './',
    buildAssetsDir: '/assets/'
  },
  css: ['~/assets/sass/app.sass'],
  nitro: {
    preset: 'static', // 將輸出設置為靜態站點
    prerender: {
      routes: ['/'], // 指定需要生成的靜態路由
      failOnError: false,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern-compiler',
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            // 自定義輸出路徑
            if (assetInfo.name?.endsWith('.css')) {
              return 'css/[name]-[hash].css';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
    },
  }
})