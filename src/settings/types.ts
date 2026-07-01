export type TemperatureScale = 'Celsius' | 'Fahrenheit'

export type Settings = {
  temperatureScale: TemperatureScale
}

export type SettingsContextType = {
  settings: Settings
  updateSettings: (newSettings: Partial<Settings>) => void
}
