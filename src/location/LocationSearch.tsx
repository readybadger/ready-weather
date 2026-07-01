import { useState } from 'react'
import type { Location } from './types'
import { Input } from '../ui/Input'
import { useLocationQuery } from '../api/useLocationQuery'
import { useDebouncedState } from '../utils/useDebouncedState'

export const LocationSearch = ({
  onSelectLocation,
}: {
  onSelectLocation: (location: Location) => void
}) => {
  const [searchText, setSearchText] = useState('')
  // This avoids hitting the API on every key press
  const debouncedSearchText = useDebouncedState(searchText)

  const { data, isLoading } = useLocationQuery({ search: debouncedSearchText })

  return (
    <>
      <Input type="text" value={searchText} onChangeText={setSearchText} />
      <ul>
        {data?.map((location) => (
          <li onClick={() => onSelectLocation(location)}>
            {location.name}, {location.state ? `${location.state}, ` : ''}
            {location.country}
          </li>
        )) || 'No results found'}
        {isLoading && 'Loading...'}
      </ul>
    </>
  )
}
