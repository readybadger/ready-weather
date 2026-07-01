import type { PropsWithChildren } from 'react'
import { ConfiguredQueryClientProvider } from './api/ConfiguredQueryClientProvider'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ConfiguredQueryClientProvider>{children}</ConfiguredQueryClientProvider>
  )
}
