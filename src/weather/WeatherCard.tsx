import dayjs from 'dayjs'
import type { DailyWeatherData } from './types'

export const WeatherCard = ({
  data,
  isSelected,
  onClick,
}: {
  data: DailyWeatherData
  isSelected: boolean
  onClick: VoidFunction
}) => {
  const date = dayjs(data.date)

  const selectedClass = isSelected
    ? 'bg-mist-50 border-mist-600'
    : 'border-mist-200'

  return (
    <div
      className={`bg-white border rounded-md p-1 flex flex-col items-center justify-between basis-0 grow cursor-pointer hover:bg-mist-50 ${selectedClass}`}
      onClick={onClick}
    >
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
