export type Coordinates = {
  latitude: number
  longitude: number
}

export type Location = {
  id: string
  name: string
  country: string
  coords: Coordinates
}
