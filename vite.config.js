import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base : "/lestari-aquatic-kursus-renang/",
  plugins: [react(), tailwindcss()],
})
