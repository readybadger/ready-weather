import { useQuery } from '@tanstack/react-query'
import type { Coordinates } from '../location/types'
import { getWeather } from './weather'

export const useWeatherQuery = ({ coords }: { coords: Coordinates }) =>
  useQuery({
    queryKey: ['weather', coords],
    queryFn: () => getWeather({ coords }),
    refetchOnMount: false,
    staleTime: Infinity,
  })
