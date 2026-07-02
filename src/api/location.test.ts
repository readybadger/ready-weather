import { describe, test, expect, vi, afterEach } from 'vitest'
import { getLocation } from './location'

const mockFetch = (json: unknown) =>
  vi.fn().mockResolvedValue({
    json: () => Promise.resolve(json),
  })

afterEach(() => {
  vi.restoreAllMocks()
})

describe('getLocation', () => {
  test('maps API results into Location objects', async () => {
    vi.stubGlobal(
      'fetch',
      mockFetch({
        results: [
          {
            id: 1,
            name: 'Berlin',
            country: 'Germany',
            latitude: 52.52,
            longitude: 13.41,
            timezone: 'Europe/Berlin',
          },
        ],
      }),
    )

    const locations = await getLocation({ search: 'Berlin' })

    expect(locations).toEqual([
      {
        id: '1',
        name: 'Berlin',
        country: 'Germany',
        coords: { latitude: 52.52, longitude: 13.41 },
        timezone: 'Europe/Berlin',
      },
    ])
  })

  test('returns an empty array when there are no results', async () => {
    vi.stubGlobal('fetch', mockFetch({}))

    const locations = await getLocation({ search: 'Nowhere' })

    expect(locations).toEqual([])
  })
})
