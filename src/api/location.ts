import type { Location } from '../location/types'
import { getGeocodeApiUrl } from './api'

type LocationResponse = {
  results: [
    {
      id: number
      name: string
      country: string
      latitude: number
      longitude: number
      timezone: string
    },
  ]
}

export const getLocation = async ({
  search,
}: {
  search: string
}): Promise<Location[]> => {
  const url = getGeocodeApiUrl({
    name: search,
    count: '5',
  })
  const response = await fetch(url)
  const responseJson = (await response.json()) as LocationResponse
  return responseJson.results.map(
    ({ id, name, country, latitude, longitude, timezone }) => ({
      id: id.toString(),
      name,
      country,
      coords: {
        latitude,
        longitude,
      },
      timezone,
    }),
  )
}
