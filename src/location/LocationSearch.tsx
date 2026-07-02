import { useState } from 'react'
import type { Location } from './types'
import { Input } from '../ui/Input'
import { useLocationQuery } from '../api/useLocationQuery'
import { useDebouncedState } from '../utils/useDebouncedState'
import { LocationOptionsList } from './LocationOptionsList'

export const LocationSearch = ({
  onSelectLocation,
}: {
  onSelectLocation: (location: Location) => void
}) => {
  const [searchText, setSearchText] = useState('')
  const [resultsVisible, setResultsVisible] = useState(false)

  // This avoids hitting the API on every key press
  const debouncedSearchText = useDebouncedState(searchText)

  const { data, isLoading } = useLocationQuery({ search: debouncedSearchText })

  return (
    <div className="flex relative w-md">
      <Input
        type="text"
        placeholder="Search for a location..."
        value={searchText}
        onChangeText={setSearchText}
        onFocus={() => setResultsVisible(true)}
        onBlur={() => setResultsVisible(false)}
        className={`w-md p-2 cursor-pointer ${resultsVisible ? 'rounded-b-none' : ''}`}
      />
      {resultsVisible && (
        <LocationOptionsList
          isLoading={isLoading}
          options={data}
          onSelectLocation={onSelectLocation}
          hasSearched={Boolean(debouncedSearchText)}
        />
      )}
    </div>
  )
}
