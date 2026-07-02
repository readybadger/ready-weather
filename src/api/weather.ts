import type { Location } from '../location/types'
import type { MeasurementSystem } from '../settings/types'
import { getMeasurementUnits } from '../utils/getMeasurementUnits'
import type {
  DailyWeatherData,
  TemperatureUnit,
  WindSpeedUnit,
} from '../weather/types'
import { getWeatherApiUrl } from './api'

const NUM_PAST_DAYS = 3

type WeatherResponse = {
  daily: {
    time: string[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    temperature_2m_mean: number[]
    precipitation_probability_max: number[]
    weather_code: number[]
  }
  current: {
    time: string
    weather_code: number
    temperature_2m: number
  }
}

const normalizeResponse = ({
  response,
  temperatureUnit,
  windSpeedUnit,
}: {
  response: WeatherResponse
  temperatureUnit: TemperatureUnit
  windSpeedUnit: WindSpeedUnit
}): DailyWeatherData[] =>
  response.daily.time.map((day, index) => ({
    date: new Date(day),
    maxTemperature: response.daily.temperature_2m_max[index],
    minTemperature: response.daily.temperature_2m_min[index],
    meanTemperature: response.daily.temperature_2m_mean[index],
    precipitationProbabilityPercent:
      response.daily.precipitation_probability_max[index],
    temperatureUnit: temperatureUnit,
    weatherCode: response.daily.weather_code[index],
    windSpeedUnit: windSpeedUnit,
  }))

export const getWeather = async ({
  location,
  measurementSystem,
}: {
  location: Location
  measurementSystem: MeasurementSystem
}) => {
  const units = getMeasurementUnits(measurementSystem)
  const url = getWeatherApiUrl({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    timezone: location.timezone ?? 'auto',
    temperature_unit: units.temperatureScale,
    wind_speed_unit: units.windSpeedUnit,
    past_days: NUM_PAST_DAYS,
    current: ['weather_code', 'temperature_2m'],
    daily: [
      'weather_code',
      'temperature_2m_max',
      'temperature_2m_min',
      'temperature_2m_mean',
      'precipitation_probability_max',
    ],
  })
  const response = await fetch(url)
  const responseJson = (await response.json()) as WeatherResponse
  return normalizeResponse({
    response: responseJson,
    temperatureUnit: units.temperatureUnit,
    windSpeedUnit: units.windSpeedUnit,
  })
}
