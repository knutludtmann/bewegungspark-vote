import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      mode: 'development',
      srcDir: 'src',
      filename: 'sw.ts',
      base: '/',
      strategies: 'injectManifest',
    }),
  ]
})
