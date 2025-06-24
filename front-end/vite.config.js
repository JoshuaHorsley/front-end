import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://6cm63qc4-8000.use.devtunnels.ms',
        changeOrigin: true,
      }
    }
  }
})
