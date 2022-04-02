import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Web developer based in Odense, Denmark. Minimalistic design and solutions with approachable UX",
      },
      { name: "robots", content: "index" },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Flameyfox" },
      {
        property: "og:description",
        content:
          "Web developer based in Odense, Denmark. Minimalistic design and solutions with approachable UX",
      },
      { property: "og:url", content: "https://flameyfox.com" },
      { property: "og:site_name", content: "Flameyfox" },
    ],
    link: [
      { rel: "canonical", href: "https://flameyfox.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;700&display=swap",
      },
      { rel: "icon", type: "image/x-icon", href: "/static/favicon.ico" },
    ],
  },
});
