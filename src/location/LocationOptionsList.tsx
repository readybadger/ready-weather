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
}: {
  isLoading: boolean
  options?: Location[]
  onSelectLocation: (location: Location) => void
}) => {
  const noResultsText = <div className="p-2">No results found</div>

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
