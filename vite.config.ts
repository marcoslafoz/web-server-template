import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'project-name',
        short_name: 'project-name',
        description: 'project-description',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'favicon.svg',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],

})
