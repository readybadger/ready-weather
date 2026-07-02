const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY
const API_BASE_URL = 'https://api.open-meteo.com'
const GEOCODING_API_BASE_URL = 'https://geocoding-api.open-meteo.com'

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

export const getWeatherApiUrl = (searchParams: Record<string, string>) =>
  getApiUrl(`v1/forecast`, searchParams, API_BASE_URL)

export const getGeocodeApiUrl = (searchParams: Record<string, string>) =>
  getApiUrl(`v1/search`, searchParams, GEOCODING_API_BASE_URL)
