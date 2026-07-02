import dayjs from 'dayjs'
import type { DailyWeatherData } from './types'
import { getRelativeDate } from '../utils/getCalendarDate'
import { getWeatherCodeDescription } from '../api/weather-utils'

const Seperator = () => (
  <div className="border-t w-full px-4 border-mist-100 mb-4"></div>
)

const TemperatureBlock = ({ data }: { data: DailyWeatherData }) => {
  return (
    <div>
      <span className="text-sm text-neutral-400">temp</span>
      <div className="flex space-x-2">
        <span>↑ max</span>
        <span className="font-semibold">
          {data.maxTemperature}
          {data.temperatureUnit}
        </span>
      </div>
      <div className="flex space-x-2">
        <span>↓ min</span>
        <span className="font-semibold">
          {data.minTemperature}
          {data.temperatureUnit}
        </span>
      </div>
    </div>
  )
}

const WindBlock = ({ data }: { data: DailyWeatherData }) => {
  return (
    <div>
      <span className="text-sm text-neutral-400">wind</span>
      <div className="flex space-x-2">
        <span>max speed</span>
        <span className="font-semibold">
          {data.maxWindSpeed}
          {data.windSpeedUnit}
        </span>
      </div>
      <div className="flex space-x-2">
        <span>max gusts</span>
        <span className="font-semibold">
          {data.maxWindGusts}
          {data.windSpeedUnit}
        </span>
      </div>
    </div>
  )
}

const PrecipitationBlock = ({ data }: { data: DailyWeatherData }) => {
  return (
    <div>
      <span className="text-sm text-neutral-400">precipitation</span>
      <div className="flex space-x-2">
        <span>max</span>
        <span className="font-semibold">
          {data.precipitationProbabilityPercent}%
        </span>
      </div>
      <div className="flex space-x-2">
        <span>total</span>
        <span className="font-semibold">{data.precipitationSum}mm</span>
      </div>
    </div>
  )
}

const Indicator = () => {
  return (
    <div className="rounded-full bg-emerald-500 size-1 absolute left-1 top-1" />
  )
}

export const WeatherDetails = ({ data }: { data: DailyWeatherData }) => {
  const hasCurrentTemperature = data.currentTemperatureDate
    ? Math.abs(dayjs(data.currentTemperatureDate).diff(dayjs(), 'minutes')) < 16
    : false

  return (
    <div className="bg-white border-b-emerald-200 border-b p-4 justify-center w-xl rounded-md max-w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="grow basis-0 text-left">
          {dayjs(data.date).format('DD MMM')}
        </span>
        <h2 className="text-2xl grow basis-0">{getRelativeDate(data.date)}</h2>

        <span className="grow basis-0 text-right">
          {hasCurrentTemperature ? (
            <span className="relative pl-3">
              <Indicator />
              {data.currentTemperature}
              {data.temperatureUnit}
            </span>
          ) : (
            <>
              {data.meanTemperature}
              {data.temperatureUnit}
            </>
          )}
        </span>
      </div>
      <Seperator />
      <div className="text-neutral-600 italic mb-4">
        {getWeatherCodeDescription(data.weatherCode)}
      </div>
      <div className="flex justify-between max-md:flex-col max-md:space-y-4 max-md:items-center">
        <TemperatureBlock data={data} />
        <PrecipitationBlock data={data} />
        <WindBlock data={data} />
      </div>
    </div>
  )
}
