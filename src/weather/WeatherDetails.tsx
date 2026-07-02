import dayjs from 'dayjs'
import type { DailyWeatherData } from './types'

export const WeatherDetails = ({ data }: { data: DailyWeatherData }) => {
  return (
    <div className="bg-white flex flex-col border-b-emerald-200 border-b p-4 justify-center w-xl rounded-md max-w-full">
      <h2 className="text-2xl">{dayjs(data.date).format('DD MMMM YYYY')}</h2>
    </div>
  )
}
