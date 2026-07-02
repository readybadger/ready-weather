export const getWeatherCodeDescription = (code: number): string | undefined => {
  switch (code) {
    // Clear sky
    case 0:
      return 'Clear sky'

    // Mainly clear, partly cloudy, and overcast
    case 1:
    case 2:
    case 3:
      return 'Mainly clear, partly cloudy, and overcast'

    // Fog and depositing rime fog
    case 45:
    case 48:
      return 'Fog and depositing rime fog'

    // Drizzle: Light, moderate, and dense intensity
    case 51:
      return 'Drizzle: Light intensity'
    case 53:
      return 'Drizzle: Moderate intensity'
    case 55:
      return 'Drizzle: Dense intensity'

    // Freezing Drizzle: Light and dense intensity
    case 56:
      return 'Freezing drizzle: Light intensity'
    case 57:
      return 'Freezing drizzle: Dense intensity'

    // Rain: Slight, moderate and heavy intensity
    case 61:
      return 'Rain: Slight intensity'
    case 63:
      return 'Rain: Moderate intensity'
    case 65:
      return 'Rain: Heavy intensity'

    // Freezing Rain: Light and heavy intensity
    case 66:
      return 'Freezing rain: Light intensity'
    case 67:
      return 'Freezing rain: Heavy intensity'

    // Snow fall: Slight, moderate, and heavy intensity
    case 71:
      return 'Snow fall: Slight intensity'
    case 73:
      return 'Snow fall: Moderate intensity'
    case 75:
      return 'Snow fall: Heavy intensity'

    // Snow grains
    case 77:
      return 'Snow grains'

    // Rain showers: Slight, moderate, and violent
    case 80:
      return 'Rain showers: Slight intensity'
    case 81:
      return 'Rain showers: Moderate intensity'
    case 82:
      return 'Rain showers: Violent intensity'

    // Snow showers slight and heavy
    case 85:
      return 'Snow showers: Slight intensity'
    case 86:
      return 'Snow showers: Heavy intensity'

    // Thunderstorm: Slight or moderate
    case 95:
      return 'Thunderstorm: Slight or moderate'

    // Thunderstorm with slight and heavy hail
    case 96:
      return 'Thunderstorm with slight hail'
    case 99:
      return 'Thunderstorm with heavy hail'

    default:
      return undefined
  }
}
