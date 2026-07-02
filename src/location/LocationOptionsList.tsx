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
      className="cursor-pointer hover:bg-mist-50 p-2"
    >
      <span className="font-semibold">{location.name}</span>, {location.country}
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
    <div className="absolute bg-white w-full top-full drop-shadow-sm shadow-neutral-600 rounded-b-md overflow-hidden">
      {isLoading ? (
        <div className="p-2">Loading...</div>
      ) : (
        <ul>
          {options?.length
            ? options.map((location) => (
                <LocationOptionItem
                  key={location.id}
                  location={location}
                  onSelectLocation={onSelectLocation}
                />
              ))
            : noResultsText}
        </ul>
      )}
    </div>
  )
}
