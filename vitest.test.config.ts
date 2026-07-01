import { defineConfig } from 'vitest/config'
import { vitePlugins } from './vite.config'

export default defineConfig({
  plugins: vitePlugins,
  test: {
    environment: 'happy-dom',
  },
})
