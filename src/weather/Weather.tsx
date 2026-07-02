import { useWeatherQuery } from '../api/useWeatherQuery'
import { getLocationLabel } from '../location/location-utils'
import type { Location } from '../location/types'
import type { MeasurementSystem } from '../settings/types'

export const Weather = ({
  location,
  measurementSystem,
}: {
  location: Location
  measurementSystem: MeasurementSystem
}) => {
  const { data, isLoading } = useWeatherQuery({ location, measurementSystem })

  return (
    <>
      <h2>Weather for {getLocationLabel(location)}</h2>
      {isLoading ? 'Loading...' : JSON.stringify(data)}
    </>
  )
}
