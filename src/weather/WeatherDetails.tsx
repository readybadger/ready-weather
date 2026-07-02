import dayjs from 'dayjs'
import type { DailyWeatherData } from './types'

export const WeatherDetails = ({ data }: { data: DailyWeatherData }) => {
  return (
    <div className="bg-white flex flex-col p-4 justify-center w-xl border border-mist-600 self-center rounded-sm">
      <h2 className="text-2xl">{dayjs(data.date).format('DD MMMM YYYY')}</h2>
    </div>
  )
}
