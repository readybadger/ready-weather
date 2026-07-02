import dayjs from 'dayjs'
import type { DailyWeatherData } from './types'

const Indicator = () => {
  return (
    <div className="rounded-full bg-emerald-800 size-1 absolute left-1 top-1" />
  )
}

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
    ? 'bg-mist-50 border-b-emerald-500'
    : 'bg-white border-b-emerald-200'
  const isToday = date.isSame(dayjs(), 'day')

  return (
    <a
      role="button"
      className={`rounded-md border-b px-2 py-3 space-y-2 flex flex-col items-center justify-between basis-0 grow cursor-pointer hover:bg-mist-50 focus-visible:outline-[auto] relative max-md:flex-row max-md:px-4 max-md:space-y-0 max-[30rem]:flex-row-reverse ${selectedClass}`}
      onClick={onClick}
      href="#weather-details"
    >
      {isToday && <Indicator />}
      <span className="basis-0 grow max-[30rem]:hidden text-neutral-500">
        {dayjs(date).calendar(dayjs(), {
          lastDay: '[Yesterday]',
          lastWeek: 'dddd',
          nextWeek: 'dddd',
          nextDay: '[Tomorrow]',
          sameDay: '[Today]',
          sameElse: 'dddd',
        })}
      </span>
      <span className="flex basis-0 grow justify-center">
        <span className="font-medium">
          {Math.floor(data.meanTemperature)}
          {data.temperatureUnit}
        </span>
      </span>
      <span className="basis-0 grow">{date.format('DD MMM')}</span>
    </a>
  )
}
