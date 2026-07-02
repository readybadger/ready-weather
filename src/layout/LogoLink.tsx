export const LogoLink = ({
  variant = 'light',
}: {
  variant?: 'dark' | 'light'
}) => {
  const colorClass = variant === 'dark' ? 'text-stone-800' : 'text-white'

  return (
    <a className={`text-4xl ${colorClass}`} href="/">
      R⚡︎W
    </a>
  )
}
