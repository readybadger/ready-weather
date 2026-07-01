import { useState } from 'react'
import { CenterColumn } from '../layout/CenterColumn'
import { Weather } from './Weather'
import type { Location } from '../location/types'
import { NoLocationMessage } from './NoLocationMessage'
import { LocationSearch } from '../location/LocationSearch'

export const WeatherPage = () => {
  const [location, setLocation] = useState<Location>()

  return (
    <CenterColumn className="py-6">
      <LocationSearch onSelectLocation={setLocation} />
      {location ? <Weather coords={location.coords} /> : <NoLocationMessage />}
    </CenterColumn>
  )
}
