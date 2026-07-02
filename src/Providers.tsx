import type { PropsWithChildren } from 'react'
import { ConfiguredQueryClientProvider } from './api/ConfiguredQueryClientProvider'
import { SettingsProvider } from './settings/SettingsProvider'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SettingsProvider>
      <ConfiguredQueryClientProvider>{children}</ConfiguredQueryClientProvider>
    </SettingsProvider>
  )
}
