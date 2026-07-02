export type TemperatureUnit = '°C' | '°F'
export type TemperatureScale = 'celsius' | 'fahrenheit'
export type WindSpeedUnit = 'mph' | 'kmh'

export type DailyWeatherData = {
  date: Date
  weatherCode: number //WMO code
  minTemperature: number
  maxTemperature: number
  meanTemperature: number
  temperatureUnit: TemperatureUnit
  windSpeedUnit: WindSpeedUnit
  precipitationProbabilityPercent: number
}

export type PastWeatherData = {
  rainSumMm: number
}

export type CurrentWeatherData = DailyWeatherData & {
  currentTemperature: number
  currentWeatherCode: number //WMO code
}
