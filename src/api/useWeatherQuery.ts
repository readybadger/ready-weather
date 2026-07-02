import { useQuery } from '@tanstack/react-query'
import type { Location } from '../location/types'
import { getWeather } from './weather'
import type { MeasurementSystem } from '../settings/types'

export const useWeatherQuery = ({
  location,
  measurementSystem,
}: {
  location: Location
  measurementSystem: MeasurementSystem
}) =>
  useQuery({
    queryKey: ['weather', location, measurementSystem],
    queryFn: () => getWeather({ location, measurementSystem }),
    refetchOnMount: false,
    staleTime: Infinity,
  })
