import { getGeocodeApiUrl } from './api'

export const getLocation = async ({ search }: { search: string }) => {
  const url = getGeocodeApiUrl('direct', {
    q: search,
  })
  const response = await fetch(url)
  return await response.json()
}
