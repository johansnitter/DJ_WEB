import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:5000',
        changeOrigin: true
      },
      '/wp-json': {
        target: 'http://gdl-blog.local',
        changeOrigin: true
      },
      '/wp-content': {
        target: 'http://gdl-blog.local',
        changeOrigin: true
      },
      // ¡El eslabón perdido! WordPress necesita esto para que los videos corran
      '/wp-includes': {
        target: 'http://gdl-blog.local',
        changeOrigin: true
      }
    }
  }
})