import { defineConfig } from 'vite'

export default defineConfig({
  // Production settings for Render deployment
  build: {
    sourcemap: false
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    allowedHosts: ['budget-calculator-iy5w.onrender.com']
  }
})
