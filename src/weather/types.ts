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
  maxWindSpeed: number
  maxWindGusts: number
  precipitationSum: number
  precipitationProbabilityPercent: number
  currentTemperatureDate?: Date
  currentTemperature?: number
}
