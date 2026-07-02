import type { Location } from '../location/types'

export type MeasurementSystem = 'imperial' | 'metric'

export type Settings = {
  measurementSystem: MeasurementSystem
  location?: Location
}

export type SettingsContextType = {
  settings: Settings
  updateSettings: (newSettings: Partial<Settings>) => void
}
