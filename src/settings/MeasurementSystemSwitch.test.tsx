import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, test, expect, afterEach } from 'vitest'
import { MeasurementSystemSwitch } from './MeasurementSystemSwitch'
import { SettingsProvider } from './SettingsProvider'

afterEach(() => {
  cleanup()
})

describe('MeasurementSystemSwitch', () => {
  test('renders both measurement system options', () => {
    render(<MeasurementSystemSwitch />, { wrapper: SettingsProvider })

    expect(screen.getByRole('button', { name: 'Metric' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Imperial' })).toBeTruthy()
  })

  test('highlights the selected system when switched to imperial', () => {
    render(<MeasurementSystemSwitch />, { wrapper: SettingsProvider })

    const imperialButton = screen.getByRole('button', { name: 'Imperial' })
    fireEvent.click(imperialButton)

    expect(imperialButton.className).toContain('font-semibold')
    expect(
      screen.getByRole('button', { name: 'Metric' }).className,
    ).not.toContain('font-semibold')
  })
})
