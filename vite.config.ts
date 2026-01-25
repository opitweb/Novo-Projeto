import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // ✅ Otimizações para GSAP
  optimizeDeps: {
    include: ['gsap', 'gsap/ScrollTrigger']
  },
  build: {
    commonjsOptions: {
      include: [/gsap/, /node_modules/]
    }
  }
})
