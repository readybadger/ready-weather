import { useMemo } from 'react'
import type { DailyWeatherData } from './types'
import { WeatherCard } from './WeatherCard'
import dayjs from 'dayjs'

const MAX_ITEMS = 7

export const WeatherList = ({
  data,
  selectedDate,
  onSelect,
}: {
  data?: DailyWeatherData[]
  selectedDate?: Date
  onSelect: (data: DailyWeatherData) => void
}) => {
  const cappedData = useMemo(() => data?.slice(0, MAX_ITEMS), [data])

  return (
    <div className="flex items-stretch space-x-1 mb-4 max-md:flex-col">
      {cappedData?.length
        ? cappedData.map((dayData) => {
            const isSelected = dayjs(dayData.date).isSame(selectedDate, 'day')

            return (
              <WeatherCard
                key={dayData.date.toString()}
                data={dayData}
                isSelected={isSelected}
                onClick={() => onSelect(dayData)}
              />
            )
          })
        : "We couldn't find any weather data for your location"}
    </div>
  )
}
