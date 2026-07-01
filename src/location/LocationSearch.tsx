import { useState } from 'react'
import type { Location } from './types'
import { Input } from '../ui/Input'

export const LocationSearch = ({
  onSelectLocation,
}: {
  onSelectLocation: (location: Location) => void
}) => {
  const [results] = useState<Location[]>()
  const [searchText, setSearchText] = useState('')

  return (
    <>
      <Input type="text" value={searchText} onChangeText={setSearchText} />
      <ul>
        {results?.map((result) => (
          <li onClick={() => onSelectLocation(result)}>{result.name}</li>
        )) || 'No results found'}
      </ul>
    </>
  )
}
