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
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
      htmlAttrs: {
        lang: "fa",
        dir: "rtl",
      },
      title: "hbsoft test app",
      meta: [
        { name: "theme-color", content: "#000000" },
        {
          hid: "description",
          name: "description",
          content: "Your description here",
        },
      ],
    },
  },
});
