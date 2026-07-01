import type { Coordinates } from '../location/types'
import { getWeatherApiUrl } from './api'

export const getWeather = async ({ coords }: { coords: Coordinates }) => {
  const url = getWeatherApiUrl('current', {
    ...coords,
  })
  const response = await fetch(url)
  return await response.json()
}
