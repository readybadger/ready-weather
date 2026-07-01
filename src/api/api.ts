const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY
const WEATHER_API_BASE_URL = 'https://api.openweathermap.org'
const GEOCODE_API_BASE_URL = 'http://api.openweathermap.org'

const authParam = {
  appid: API_KEY,
}

export const getApiUrl = (
  path: string,
  searchParams: Record<string, string>,
  baseUrl: string,
) =>
  new URL(
    `${path}?${new URLSearchParams({
      ...searchParams,
      ...authParam,
    }).toString()}`,
    baseUrl,
  )

export const getWeatherApiUrl = (
  path: string,
  searchParams: Record<string, string>,
) => getApiUrl(`data/4.0/onecall/` + path, searchParams, WEATHER_API_BASE_URL)

export const getGeocodeApiUrl = (
  path: string,
  searchParams: Record<string, string>,
) => getApiUrl(`geo/1.0/` + path, searchParams, GEOCODE_API_BASE_URL)
