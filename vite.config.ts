import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // Adicionado o -swc aqui

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
