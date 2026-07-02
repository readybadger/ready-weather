import { useMemo } from 'react'
import type { DailyWeatherData } from './types'
import { WeatherCard } from './WeatherCard'

const MAX_ITEMS = 7

export const WeatherList = ({ data }: { data?: DailyWeatherData[] }) => {
  const cappedData = useMemo(() => data?.slice(0, MAX_ITEMS), [data])

  return (
    <div className="flex items-stretch space-x-1">
      {cappedData?.length
        ? cappedData.map((dayData) => <WeatherCard data={dayData} />)
        : "We couldn't find any weather data for your location"}
    </div>
  )
}
