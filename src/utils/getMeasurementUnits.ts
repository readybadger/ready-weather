import type { MeasurementSystem } from '../settings/types'
import type { TemperatureUnit, WindSpeedUnit } from '../weather/types'

type MeasurementUnits = {
  temperature: TemperatureUnit
  windSpeed: WindSpeedUnit
}

export const getMeasurementUnits = (
  system: MeasurementSystem,
): MeasurementUnits => ({
  temperature: system === 'imperial' ? 'fahrenheit' : 'celsius',
  windSpeed: system === 'imperial' ? 'mph' : 'kmh',
})
