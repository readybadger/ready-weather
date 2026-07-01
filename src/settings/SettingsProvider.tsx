import { useState } from 'react'
import { SettingsContext } from './SettingsContext'
import type { Settings, SettingsContextType } from './types'

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [settings, setSettings] = useState<Settings>({
    temperatureScale: 'Celsius',
  })

  const contextValue: SettingsContextType = {
    settings,
    updateSettings: (newSettings: Partial<Settings>) => {
      setSettings((prevSettings) => ({ ...prevSettings, ...newSettings }))
    },
  }

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  )
}
