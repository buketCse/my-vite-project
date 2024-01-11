import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import postCSSNesting from "postcss-nesting";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // css:{
  //   postcss:{
  //     plugins:{
  //       postCSSNesting()
  //     }
  //   }
  // },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        another: resolve(__dirname, "another-route/index.html"),
      },
    },
  },
});
