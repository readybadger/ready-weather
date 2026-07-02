import type { Coordinates } from '../location/types'
import { getWeatherApiUrl } from './api'

const NUM_PAST_DAYS = 3

export const getWeather = async ({ coords }: { coords: Coordinates }) => {
  const url = getWeatherApiUrl({
    latitude: coords.latitude.toString(),
    longitude: coords.longitude.toString(),
    past_days: NUM_PAST_DAYS.toString(),
  })
  const response = await fetch(url)
  return await response.json()
}
