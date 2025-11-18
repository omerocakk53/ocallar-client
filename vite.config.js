import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/uploads': {
        target: 'http://94.102.7.99',
        changeOrigin: true,
      },
      '/v1': {
        target: 'http://94.102.7.99',
        changeOrigin: true,
      },
    },
  },
})
