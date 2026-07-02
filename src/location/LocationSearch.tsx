import { useState } from 'react'
import type { Location } from './types'
import { Input } from '../ui/Input'
import { useLocationQuery } from '../api/useLocationQuery'
import { useDebouncedState } from '../utils/useDebouncedState'
import { LocationOptionsList } from './LocationOptionsList'

export const LocationSearch = ({
  onSelectLocation,
  className,
}: {
  onSelectLocation: (location: Location) => void
  className?: string
}) => {
  const [searchText, setSearchText] = useState('')
  const [resultsVisible, setResultsVisible] = useState(false)

  // This avoids hitting the API on every key press
  const debouncedSearchText = useDebouncedState(searchText)
  // This avoids having the options unmounted before they capture a click event
  const debouncedResultsVisible = useDebouncedState(resultsVisible, 100)

  const { data, isLoading } = useLocationQuery({ search: debouncedSearchText })

  return (
    <div className={`flex relative w-md ${className ?? ''}`}>
      <Input
        type="text"
        placeholder="Search for a location..."
        value={searchText}
        onChangeText={setSearchText}
        onFocus={() => setResultsVisible(true)}
        onBlur={() => {
          setResultsVisible(false)
        }}
        className={`w-md p-2 cursor-pointer ${resultsVisible ? 'rounded-b-none' : 'text-gray-400'}`}
      />
      {debouncedResultsVisible && (
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
