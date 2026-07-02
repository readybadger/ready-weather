import { useCallback, useState } from 'react'
import { SettingsContext } from './SettingsContext'
import type { Settings } from './types'

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [settings, setSettings] = useState<Settings>({
    temperatureScale: 'Celsius',
  })

  const updateSettings = useCallback((newSettings: Partial<Settings>) => {
    setSettings((prevSettings) => ({ ...prevSettings, ...newSettings }))
  }, [])

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
