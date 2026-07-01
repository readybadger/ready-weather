export type Coordinates = {
  lat: number
  lon: number
}

export type Location = {
  name: string
  country: string
  state?: string
  coords: Coordinates
}
