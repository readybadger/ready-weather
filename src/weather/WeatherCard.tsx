import dayjs from 'dayjs'
import type { DailyWeatherData } from './types'

export const WeatherCard = ({ data }: { data: DailyWeatherData }) => {
  const date = dayjs(data.date)

  return (
    <div className="border-2 rounded-sm p-1 flex flex-col items-center justify-between basis-0 grow">
      <span className="text-lg font-medium">
        {dayjs(date).calendar(dayjs(), {
          lastDay: '[Yesterday]',
          lastWeek: 'dddd',
          nextWeek: 'dddd',
          nextDay: '[Tomorrow]',
          sameDay: '[Today]',
          sameElse: 'dddd',
        })}
      </span>
      <span>{date.format('DD MMM')}</span>
    </div>
  )
}
