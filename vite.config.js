// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/AAAOMCO-website', // 👈 Replace with your GitHub repo name
})
