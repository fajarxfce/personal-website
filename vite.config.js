import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { presetAttributify, presetUno } from "unocss";
import presetIcons from "@unocss/preset-icons";
import { presetTypography } from "@unocss/preset-typography";
import Unocss from "unocss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      configFile: "unocss.config.js",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
