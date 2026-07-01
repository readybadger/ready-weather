import { useQuery } from '@tanstack/react-query'
import { getLocation } from './location'
import type { Location } from '../location/types'

export const useLocationQuery = ({ search }: { search: string }) =>
  useQuery<Location[]>({
    queryKey: ['location', search],
    queryFn: () => getLocation({ search }),
    enabled: !!search,
  })
