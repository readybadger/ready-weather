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
  const debouncedResultsVisible = useDebouncedState(
    searchText && resultsVisible,
    100,
  )

  const { data, isLoading, isEnabled } = useLocationQuery({
    search: debouncedSearchText,
  })

  const onSelectLocationProxy = (location: Location) => {
    setSearchText('')
    onSelectLocation(location)
  }

  return (
    <div className={`flex relative w-md z-10 ${className ?? ''}`}>
      <Input
        type="text"
        placeholder="🔎 Search for a location..."
        value={searchText}
        onChangeText={setSearchText}
        onFocus={() => setResultsVisible(true)}
        onBlur={() => {
          setResultsVisible(false)
        }}
        className={`w-md p-2 cursor-pointer ${debouncedResultsVisible ? 'rounded-b-none border-b-transparent' : 'text-gray-500'}`}
      />
      {debouncedResultsVisible && (
        <LocationOptionsList
          isLoading={isLoading || !debouncedSearchText}
          options={data}
          onSelectLocation={onSelectLocationProxy}
          hasSearched={Boolean(debouncedSearchText)}
        />
      )}
    </div>
  )
}
