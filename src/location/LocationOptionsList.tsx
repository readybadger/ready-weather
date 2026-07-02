import type { Location } from './types'

const LocationOptionItem = ({
  location,
  onSelectLocation,
}: {
  location: Location
  onSelectLocation: (location: Location) => void
}) => {
  return (
    <li
      onClick={() => onSelectLocation(location)}
      className="cursor-pointer hover:bg-amber-50 p-2"
    >
      {location.name}, {location.state ? `${location.state}, ` : ''}
      {location.country}
    </li>
  )
}

export const LocationOptionsList = ({
  isLoading,
  options,
  onSelectLocation,
  hasSearched,
}: {
  isLoading: boolean
  options?: Location[]
  onSelectLocation: (location: Location) => void
  hasSearched: boolean
}) => {
  const noResultsText = (
    <div className="p-2">
      {hasSearched ? 'No results found' : 'Type to start searching...'}
    </div>
  )

  return (
    <div className="absolute bg-stone-100 border-2  border-t-0 w-full top-full drop-shadow-md z-20 shadow-black rounded-b-sm">
      {isLoading ? (
        <div className="p-2">Loading...</div>
      ) : (
        <ul>
          {options?.map((location) => (
            <LocationOptionItem
              location={location}
              onSelectLocation={onSelectLocation}
            />
          )) || noResultsText}
        </ul>
      )}
    </div>
  )
}
