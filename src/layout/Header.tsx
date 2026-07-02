import { MeasurementSystemSwitch } from '../settings/MeasurementSystemSwitch'
import { CenterColumn } from './CenterColumn'
import { LogoLink } from './LogoLink'

export const Header = () => {
  return (
    <header className="bg-emerald-600 py-6">
      <CenterColumn>
        <div className="flex justify-between">
          <LogoLink />
          <MeasurementSystemSwitch />
        </div>
      </CenterColumn>
    </header>
  )
}
