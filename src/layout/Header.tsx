import { CenterColumn } from './CenterColumn'
import { LogoLink } from './LogoLink'

export const Header = () => {
  return (
    <header className="bg-emerald-700 py-6">
      <CenterColumn>
        <LogoLink />
      </CenterColumn>
    </header>
  )
}
