import { renderHook, act } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { SettingsProvider } from './SettingsProvider'
import useSettings from './use-settings'

describe('useSettings', () => {
  test('returns default settings values', async () => {
    const { result } = await renderHook(() => useSettings(), {
      wrapper: SettingsProvider,
    })

    expect(result.current.settings.temperatureScale).toBe('Celsius')
  })

  test('throws error when used outside of SettingsProvider', async () => {
    expect(() => {
      renderHook(() => useSettings())
    }).toThrow('useSettings must be used within a SettingsProvider')
  })

  test('updates settings values', async () => {
    const { result } = await renderHook(() => useSettings(), {
      wrapper: SettingsProvider,
    })

    act(() => {
      result.current.updateSettings({ temperatureScale: 'Fahrenheit' })
    })

    expect(result.current.settings.temperatureScale).toBe('Fahrenheit')
  })
})
