import type { Coordinates } from '../location/types'

export const Weather = ({ coords }: { coords: Coordinates }) => {
  return (
    <>
      <h2>Weather</h2>
      <h3>
        Lat: {coords.lat}, Lon: {coords.lon}
      </h3>
    </>
  )
}
