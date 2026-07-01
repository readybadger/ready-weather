import { Header } from './layout/Header'
import { Providers } from './Providers'

import { WeatherPage } from './weather/WeatherPage'

function App() {
  return (
    <Providers>
      <Header />
      <WeatherPage />
    </Providers>
  )
}

export default App
