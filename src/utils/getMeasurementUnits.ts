import type { MeasurementSystem } from '../settings/types'
import type {
  TemperatureScale,
  TemperatureUnit,
  WindSpeedUnit,
} from '../weather/types'

type MeasurementUnits = {
  temperatureUnit: TemperatureUnit
  temperatureScale: TemperatureScale
  windSpeedUnit: WindSpeedUnit
}

export const getMeasurementUnits = (
  system: MeasurementSystem,
): MeasurementUnits => ({
  temperatureUnit: system === 'imperial' ? '°F' : '°C',
  temperatureScale: system === 'imperial' ? 'fahrenheit' : 'celsius',
  windSpeedUnit: system === 'imperial' ? 'mph' : 'kmh',
})
