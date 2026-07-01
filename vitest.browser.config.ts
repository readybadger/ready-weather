import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import { vitePlugins } from './vite.config'

export default defineConfig({
  plugins: vitePlugins,
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      headless: true,
      instances: [{ browser: 'chromium' }],
    },
  },
})
