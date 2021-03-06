module.exports = {
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Quicksand"
      }
    ]
  },
  css: ["~/css/main.css"],
  build: {
    postcss: []
  },
  modules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-28055358-6"
      }
    ]
  ]
};
