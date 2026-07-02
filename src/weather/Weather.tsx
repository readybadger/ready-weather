import { useWeatherQuery } from '../api/useWeatherQuery'
import { getLocationLabel } from '../location/location-utils'
import type { Location } from '../location/types'

export const Weather = ({ location }: { location: Location }) => {
  const { data, isLoading } = useWeatherQuery({ coords: location.coords })

  return (
    <>
      <h2>Weather for {getLocationLabel(location)}</h2>
      {isLoading ? 'Loading...' : JSON.stringify(data)}
    </>
  )
}
