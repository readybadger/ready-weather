import type { Location } from '../location/types'
import { getGeocodeApiUrl } from './api'

type LocationResponse = [
  {
    name: string
    country: string
    state?: string
    lat: number
    lon: number
  },
]

export const getLocation = async ({
  search,
}: {
  search: string
}): Promise<Location[]> => {
  const url = getGeocodeApiUrl('direct', {
    q: search,
    limit: '5',
  })
  const response = await fetch(url)
  const responseJson = (await response.json()) as LocationResponse
  return responseJson.map(({ lat, lon, ...rest }) => ({
    ...rest,
    coords: {
      lat,
      lon,
    },
  }))
}
