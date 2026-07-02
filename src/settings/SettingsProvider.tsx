import { useCallback, useEffect, useState } from 'react'
import { SettingsContext } from './SettingsContext'
import type { Settings } from './types'

const STORAGE_KEY = 'ready-weather:settings'

const DEFAULT_SETTINGS: Settings = {
  measurementSystem: 'metric',
}

const loadSettings = (): Settings => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored
      ? { ...DEFAULT_SETTINGS, ...(JSON.parse(stored) as Partial<Settings>) }
      : DEFAULT_SETTINGS
  } catch {
    return DEFAULT_SETTINGS
  }
}

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [settings, setSettings] = useState<Settings>(loadSettings)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    } catch {
      // Ignore write errors (e.g. storage unavailable or quota exceeded)
    }
  }, [settings])

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
