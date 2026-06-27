// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://malika.engineer",
  adapter: node({
    mode: 'standalone'
  }),
  vite: {
    optimizeDeps: {
      exclude: ['@dimforge/rapier3d-compat'],
    },
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
    ssr: {
      external: ['three', 'meshline', '@react-three/fiber', '@react-three/drei', '@react-three/rapier'],
    },
  },
  output: "server",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
