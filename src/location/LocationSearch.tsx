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
  const [results] = useState<Location[]>()
  const [searchText, setSearchText] = useState('')

  // This avoids hitting the API on every key press
  const debouncedSearchText = useDebouncedState(searchText)

  const { data, isLoading } = useLocationQuery({ search: debouncedSearchText })

  return (
    <>
      <Input type="text" value={searchText} onChangeText={setSearchText} />
      <ul>
        {results?.map((result) => (
          <li onClick={() => onSelectLocation(result)}>{result.name}</li>
        )) || 'No results found'}
        {isLoading && 'Loading...'}
        {JSON.stringify(data)}
      </ul>
    </>
  )
}
