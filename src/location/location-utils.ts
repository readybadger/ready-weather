import type { Location } from './types'

export const getLocationLabel = (location: Location) =>
  `${location.name}, ${location.country}`
