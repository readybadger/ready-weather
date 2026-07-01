import { CenterColumn } from './layout/CenterColumn'
import { Header } from './layout/Header'

function App() {
  return (
    <>
      <Header />
      <main>
        <CenterColumn className="py-6">
          <h1>Ready Weather</h1>
        </CenterColumn>
      </main>
    </>
  )
}

export default App
