import { CenterColumn } from '../layout/CenterColumn'
import { Weather } from './Weather'
import type { Location } from '../location/types'
import { NoLocationMessage } from './NoLocationMessage'
import { LocationSearch } from '../location/LocationSearch'
import useSettings from '../settings/use-settings'

export const WeatherPage = () => {
  const {
    settings: { location },
    updateSettings,
  } = useSettings()

  const onSelectLocation = (newLocation: Location) => {
    updateSettings({
      location: newLocation,
    })
  }

  return (
    <CenterColumn className="py-6">
      <LocationSearch onSelectLocation={onSelectLocation} />
      {location ? <Weather coords={location.coords} /> : <NoLocationMessage />}
    </CenterColumn>
  )
}
