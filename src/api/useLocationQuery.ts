import { useQuery } from '@tanstack/react-query'
import { getLocation } from './location'

export const useLocationQuery = ({ search }: { search: string }) =>
  useQuery({
    queryKey: ['location', search],
    queryFn: () => getLocation({ search }),
    enabled: !!search,
  })
