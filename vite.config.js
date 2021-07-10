import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            mode: 'development',
            base: '/',
            /*manifest: {
                name: 'Bewegungspark Nordkirchen',
                short_name: 'Bewegungspark',
                theme_color: '#3ffd13',
                icons: [
                    {
                        src: '/touch-icon-192x192.png', // <== don't remove slash, for testing purposes
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/touch-icon-512x512.png', // <== don't remove slash, for testing purposes
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: '/touch-icon-512x512.png', // <== don't remove slash, for testing purposes
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                ],
            },
            workbox: {

            }*/
        }),
    ],
})
