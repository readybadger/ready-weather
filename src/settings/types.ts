import type { Location } from '../location/types'

export type TemperatureScale = 'Celsius' | 'Fahrenheit'

export type Settings = {
  temperatureScale: TemperatureScale
  location?: Location
}

export type SettingsContextType = {
  settings: Settings
  updateSettings: (newSettings: Partial<Settings>) => void
}
