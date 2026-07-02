import { render, screen, cleanup } from '@testing-library/react'
import { describe, test, expect, vi, afterEach } from 'vitest'
import { LocationOptionsList } from './LocationOptionsList'
import type { Location } from './types'

const berlin: Location = {
  id: '1',
  name: 'Berlin',
  country: 'Germany',
  coords: { latitude: 52.52, longitude: 13.41 },
  timezone: 'Europe/Berlin',
}

afterEach(() => {
  cleanup()
})

describe('LocationOptionsList', () => {
  test('shows a loading state', () => {
    render(
      <LocationOptionsList isLoading options={[]} onSelectLocation={vi.fn()} />,
    )

    expect(screen.getByText('Loading...')).toBeTruthy()
  })

  test('shows a no results message when there are no options', () => {
    render(
      <LocationOptionsList
        isLoading={false}
        options={[]}
        onSelectLocation={vi.fn()}
      />,
    )

    expect(screen.getByText('No results found')).toBeTruthy()
  })

  test('renders options and calls onSelectLocation when one is clicked', () => {
    const onSelectLocation = vi.fn()
    render(
      <LocationOptionsList
        isLoading={false}
        options={[berlin]}
        onSelectLocation={onSelectLocation}
      />,
    )

    screen.getByText('Berlin').click()

    expect(onSelectLocation).toHaveBeenCalledWith(berlin)
  })
})
