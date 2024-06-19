export default defineNuxtConfig({
  modules: [],
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
  css: ["~/assets/scss/style.scss"],
  plugins: ["~/plugins/bootstrap.client"],
  postcss: {
    plugins: {
      rtlcss: {},
    },
  },
});
