// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  alias: {
    "@": resolve(__dirname)
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ["~/assets/main.scss"],
})
