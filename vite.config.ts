import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export const vitePlugins = [react(), tailwindcss()]

// https://vite.dev/config/
export default defineConfig({
  plugins: vitePlugins,
})
