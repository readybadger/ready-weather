import { describe, test, expect } from 'vitest'
import { getMeasurementUnits } from './getMeasurementUnits'

describe('getMeasurementUnits', () => {
  test('returns metric units', () => {
    expect(getMeasurementUnits('metric')).toEqual({
      temperatureUnit: '°C',
      temperatureScale: 'celsius',
      windSpeedUnit: 'kmh',
    })
  })

  test('returns imperial units', () => {
    expect(getMeasurementUnits('imperial')).toEqual({
      temperatureUnit: '°F',
      temperatureScale: 'fahrenheit',
      windSpeedUnit: 'mph',
    })
  })
})
