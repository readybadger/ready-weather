import { useMemo, useState } from 'react'
import { useWeatherQuery } from '../api/useWeatherQuery'
import { getLocationLabel } from '../location/location-utils'
import type { Location } from '../location/types'
import type { MeasurementSystem } from '../settings/types'
import { WeatherList } from './WeatherList'
import { WeatherDetails } from './WeatherDetails'
import dayjs from 'dayjs'

export const Weather = ({
  location,
  measurementSystem,
}: {
  location: Location
  measurementSystem: MeasurementSystem
}) => {
  const { data, isLoading } = useWeatherQuery({ location, measurementSystem })

  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  const selected = useMemo(
    () => data?.find(({ date }) => dayjs(date).isSame(selectedDate, 'day')),
    [data, selectedDate],
  )

  return (
    <div className="flex flex-col justify-center self-stretch">
      <h2 className="text-xl font-medium mb-3">{getLocationLabel(location)}</h2>
      {isLoading ? (
        'Loading...'
      ) : (
        <WeatherList
          data={data}
          selectedDate={selectedDate}
          onSelect={({ date }) => setSelectedDate(date)}
        />
      )}
      <div id="weather-details" className="self-center max-w-full">
        {selected && <WeatherDetails data={selected} />}
      </div>
    </div>
  )
}
