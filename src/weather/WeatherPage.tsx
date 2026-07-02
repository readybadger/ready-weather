import { CenterColumn } from '../layout/CenterColumn'
import { Weather } from './Weather'
import type { Location } from '../location/types'
import { NoLocationMessage } from './NoLocationMessage'
import { LocationSearch } from '../location/LocationSearch'
import useSettings from '../settings/use-settings'

export const WeatherPage = () => {
  const {
    settings: { location, measurementSystem },
    updateSettings,
  } = useSettings()

  const onSelectLocation = (newLocation: Location) => {
    updateSettings({
      location: newLocation,
    })
  }

  return (
    <CenterColumn className="py-6 flex flex-col justify-center items-center text-center">
      <LocationSearch onSelectLocation={onSelectLocation} className="mb-10" />
      {location ? (
        <Weather location={location} measurementSystem={measurementSystem} />
      ) : (
        <NoLocationMessage />
      )}
    </CenterColumn>
  )
}
